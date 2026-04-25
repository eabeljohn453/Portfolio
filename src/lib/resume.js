export const resumeData = {
  personal: {
    name: "Eabel John",
    role: "Full Stack Developer",
    email: "eabeljohn453@gmail.com",
    phone: "+91-7736951636",
    location: "Kochi, Kerala, India",
    summary:
      "Passionate Full Stack Developer focused on building scalable, user-friendly, and high-performance applications. Skilled in both frontend and backend development with strong problem-solving abilities and interest in AI-powered systems.",
  },

  experience: [
    {
      company: "FutureIK Technologies",
      role: "Full Stack Developer",
      duration: "03/2025 - Present",
      location: "Kochi, Kerala, India",
      responsibilities: [
        "Developed and maintained responsive web applications using Next.js, TailwindCSS, JavaScript, Node.js, and MongoDB",
        "Implemented internationalization (i18n) to support multi-language functionality",
        "Designed and built 'Virtual Proof / Proof of Play' system end-to-end including backend logic, APIs, and frontend UI",
        "Integrated socket authentication for real-time communication",
        "Performed code refactoring to improve performance, maintainability, and scalability",
        "Used Postman for API testing and collaborated using GitHub for version control and reviews",
      ],
    },
  ],

  education: [
    {
      degree: "BTech in Computer Science",
      institution: "College of Engineering, Adoor",
      duration: "10/2021 – 03/2025",
      location: "Adoor, Kerala, India",
    },
  ],

  skills: {
    languages: ["JavaScript", "Python"],
    frontend: ["React", "Next.js", "TailwindCSS"],
    backend: ["Node.js", "Express"],
    databases: ["MongoDB", "MySQL"],
    tools: ["GitHub", "Postman"],
    other: ["i18n", "REST APIs", "Socket Authentication"],
  },

  projects: [
    {
      name: "Inbox (Cloud File Management System)",
      type: "Full Stack",
      description:
        "A secure cloud-based file management system that allows users to upload, organize, preview, rename, download, and delete files efficiently.",
      highlights: [
        "Implemented JWT-based authentication and authorization for secure access",
        "Integrated Cloudinary for scalable media storage and delivery",
        "Optimized performance using lazy loading and efficient API calls",
        "Used MongoDB aggregation pipelines for efficient data handling",
        "Implemented brute-force attack prevention for enhanced security",
        "Designed RESTful APIs using Node.js and Express",
      ],
      techStack: ["React", "Node.js", "MongoDB", "Cloudinary"],
    },

    {
      name: "Git Auto Tool",
      type: "CLI Tool",
      description:
        "A developer productivity tool that automates Git workflows such as commits, pushes, branch management, PR creation, and merging.",
      highlights: [
        "Automated repetitive Git operations to improve developer efficiency",
        "Built an interactive merge assistant to resolve conflicts step-by-step",
        "Integrated GitHub API for authentication and remote operations",
        "Published as an npm package for public usage",
      ],
      techStack: ["Node.js", "Inquirer", "Commander", "Octokit", "GitHub API"],
    },

    {
      name: "GODSEYE - Potential Threat Alert System",
      type: "AI System",
      description:
        "An AI-powered real-time threat detection system designed to monitor CCTV streams and detect weapons such as guns and knives using computer vision.",
      highlights: [
        "Implemented YOLOv8 for real-time weapon detection",
        "Detects threats even with partial visibility",
        "Integrated automated alert system using Twilio (calls & SMS)",
        "Location-aware emergency alert system",
        "Multi-admin secure dashboard for monitoring",
        "Real-time CCTV feed analysis and response system",
      ],
      techStack: ["Python", "YOLOv8", "Twilio", "Node.js"],
    },

    {
      name: "Wedding AI (Agentic AI System)",
      type: "AI Assistant",
      description:
        "An AI-powered wedding assistant that behaves like an agent, helping users plan weddings through intelligent recommendations and conversational interaction.",
      highlights: [
        "Provides real-time answers to wedding planning queries",
        "Acts as an intelligent assistant with agentic behavior",
        "Guides users through decisions dynamically",
        "Supports conversational interaction using LLM-based architecture",
        "Designed to improve user experience in event planning",
      ],
      techStack: ["LLM APIs", "Next.js", "Node.js"],
    },
  ],

  achievements: [
    "Mulearn Full Stack Developer Certificate",
    "Red Team - Security in Computation Certificate",
    "Participated in multiple hackathons",
  ],

  strengths: [
    "Strong problem-solving and analytical thinking",
    "Ability to design scalable systems",
    "Experience with real-world production applications",
    "Interest in AI and agentic systems",
  ],

  interests: [
    "Artificial Intelligence",
    "System Design",
    "Building SaaS products",
    "Developer productivity tools",
  ],
};