// ============================================================
// Central data source for the entire portfolio.
// Edit this file to update content across every section.
// Everything here comes from Rohith's resume (Rohith_A_Resume.pdf) or his
// public GitHub profile. Nothing is invented — leave a field out rather than guess.
// ============================================================

const BASE = import.meta.env.BASE_URL // './' — keeps assets working on sub-paths and when opened from disk

export const personalInfo = {
  name: 'Rohith A',
  role: 'Full Stack Developer',
  taglines: [
    'Full Stack Developer',
    'Java & Spring Boot Developer',
    'React & Flutter Developer',
    'Python & FastAPI Developer',
  ],
  email: 'rohithjosh1234@gmail.com',
  phone: '+91 73390 54429',
  phoneHref: 'tel:+917339054429',
  resumeUrl: `${BASE}resume.pdf`,
  resumeFileName: 'Rohith_A_Resume.pdf',
  profileImage: `${BASE}profile.jpg`,
  socials: {
    github: 'https://github.com/Rohithjoshwa',
    linkedin: 'https://www.linkedin.com/in/rohith-a-874665393',
  },
}

export const aboutInfo = {
  intro:
    'Full Stack Developer and B.Sc. Computer Science graduate (2026) with hands-on experience developing web and mobile applications using Java, Spring Boot, React.js, Flutter, Python, FastAPI and PostgreSQL. I have built projects involving REST APIs, JWT authentication, database design, market analytics and AI-assisted certificate verification using OCR and document analysis, and I am comfortable with Git/GitHub, Postman, API testing and responsive UI development.',
  education: {
    degree: 'B.Sc. Computer Science',
    institution: 'Sri Krishna Arts and Science College, Bharathiar University',
    duration: '2023 – 2026',
    cgpa: '7.0',
  },
  objective: 'Seeking a Full Stack Developer or Software Engineer role.',
  stats: [
    { type: 'projects', label: 'Projects' },
    { type: 'skills', label: 'Technologies' },
    { type: 'badge', icon: 'ai', label: 'B.Sc. Computer Science, 2026' },
    { type: 'badge', icon: 'learner', label: 'Web · Mobile · AI' },
  ],
}

export const skillCategories = [
  {
    id: 'languages',
    accent: 'from-primary to-secondary',
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Dart', 'HTML5', 'CSS3'],
  },
  {
    id: 'frontend',
    accent: 'from-secondary to-accent',
    title: 'Frontend & Mobile',
    skills: ['React.js', 'Next.js', 'Flutter', 'Tailwind CSS', 'Responsive UI/UX'],
  },
  {
    id: 'backend',
    accent: 'from-accent to-primary',
    title: 'Backend & APIs',
    skills: [
      'Spring Boot',
      'FastAPI',
      'REST APIs',
      'JWT Authentication',
      'Authorization',
      'Session Management',
    ],
  },
  {
    id: 'databases',
    accent: 'from-primary to-accent',
    title: 'Databases',
    skills: [
      'PostgreSQL',
      'SQLite',
      'SQLAlchemy',
      'Relational Database Design',
      'Indexing',
      'Query Optimization',
    ],
  },
  {
    id: 'ai',
    accent: 'from-secondary to-primary',
    title: 'AI & Document Processing',
    skills: [
      'OCR',
      'EasyOCR',
      'Tesseract OCR',
      'OpenCV',
      'Rule-Based Fraud Analysis',
      'QR Verification',
      'SHA-256 Hashing',
    ],
  },
  {
    id: 'tools',
    accent: 'from-primary to-secondary',
    title: 'Tools & Testing',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Pytest',
      'Playwright',
      'VS Code',
      'IntelliJ IDEA',
      'Android Studio',
      'Jira',
    ],
  },
]

export const experience = [
  {
    id: 1,
    role: 'Full Stack Development Intern',
    company: 'DevHorizon Technologies',
    duration: 'Internship',
    type: 'Bangalore, India',
    points: [
      'Developed responsive web application interfaces using HTML5, CSS3 and JavaScript, integrating frontend components with Java-based backend services.',
      'Designed and tested RESTful APIs with Postman to validate request/response behavior and support client-server communication.',
      'Created relational database schemas and SQL queries in PostgreSQL, applying data validation and query optimization practices.',
      'Collaborated with senior engineers on debugging, code reviews, software design and Git/GitHub version-control workflows.',
      'Worked with authentication, authorization and session-management concepts across full-stack modules.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'PostgreSQL', 'REST APIs', 'Postman', 'Git'],
  },
]

// NOTE: CertiVerify AI must stay in position 2.
export const projects = [
  {
    id: 1,
    title: 'NMR Trading Platform — Mobile App',
    subtitle: 'National Market Reports',
    description:
      'A cross-platform trading and market analytics app built with Flutter for iOS and Android, backed by Spring Boot REST endpoints and a PostgreSQL database.',
    features: [
      'Market reports, stock tickers, trading indicators and market summaries on iOS and Android',
      'Spring Boot REST endpoints for portfolio management, trade execution and automated report generation',
      'Normalized PostgreSQL tables for market data, historical stock records, user watchlists and transaction logs, with indexing for efficient queries',
      'Flutter state management, JWT-based authentication and data validation',
      'Interactive charts for price trends and market indicators',
    ],
    tech: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'JWT', 'Postman', 'Git'],
    categories: ['Mobile', 'Full Stack'],
    github: null, // no public repository found — add the URL here if one exists
    demo: null,
    image: 'trading',
    featured: true,
  },
  {
    id: 2,
    title: 'CertiVerify AI',
    subtitle: 'AI-Powered Fake Certificate Detection and Verification System',
    description:
      'An AI-powered academic certificate verification system designed to detect potentially fraudulent certificates using OCR-based document extraction, QR code verification, blockchain verification, tampering detection, duplicate detection and AI-based trust scoring.',
    features: [
      'Document upload and OCR text extraction (EasyOCR and Tesseract)',
      'Document preprocessing and field extraction with OpenCV',
      'QR code scanning and verification',
      'Certificate-hash (SHA-256) comparison against blockchain records, where configured',
      'Document tampering detection',
      'Duplicate and similarity detection',
      'AI trust score with Genuine, Suspicious or Fake classification',
      'Verification history and report generation',
    ],
    tech: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'EasyOCR',
      'Tesseract OCR',
      'OpenCV',
      'JWT',
      'QR Verification',
      'SHA-256',
    ],
    categories: ['AI', 'Full Stack'],
    github: 'https://github.com/Rohithjoshwa/CertiVerify-AI',
    demo: null, // add a live-demo URL only once a working deployment exists
    image: 'certificate',
    featured: true,
  },
  {
    id: 3,
    title: 'French Mentor AI Chatbot',
    subtitle: 'Language-learning assistant',
    description:
      'An AI-powered language learning assistant that helps users practice French through interactive conversations.',
    features: ['AI conversation', 'Grammar correction', 'Vocabulary assistance', 'Real-time responses'],
    tech: ['Python', 'Flask', 'LLM', 'HTML', 'CSS', 'JavaScript'],
    categories: ['AI', 'Full Stack'],
    github: null, // listed on the GitHub profile README; no repository URL verified
    demo: null,
    image: 'chat',
    featured: false,
  },
  {
    id: 4,
    title: 'Rose Mentor AI Chatbot',
    subtitle: 'Personal mentor assistant',
    description:
      'An intelligent mentor chatbot that provides guidance, answers questions and assists users with personalized conversations.',
    features: ['AI assistant', 'Personalized responses', 'Prompt engineering', 'Interactive UI'],
    tech: ['Python', 'React', 'Node.js', 'LLM'],
    categories: ['AI', 'Full Stack'],
    github: null, // listed on the GitHub profile README; no repository URL verified
    demo: null,
    image: 'chat',
    featured: false,
  },
  {
    id: 5,
    title: 'Health & Lifestyle Analysis',
    subtitle: 'College final project · Data analysis',
    description:
      'A data analysis project that explores the relationship between different health and lifestyle factors, using a health and lifestyle dataset and Jupyter notebooks.',
    features: [],
    tech: ['Python', 'Jupyter Notebook', 'Data Analysis'],
    categories: ['Data'],
    github: 'https://github.com/Rohithjoshwa/Healthy-and-lifestyle',
    demo: null,
    image: 'analytics',
    featured: false,
  },
]

export const certificates = [
  {
    id: 1,
    title: 'Full Stack Developer Certificate',
    issuer: 'LinkedIn',
    date: 'Certification',
    type: 'certificate',
    credentialUrl: null, // add a verified credential link here if available
  },
  {
    id: 2,
    title: 'Python in Data Analytics',
    issuer: 'Amypoo',
    date: 'Certification',
    type: 'certificate',
    credentialUrl: null,
  },
  {
    id: 3,
    title: 'RAISE SMART Workshop: Python in Analytics',
    issuer: 'RGF',
    date: 'Workshop / training',
    type: 'achievement',
    credentialUrl: null,
  },
]

export const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certificates', to: 'certificates' },
  { name: 'Contact', to: 'contact' },
]
