import { Job, Research, Club, Course } from './types';

export const jobs: Job[] = [
  {
    id: "job-001",
    title: "Machine Learning Research Intern",
    company: "OpenAI",
    location: "San Francisco, CA",
    remote: true,
    description: "Join our research team to develop and implement state-of-the-art machine learning algorithms to advance AI capabilities.",
    requirements: ["Experience with PyTorch or TensorFlow", "Strong programming skills in Python", "Background in mathematics or statistics"],
    categories: ["AI", "Machine Learning", "Research"],
    salary: "$30/hour",
    applicationDeadline: "2025-07-15",
    postedDate: "2025-05-01",
    skills: ["Python", "Deep Learning", "NLP", "Data Analysis"],
    employmentType: "Internship",
    experienceLevel: "Student",
    logoUrl: "https://img.logo.dev/openai.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ"
  },
  {
    id: "job-002",
    title: "Product Management Intern",
    company: "Google",
    location: "Mountain View, CA",
    remote: false,
    description: "Work with cross-functional teams to define product strategy and roadmap for Google's consumer products.",
    requirements: ["Strong analytical skills", "Excellent communication", "Interest in technology products"],
    categories: ["Product Management", "Technology", "Business"],
    salary: "$35/hour",
    applicationDeadline: "2025-06-30",
    postedDate: "2025-04-28",
    skills: ["Product Strategy", "Market Analysis", "User Experience", "Data-Driven Decision Making"],
    employmentType: "Internship",
    experienceLevel: "Student",
    logoUrl: "https://img.logo.dev/google.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ"
  },
  {
    id: "job-003",
    title: "Investment Banking Summer Analyst",
    company: "Goldman Sachs",
    location: "New York, NY",
    remote: false,
    description: "Assist in financial analysis, market research, and deal execution for the Investment Banking Division.",
    requirements: ["Strong quantitative skills", "Knowledge of financial markets", "Excel proficiency"],
    categories: ["Finance", "Investment Banking", "Analysis"],
    salary: "$40/hour",
    applicationDeadline: "2025-08-01",
    postedDate: "2025-04-15",
    skills: ["Financial Modeling", "Valuation", "Due Diligence", "Excel", "PowerPoint"],
    employmentType: "Internship",
    experienceLevel: "Student",
    logoUrl: "https://img.logo.dev/goldmansachs.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ"
  }
];

export const research: Research[] = [
  {
    id: "research-001",
    title: "Quantum Computing Research",
    institution: "Yale Quantum Institute",
    department: "Physics",
    professor: "Dr. Sarah Chen",
    location: "New Haven, CT",
    remote: false,
    description: "Research opportunity in quantum computing focusing on error correction and quantum algorithms.",
    requirements: ["Physics or Computer Science background", "Quantum mechanics knowledge", "Programming skills"],
    categories: ["Quantum Computing", "Physics", "Computer Science"],
    compensation: "$6,000 stipend",
    applicationDeadline: "2025-02-15",
    duration: "10 weeks",
    postedDate: "2024-12-01",
    skills: ["Quantum Computing", "Python", "Physics", "Mathematics"],
    logoUrl: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ"
  },
  {
    id: "research-002",
    title: "AI & Robotics Research",
    institution: "Yale SEAS",
    department: "Computer Science",
    professor: "Dr. James Wilson",
    location: "New Haven, CT",
    remote: false,
    description: "Research in machine learning and robotics, focusing on computer vision and reinforcement learning.",
    requirements: ["Strong programming skills", "ML/AI background", "Robot manipulation experience"],
    categories: ["AI", "Robotics", "Computer Science"],
    compensation: "$5,500 stipend",
    applicationDeadline: "2025-03-01",
    duration: "12 weeks",
    postedDate: "2024-12-15",
    skills: ["Python", "PyTorch", "ROS", "Computer Vision"],
    logoUrl: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ"
  }
];

export const clubs: Club[] = [
  {
    id: "club-001",
    name: "Yale Computer Society",
    university: "Yale University",
    category: "Technology",
    description: "Student organization focused on computer science, technology, and innovation through projects and events.",
    meetingSchedule: "Weekly, Thursdays at 7:00 PM",
    location: "Bass Library, Room 205",
    membershipRequirements: "Open to all students interested in technology",
    leadershipOpportunities: ["President", "Vice President", "Technical Lead", "Events Coordinator"],
    activities: ["Hackathons", "Tech Talks", "Workshops", "Project Teams"],
    contactEmail: "computer.society@yale.edu",
    socialMedia: {
      instagram: "@yalecompsci",
      discord: "YCS Discord",
      website: "yalecompsci.org"
    },
    tags: ["Programming", "Technology", "Innovation", "Computer Science"],
    logoUrl: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ"
  },
  {
    id: "club-002",
    name: "Code4Good",
    university: "Yale University",
    category: "Technology & Social Impact",
    description: "Using technology to create social impact through projects with nonprofits and community organizations.",
    meetingSchedule: "Bi-weekly, Tuesdays at 6:30 PM",
    location: "CEID",
    membershipRequirements: "Open to all students, coding experience welcome but not required",
    leadershipOpportunities: ["President", "Project Manager", "Tech Lead", "Outreach Coordinator"],
    activities: ["Nonprofit Projects", "Coding Workshops", "Tech for Good Talks"],
    contactEmail: "code4good@yale.edu",
    socialMedia: {
      instagram: "@yalecode4good",
      website: "yalecode4good.org"
    },
    tags: ["Social Impact", "Programming", "Nonprofit", "Web Development"],
    logoUrl: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ"
  }
];

export const courses: Course[] = [
  {
    id: "course-001",
    code: "CPSC 223",
    title: "Data Structures and Programming",
    department: "Computer Science",
    school: "Yale College",
    professor: "Dr. James Smith",
    term: "Spring 2025",
    schedule: "MWF 10:30 AM - 11:20 AM",
    location: "AKW 200",
    credits: 4,
    description: "Introduction to data structures, algorithms, and analysis. Programming in C++.",
    prerequisites: "CPSC 201 or equivalent programming experience",
    syllabus: "https://courses.yale.edu/cpsc223/syllabus",
    enrollmentCapacity: 200,
    currentEnrollment: 180,
    waitlist: 20,
    evaluationScore: 4.5,
    evaluationComments: [
      "Excellent foundation in data structures",
      "Challenging but rewarding",
      "Great preparation for technical interviews"
    ],
    tags: ["Computer Science", "Programming", "Algorithms", "C++"],
    logoUrl: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ"
  },
  {
    id: "course-002",
    code: "CPSC 323",
    title: "Systems Programming",
    department: "Computer Science",
    school: "Yale College",
    professor: "Dr. Emily Chen",
    term: "Fall 2024",
    schedule: "TTh 1:00 PM - 2:15 PM",
    location: "Watson Hall 001",
    credits: 4,
    description: "Systems programming and computer organization. Programming in C.",
    prerequisites: "CPSC 223",
    syllabus: "https://courses.yale.edu/cpsc323/syllabus",
    enrollmentCapacity: 150,
    currentEnrollment: 130,
    waitlist: 15,
    evaluationScore: 4.7,
    evaluationComments: [
      "Deep dive into systems concepts",
      "Practical C programming experience",
      "Excellent labs and projects"
    ],
    tags: ["Computer Science", "Systems", "C", "Operating Systems"],
    logoUrl: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ"
  }
];