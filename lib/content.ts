export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const HERO_COPY = {
  eyebrow: "Over 35 Years of Expert Landscaping",
  headline: "Landscape Services for Residential & Commercial Projects",
  scrollCue: "Scroll to explore",
};

export const ABOUT_COPY = {
  body: [
    "Adenium Gardens Private Limited is a start-up for total Horticulture, Garden, Landscape & Arboriculture services. Designing of golf course plantation of trees and transplantation of trees, liaison with tree authorities, local self govt. agencies, Municipal Corporations, State and Central government environmental departments & pollution control boards.",
    "The Company is promoted by Dr. Vaishali Pawaskar — Horticulturist, M.Sc. & Doctorate in Botanical Science and Tissue Culture from Bombay University. She has designed and developed an 18-hole Golf Course in Mumbai, developed a 12-acre farm of orchid flowers, and designed and developed many landscape and horticulture projects for real estate construction companies in Mumbai, Bangalore, Kolkata, Ahmedabad, Gurgaon, and Pune.",
    "The company is headquartered in Mumbai, ably supported by professional people from different fields — Architecture, Civil Engineering, Botanical and Agricultural Sciences. The company has a vision to promote organic plants and engage with organizations to reduce carbon footprints, spreading the message: Go Green, Save the Planet — for our future.",
  ],
  mission: "Go Green, Save the Planet — for our future.",
};

export const FOUNDER = {
  name: "Dr. Vaishali Pawaskar",
  title: "Founder & Horticulturist",
  credentials: "M.Sc., Ph.D. — Botanical Science & Tissue Culture, Bombay University",
};

export const FOUNDER_STATS = [
  { value: 18, suffix: "-Hole", label: "Golf Course Designed", prefix: "" },
  { value: 12, suffix: "-Acre", label: "Orchid Farm Developed", prefix: "" },
  { value: 6, suffix: "+", label: "Cities Served", prefix: "" },
  { value: 35, suffix: "+", label: "Years Combined Expertise", prefix: "" },
];

export const SERVICES = [
  {
    icon: "Trees",
    title: "Landscape Designing & Gardening",
    description:
      "Full lifecycle landscaping from new construction to facelifts of existing landscapes, with the customer involved from start to finish.",
  },
  {
    icon: "TreePine",
    title: "Arboriculture",
    description:
      "Tree census reports, GPS surveys with photographs, micro/macro ecological reports for authority submissions, botanical records, and scientific transplantation/cutting methodology.",
  },
  {
    icon: "Leaf",
    title: "Environmental Liaison Services",
    description:
      "End-to-end coordination with tree authorities, municipal corporations, and state/central pollution control boards — a one-stop shop for environmental compliance.",
  },
  {
    icon: "Building2",
    title: "Office Scape",
    description:
      "Corporate workplace landscaping and fit-outs designed by architects, project managers, and fit-out specialists for productive, branded, agile workspaces.",
  },
  {
    icon: "Flower2",
    title: "Plant Scape",
    description:
      "Expert plant-selection consultancy so the right plant goes in the right space — avoiding the common mistake of buying plants without know-how.",
  },
  {
    icon: "Sprout",
    title: "Vertical Gardening",
    description:
      "Living wall systems with built-in irrigation, optimized for flats and space-constrained homes.",
  },
  {
    icon: "Wheat",
    title: "Commercial Plantation",
    description:
      "Helping landowners near Mumbai convert underutilized agricultural land into high-return organic crop/vegetable/fruit plantations.",
  },
  {
    icon: "Wind",
    title: "Air Purification",
    description:
      "Indoor air quality solutions (mobile high-performance air cleaners) for offices, improving employee wellbeing and reducing sick days.",
  },
];

export const PORTFOLIO_TILES = [
  { label: "18-Hole Golf Course", location: "Mumbai", placeholder: "Golf course landscape design" },
  { label: "12-Acre Orchid Farm", location: "Mumbai", placeholder: "Orchid farm development" },
  { label: "Residential Landscape", location: "Bangalore", placeholder: "Premium residential landscaping" },
  { label: "Commercial Project", location: "Kolkata", placeholder: "Corporate landscape project" },
  { label: "Office Scape", location: "Ahmedabad", placeholder: "Office landscape fit-out" },
  { label: "Vertical Garden", location: "Gurgaon", placeholder: "Living wall installation" },
];

export const VIDEO_SHOWREEL = {
  heading: "See Our Work in Motion",
  subtext: "A glimpse into our craft — from golf courses to living walls.",
};

export const OUR_CLIENTS = {
  heading: "Trusted by Leading Organisations",
  subtext: "We've partnered with developers, corporates, and institutions across India.",
};

export const TESTIMONIALS = [
  {
    quote:
      "What a great job carried out by The Adenium Gardens Team. From the initial planning to completion. Always on time, and left the site spotless on completion. We're definitely going to use your landscaping services again in the future!",
    author: "Mr. Vivek Bhandari",
    company: "Godrej Infotech Ltd, Mumbai",
  },
  {
    quote:
      "The Adenium Gardens is a very good landscaping company. They do tree removal also. We liked them because all the employees are hard-working, honest and reliable. They always come on time, and the prices are good too!",
    author: "Nikita Agarwal",
    company: "Fulcrum Worldwide, Mumbai",
  },
];

export const CONTACT = {
  heading: "Let's Bring Your Vision to Life",
  subtext: "Tell us about your project and we'll get back to you within 24 hours.",
  phone: "+91-9823837146",
  email: "customercare@adeniumgardens.com",
  serviceOptions: SERVICES.map((s) => s.title),
  submitLabel: "Send Enquiry",
  successMessage: "Thank you! We'll be in touch within 24 hours.",
};

export const FOOTER = {
  tagline: "Go Green, Save the Planet — for our future.",
  copyright: `© ${new Date().getFullYear()} Adenium Gardens Private Limited. All rights reserved.`,
};
