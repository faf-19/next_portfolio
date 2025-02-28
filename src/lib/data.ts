
import { 
  Code, 
  Figma, 
  Briefcase, 
  BookOpen, 
  Blocks, 
  BrainCircuit, 
  GraduationCap,
  FileCode,
  Palette,
  Terminal,
  GitBranch,
  LayoutGrid
} from "lucide-react";

export const NAV_LINKS = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const PROJECTS = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-stack e-commerce solution with advanced filtering, cart management, and secure payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio showcase with smooth animations and responsive design to highlight creative work.",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    link: "#"
  },
  {
    title: "AI Task Management",
    description: "An intelligent task management application that uses machine learning to prioritize and suggest tasks.",
    tags: ["Vue.js", "Python", "TensorFlow", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "#"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "A real-time data visualization platform for monitoring business metrics and performance indicators.",
    tags: ["Next.js", "D3.js", "Supabase", "WebSockets"],
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "#"
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    icon: FileCode,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5 & CSS3", level: 90 },
    ],
  },
  {
    category: "Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "UI/UX Principles", level: 85 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: Terminal,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "RESTful APIs", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    category: "Tools",
    icon: GitBranch,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Webpack", level: 75 },
      { name: "Docker", level: 65 },
    ],
  },
];

export const ABOUT_CONTENT = {
  intro: "I'm a passionate web developer and designer with a focus on creating intuitive, user-centric digital experiences.",
  description: "With over 5 years of experience in web development, I specialize in building modern, responsive applications using cutting-edge technologies. I'm committed to clean code, accessibility, and delivering exceptional user experiences.",
  values: [
    {
      icon: Code,
      title: "Clean Code",
      description: "I write maintainable, scalable, and well-documented code following industry best practices."
    },
    {
      icon: Figma,
      title: "Thoughtful Design",
      description: "I believe in design that balances aesthetics with usability and accessibility."
    },
    {
      icon: Briefcase,
      title: "Professional Work",
      description: "I take pride in delivering high-quality work that exceeds client expectations."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "I'm always expanding my knowledge and keeping up with the latest technologies."
    }
  ],
  stats: [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" }
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Lead development of high-traffic web applications using React and Next.js."
    },
    {
      title: "Web Developer",
      company: "Digital Solutions Agency",
      period: "2019 - 2021",
      description: "Built responsive websites and web applications for various clients."
    },
    {
      title: "Junior Developer",
      company: "StartUp Studios",
      period: "2018 - 2019",
      description: "Contributed to frontend development using React and various CSS frameworks."
    }
  ],
  education: [
    {
      degree: "Master's in Computer Science",
      institution: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Human-Computer Interaction and Web Technologies."
    },
    {
      degree: "Bachelor's in Information Technology",
      institution: "State University",
      period: "2012 - 2016",
      description: "Studied programming fundamentals, algorithms, and database systems."
    }
  ]
};

export const EDUCATION_TIMELINE = [
  {
    icon: GraduationCap,
    title: "Master's in Computer Science",
    location: "Tech University",
    description: "Specialized in Web Technologies and HCI",
    date: "2016 - 2018",
  },
  {
    icon: BookOpen,
    title: "Bachelor's in Information Technology",
    location: "State University",
    description: "Dean's List, Graduated with Honors",
    date: "2012 - 2016",
  },
];

export const EXPERIENCE_TIMELINE = [
  {
    icon: BrainCircuit,
    title: "Senior Frontend Developer",
    location: "Tech Innovations Inc.",
    description: "Leading web application development teams",
    date: "2021 - Present",
  },
  {
    icon: Blocks,
    title: "Web Developer",
    location: "Digital Solutions Agency",
    description: "Building responsive web applications",
    date: "2019 - 2021",
  },
  {
    icon: LayoutGrid,
    title: "Junior Developer",
    location: "StartUp Studios",
    description: "Creating user interfaces and components",
    date: "2018 - 2019",
  },
];

export const CONTACT_INFO = {
  email: "hello@example.com",
  phone: "+1 (123) 456-7890",
  location: "San Francisco, CA",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
    },
  ],
};
