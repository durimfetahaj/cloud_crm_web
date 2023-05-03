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
