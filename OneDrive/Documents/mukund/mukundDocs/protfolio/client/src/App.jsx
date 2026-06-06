import { useState, useEffect, useRef } from 'react'
import './App.css'

// Custom SVG Icons to avoid external library versioning issues
const Github = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const Linkedin = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const Mail = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const Phone = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MapPin = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const Award = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="7" />
    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
  </svg>
)

const BookOpen = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const TerminalIcon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
)

const ChevronRight = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const Search = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const Menu = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const X = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const Sun = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)

const Moon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
)

const Code = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const Sparkles = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
)

const Server = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
)

const Database = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
)

const Smartphone = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <line x1="12" x2="12" y1="18" y2="18" />
  </svg>
)

const PenTool = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
)

const ArrowUp = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m18 15-6-6-6 6" />
  </svg>
)

const CheckCircle = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const AlertCircle = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12" y1="16" y2="16.01" />
  </svg>
)

const Download = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
)

const FileText = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
)

// Projects Data
const projectsData = [
  {
    id: 'hotel-mgmt',
    title: 'Hotel Management System',
    category: 'web',
    date: 'May 2024',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Mukund-Kanzariya/awesome-hotel-site',
    summary: 'Built an end-to-end platform to manage guests, bookings, and room inventory.',
    features: [
      'Interactive room booking dashboard for guests to reserve rooms online',
      'Robust admin panel to manage room inventories, room types, and pricing dynamically',
      'Real-time booking status tracker with automated billing and invoice generation',
      'Secure customer and administrator session management'
    ]
  },
  {
    id: 'foodies-app',
    title: 'Foodies (Food Ordering App)',
    category: 'mobile',
    date: 'April 2025',
    tech: ['Android', 'Kotlin', 'Java', 'PHP', 'REST APIs', 'MySQL'],
    github: 'https://github.com/Mukund-Kanzariya/foodies',
    summary: 'Designed and implemented an Android app for food ordering with admin and user views.',
    features: [
      'Dual-panel UI with customized user (ordering) and administrator (order fulfillment) views',
      'Integrated RESTful PHP APIs to sync product listings, customer carts, and order updates',
      'Optimized SQLite local cart caching and Firebase push notifications for live order status',
      'Secure backend authentication flow for users and delivery executives'
    ]
  },
  {
    id: 'engagehub',
    title: 'EngageHub (Community Platform)',
    category: 'web',
    date: 'February 2024',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Mukund-Kanzariya/EnageHub',
    summary: 'A community-focused web platform designed to strengthen local connections.',
    features: [
      'Allows community members to view details, achievements, and notices on a centralized board',
      'Interactive shared-space booking engine for rooms, conference halls, and facilities',
      'Local forums enabling community discussion threads, event scheduling, and feedback loops',
      'Role-based dashboard for community leaders/moderators to manage bookings and moderate content'
    ]
  },
  {
    id: 'pick-n-mix',
    title: "Pick 'N' Mix (Grocery Store)",
    category: 'web',
    date: 'August 2024',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Mukund-Kanzariya/pickNmix',
    summary: 'An online grocery management store with user-facing and admin panels.',
    features: [
      'Smart search and categorization filtering to browse hundreds of grocery products seamlessly',
      'Fully functional shopping cart and order processing pipeline with checkout simulation',
      'Admin portal for updating stock lists, inventory tracking, order status, and user records',
      'Responsive design styled using premium custom vanilla CSS layout systems'
    ]
  },
  {
    id: 'ci-cd-node',
    title: 'CI/CD Node App on Azure',
    category: 'devops',
    date: 'April 2026',
    tech: ['JavaScript', 'GitHub Actions', 'Azure App Service', 'DevOps'],
    github: 'https://github.com/Mukund-Kanzariya/CI-CD-NodeApp-Azure',
    summary: 'Configured automated deployment pipeline for Node.js backend applications to Azure Cloud.',
    features: [
      'Setup GitHub Actions workflows for continuous integration, code checks, and linting',
      'Integrated continuous delivery to Azure App Service instances on commit to main branch',
      'Implemented environment configurations and secret keys protection in GitHub Secrets',
      'Optimized cloud hosting footprint and created automated rollback scripts on build failure'
    ]
  }
]

// Skills Data
const skillsData = [
  {
    category: 'Frontend',
    icon: <Code size={20} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'Android (XML)', 'C#']
  },
  {
    category: 'Backend',
    icon: <Server size={20} />,
    skills: ['PHP', 'ASP.NET', 'Java', 'Kotlin', 'Python', 'J2EE', 'C', 'C++']
  },
  {
    category: 'Databases',
    icon: <Database size={20} />,
    skills: ['MySQL', 'Oracle', 'SQLite', 'Firebase']
  },
  {
    category: 'Tools & Design',
    icon: <PenTool size={20} />,
    skills: ['GitHub', 'Git', 'CorelDRAW', 'Adobe Photoshop', 'Discord']
  },
  {
    category: 'Concepts & DevOps',
    icon: <Sparkles size={20} />,
    skills: ['OOP', 'REST APIs', 'CI/CD Pipelines', 'Azure Cloud', 'Git Actions']
  }
]

// Certifications & Achievements
const certificationsData = [
  {
    title: '1st Place Winner - Code Crunch Hackathon',
    issuer: 'CZM Gosrani BCA College',
    date: 'Feb 2024',
    type: 'hackathon',
    detail: 'Championed team coding competition by designing and implementing a database dashboard within tight deadlines.'
  },
  {
    title: 'Adobe Photoshop Certified',
    issuer: 'Authorized Training Center',
    date: 'Apr 2023',
    type: 'certification',
    detail: 'Mastery in vector layout design, digital styling, composite editing, and visual assets preparation.'
  },
  {
    title: 'CorelDRAW Certified',
    issuer: 'Authorized Training Center',
    date: 'Nov 2023',
    type: 'certification',
    detail: 'Completed professional training on vector illustration, print layouts, branding, and graphics.'
  },
  {
    title: 'Sprint Coding Participant',
    issuer: 'Technoplanet 2024, RK University',
    date: '2024',
    type: 'participation',
    detail: 'Participated in competitive high-speed coding sprints solving algorithmic challenges using Python and C++.'
  },
  {
    title: 'Gen AI Seminar & Workshop Participant',
    issuer: 'FootPrints 2025, MSU Baroda',
    date: '2025',
    type: 'participation',
    detail: 'Engaged with cutting-edge AI frameworks, large language model implementations, and prompt optimization.'
  }
]

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })
  
  // Navigation & Menus
  const [activeNav, setActiveNav] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Projects states
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeModalProject, setActiveModalProject] = useState(null)
  
  // Interactive highlighting states
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [hoveredProjectTech, setHoveredProjectTech] = useState([])
  
  // Typed text animation
  const [typedText, setTypedText] = useState('')
  const roles = [
    'Full Stack Developer',
    'Software Developer',
    'MCA Candidate @ DDU',
    'Android & PHP Specialist',
    'AI/ML Enthusiast'
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState(null) // 'success' | 'error' | 'loading'
  
  // Terminal Simulator State
  const [terminalHistory, setTerminalHistory] = useState([
    { text: 'Mukund Kanzariya Interactive Portfolio Command Shell v1.0.0', type: 'system' },
    { text: 'Type "help" to see available terminal commands.', type: 'system' },
    { text: '', type: 'empty' }
  ])
  const [terminalInput, setTerminalInput] = useState('')
  const terminalBodyRef = useRef(null)
  
  // Apply theme class
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark-theme')
    } else {
      root.classList.remove('dark-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])
  
  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let typingSpeed = isDeleting ? 40 : 80
    
    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at the end of the text
      typingSpeed = 2000
      setIsDeleting(true)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      typingSpeed = 200
    }
    
    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      )
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1))
    }, typingSpeed)
    
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])
  
  // Scroll spy to highlight active nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'terminal', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 120
      
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const offsetTop = el.offsetTop
          const offsetHeight = el.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Auto scroll terminal container to bottom (without scrolling the main page)
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [terminalHistory])
  
  // Handle Theme Toggle
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  // Terminal Command Parser
  const handleTerminalSubmit = (e) => {
    e.preventDefault()
    const input = terminalInput.trim().toLowerCase()
    if (!input) return
    
    const newHistory = [...terminalHistory, { text: `mukund@portfolio:~ $ ${terminalInput}`, type: 'command' }]
    
    switch (input) {
      case 'help':
        newHistory.push({
          text: `Available Commands:
  whoami       - Detailed summary about Mukund
  skills       - List out technical skill matrices
  projects     - View Mukund's software engineering projects
  education    - View academic qualifications and timeline
  certs        - Show professional design and coding certifications
  contact      - Display communication email, phone, and addresses
  resume       - View and download Mukund's PDF Resume
  clear        - Clear console window logs
  theme toggle - Toggle dark/light modes`,
          type: 'output'
        })
        break
      case 'resume':
        window.open('/resume.pdf', '_blank');
        newHistory.push({
          text: 'Opening resume in a new tab... If download doesn\'t start, check your browser block settings.',
          type: 'success'
        })
        break
      case 'whoami':
        newHistory.push({
          text: `Mukund Kanzariya
Role: Full Stack / Software Developer
Location: Gujarat, India
Education: MCA'27 @ Dharmsinh Desai University (DDU)
Summary: Resourceful & technically skilled developer with dynamic background building Android and full-stack web platforms using PHP, Java, Kotlin, and SQL. Actively seeking internship or entry-level positions where I can write clean, robust code and grow scale.`,
          type: 'output'
        })
        break
      case 'skills':
        const skillsText = skillsData.map(c => `[${c.category}]:\n  ${c.skills.join(', ')}`).join('\n\n')
        newHistory.push({ text: skillsText, type: 'output' })
        break
      case 'projects':
        const projectsText = projectsData.map(p => `• ${p.title} (${p.date})\n  Tech: ${p.tech.join(', ')}\n  Github: ${p.github}`).join('\n\n')
        newHistory.push({ text: projectsText, type: 'output' })
        break
      case 'education':
        newHistory.push({
          text: `Academic Qualifications:
1. MCA (Master of Computer Application) - 2025-2027
   Dharmsinh Desai University (DDU), Nadiad, Gujarat
2. BCA (Bachelor of Computer Application) - 2022-2025
   Saurashtra University (CZM Gosrani College), Jamnagar, Gujarat
   CGPA: 8.47
3. HSC (Commerce Stream) - March 2022
   G.H.S.E.B., Gujarat - 89.14%
4. SSC - March 2020
   G.S.E.B., Gujarat - 68.17%`,
          type: 'output'
        })
        break
      case 'certs':
      case 'certifications':
        const certsText = certificationsData.map(c => `• ${c.title}\n  Issuer: ${c.issuer} | Date: ${c.date}`).join('\n')
        newHistory.push({ text: certsText, type: 'output' })
        break
      case 'contact':
        newHistory.push({
          text: `Contact Info:
  Email:    mukundkanzariya4@gmail.com
  Phone:    +91 9737708721
  GitHub:   https://github.com/Mukund-Kanzariya
  LinkedIn: www.linkedin.com/in/mukund-kanzariya-84b880372
  Address:  Thakar Sherdi, Khambhaliya, Devbhoomi Dwarka, Gujarat, 361306`,
          type: 'output'
        })
        break
      case 'clear':
        setTerminalHistory([])
        setTerminalInput('')
        return
      case 'theme toggle':
        toggleTheme()
        newHistory.push({ text: 'Theme toggled successfully.', type: 'success' })
        break
      default:
        newHistory.push({
          text: `Command not found: "${terminalInput}". Type "help" to see valid commands.`,
          type: 'error'
        })
    }
    
    newHistory.push({ text: '', type: 'empty' })
    setTerminalHistory(newHistory)
    setTerminalInput('')
  }
  
  // Project Search & Filtering
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          project.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })
  
  // Project SVGs rendering logic for premium illustrations
  const renderProjectSVG = (id) => {
    switch (id) {
      case 'hotel-mgmt':
        return (
          <svg viewBox="0 0 100 100" className="project-visual-bg">
            <rect width="100" height="100" fill="currentColor" opacity="0.05" />
            <path d="M20,80 L20,30 L50,15 L80,30 L80,80 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
            <rect x="35" y="45" width="10" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="55" y="45" width="10" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="35" y="60" width="10" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="55" y="60" width="10" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M45,80 L45,68 L55,68 L55,80" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        )
      case 'foodies-app':
        return (
          <svg viewBox="0 0 100 100" className="project-visual-bg">
            <rect x="35" y="15" width="30" height="70" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="45" y1="20" x2="55" y2="20" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="80" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="50" cy="45" r="12" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2" fill="none" />
            <path d="M44,48 L56,48 M42,44 L58,44 M47,40 Q50,38 53,40" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        )
      case 'engagehub':
        return (
          <svg viewBox="0 0 100 100" className="project-visual-bg">
            <circle cx="35" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="65" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M20,75 C20,60 50,60 50,75" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M50,75 C50,63 80,63 80,75" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M45,40 L55,40" stroke="currentColor" strokeWidth="2" />
          </svg>
        )
      case 'pick-n-mix':
        return (
          <svg viewBox="0 0 100 100" className="project-visual-bg">
            <circle cx="35" cy="75" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="65" cy="75" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M20,25 L30,25 L40,65 L70,65 L80,35 L28,35" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="42" y="42" width="8" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2" />
            <rect x="56" y="42" width="10" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        )
      case 'ci-cd-node':
        return (
          <svg viewBox="0 0 100 100" className="project-visual-bg">
            <rect x="15" y="30" width="20" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="65" y="30" width="20" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M35,50 L45,50 A5,5 0 0,1 50,55 L50,60 A5,5 0 0,0 55,65 L65,65" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M35,50 L45,50 A5,5 0 0,0 50,45 L50,40 A5,5 0 0,1 55,35 L65,35" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
          </svg>
        )
      default:
        return null
    }
  }
  
  const getProjectIcon = (id) => {
    switch (id) {
      case 'foodies-app': return <Smartphone className="project-visual-icon" />
      case 'ci-cd-node': return <Server className="project-visual-icon" />
      case 'hotel-mgmt': return <Code className="project-visual-icon" />
      default: return <Database className="project-visual-icon" />
    }
  }

  // Handle Contact Form Submit
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setFormStatus('error')
      return
    }
    
    setFormStatus('loading')
    
    try {
      // Fetch access key from .env file or fallback
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
      
      if (accessKey === "YOUR_ACCESS_KEY_HERE" || accessKey === "your_access_key_here") {
        console.warn("Please configure your VITE_WEB3FORMS_KEY in the client/.env file!");
      }
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject || `New message from ${contactForm.name} - Mukund's Portfolio`,
          message: contactForm.message,
          from_name: "Portfolio Contact Form"
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormStatus('success')
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        console.error("Form submission failed:", data);
        setFormStatus('error')
      }
    } catch (error) {
      console.error("Network error submitting contact form:", error);
      setFormStatus('error')
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => handleScrollTo('home')} style={{ cursor: 'pointer' }}>
          <Code size={24} />
          <span>Mukund.dev</span>
        </div>
        
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              className={activeNav === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#terminal" 
              className={activeNav === 'terminal' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleScrollTo('terminal'); }}
            >
              Console
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeNav === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeNav === 'skills' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleScrollTo('skills'); }}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeNav === 'projects' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={activeNav === 'experience' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleScrollTo('experience'); }}
            >
              Qualifications
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeNav === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
            >
              Contact
            </a>
          </li>
          <li>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <FileText size={14} />
              Resume
            </a>
          </li>
        </ul>
        
        <div className="nav-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '5.25rem',
          left: '4%',
          right: '4%',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          zIndex: 99,
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: 'var(--shadow-lg)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)'
        }}>
          {['home', 'terminal', 'about', 'skills', 'projects', 'experience', 'contact'].map((sect) => (
            <a 
              key={sect}
              href={`#${sect}`}
              onClick={(e) => { e.preventDefault(); handleScrollTo(sect); }}
              style={{
                textDecoration: 'none',
                color: activeNav === sect ? 'var(--primary-color)' : 'var(--text-secondary)',
                fontWeight: '600',
                padding: '0.5rem 0'
              }}
            >
              {sect.charAt(0).toUpperCase() + sect.slice(1)}
            </a>
          ))}
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              color: 'var(--accent-color)',
              fontWeight: '600',
              padding: '0.5rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <FileText size={16} />
            View Resume (PDF)
          </a>
        </div>
      )}
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="badge-ddu">
            <Sparkles size={14} />
            <span>MCA Student at Dharmsinh Desai University (DDU)</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span>Mukund Kanzariya</span>
          </h1>
          <div className="hero-subtitle">
            {typedText}
            <span style={{ animation: 'pulse 1s infinite', fontWeight: 'normal' }}>|</span>
          </div>
          <p className="hero-description">
            I am a resourceful and detail-oriented Full Stack Developer specializing in backend architectures,
            RESTful APIs, and mobile application engineering. Passionate about structuring clean databases and implementing modern software designs.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => handleScrollTo('projects')}>
              View My Work
              <ChevronRight size={16} />
            </button>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <FileText size={16} />
              View Resume
            </a>
            <a href="/resume.pdf" download="Mukund_Kanzariya_Resume.pdf" className="btn btn-secondary">
              <Download size={16} />
              Download CV
            </a>
            <button className="btn btn-secondary" onClick={() => handleScrollTo('contact')}>
              Contact Me
            </button>
          </div>
          
          <div className="hero-socials">
            <a href="https://github.com/Mukund-Kanzariya" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mukund-kanzariya-84b880372" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:mukundkanzariya4@gmail.com" className="social-icon-link" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="tel:+919737708721" className="social-icon-link" aria-label="Phone">
              <Phone size={18} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="avatar-wrapper">
            {/* Glowing background aura rings */}
            <div className="avatar-glow-ring ring-1"></div>
            <div className="avatar-glow-ring ring-2"></div>
            
            {/* Decorative spinning outline orbits */}
            <div className="avatar-border-ring ring-clockwise"></div>
            <div className="avatar-border-ring ring-counter-clockwise"></div>
            
            {/* Main Avatar Container */}
            <div className="avatar-container">
              <img 
                src="https://github.com/Mukund-Kanzariya.png" 
                alt="Mukund Kanzariya" 
                className="avatar-image"
                onError={(e) => {
                  // Fallback image in case network or redirect fails
                  e.target.src = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400'
                }}
              />
              {/* High-tech scanner line glow */}
              <div className="avatar-scanner-line"></div>
              
              {/* Glass Overlay on Hover */}
              <div className="avatar-overlay">
                <Sparkles size={24} className="avatar-overlay-icon" />
              </div>
            </div>
            
            {/* Floating glassmorphic tech badges */}
            <div className="floating-badge badge-top-left animate-float-badge-1" data-tooltip="Databases & Firebase">
              <Database size={18} />
            </div>
            <div className="floating-badge badge-top-right animate-float-badge-2" data-tooltip="Frontend (HTML, CSS, JS)">
              <Code size={18} />
            </div>
            <div className="floating-badge badge-bottom-left animate-float-badge-3" data-tooltip="Backend (PHP, Java, REST APIs)">
              <Server size={18} />
            </div>
            <div className="floating-badge badge-bottom-right animate-float-badge-4" data-tooltip="Mobile (Android, Kotlin)">
              <Smartphone size={18} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Interactive Terminal Shell */}
      <section id="terminal" className="terminal-wrapper">
        <h2 className="terminal-header-title">
          <TerminalIcon size={22} />
          <span>Interactive Portfolio Shell</span>
        </h2>
        <div className="terminal-container">
          <div className="terminal-titlebar">
            <div className="terminal-dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="terminal-tab">
              <Code size={12} />
              <span>mukund@portfolio:~</span>
            </div>
            <div style={{ width: '42px' }}></div>
          </div>
          <div ref={terminalBodyRef} className="terminal-body" onClick={() => document.getElementById('term-input')?.focus()}>
            <div className="terminal-history">
              {terminalHistory.map((line, idx) => {
                if (line.type === 'empty') return <div key={idx} style={{ height: '0.4rem' }}></div>
                if (line.type === 'command') return <div key={idx} className="terminal-prompt-line"><span className="terminal-prompt">mukund@portfolio:~ $</span> <span style={{ color: '#fff' }}>{line.text.substring(21)}</span></div>
                return (
                  <div key={idx} className={`terminal-output ${line.type}`}>
                    {line.text}
                  </div>
                )
              })}
            </div>
            
            <form onSubmit={handleTerminalSubmit} className="terminal-input-line">
              <span className="terminal-prompt">mukund@portfolio:~ $</span>
              <input
                id="term-input"
                type="text"
                className="terminal-input"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                autoComplete="off"
                spellCheck="false"
                placeholder="type help..."
                aria-label="Terminal input"
              />
            </form>
          </div>
        </div>
      </section>
      
      {/* About Me Section */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <span className="section-subtitle">Biography</span>
        <h2 className="section-title">About Me</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          textAlign: 'left',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Full Stack developer driven by structure and elegance.
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              I am Mukund Kanzariya, a Software Developer currently pursuing a Master of Computer Applications (MCA) at 
              <strong> Dharmsinh Desai University (DDU)</strong> (2025 - 2027). I hold a Bachelor of Computer Application (BCA) degree from 
              Saurashtra University, CZM Gosrani BCA College (CGPA: 8.47).
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              My coding journey focuses heavily on backend architectures, designing custom REST APIs, and building database models. 
              I enjoy solving complex tasks by translating them into clean, structured object-oriented code. My practical projects range 
              from complete Hotel Management Systems in PHP to customized Food Delivery Android Apps syncing local states.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
              <div style={{ borderLeft: '3px solid var(--primary-color)', paddingLeft: '0.8rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>8.47</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>BCA Graduation CGPA</div>
              </div>
              <div style={{ borderLeft: '3px solid var(--accent-color)', paddingLeft: '0.8rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>89.14%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>HSC Board Marks</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ flex: '1 1 180px', justifyContent: 'center' }}>
                <FileText size={16} />
                View Full Resume
              </a>
              <a href="/resume.pdf" download="Mukund_Kanzariya_Resume.pdf" className="btn btn-primary" style={{ flex: '1 1 180px', justifyContent: 'center' }}>
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--border-color)',
              padding: '1.5rem',
              borderRadius: '12px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start'
            }}>
              <div style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent-color)', padding: '0.6rem', borderRadius: '8px' }}>
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Location</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nadiad / Devbhoomi Dwarka, Gujarat, India</p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--border-color)',
              padding: '1.5rem',
              borderRadius: '12px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start'
            }}>
              <div style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent-color)', padding: '0.6rem', borderRadius: '8px' }}>
                <BookOpen size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Current Academic Focus</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Advanced Data Structures, OOP, DevOps & Cloud Deployments</p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--border-color)',
              padding: '1.5rem',
              borderRadius: '12px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start'
            }}>
              <div style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent-color)', padding: '0.6rem', borderRadius: '8px' }}>
                <Award size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Design Background</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Certified in Photoshop & CorelDRAW, bringing visual precision to UIs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Matrix Section */}
      <section id="skills" className="section">
        <span className="section-subtitle">Expertise</span>
        <h2 className="section-title">Technical Skills</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '-1.5rem auto 3rem auto', fontSize: '0.95rem' }}>
          Hover over any skill tag below to automatically highlight projects built with that technology!
        </p>
        
        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skills-category-card">
              <div className="skills-category-header">
                <span className="skills-category-icon">{category.icon}</span>
                <h3 className="skills-category-title">{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill) => {
                  const isHighlighted = hoveredProjectTech.includes(skill.toLowerCase())
                  return (
                    <span 
                      key={skill}
                      className={`skill-tag ${hoveredSkill === skill.toLowerCase() ? 'active' : ''} ${isHighlighted ? 'highlighted' : ''}`}
                      onMouseEnter={() => setHoveredSkill(skill.toLowerCase())}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() => {
                        setSearchQuery(skill)
                        handleScrollTo('projects')
                      }}
                    >
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <span className="section-subtitle">Portfolio</span>
        <h2 className="section-title">Academic & Personal Projects</h2>
        
        <div className="projects-controls">
          <div className="projects-tabs">
            {['all', 'web', 'mobile', 'devops'].map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search by name or tech stack..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')} 
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        
        {filteredProjects.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <AlertCircle size={40} style={{ marginBottom: '1rem', color: 'var(--text-muted)' }} />
            <p>No projects match your search criteria.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => {
              // Highlight if project has tech matching the hovered skill
              const isMatch = hoveredSkill && project.tech.map(t => t.toLowerCase()).includes(hoveredSkill)
              return (
                <div 
                  key={project.id} 
                  className={`project-card ${isMatch ? 'active-tech-match' : ''}`}
                  style={{
                    transform: isMatch ? 'translateY(-8px)' : '',
                    boxShadow: isMatch ? 'var(--shadow-xl)' : '',
                    borderColor: isMatch ? 'var(--accent-color)' : ''
                  }}
                  onMouseEnter={() => setHoveredProjectTech(project.tech.map(t => t.toLowerCase()))}
                  onMouseLeave={() => setHoveredProjectTech([])}
                >
                  <div className="project-visual">
                    {renderProjectSVG(project.id)}
                    {getProjectIcon(project.id)}
                  </div>
                  <div className="project-body">
                    <div className="project-tech">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className={`project-tech-tag ${hoveredSkill === t.toLowerCase() ? 'active' : ''}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.summary}</p>
                    
                    <div className="project-footer">
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                        <Github size={16} />
                        GitHub
                      </a>
                      <button 
                        className="project-link" 
                        onClick={() => setActiveModalProject(project)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        Details
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>
      
      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModalProject(null)} aria-label="Close modal">
              <X size={18} />
            </button>
            <div className="modal-header-visual">
              {renderProjectSVG(activeModalProject.id)}
              {getProjectIcon(activeModalProject.id)}
            </div>
            <div className="modal-body">
              <span className="modal-date">{activeModalProject.date}</span>
              <h3 className="modal-title">{activeModalProject.title}</h3>
              <p className="modal-desc">{activeModalProject.summary}</p>
              
              <h4 className="modal-section-title">
                <Sparkles size={16} style={{ color: 'var(--primary-color)' }} />
                Key Features
              </h4>
              <ul className="modal-features">
                {activeModalProject.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              
              <h4 className="modal-section-title">
                <Code size={16} style={{ color: 'var(--accent-color)' }} />
                Tech Stack
              </h4>
              <div className="modal-tech">
                {activeModalProject.tech.map((t) => (
                  <span key={t} className="project-tech-tag" style={{ fontSize: '0.85rem', padding: '0.3rem 0.6rem' }}>
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="modal-footer">
                <a href={activeModalProject.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <Github size={16} />
                  View GitHub Repository
                </a>
                <button className="btn btn-secondary" onClick={() => setActiveModalProject(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Qualifications Timeline & Certifications */}
      <section id="experience" className="section">
        <span className="section-subtitle">Milestones</span>
        <h2 className="section-title">Qualifications & Honors</h2>
        
        <div className="edu-cert-container">
          {/* Education Timeline */}
          <div>
            <h3 className="timeline-column-title">
              <BookOpen size={20} />
              <span>Education Timeline</span>
            </h3>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <h4 className="timeline-title">Master of Computer Application (MCA)</h4>
                  <span className="timeline-date">2025 - 2027</span>
                </div>
                <div className="timeline-subtitle">Dharmsinh Desai University (DDU)</div>
                <p className="timeline-detail">Nadiad, Gujarat. Specializing in advanced software design, web services, and mobile app developments.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <h4 className="timeline-title">Bachelor of Computer Application (BCA)</h4>
                  <span className="timeline-date">2022 - 2025</span>
                </div>
                <div className="timeline-subtitle">Saurashtra University - CZM Gosrani College</div>
                <p className="timeline-detail">
                  Jamnagar, Gujarat. Graduated with an outstanding academic record. <span className="score-badge">CGPA: 8.47</span>
                </p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <h4 className="timeline-title">Higher Secondary Certificate (HSC)</h4>
                  <span className="timeline-date">March 2022</span>
                </div>
                <div className="timeline-subtitle">G.H.S.E.B. (Commerce Stream)</div>
                <p className="timeline-detail">Gujarat, India. Cleared board exams with a distinction rating. <span className="score-badge">Marks: 89.14%</span></p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <h4 className="timeline-title">Secondary School Certificate (SSC)</h4>
                  <span className="timeline-date">March 2020</span>
                </div>
                <div className="timeline-subtitle">G.S.E.B.</div>
                <p className="timeline-detail">Gujarat, India. Focus on Mathematics and general sciences. <span className="score-badge">Marks: 68.17%</span></p>
              </div>
            </div>
          </div>
          
          {/* Certifications and Awards */}
          <div>
            <h3 className="timeline-column-title">
              <Award size={20} />
              <span>Certifications & Honors</span>
            </h3>
            
            <div className="certs-grid">
              {certificationsData.map((c, i) => (
                <div key={i} className="cert-card">
                  <div className="cert-icon-wrapper">
                    <Award size={24} />
                  </div>
                  <div className="cert-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <h4 className="cert-title">{c.title}</h4>
                      <span className="cert-date">{c.date}</span>
                    </div>
                    <div className="cert-issuer">{c.issuer}</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem', lineHeight: '1.4' }}>{c.detail}</p>
                    {c.type === 'hackathon' && <span className="cert-award-badge">🥇 First Place Award</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <span className="section-subtitle">Get in touch</span>
        <h2 className="section-title">Contact Details</h2>
        
        <div className="contact-container">
          <div className="contact-info-card">
            <div className="contact-info-header">
              <h3>Let's Collaborate!</h3>
              <p>Feel free to reach out for project proposals, questions, or just a quick chat.</p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-method-label">Email</div>
                  <a href="mailto:mukundkanzariya4@gmail.com" className="contact-method-value">
                    mukundkanzariya4@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-method-label">Phone</div>
                  <a href="tel:+919737708721" className="contact-method-value">
                    +91 9737708721
                  </a>
                </div>
              </div>
              
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-method-label">Address</div>
                  <div className="contact-method-value">
                    Dwarka, Gujarat, India
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
              Open to relocation and remote opportunities.
            </div>
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleContactSubmit}>
              {formStatus === 'success' && (
                <div className="form-status success">
                  <CheckCircle size={18} />
                  <span>Thank you! Your message has been simulated successfully. I will get back to you soon!</span>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="form-status error">
                  <AlertCircle size={18} />
                  <span>Please fill out all fields correctly before submitting.</span>
                </div>
              )}
              
              <div className="contact-form-grid">
                <div className="form-group">
                  <label htmlFor="form-name" className="form-label">Full Name</label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Mukund Dalwadi"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-email" className="form-label">Email Address</label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="mukund@gmail.com"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group form-group-full">
                  <label htmlFor="form-subject" className="form-label">Subject</label>
                  <input
                    id="form-subject"
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="Project Inquiry"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group form-group-full">
                  <label htmlFor="form-message" className="form-label">Message</label>
                  <textarea
                    id="form-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project details..."
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <button 
            className="scroll-top-btn" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>About</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }}>Projects</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); handleScrollTo('experience'); }}>Qualifications</a></li>
          </ul>
          
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Mukund Kanzariya. All rights reserved. Designed with React & Vanilla CSS.
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
