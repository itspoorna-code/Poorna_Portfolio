import profile from "./assets/images/profile.jpeg";
const logotext = "ITSPOORNACODE";

const meta = {
  title: "Poornachandra S S",
  description:
    "I’m Poornachandra S S, a passionate tech enthusiast and full stack developer focused on AI, ML and modern web development technologies.",
};

const introdata = {
  title: "I’m Poornachandra S S",
  animated: {
    first: "I love coding",
    second: "I build modern web apps",
    third: "I solve problems with technology",
  },
  description:
    "A passionate tech enthusiast with good programming and debugging skills, looking for opportunities to leverage my knowledge about current and emerging technologies in Web Development.",
  your_img_url: profile,
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I'm a Computer Science student specialized in Artificial Intelligence & Machine Learning, with experience building AI-based learning platforms, hospital navigation systems, and job seeker web apps using MERN stack. I enjoy building solutions that solve real-world problems.",
};

const worktimeline = [
  {
    jobtitle: "HACKLITE 2024 Finalist",
    where: "National Level Hackathon",
    date: "December 2024",
  },
  {
    jobtitle: "Social Media Manager",
    where: "Dr. APJ Abdul Kalam Astronomy Club of VVCE",
    date: "November 2024",
  },
  {
    jobtitle: "3rd Place",
    where: "WEBOVATION Inter-branch Hackathon",
    date: "July 2023",
  },
];

const skills = [
  {
    name: "Java",
    value: 85,
  },
  {
    name: "HTML, CSS",
    value: 90,
  },
  {
    name: "JavaScript & TypeScript",
    value: 85,
  },
  {
    name: "ReactJS",
    value: 80,
  },
  {
    name: "Node.js & Express.js",
    value: 80,
  },
  {
    name: "SQL",
    value: 75,
  },
  {
    name: "MongoDB",
    value: 75,
  },
  {
    name: "Git & GitHub",
    value: 80,
  },
];

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Building modern, scalable web applications using the MERN stack and modern best practices.",
  },
  {
    title: "AI & ML Projects",
    description:
      "Designing and implementing AI-powered features to personalize and optimize user experience.",
  },
  {
    title: "RESTful API Development",
    description:
      "Creating robust APIs with Node.js and Express.js, connected to SQL or NoSQL databases.",
  },
];

const dataportfolio = [
  //   {
  //     img: "https://picsum.photos/400/?grayscale",
  //     description:
  //       "AI Based E-learning Platform with personalized course recommendations.",
  //     link: "#",
  //   },
  //   {
  //     img: "https://picsum.photos/400/800/?grayscale",
  //     description:
  //       "Hospital Navigation System for non-native speakers using Angular and GeoJSON.",
  //     link: "#",
  //   },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "Job Seeker Website with secure login, job listings, and application system.",
    link: "https://job-hunt-theta-mocha.vercel.app/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "itspoorna011@gmail.com",
  YOUR_FONE: "+91 9113973290",
  description:
    "I’m open to collaborations, projects, or internships in web development and AI/ML. Feel free to reach out!",

  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/itspoorna-code",
  linkedin: "https://www.linkedin.com/in/poornachandrass/",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
