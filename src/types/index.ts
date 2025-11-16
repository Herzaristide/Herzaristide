// Type definitions for the application

export interface Skill {
  name: string;
  score: number;
  favorite: boolean;
  category: string;
  icon: string;
}

export interface Mission {
  name: string | null;
  company: string;
  role: string;
  location: string;
  start_date: string;
  end_date: string;
  context: string;
  tasks: string[];
  skills: string[];
}

export interface Job {
  role: string;
  company: string;
  missions: Mission[];
}

export interface ContactUrls {
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  github: string;
}

export interface ThemeContextType {
  dark: boolean;
  toggleDark: () => void;
}

export interface NavigationProps {
  dark: string;
  setDark: (dark: string) => void;
  scrollTo: (location: string) => void;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
