
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
    description: "A clean and user-friendly UI/UX design for an e-commerce platform with smart filtering, smooth cart flow, and a secure, intuitive checkout experience.",
    tags: ["Figma", "Motiff", "pinterest", "UI/UX design"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    link: "https://motiff.com/file/0A6GaoyUgQkW2tUTrVKXE67?nodeId=0%3A1&type=design"
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio showcase with smooth animations and responsive design to highlight creative work.",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    link: "https://v0-creative-portfolio-website-omega-three.vercel.app/"
  },
  {
    title: "AI Task Management",
    description: "An intelligent task management application that uses machine learning to prioritize and suggest tasks.",
    tags: ["Vue.js", "Python", "TensorFlow", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://v0-ai-task-management-kappa.vercel.app/"
  },
  {
    title: "Quiz Parser",
    description: "Transform your text files into interactive quizzes instantly. Upload your questions and get an engaging quiz experience with automatic answer detection and detailed explanations.",
    tags: ["Next.js", "D3.js", "Supabase", "WebSockets"],
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://v0-txt-file-quiz-app.vercel.app/"
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
    { number: "3+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" }
  ],
  experience: [
    {
      title: "Junior Frontend Developer",
      company: "Everlink technology solution.",
      period: "2023 - 2024",
      description: "Paricipate development of lottery mobile applications using Dart, flutter and firebase."
    },
    {
      title: "Web Developer",
      company: "Eaglelion Technologies",
      period: "2024 - 2025",
      description: "Built responsive websites and web applications for various clients."
    },
    {
      title: "Mobile App Developer",
      company: "StartUp Studios",
      period: "2023 - 2025",
      description: "Contributed to frontend development using React and various CSS frameworks."
    }
  ],
  education: [
    {
      degree: "Bachelor's in Computer Science and Engineering",
      institution: "Adama science and Technology University",
      period: "2021 - 2025",
      description: "Specialized in Human-Computer Interaction and Web Technologies."
    },
    {
      degree: "Certificate in mobile app development",
      institution: "Udacity",
      period: "2023 - 2024",
      description: "Studied programming fundamentals, algorithms, and mobile app development using flutter."
    }
  ]
};

export const EDUCATION_TIMELINE = [
  {
    icon: GraduationCap,
    title: "Bachelor's in Computer Science and Engineering",
    location: "Adama Science and Technology University",
    description: "Specialized in Human-Computer Interaction and Web Technologies",
    date: "2021 - 2025",
  },
  {
    icon: BookOpen,
    title: "Certificate in mobile app development",
    location: "udacity",
    description: "Studied programming fundamentals, algorithms, and mobile app development using flutter",
    date: "2023 - 2024",
  },
];

export const EXPERIENCE_TIMELINE = [
  {
    icon: BrainCircuit,
    title: "Junior Frontend Developer",
    location: "Everlink technology solution.",
    description: "participating mobile application development teams",
    date: "2023 - 2024",
  },
  {
    icon: Blocks,
    title: "Web Developer",
    location: "Eaglelion Technologies",
    description: "Building responsive web applications",
    date: "2013 - 2024",
  },
  {
    icon: LayoutGrid,
    title: "Junior Developer",
    location: "StartUp Studios",
    description: "Creating user interfaces and components",
    date: "2022 - present",
  },
];

export const CONTACT_INFO = {
  email: "fasikafaf19@gmail.com",
  phone: "+251 988 34 85 ",
  location: "San Francisco, CA",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/faf-19",
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
