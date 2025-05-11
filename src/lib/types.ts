export interface College {
  id: string
  name: string
  image: string
}

export interface Student {
  id: string
  rollNo: string
  name: string
  department: string
  section: string
  secondPUC: string
  thirdSem: string
  achievements: string[]
  collegeId: string
  profileImage?: string
}

export interface Department {
  id: string
  name: string
}

export interface Section {
  id: string
  name: string
}
