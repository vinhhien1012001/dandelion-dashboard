import { Header, StatsCard, BlogCard } from "components";
import { dashboardStats, user, allBlogs } from "~/constants";

const { totalUsers, usersJoined, totalBlogs, blogsCreated, userRole } =
  dashboardStats;

const Dashboard = () => {
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            title="Total Users"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard
            title="Total Blogs"
            total={totalBlogs}
            currentMonthCount={blogsCreated.currentMonth}
            lastMonthCount={blogsCreated.lastMonth}
          />
          <StatsCard
            title="Active Users"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>

      <section className="container">
        <h1 className="text-xl font-bold text-dark-100">Created Blogs</h1>

        <div className="trip-grid">
          {allBlogs
            .slice(0, 4)
            .map(({ id, name, imageUrls, tags, estimatedTime, content }) => (
              <BlogCard
                key={id}
                id={id.toString()}
                name={name}
                imageUrl={imageUrls[0]}
                tags={tags}
                time={estimatedTime}
                content={content}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
