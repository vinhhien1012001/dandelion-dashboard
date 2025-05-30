import type { AxisModel } from "@syncfusion/ej2-react-charts";
import { formatDate } from "lib/utils";

export const sidebarItems = [
  {
    id: 1,
    icon: "/assets/icons/home.svg",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 3,
    icon: "/assets/icons/users.svg",
    label: "All Users",
    href: "/all-users",
  },
  {
    id: 4,
    icon: "/assets/icons/itinerary.svg",
    label: "AI Trips",
    href: "/trips",
  },
];

export const chartOneData: object[] = [
  {
    x: "Jan",
    y1: 0.5,
    y2: 1.5,
    y3: 0.7,
  },
  {
    x: "Feb",
    y1: 0.8,
    y2: 1.2,
    y3: 0.9,
  },
  {
    x: "Mar",
    y1: 1.2,
    y2: 1.8,
    y3: 1.5,
  },
  {
    x: "Apr",
    y1: 1.5,
    y2: 2.0,
    y3: 1.8,
  },
  {
    x: "May",
    y1: 1.8,
    y2: 2.5,
    y3: 2.0,
  },
  {
    x: "Jun",
    y1: 2.0,
    y2: 2.8,
    y3: 2.5,
  },
];

export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
];

export const budgetOptions = ["Budget", "Mid-range", "Luxury", "Premium"];

export const groupTypes = ["Solo", "Couple", "Family", "Friends", "Business"];

export const footers = ["Terms & Condition", "Privacy Policy"];

export const selectItems = [
  "groupType",
  "travelStyle",
  "interest",
  "budget",
] as (keyof TripFormData)[];

export const comboBoxItems = {
  groupType: groupTypes,
  travelStyle: travelStyles,
  interest: interests,
  budget: budgetOptions,
} as Record<keyof TripFormData, string[]>;

export const userXAxis: AxisModel = { valueType: "Category", title: "Day" };
export const useryAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const tripXAxis: AxisModel = {
  valueType: "Category",
  title: "Travel Styles",
  majorGridLines: { width: 0 },
};

export const tripyAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const CONFETTI_SETTINGS = {
  particleCount: 200, // Number of confetti pieces
  spread: 60, // Spread of the confetti burst
  colors: ["#ff0", "#ff7f00", "#ff0044", "#4c94f4", "#f4f4f4"], // Confetti colors
  decay: 0.95, // Gravity decay of the confetti
};

export const LEFT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 45, // Direction of the confetti burst (90 degrees is top)
  origin: { x: 0, y: 1 }, // Center of the screen
};

export const RIGHT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 135,
  origin: { x: 1, y: 1 },
};


export const user = { name: "Tu Anh" };
export const dashboardStats = {
  totalUsers: 100,
  usersJoined: { currentMonth: 50, lastMonth: 30 },
  totalBlogs: 80,
  blogsCreated: { currentMonth: 15, lastMonth: 20 },
  userRole: { total: 85, currentMonth: 45, lastMonth: 40 },
};
export const allTrips = [
  {
    id: 1,
    name: "Tropical Rewind",
    imageUrls: ["/assets/images/sample1.jpg"],
    itinerary: [{ location: "Thailand" }],
    tags: ["Adventure", "Culture"],
    travelStyle: "Solo",
    estimatedPrice: "$1,000",
  },
  {
    id: 2,
    name: "French Reverie",
    imageUrls: ["/assets/images/sample2.jpg"],
    itinerary: [{ location: "Paris" }],
    tags: ["Relaxation", "Culinary"],
    travelStyle: "Family",
    estimatedPrice: "$2,000",
  },
  {
    id: 3,
    name: "Zen Break",
    imageUrls: ["/assets/images/sample3.jpg"],
    itinerary: [{ location: "Japan" }],
    tags: ["Shopping", "Luxury"],
    travelStyle: "Couple",
    estimatedPrice: "$3,000",
  },
  {
    id: 4,
    name: "Adventure in Westeros",
    imageUrls: ["/assets/images/sample4.jpg"],
    itinerary: [{ location: "Croatia" }],
    tags: ["Historical", "Culture"],
    travelStyle: "Friends",
    estimatedPrice: "$4,000",
  },
];
export const allBlogs = [
  {
    id: 1,
    name: "Tản Lạc Trôi Thứ 7 #7",
    imageUrls: ["/assets/images/blog1.jpeg"],
    tags: ["Tản Lạc Trôi"],
    estimatedTime: "4 mins",
    content: "Wow, vậy là đã hai tháng mình bắt đầu viết lại, nay đã là Tản Lạc Trôi Thứ 8 và Thứ 9. Lí tưởng là bài tản lạc trôi sẽ được đăng vào thứ 7 hàng tuần như là một cách mình nhìn lại một tuần. Trong quá trình viết lại này, mình nhận ra…"
  },
  {
    id: 2,
    name: "Tại Khoảnh Khắc Ấy trong Lịch Sử",
    imageUrls: ["/assets/images/blog2.jpeg"],
    tags: ["Mắc Dịch Văn"],
    estimatedTime: "10 mins",
    content: "Chúng ta tin rằng sự chết của Đấng Christ là một khoảnh khắc trong lịch sử khi một điều hoàn toàn không thể tưởng tượng được từ thế giới bên ngoài đã đến để soi vào chính thế giới của chúng ta. Và nếu chúng ta không thể hình dung nổi cách các nguyên tử cấu thành thế giới của chính chúng ta như thế nào, thì tất nhiên, chúng ta cũng sẽ không thể hình dung nổi điều này."
  },
  {
    id: 3,
    name: "Tiếng Tình Yêu Trong Lòng",
    imageUrls: ["/assets/images/blog3.jpeg"],
    tags: ["Trong Trang Sách"],
    estimatedTime: "6 mins",
    content: "Vào một ngày tháng 9, mình tới Đà Nẵng, gặp người chị thương quý a.k.a của là mentor của mình, và được tặng quyển sách nhỏ xíu “Tiếng Tình Yêu Trong Lòng.” Mình đã đọc xong và mình cảm thấy đây là “quyển sách dành cho mình”, dành cho những thắc mắc, chật vật của…"
  },
  {
    id: 4,
    name: "Elemental – Một Tình Yêu rất Closeup Lửa Băng",
    imageUrls: ["/assets/images/blog4.jpeg"],
    tags: ["Những Thước Phim"],
    estimatedTime: "8 mins",
    content: "Elemental – Một Tình Yêu rất Closeup Lửa Băng Mình xem Elemental vào một ngày tháng 7. Xem phim mà quảng cáo kem đánh răng Close-up Lửa Băng trên nền nhạc Titanium chạy trong đầu. Mình thích phim hoạt hình từ nhà Pixar. Không chỉ là phim hoạt hình mang tiếng cười, mà câu chuyện…"
  }
]
export const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      imageUrl: "/assets/images/david.webp",
      dateJoined: formatDate("2025-01-01"),
      itineraryCreated: 10,
      status: "user",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      imageUrl: "/assets/images/david.webp",
      dateJoined: formatDate("2025-01-02"),
      itineraryCreated: 4,
      status: "user",
    },
    {
      id: 3,
      name: "John Smith",
      email: "john.smith@example.com",
      imageUrl: "/assets/images/david.webp",
      dateJoined: formatDate("2025-01-03"),
      itineraryCreated: 8,
      status: "admin",
    },
];