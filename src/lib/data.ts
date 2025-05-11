import type { College, Department, Section, Student } from "./types"

export const colleges: College[] = [
  {
    id: "1",
    name: "The Oxford College of Engineering",
    image: "/eng-college.webp",
  },
  {
    id: "2",
    name: "The Oxford Medical College",
    image: "/medical-college.webp",
  },
  {
    id: "3",
    name: "The Oxford Dental College",
    image: "/dental-college.webp",
  },
  {
    id: "4",
    name: "The Oxford Pharmacy College",
    image: "/pharmacy-college.jpg",
  },
]

export const departments: Department[] = [
  // Engineering departments
  { id: "1", name: "CSE" },
  { id: "2", name: "ECE" },
  { id: "3", name: "Mechanical" },
  { id: "4", name: "Civil" },
  { id: "5", name: "ISE" },
  { id: "6", name: "AML" },
  { id: "7", name: "EEE" },

  // Medical departments
  { id: "8", name: "General Medicine" },
  { id: "9", name: "Pediatrics" },
  { id: "10", name: "Orthopedics" },
  { id: "11", name: "Cardiology" },
  { id: "12", name: "Neurology" },

  // Dental departments
  { id: "13", name: "Orthodontics" },
  { id: "14", name: "Periodontics" },
  { id: "15", name: "Oral Surgery" },
  { id: "16", name: "Pedodontics" },

  // Pharmacy departments
  { id: "17", name: "Pharmaceutics" },
  { id: "18", name: "Pharmacology" },
  { id: "19", name: "Medicinal Chemistry" },
  { id: "20", name: "Pharmaceutical Analysis" },
]

export const sections: Section[] = [
  { id: "1", name: "A" },
  { id: "2", name: "B" },
  { id: "3", name: "C" },
  { id: "4", name: "D" },
  { id: "5", name: "4A" },
  { id: "6", name: "4B" },
  { id: "7", name: "4C" },
  { id: "8", name: "4D" },
]

export const students: Student[] = [
  // Engineering College Students
  {
    id: "1",
    rollNo: "1OX23CS116",
    name: "Samuel",
    department: "CSE",
    section: "4C",
    secondPUC: "89%",
    thirdSem: "89%",
    achievements: ["Best Coding Project", "Hackathon Winner", "IBM Internship"],
    collegeId: "1",
    profileImage: "/sam.jpeg",
  },
  {
    id: "2",
    rollNo: "00124",
    name: "Emma Watson",
    department: "ECE",
    section: "A",
    secondPUC: "92%",
    thirdSem: "90%",
    achievements: ["Circuit Design Competition", "IEEE Paper Publication"],
    collegeId: "1",
  },
  {
    id: "3",
    rollNo: "00125",
    name: "Michael Chang",
    department: "CSE",
    section: "B",
    secondPUC: "85%",
    thirdSem: "88%",
    achievements: ["Google Kickstart Finalist"],
    collegeId: "1",
  },
  {
    id: "4",
    rollNo: "00126",
    name: "Sophia Martinez",
    department: "Mechanical",
    section: "C",
    secondPUC: "78%",
    thirdSem: "82%",
    achievements: ["CAD Design Winner", "Robotics Club Lead", "ASME Member"],
    collegeId: "1",
  },
  {
    id: "5",
    rollNo: "00127",
    name: "William Johnson",
    department: "Civil",
    section: "A",
    secondPUC: "88%",
    thirdSem: "85%",
    achievements: ["Bridge Design Contest", "Environmental Project"],
    collegeId: "1",
  },
  {
    id: "7",
    rollNo: "00129",
    name: "Raj Patel",
    department: "ISE",
    section: "4B",
    secondPUC: "91%",
    thirdSem: "94%",
    achievements: ["Data Analysis Award", "Full Stack Developer"],
    collegeId: "1",
  },
  {
    id: "8",
    rollNo: "00130",
    name: "Zara Ahmed",
    department: "ISE",
    section: "B",
    secondPUC: "87%",
    thirdSem: "91%",
    achievements: ["Cloud Computing Project", "AWS Certification"],
    collegeId: "1",
  },
  {
    id: "9",
    rollNo: "00131",
    name: "David Chen",
    department: "AML",
    section: "A",
    secondPUC: "95%",
    thirdSem: "93%",
    achievements: ["ML Competition Winner", "Research Paper on NLP"],
    collegeId: "1",
  },
  {
    id: "10",
    rollNo: "00132",
    name: "Priya Sharma",
    department: "AML",
    section: "4A",
    secondPUC: "94%",
    thirdSem: "92%",
    achievements: ["AI Model Development", "Data Science Internship"],
    collegeId: "1",
  },
  {
    id: "11",
    rollNo: "00133",
    name: "Thomas Wilson",
    department: "EEE",
    section: "C",
    secondPUC: "79%",
    thirdSem: "84%",
    achievements: ["Solar Power Project", "Embedded Systems Design"],
    collegeId: "1",
  },
  {
    id: "12",
    rollNo: "00134",
    name: "Aisha Khan",
    department: "EEE",
    section: "4D",
    secondPUC: "88%",
    thirdSem: "86%",
    achievements: ["Energy Conservation Award", "Microcontroller Project"],
    collegeId: "1",
  },

  // Medical College Students
  {
    id: "13",
    rollNo: "M0001",
    name: "James Wilson",
    department: "General Medicine",
    section: "A",
    secondPUC: "96%",
    thirdSem: "92%",
    achievements: ["Research Publication", "Medical Camp Organizer"],
    collegeId: "2",
  },
  {
    id: "14",
    rollNo: "M0002",
    name: "Olivia Miller",
    department: "General Medicine",
    section: "B",
    secondPUC: "95%",
    thirdSem: "93%",
    achievements: ["Clinical Case Study Award", "Patient Care Excellence"],
    collegeId: "2",
  },
  {
    id: "15",
    rollNo: "M0003",
    name: "Ethan Brown",
    department: "Pediatrics",
    section: "A",
    secondPUC: "92%",
    thirdSem: "89%",
    achievements: ["Child Care Workshop", "Pediatric Research"],
    collegeId: "2",
  },
  {
    id: "16",
    rollNo: "M0004",
    name: "Ava Garcia",
    department: "Cardiology",
    section: "C",
    secondPUC: "94%",
    thirdSem: "95%",
    achievements: ["Heart Disease Prevention Campaign", "ECG Analysis Project"],
    collegeId: "2",
  },
  {
    id: "17",
    rollNo: "M0005",
    name: "Noah Taylor",
    department: "Neurology",
    section: "B",
    secondPUC: "91%",
    thirdSem: "90%",
    achievements: ["Brain Mapping Study", "Neurological Disorder Research"],
    collegeId: "2",
  },
  {
    id: "18",
    rollNo: "M0006",
    name: "Isabella Thomas",
    department: "Orthopedics",
    section: "A",
    secondPUC: "88%",
    thirdSem: "91%",
    achievements: ["Sports Medicine Workshop", "Rehabilitation Program Design"],
    collegeId: "2",
  },

  // Dental College Students
  {
    id: "19",
    rollNo: "D0001",
    name: "Liam Davis",
    department: "Orthodontics",
    section: "A",
    secondPUC: "92%",
    thirdSem: "90%",
    achievements: ["Braces Treatment Case Study", "Dental Alignment Research"],
    collegeId: "3",
  },
  {
    id: "20",
    rollNo: "D0002",
    name: "Charlotte White",
    department: "Periodontics",
    section: "B",
    secondPUC: "89%",
    thirdSem: "92%",
    achievements: [
      "Gum Disease Awareness Campaign",
      "Periodontal Treatment Innovation",
    ],
    collegeId: "3",
  },
  {
    id: "21",
    rollNo: "D0003",
    name: "Jacob Harris",
    department: "Oral Surgery",
    section: "A",
    secondPUC: "94%",
    thirdSem: "91%",
    achievements: [
      "Wisdom Tooth Extraction Technique",
      "Dental Surgery Assistant",
    ],
    collegeId: "3",
  },
  {
    id: "22",
    rollNo: "D0004",
    name: "Amelia Martin",
    department: "Pedodontics",
    section: "C",
    secondPUC: "93%",
    thirdSem: "94%",
    achievements: [
      "Children's Dental Health Program",
      "Pediatric Dental Research",
    ],
    collegeId: "3",
  },

  // Pharmacy College Students
  {
    id: "23",
    rollNo: "P0001",
    name: "Benjamin Clark",
    department: "Pharmaceutics",
    section: "A",
    secondPUC: "90%",
    thirdSem: "88%",
    achievements: ["Drug Delivery System Design", "Formulation Development"],
    collegeId: "4",
  },
  {
    id: "24",
    rollNo: "P0002",
    name: "Mia Rodriguez",
    department: "Pharmacology",
    section: "B",
    secondPUC: "93%",
    thirdSem: "91%",
    achievements: ["Drug Interaction Study", "Pharmacological Research"],
    collegeId: "4",
  },
  {
    id: "25",
    rollNo: "P0003",
    name: "Alexander Lee",
    department: "Medicinal Chemistry",
    section: "A",
    secondPUC: "95%",
    thirdSem: "92%",
    achievements: ["New Compound Synthesis", "Molecular Modeling"],
    collegeId: "4",
  },
  {
    id: "26",
    rollNo: "P0004",
    name: "Harper Nguyen",
    department: "Pharmaceutical Analysis",
    section: "C",
    secondPUC: "91%",
    thirdSem: "93%",
    achievements: [
      "Quality Control Innovation",
      "Analytical Method Development",
    ],
    collegeId: "4",
  },
]

export function getStudentsByCollegeId(collegeId: string): Student[] {
  return students.filter((student) => student.collegeId === collegeId)
}

export function getStudentById(id: string): Student | undefined {
  return students.find((student) => student.id === id)
}

export function getCollegeById(id: string): College | undefined {
  return colleges.find((college) => college.id === id)
}

export function getStudentsByDepartment(department: string): Student[] {
  return students.filter((student) => student.department === department)
}

export function getDepartmentsByCollegeId(collegeId: string): Department[] {
  const collegeStudents = getStudentsByCollegeId(collegeId)
  const departmentNames = [
    ...new Set(collegeStudents.map((student) => student.department)),
  ]
  return departments.filter((dept) => departmentNames.includes(dept.name))
}
