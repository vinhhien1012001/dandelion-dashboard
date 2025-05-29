import { Header } from "components";

const Dashboard = () => {
  const user = { name: "Tu Anh" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />
      Dashboard Page Content
    </main>
  );
};

export default Dashboard;
