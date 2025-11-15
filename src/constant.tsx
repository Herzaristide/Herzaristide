import type { Skill, ContactUrls } from './types';

export const DEVICON_BASE_URL =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const links = [
  'home',
  'about',
  'works',
  'projects',
  'skills',
  'resume',
  'contacts',
];

export const skills: Skill[] = [
  {
    name: 'React',
    score: 4,
    favorite: true,
    category: 'Frontend',
    icon: `${DEVICON_BASE_URL}/react/react-original.svg`,
  },
  {
    name: 'TypeScript',
    score: 3,
    favorite: true,
    category: 'Language',
    icon: `${DEVICON_BASE_URL}/typescript/typescript-original.svg`,
  },
  {
    name: 'Python',
    score: 4,
    favorite: true,
    category: 'Language',
    icon: `${DEVICON_BASE_URL}/python/python-original.svg`,
  },
  {
    name: 'Kafka',
    score: 4,
    favorite: false,
    category: 'Data',
    icon: `${DEVICON_BASE_URL}/apachekafka/apachekafka-original.svg`,
  },
  {
    name: 'Git',
    score: 4,
    favorite: false,
    category: 'Version Control',
    icon: `${DEVICON_BASE_URL}/git/git-original.svg`,
  },
  {
    name: 'Flutter',
    score: 1,
    favorite: false,
    category: 'Frontend',
    icon: `${DEVICON_BASE_URL}/flutter/flutter-original.svg`,
  },
  {
    name: 'Kubernetes',
    score: 2,
    favorite: false,
    category: 'DevOps',
    icon: `${DEVICON_BASE_URL}/kubernetes/kubernetes-plain.svg`,
  },
  {
    name: 'Docker',
    score: 4,
    favorite: false,
    category: 'DevOps',
    icon: `${DEVICON_BASE_URL}/docker/docker-original.svg`,
  },
  {
    name: 'Spark',
    score: 3,
    favorite: false,
    category: 'Data',
    icon: `${DEVICON_BASE_URL}/apachespark/apachespark-original.svg`,
  },
  {
    name: 'Node.js',
    score: 3,
    favorite: false,
    category: 'Backend',
    icon: `${DEVICON_BASE_URL}/nodejs/nodejs-original.svg`,
  },
  {
    name: 'Hadoop',
    score: 3,
    favorite: false,
    category: 'Data',
    icon: `${DEVICON_BASE_URL}/hadoop/hadoop-original.svg`,
  },
  {
    name: 'Next.js',
    score: 2,
    favorite: false,
    category: 'Frontend',
    icon: `${DEVICON_BASE_URL}/nextjs/nextjs-original.svg`,
  },
  {
    name: 'Vue.js',
    score: 2,
    favorite: false,
    category: 'Frontend',
    icon: `${DEVICON_BASE_URL}/vuejs/vuejs-original.svg`,
  },
  {
    name: 'PostgreSQL',
    score: 3,
    favorite: false,
    category: 'Database',
    icon: `${DEVICON_BASE_URL}/postgresql/postgresql-original.svg`,
  },
  {
    name: 'MongoDB',
    score: 3,
    favorite: false,
    category: 'Database',
    icon: `${DEVICON_BASE_URL}/mongodb/mongodb-original.svg`,
  },
  {
    name: 'AWS',
    score: 2,
    favorite: false,
    category: 'Cloud',
    icon: `${DEVICON_BASE_URL}/amazonwebservices/amazonwebservices-original.svg`,
  },
  {
    name: 'Google Cloud',
    score: 2,
    favorite: false,
    category: 'Cloud',
    icon: `${DEVICON_BASE_URL}/googlecloud/googlecloud-original.svg`,
  },
  {
    name: 'Linux',
    score: 3,
    favorite: false,
    category: 'System',
    icon: `${DEVICON_BASE_URL}/linux/linux-original.svg`,
  },
  {
    name: 'Figma',
    score: 2,
    favorite: false,
    category: 'Design',
    icon: `${DEVICON_BASE_URL}/figma/figma-original.svg`,
  },
  {
    name: 'Firebase',
    score: 2,
    favorite: false,
    category: 'Cloud',
    icon: `${DEVICON_BASE_URL}/firebase/firebase-plain.svg`,
  },
  {
    name: 'React Native',
    score: 1,
    favorite: false,
    category: 'Frontend',
    icon: `${DEVICON_BASE_URL}/react/react-original.svg`,
  },
  {
    name: 'Agile Methodologies',
    score: 4,
    favorite: false,
    category: 'Methodology',
    icon: `${DEVICON_BASE_URL}/git/git-original.svg`, // Using git as a proxy for version control/methodology
  },
  {
    name: 'GSAP',
    score: 2,
    favorite: false,
    category: 'Frontend',
    icon: `${DEVICON_BASE_URL}/javascript/javascript-original.svg`, // Using JS as proxy
  },
  {
    name: 'Poetry',
    score: 3,
    favorite: false,
    category: 'Backend',
    icon: `${DEVICON_BASE_URL}/python/python-original.svg`, // Using Python as proxy
  },
  {
    name: 'Unit Testing',
    score: 3,
    favorite: false,
    category: 'DevOps',
    icon: `${DEVICON_BASE_URL}/jest/jest-plain.svg`, // Using Jest as proxy for testing
  },
  {
    name: 'Full-Stack Development',
    score: 4,
    favorite: true,
    category: 'Methodology',
    icon: `${DEVICON_BASE_URL}/react/react-original.svg`, // Using React as proxy
  },
  {
    name: 'Microservices',
    score: 3,
    favorite: false,
    category: 'Methodology',
    icon: `${DEVICON_BASE_URL}/docker/docker-original.svg`, // Using Docker as proxy
  },
  {
    name: 'REST APIs',
    score: 4,
    favorite: false,
    category: 'Backend',
    icon: `${DEVICON_BASE_URL}/nodejs/nodejs-original.svg`, // Using Node.js as proxy
  },
  {
    name: 'NoSQL',
    score: 3,
    favorite: false,
    category: 'language',
    icon: `${DEVICON_BASE_URL}/mongodb/mongodb-original.svg`, // Using MongoDB as proxy
  },
  {
    name: 'SQL',
    score: 4,
    favorite: false,
    category: 'language',
    icon: `${DEVICON_BASE_URL}/postgresql/postgresql-original.svg`, // Using PostgreSQL as proxy
  },
  {
    name: 'UX Design',
    score: 3,
    favorite: false,
    category: 'Frontend',
    icon: `${DEVICON_BASE_URL}/figma/figma-original.svg`, // Using Figma as proxy
  },
  {
    name: 'UI Design',
    score: 3,
    favorite: false,
    category: 'Frontend',
    icon: `${DEVICON_BASE_URL}/figma/figma-original.svg`, // Using Figma as proxy
  },
  {
    name: 'English',
    score: 5,
    favorite: false,
    category: 'language',
    icon: `${DEVICON_BASE_URL}/git/git-original.svg`, // Generic icon for language
  },
  {
    name: 'Scala',
    score: 3,
    favorite: false,
    category: 'language',
    icon: `${DEVICON_BASE_URL}/scala/scala-original.svg`,
  },
];

export const contactsUrl: ContactUrls = {
  email: 'herzaristide@outlook.com',
  phone: '0781819395',
  linkedin: 'https://www.linkedin.com/in/herzaristide/',
  website: 'https://herzaristide.vercel.app/',
  github: 'https://github.com/Herzaristide',
};
