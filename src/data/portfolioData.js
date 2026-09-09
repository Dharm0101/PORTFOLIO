import avatarImg from '../assets/avatar.png';
import projectTeeverseImg from '../assets/project-teeverse.jpg';
import projectDrivehubImg from '../assets/project-drivehub.jpg';
import projectBrahmaniImg from '../assets/project-brahmani-textile.jpg';
import projectAiImg from '../assets/project-ai.png';
import projectCloudImg from '../assets/project-cloud.jpg';
import projectFintechImg from '../assets/project-fintech.jpg';
import projectDevtoolsImg from '../assets/project-devtools.jpg';

export const portfolioData = {
  personal: {
    name: "Dharm Mendpara",
    role: "AI & Machine Learning Engineer | Full Stack Developer",
    tagline: "Specializing in Artificial Intelligence, Deep Learning architectures, LLM orchestration, and modern full stack systems.",
    location: "Ahmedabad, Gujarat, India (Open to Remote / Relocation)",
    email: "dharm.mendpara@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    avatar: avatarImg,
    status: {
      available: true,
      text: "Available for AI/ML roles & collaborative projects"
    },
    stats: [
      { label: "AI Models Trained", value: "30+" },
      { label: "Engineering Projects", value: "15+" },
      { label: "LJ University AIML", value: "Honors" },
      { label: "Code Accuracy & Uptime", value: "99.8%" }
    ],
    bio: [
      "I am an AI & Machine Learning engineer pursuing my specialization in Artificial Intelligence & Machine Learning (AIML) at LJ University. I have a deep passion for designing intelligent systems, neural network architectures, and high-performance software applications.",
      "My engineering philosophy combines mathematical rigor with software craftsmanship. I enjoy training deep learning pipelines, developing autonomous LLM agents, and integrating intelligent backends with silky-smooth, responsive user interfaces."
    ]
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Engineering",
        icon: "Layout",
        description: "Crafting blazing fast, responsive, and accessible user interfaces.",
        items: [
          { name: "React 18 / Next.js", level: 95, highlight: "Expert" },
          { name: "TypeScript / ESNext", level: 92, highlight: "Primary" },
          { name: "Tailwind CSS / Vanilla CSS", level: 94, highlight: "Design Systems" },
          { name: "Vue.js & Svelte", level: 80, highlight: "Proficient" },
          { name: "State & Data (Zustand, React Query)", level: 90, highlight: "Async Cache" },
          { name: "Web Performance & Core Web Vitals", level: 92, highlight: "Optimization" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Systems",
        icon: "Server",
        description: "Designing high-throughput microservices, APIs, and real-time streaming.",
        items: [
          { name: "Node.js / Express / NestJS", level: 93, highlight: "Production" },
          { name: "Python / FastAPI", level: 88, highlight: "AI Pipelines" },
          { name: "Go (Golang)", level: 82, highlight: "Microservices" },
          { name: "GraphQL & REST APIs", level: 94, highlight: "Schema Design" },
          { name: "PostgreSQL & Prisma / TypeORM", level: 90, highlight: "Relational" },
          { name: "Redis & Apache Kafka", level: 86, highlight: "Pub/Sub & Queues" }
        ]
      },
      {
        id: "cloud",
        name: "Cloud, DevOps & Infra",
        icon: "Cloud",
        description: "Automating zero-downtime deployments, CI/CD pipelines, and cloud environments.",
        items: [
          { name: "Amazon Web Services (AWS)", level: 90, highlight: "Solutions Architect" },
          { name: "Docker & Containerization", level: 94, highlight: "Standard" },
          { name: "Kubernetes (K8s)", level: 84, highlight: "Orchestration" },
          { name: "Terraform (IaC)", level: 82, highlight: "Declarative" },
          { name: "GitHub Actions & CI/CD", level: 92, highlight: "Automation" },
          { name: "Datadog / Prometheus Observability", level: 86, highlight: "Telemetry" }
        ]
      },
      {
        id: "ai-tools",
        name: "AI & Emerging Tech",
        icon: "Cpu",
        description: "Integrating intelligent agents, vector embeddings, and LLM orchestration.",
        items: [
          { name: "LangChain / LlamaIndex", level: 88, highlight: "RAG & Agents" },
          { name: "OpenAI / Anthropic APIs", level: 92, highlight: "LLM Eng" },
          { name: "Vector DBs (Pinecone, pgvector)", level: 86, highlight: "Semantic Search" },
          { name: "Prompt Architecture & Evals", level: 90, highlight: "Evaluation" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "teeverse",
      title: "TEE VERSE - Heavyweight Streetwear & Graphic Tees",
      category: "fullstack",
      tagline: "Premium Heavyweight 240 GSM Streetwear, Oversized & Graphic Tees with luxury urban fashion and instant order tracking.",
      image: projectTeeverseImg,
      featured: true,
      stats: { gsm: "240 GSM", fabric: "100% Cotton", rating: "4.9/5" },
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Vercel", "Order Tracking"],
      summary: "TEE VERSE is a modern high-end streetwear and graphic apparel e-commerce web platform. Designed for luxury urban fashion with curated oversized silhouettes, heavyweight 240 GSM fabric showcases, interactive product catalogs, seamless shopping cart, and real-time order tracking.",
      features: [
        "Curated collection showcase for premium heavyweight streetwear and limited graphic drops",
        "Responsive, fluid shopping cart with real-time price updates and checkout flows",
        "Instant live order tracking with status checkpoints and delivery updates",
        "Optimized mobile-first urban aesthetic with sub-second page transition speeds"
      ],
      liveUrl: "https://tee-verse-mu.vercel.app/",
      githubUrl: "https://github.com/dharm-mendpara/teeverse"
    },
    {
      id: "drive-hub",
      title: "Drive Hub - Smart Vehicle Rental Marketplace",
      category: "rental",
      tagline: "Smart vehicle rental marketplace across 50+ cities with fast bookings, transparent pricing, and 24/7 support.",
      image: projectDrivehubImg,
      featured: true,
      stats: { vehicles: "500+", cities: "50+", rides: "10K+" },
      technologies: ["React", "Node.js", "Express", "MongoDB", "Vite", "Tailwind CSS", "JWT Auth", "Vercel"],
      summary: "A smart vehicle rental marketplace and booking platform engineered for seamless car, SUV, luxury, and bike rentals across 50+ cities in India. Features multi-category vehicle discovery, dynamic date-based booking workflows, location search, and integrated secure payment processing.",
      features: [
        "Multi-category fleet discovery covering SUVs, Sedans, Luxury cars, Hatchbacks, and Bikes",
        "Interactive date selection, location filtering, and transparent dynamic pricing breakdown",
        "End-to-end reservation workflow with secure authentication and integrated payment system",
        "Comprehensive vehicle specifications, availability status, and 24/7 roadside assistance integration"
      ],
      liveUrl: "https://drive-rental-mu.vercel.app/",
      githubUrl: "https://github.com/Dharm0101/DRIVE-RENTAL"
    },
    {
      id: "brahmani-textile",
      title: "Billing System of Brahmani Textile",
      category: "enterprise",
      tagline: "Comprehensive textile ERP for automated GST invoicing, fabric roll stock inventory, and client ledgers.",
      image: projectBrahmaniImg,
      featured: true,
      stats: { invoices: "18k+", gstAccuracy: "100%", latency: "<50ms" },
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "PDFKit", "Chart.js", "Tailwind CSS"],
      summary: "An enterprise-grade billing, inventory, and ledger accounting software custom-engineered for Brahmani Textile. Eliminates manual paper registers by digitizing fabric roll meterage, calculating complex multi-tier GST rates, tracking client credit balances, and generating instant printable tax invoices.",
      features: [
        "Automated GST-compliant tax invoicing with SGST/CGST breakdown and one-click PDF generation",
        "Real-time fabric roll inventory tracking categorized by fabric type, meterage, and low-stock alerts",
        "Customer balance ledger with payment receipt logs and outstanding dues management",
        "Interactive business analytics dashboard showcasing monthly revenue trends and top fabric demands"
      ],
      liveUrl: "https://example.com/demo/brahmani-textile",
      githubUrl: "https://github.com/dharm-mendpara/brahmani-textile-billing"
    }
  ],

  experience: [
    {
      period: "2023 - Present",
      role: "Lead Full Stack & Infrastructure Engineer",
      company: "Apex HyperScale Technologies",
      location: "San Francisco, CA",
      description: "Spearheaded the core platform architecture serving 4.5M monthly active users. Reduced infrastructure costs by 34% through container optimization and intelligent cache tiering.",
      achievements: [
        "Led a cross-functional team of 8 engineers delivering the next-gen real-time analytics platform.",
        "Architected event-driven microservices using Node.js, Kafka, and PostgreSQL with sub-50ms latency.",
        "Introduced CI/CD automated validation reducing deployment rollback frequency to under 0.1%."
      ],
      skills: ["React", "TypeScript", "Node.js", "Kafka", "AWS", "K8s", "PostgreSQL"]
    },
    {
      period: "2021 - 2023",
      role: "Senior Full Stack Engineer",
      company: "NovaStream Media & Cloud",
      location: "New York, NY (Remote)",
      description: "Built edge-optimized media rendering workflows and modernized legacy monoliths into distributed modular services.",
      achievements: [
        "Re-engineered the customer dashboard in React and Tailwind, improving Core Web Vitals score from 62 to 98.",
        "Integrated WebSockets real-time collaboration engine used by over 120,000 creators daily.",
        "Mentored junior and mid-level engineers, establishing company-wide code review standards."
      ],
      skills: ["React", "Next.js", "Go", "Redis", "Docker", "GraphQL"]
    },
    {
      period: "2019 - 2021",
      role: "Software Engineer",
      company: "CyberPulse Labs",
      location: "Austin, TX",
      description: "Developed enterprise SaaS features, customer billing engines, and RESTful public API integrations.",
      achievements: [
        "Designed and maintained custom webhook delivery system handling 15M+ events/month with 99.98% delivery rate.",
        "Migrated customer databases to Aurora PostgreSQL with zero data loss and under 10 minutes planned maintenance."
      ],
      skills: ["JavaScript", "Python", "Express", "PostgreSQL", "Docker", "AWS"]
    },
    {
      period: "2022 - 2026",
      role: "B.Tech in Artificial Intelligence & Machine Learning (AIML)",
      company: "LJ University",
      location: "Ahmedabad, Gujarat, India",
      description: "Comprehensive curriculum and practical research in Artificial Intelligence, Deep Learning, Natural Language Processing, Computer Vision, and Cloud Distributed Computing.",
      achievements: [
        "Specializing in Machine Learning, Deep Neural Networks, and Generative AI systems.",
        "Engineered end-to-end AI applications using PyTorch, TensorFlow, FastAPI, and React.",
        "Active member of campus AI research lab and tech innovation hackathon teams."
      ],
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Python", "PyTorch", "NLP", "Computer Vision"]
    }
  ],

  testimonials: [
    {
      id: 1,
      quote: "Dharm combines exceptional grasp of machine learning algorithms with rapid full-stack execution speed. His passion for cutting-edge AI is inspiring.",
      author: "Dr. K. Patel",
      role: "Professor & AIML Department Lead at LJ University",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      quote: "The speed and clarity Dharm brought to our AI agent pipelines was extraordinary. Delivered clean, modular, and well-tested code ahead of deadline.",
      author: "Marcus Chen",
      role: "Project Mentor & AI Architect",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      quote: "Working with Dharm is a pleasure. He has a rare ability to understand complex mathematical ML models and translate them into silky-smooth web experiences.",
      author: "Elena Rostova",
      role: "Lead Software Collaborator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    }
  ],

  terminal: {
    welcome: [
      "╔══════════════════════════════════════════════════════════════════╗",
      "║  Dharm Mendpara Interactive Dev CLI Terminal v2.4                ║",
      "║  AIML Engineer • LJ University                                   ║",
      "║  Type 'help' to inspect available commands or 'skills' to list.   ║",
      "╚══════════════════════════════════════════════════════════════════╝"
    ],
    commands: {
      help: "Available commands:\n  • about     - View bio, education (LJ University AIML), and focus\n  • skills    - List AI/ML and full-stack tech proficiencies\n  • projects  - Summary of featured AI & engineering projects\n  • contact   - Direct contact channels and social links\n  • hire      - Why collaborate with Dharm Mendpara\n  • theme     - Cycle active color scheme\n  • sudo      - Try if you dare ;)\n  • clear     - Reset the terminal output",
      about: "Dharm Mendpara | AI & Machine Learning Engineer\nEducation: B.Tech in AIML from LJ University, Ahmedabad.\nFocus: Deep Learning architectures, LLM Agents, and Full Stack Systems.",
      skills: "Core Proficiencies:\n• AI & ML: PyTorch, TensorFlow, Scikit-Learn, Deep Learning, NLP, OpenCV\n• GenAI: LangChain, LLM Agents, Vector DBs (Pinecone, Chroma), Prompt Eng\n• Full Stack: React, JavaScript, Python, FastAPI, Node.js, PostgreSQL\n• DevOps: Docker, Git, Linux, Cloud Platforms",
      projects: "Featured Showcase:\n1. TEE VERSE        - Heavyweight Streetwear & Graphic Tees (Live: https://tee-verse-mu.vercel.app/)\n2. Drive Hub        - Smart Vehicle Rental Marketplace (Live: https://drive-rental-mu.vercel.app/)\n3. Brahmani Textile - Enterprise Billing & Inventory ERP System (React/Node/PostgreSQL/PDFKit)",
      contact: "Direct Channels:\n• Email: dharm.mendpara@example.com\n• Location: Ahmedabad, Gujarat, India\n• GitHub: https://github.com\n• LinkedIn: https://linkedin.com",
      hire: "✨ Why collaborate with Dharm Mendpara?\n✓ Strong academic & practical foundation in AIML from LJ University\n✓ Proven capacity to develop complex neural pipelines and modern web apps\n✓ Relentless drive, curiosity, and rapid execution velocity",
      sudo: "Nice try! Permission denied: User is already operating as root administrator ⚡"
    }
  }
};
