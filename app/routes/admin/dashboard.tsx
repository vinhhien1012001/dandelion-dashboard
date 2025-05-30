import { Header, StatsCard, TripCard } from "components";

const Dashboard = () => {
  const user = { name: "Tu Anh" };
  const dashboardStats = {
    totalUsers: 100,
    usersJoined: { currentMonth: 50, lastMonth: 30 },
    totalBlogs: 80,
    blogsCreated: { currentMonth: 15, lastMonth: 20 },
    userRole: { total: 85, currentMonth: 45, lastMonth: 40 },
  };

  const { totalUsers, usersJoined, totalBlogs, blogsCreated, userRole } =
    dashboardStats;

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
      <TripCard />
    </main>
  );
};

export default Dashboard;
