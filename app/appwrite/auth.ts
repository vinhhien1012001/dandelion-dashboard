import { ID, OAuthProvider, Query } from "appwrite"
import { account, appwriteConfig, database } from "./client"
import { redirect } from "react-router"

export const loginWithGoogle = async () => {
    try{
        account.createOAuth2Session(OAuthProvider.Google)
    } catch (e) {
        console.log('loginWithGoogle', e)
    }
}

export const getUser = async () => {
    try{
        const user = await account.get();

        if (!user) return redirect('/sign-in');

        const {documents} = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [
                Query.equal('accountId', user.$id),
                Query.select(['name', 'email', 'imageUrl', 'joinedAt', 'accountId'])
            ]
        )

        if (documents.length === 0) return await storeUserData();

        return documents[0];
    } catch (e) {
        console.log('getUser error:', e)
        return null;
    }
}

export const logoutUser = async () => {
    try{
        await account.deleteSession('current');
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}


export const getGooglePicture = async () => {
    try {
        const user = await account.get();
        if (!user) return null;

        // Get the OAuth2 session to access Google People API
        const session = await account.getSession('current');
        if (!session) return null;

        const oAuthToken = session.providerAccessToken;

        if (!oAuthToken) {
            console.log('No OAuth token found');
            return null;
        }

        // Fetch user's profile from Google People API
        const response = await fetch('https://people.googleapis.com/v1/people/me?personFields=photos', {
            headers: {
                'Authorization': `Bearer ${oAuthToken}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch Google profile');
            return null;
        }

        const data = await response.json();
        // Get the profile photo URL (usually the first photo)
        const profilePhoto = data.photos?.[0]?.url;
        return profilePhoto || null;
    } catch (e) {
        console.log('getGooglePicture error:', e);
        return null;
    }
}

export const storeUserData = async () => {
    try{
        const user = await account.get();
        if (!user) return null;

        const {documents} = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [
                Query.equal('accountId', user.$id),
            ]
        )

        if (documents.length > 0) return documents[0];

        const imageUrl = await getGooglePicture();

        const newUser = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: user.$id,
                email: user.email,
                name: user.name,
                imageUrl: imageUrl || '',
                joinedAt: new Date().toISOString(),
            }
        )

        return newUser;
    } catch (e) {
        console.log('storeUserData error:', e)
        return null;
    }
}

export const getExistingUser = async () => {
    try{
        const user = await account.get();
        if (!user) return null;

        const {documents} = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [
                Query.equal('accountId', user.$id),
            ]
        )

        if (documents.length === 0) return null;
        return documents[0];
    } catch (e) {
        console.log('getExistingUser error:', e)
        return null;
    }
}