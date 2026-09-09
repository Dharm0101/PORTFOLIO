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
    role: "Full Stack Developer | Frontend & Backend Specialist",
    tagline: "Specializing in modern Frontend interfaces and scalable Backend systems with React, Node.js, and databases.",
    location: "Ahmedabad, Gujarat, India (Open to Remote / Relocation)",
    email: "dharmmrndpara@gmail.com",
    github: "https://github.com/Dharm0101",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    avatar: avatarImg,
    status: {
      available: true,
      text: "Available for Frontend & Backend roles & projects"
    },
    stats: [
      { label: "Projects Completed", value: "3+" },
      { label: "Core Focus", value: "Full Stack" },
      { label: "LJ University", value: "B.Tech" },
      { label: "Code Quality", value: "100%" }
    ],
    bio: [
      "I am a passionate Full Stack Developer pursuing my B.Tech at LJ University, Ahmedabad. My engineering focus is dedicated strictly to Frontend and Backend development, turning ideas into scalable, reliable, and user-centric web applications.",
      "I specialize in building responsive, polished user interfaces using React, JavaScript, and modern CSS, paired with high-performance backend architectures, RESTful APIs, and secure database integrations using Node.js, Express, PostgreSQL, and MongoDB."
    ]
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        icon: "Layout",
        description: "Crafting modern, responsive, high-performance user interfaces.",
        items: [
          { name: "React 18 / Vite", level: 95, highlight: "Primary" },
          { name: "JavaScript (ES6+)", level: 92, highlight: "Core" },
          { name: "HTML5 & CSS3 / Vanilla CSS", level: 95, highlight: "Expert" },
          { name: "Tailwind CSS", level: 90, highlight: "Styling" },
          { name: "Responsive & Mobile-First Design", level: 94, highlight: "UI/UX" },
          { name: "State Management & React Hooks", level: 90, highlight: "Client State" }
        ]
      },
      {
        id: "backend",
        name: "Backend Development",
        icon: "Server",
        description: "Designing reliable server-side architectures, RESTful APIs, and databases.",
        items: [
          { name: "Node.js & Express.js", level: 92, highlight: "Server Runtime" },
          { name: "RESTful API Design", level: 94, highlight: "API Architecture" },
          { name: "PostgreSQL & SQL", level: 88, highlight: "Relational DB" },
          { name: "MongoDB & NoSQL", level: 86, highlight: "Document Store" },
          { name: "Authentication (JWT & Cookies)", level: 90, highlight: "Security" },
          { name: "Git & GitHub", level: 92, highlight: "Version Control" }
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
      period: "2022 - 2026",
      role: "B.Tech Undergraduate",
      company: "LJ University",
      location: "Ahmedabad, Gujarat, India",
      description: "Undergraduate degree focusing on software engineering principles, algorithms, data structures, and web technologies.",
      achievements: [
        "Pursuing degree coursework in computer science, software engineering, and database systems at LJ University.",
        "Engineered end-to-end full stack web applications connecting modern React client interfaces with Node.js backends.",
        "Collaborated on campus technical projects, developer hackathons, and software showcases."
      ],
      skills: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      period: "2024 - Present",
      role: "Independent Full Stack Web Developer",
      company: "Personal & Production Projects",
      location: "Ahmedabad, India",
      description: "Architected, developed, and deployed production-grade web applications focusing purely on Frontend and Backend excellence.",
      achievements: [
        "Built TeeVerse: Heavyweight Streetwear & Graphic Apparel e-commerce platform with real-time order tracking (Live on Vercel).",
        "Engineered DriveHub: Smart vehicle rental marketplace spanning 50+ cities with multi-category fleet search and date booking (Live on Vercel).",
        "Engineered Brahmani Textile Billing ERP: Automated GST tax invoicing and fabric roll meterage inventory management software."
      ],
      skills: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS"]
    }
  ],

  testimonials: [
    {
      id: 1,
      quote: "Dharm demonstrates rapid full-stack execution speed and strong problem solving. His commitment to building clean user interfaces and solid backends is impressive.",
      author: "Dr. K. Patel",
      role: "Faculty & Academic Project Guide at LJ University",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      quote: "The speed and clarity Dharm brought to his web projects was extraordinary. Delivered clean, modular, and responsive code across both frontend and backend.",
      author: "Marcus Chen",
      role: "Project Reviewer & Senior Web Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      quote: "Working with Dharm is great. He has the practical skill to turn full-stack web requirements into silky-smooth, responsive user experiences.",
      author: "Elena Rostova",
      role: "Full Stack Developer Collaborator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    }
  ],

  terminal: {
    welcome: [
      "╔══════════════════════════════════════════════════════════════════╗",
      "║  Dharm Mendpara Interactive Dev CLI Terminal v2.4                ║",
      "║  Full Stack Developer • Frontend & Backend Specialist            ║",
      "║  Type 'help' to inspect available commands or 'skills' to list.   ║",
      "╚══════════════════════════════════════════════════════════════════╝"
    ],
    commands: {
      help: "Available commands:\n  • about     - View bio, education (LJ University), and focus\n  • skills    - List Frontend & Backend tech proficiencies\n  • projects  - Summary of featured full stack projects\n  • contact   - Direct contact channels and social links\n  • hire      - Why collaborate with Dharm Mendpara\n  • theme     - Cycle active color scheme\n  • sudo      - Try if you dare ;)\n  • clear     - Reset the terminal output",
      about: "Dharm Mendpara | Full Stack Developer\nEducation: B.Tech from LJ University, Ahmedabad.\nFocus: Modern Frontend Interfaces & Scalable Backend Web Systems.",
      skills: "Core Proficiencies:\n• Frontend: React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design\n• Backend: Node.js, Express.js, RESTful APIs, PostgreSQL, MongoDB, JWT Auth, Git",
      projects: "Featured Showcase:\n1. TEE VERSE        - Heavyweight Streetwear & Graphic Tees (Live: https://tee-verse-mu.vercel.app/)\n2. Drive Hub        - Smart Vehicle Rental Marketplace (Live: https://drive-rental-mu.vercel.app/)\n3. Brahmani Textile - Enterprise Billing & Inventory ERP System (React/Node/PostgreSQL/PDFKit)",
      contact: "Direct Channels:\n• Email: dharmmrndpara@gmail.com\n• Location: Ahmedabad, Gujarat, India\n• GitHub: https://github.com/Dharm0101\n• LinkedIn: https://linkedin.com",
      hire: "✨ Why collaborate with Dharm Mendpara?\n✓ Solid foundational knowledge from LJ University\n✓ Proven capacity to build complete frontend & backend web applications\n✓ Relentless drive, curiosity, and rapid execution velocity",
      sudo: "Nice try! Permission denied: User is already operating as root administrator ⚡"
    }
  }
};
