export const SITE = {
  name: "SHIVAAY LOGISTICS",
  tagline: "CUSTOMS BROKER & LOGISTICS FACILITATOR",
  founder: "Mandeep Singh",
  phone: ["+91 88474-67790", "+91 93165-33756"],
  email: "shivaaylogistics2022@gmail.com",
  address: "Plot No.116, Street No. 8, Ganesh Nagar, 33 Feet Road, Near Ashiana Enclave, Mundian Kalan, Ludhiana-141015 (Pb.)",
  hours: "Mon – Sat: 9:30am – 6:30pm",
  social: {
    facebook: "#",
    linkedin: "#",
    twitter: "#",
  },
};

export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Why Choose Us", href: "/about#why-choose-us" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];
