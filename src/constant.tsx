import type { Skill, ContactUrls } from './types';

export const links = [
  'home',
  'about',
  'works',
  'projects',
  'skills',
  'resume',
  'contacts',
];

export const jobs = ['capGemini', 'astek', 'orange', 'adeo'];

export const skills: Skill[] = [
  { name: 'react', score: 4, favorite: true },
  { name: 'typescript', score: 3, favorite: true },
  { name: 'python', score: 4, favorite: true },
  { name: 'kafka', score: 4, favorite: true },
  { name: 'git', score: 4, favorite: false },
  { name: 'flutter', score: 1, favorite: false },
  { name: 'kubernetes', score: 2, favorite: false },
  { name: 'docker', score: 4, favorite: false },
  { name: 'spark', score: 3, favorite: false },
  { name: 'nodejs', score: 3, favorite: false },
  { name: 'hadoop', score: 3, favorite: false },
  { name: 'next', score: 2, favorite: false },
];

export const contactsUrl: ContactUrls = {
  email: 'herzaristide@outlook.com',
  phone: '0781819395',
  linkedin: 'https://www.linkedin.com/in/herzaristide/',
  website: 'https://herzaristide.vercel.app/',
  github: 'https://github.com/Herzaristide',
};
