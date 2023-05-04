import TaskIcon from "public/icons/Features/task-manger-icon.svg";
import CreateIcon from "public/icons/Features/create-adjust-icon.svg";
import OptimizerIcon from "public/icons/Features/optimizer-icon.svg";
import BudgetIcon from "public/icons/Features/budget-icon.svg";
import Image from "next/image";

export const pricingData = [
  {
    name: "Basic",
    price: { amount: 9.99, currency: "$", frequency: "/month" },
    features: ["10GB storage", "5 users", "24/7 support"],
  },
  {
    name: "Pro",
    price: { amount: 29.99, currency: "$", frequency: "/month" },
    features: [
      "25GB storage",
      "10 users",
      "24/7 support",
      "Priority email support",
    ],
  },
  {
    name: "Premium",
    price: { amount: 49.99, currency: "$", frequency: "/month" },
    features: [
      "50GB storage",
      "Unlimited users",
      "24/7 support",
      "Priority email & phone support",
    ],
  },
];

export const testimonialsData = [
  {
    text: "Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.",
    author: {
      name: "Jane Doe",
      role: "Vice President - Talent & Acquisition",
    },
    avatarUrl: "/images/Testimonials/author_1.svg",
    companyUrl: "/images/Testimonials/company_1.svg",
  },
  {
    text: "Amazing service complementory. Totally a different experience to working with this mind blowing team. Don’t want to miss to work again.",
    author: {
      name: "Jane Doe",
      role: "Vice President - Talent & Acquisition",
    },
    avatarUrl: "/images/Testimonials/author_2.svg",
    companyUrl: "/images/Testimonials/company_2.svg",
  },
];

export const menuItems = [
  { id: "#home", label: "Home" },
  { id: "#testimonials", label: "Testimonials" },
  { id: "#features", label: "Features" },
  { id: "#services", label: "Services" },
  { id: "#faq", label: "Faq" },
];

export const featuresData = [
  {
    heading: "Unbeatable privacy & secure data storage subscription",
    text: "Our data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Secure email hosting with encryption both at rest and end-to-end, along with S/MIME message encryption.",
    actionsText: "Secure data storage",
    imageUrl: "/images/Features/privacy.png",
    imageSize: "100%",
  },
  {
    heading: "Integrated with the ultimate add-on management",
    text: "Our data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Secure email hosting with encryption both at rest and end-to-end, along with S/MIME message encryption.",
    actionsText: "Explore all add-on",
    imageUrl: "/images/Features/add-on.png",
    imageSize: "100%",
  },
];

export const ultimateFeaturesData = [
  {
    label: "Task Manager",
    content: "/images/Features/dashboard-img.png",
    iconUrl: "/icons/Features/task-manger-icon.svg",
  },
  {
    label: "Create & Adjust",
    content: "/images/Features/dashboard-img.png",
    iconUrl: "/icons/Features/create-adjust-icon.svg",
  },
  {
    label: "Website optimizer",
    content: "/images/Features/dashboard-img.png",
    iconUrl: "/icons/Features/optimizer-icon.svg",
  },
  {
    label: "Budget tracker",
    content: "/images/Features/dashboard-img.png",
    iconUrl: "/icons/Features/budget-icon.svg",
  },
];

export const beyondFeaturesSection = {
  heading: "Go beyond with the ultimate features",
  description: "Meet with the ultimate features",
  features: [
    {
      imageUrl: "/images/Features/person-img.png",
      heading: "Simplify communications",
      text: "Get your info tests delivered at home and collect a sample from the your progress tests.",
      actionsText: "Learn More",
      imageSize: "70px",
    },
    {
      imageUrl: "/images/Features/people-img.png",
      heading: "Quick Response",
      text: "Get your info tests delivered at home and collect a sample from the your progress tests.",
      actionsText: "Learn More",
      imageSize: "70px",
    },
    {
      imageUrl: "/images/Features/buildings-img.png",
      heading: "Ultimate Org Support",
      text: "Get your info tests delivered at home and collect a sample from the your progress tests.",
      actionsText: "Learn More",
      imageSize: "70px",
    },
    {
      imageUrl: "/images/Features/person-img.png",
      heading: "Simplify communications",
      text: "Get your info tests delivered at home and collect a sample from the your progress tests.",
      actionsText: "Learn More",
      imageSize: "70px",
    },
    {
      imageUrl: "/images/Features/people-img.png",
      heading: "Quick Response",
      text: "Get your info tests delivered at home and collect a sample from the your progress tests.",
      actionsText: "Learn More",
      imageSize: "70px",
    },
    {
      imageUrl: "/images/Features/buildings-img.png",
      heading: "Ultimate Org Support",
      text: "Get your info tests delivered at home and collect a sample from the your progress tests.",
      actionsText: "Learn More",
      imageSize: "70px",
    },
  ],
};
