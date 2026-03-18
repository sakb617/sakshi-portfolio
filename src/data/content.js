export const profile = {
  name: "Sakshi Bhardwaj",
  title: "Software Engineer · Data Scientist · MS Aspirant",
  tagline: "Turning data into decisions — one line of code at a time.",
  bio: "I'm Sakshi, a Computer Science grad from Amity University with a knack for finding signal in noisy data. I've spent time building ML models, publishing research, and shipping dashboards at Persistent Systems and DR Labels — and I'm now channeling that hands-on experience into pursuing an MS in Computer Science (Data Science). I love problems that sit at the intersection of data, systems, and real-world impact.",
  email: "sakshib617@gmail.com",
  phone: "+917303991191",
  github: "https://github.com/sakb617",
  linkedin: "https://www.linkedin.com/in/sakshib617",
  location: "Delhi, India",
  badges: ["Data Science", "ML Research", "MS Aspirant", "Open Source"],
  cvLink: "#", // Replace with actual hosted CV link
};

export const experience = [
  {
    id: 1,
    role: "Data Analytics Intern",
    company: "D.R. Labels Industry LLP",
    location: "Ghaziabad, Uttar Pradesh",
    duration: "Aug 2025 – Dec 2025",
    type: "Internship",
    bullets: [
      "Built an operations dashboard integrating order, production, inventory, and shipping data to highlight bottlenecks and forecast demand.",
      "Created a knowledge-base system by mapping the design-file workflow, improving coordination and streamlining tracking.",
      "Worked with cross-functional teams to gather requirements and deliver data-driven process improvements.",
    ],
  },
  {
    id: 2,
    role: "Data Science Intern",
    company: "Persistent Systems",
    location: "Noida, Uttar Pradesh",
    duration: "May 2024 – Jun 2024",
    type: "Internship",
    bullets: [
      "Built dashboards and data-quality trackers to surface accuracy issues in client datasets and support quick error detection.",
      "Developed and deployed ML models for real-time trend detection, improving data-processing efficiency by 30%.",
      "Automated data cleaning of internal reports to reduce preprocessing time by 40% using Python and SQL.",
    ],
  },
];

export const collaborations = [
  {
    id: 1,
    role: "Research Intern",
    org: "Amity School of Engineering and Technology",
    duration: "Feb 2025 – Apr 2025",
    description:
      "Reviewed open-source vulnerabilities, mapped code and supply-chain risks, and proposed practical monitoring practices for abandoned projects.",
  },
  {
    id: 2,
    role: "Research Assistant",
    org: "Amity Centre for Artificial Intelligence",
    duration: "Aug 2024 – Dec 2024",
    description:
      "Built a CNN & Vision Transformer hybrid model for real-time accident prediction, achieving ~95% accuracy — accepted for publication.",
  },
  {
    id: 3,
    role: "Research Lead",
    org: "Amity School of Engineering and Technology",
    duration: "Apr 2024 – Mar 2025",
    description:
      "Published a GIS-based emergency response framework for ambulance routing, validated via Bangalore simulation with 35% faster response times.",
  },
  {
    id: 4,
    role: "Volunteer Intern",
    org: "Umeed NGO",
    duration: "Oct 2025",
    description:
      "Managed social media presence and fundraising activities to boost visibility and community support in Delhi.",
  },
  {
    id: 5,
    role: "Volunteer Intern",
    org: "Suprabhat Educational and Social Welfare Society",
    duration: "Sep 2024",
    description:
      "Provided meals and computer workshops for ~60 underprivileged students, supporting nutrition and digital literacy.",
  },
];

export const research = [
  {
    id: 1,
    featured: true,
    title: "Hybrid CNN + Vision Transformer for Real-Time Accident Prediction",
    description:
      "Built a CNN & ViT hybrid model trained on traffic images for real-time accident prediction. The ViT-based approach consistently outperformed CNN, EfficientNet, and MobileNet baselines, achieving ~95% accuracy and enabling faster emergency response.",
    venue: "Accepted for Publication",
    year: "2024",
    keywords: ["Deep Learning", "Vision Transformer", "CNN", "Computer Vision", "Traffic Safety"],
    links: {},
  },
  {
    id: 2,
    featured: false,
    title: "Weak Links in the Chain: Security Flaws in Open Source Projects",
    description:
      "Quantitative analysis of security vulnerabilities in open-source projects, identifying that abandoned repositories accumulate significantly more unresolved flaws and proposing continuous monitoring frameworks.",
    venue: "International Journal For Multidisciplinary Research, Vol. 7, No. 5",
    year: "2025",
    keywords: ["Open Source Security", "Supply Chain Risk", "Vulnerability Analysis"],
    links: {
      doi: "https://doi.org/10.36948/ijfmr.2025.v07i05.57871",
    },
  },
  {
    id: 3,
    featured: false,
    title: "Smart Emergency Framework: GIS-Based Ambulance Routing for Indian Cities",
    description:
      "Designed a data-driven GIS framework for optimized ambulance dispatch using hotspot mapping, real-time traffic data, and adaptive GPS signals. Validated via Bangalore city simulation with 35% faster response times.",
    venue: "International Journal For Multidisciplinary Research, Vol. 7, No. 4",
    year: "2025",
    keywords: ["GIS", "Emergency Response", "Smart Cities", "Data-Driven Systems"],
    links: {
      doi: "https://doi.org/10.36948/ijfmr.2025.v07i04.52840",
    },
  },
  {
    id: 4,
    featured: false,
    title: "Demand Forecasting for Yulu Electric Mobility in Indian Cities",
    description:
      "Researched factors influencing Yulu ride demand across major Indian cities. Found that weather, time, and location explain over 75% of demand variation, providing actionable revenue insights.",
    venue: "Amity University — Academic Research Project",
    year: "2023",
    keywords: ["EDA", "Demand Forecasting", "Electric Mobility", "Python"],
    links: {},
  },
];

export const skills = {
  languages: ["Python (Advanced)", "SQL (Advanced)", "C++ (Proficient)", "C (Beginner)"],
  tools: ["Tableau", "Git", "Jupyter", "VS Code"],
  domains: ["Machine Learning", "Data Analytics", "Computer Vision", "GIS Systems", "NLP"],
};

export const education = {
  degree: "B.S. Computer Science",
  university: "Amity University, Noida",
  graduation: "May 2025",
  honors: "First Division with Distinction",
  ielts: "7.5 / 9",
};
