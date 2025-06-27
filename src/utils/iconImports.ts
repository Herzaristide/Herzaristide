// Import all icons statically for proper asset handling
import aboutIcon from '../assets/icons/about.svg';
import contactIcon from '../assets/icons/contact.svg';
import darkIcon from '../assets/icons/dark.svg';
import dockerIcon from '../assets/icons/docker.svg';
import flutterIcon from '../assets/icons/flutter.svg';
import gitIcon from '../assets/icons/git.svg';
import hadoopIcon from '../assets/icons/hadoop.svg';
import homeIcon from '../assets/icons/home.svg';
import kafkaIcon from '../assets/icons/kafka.svg';
import kubernetesIcon from '../assets/icons/kubernetes.svg';
import lightIcon from '../assets/icons/light.svg';
import nextIcon from '../assets/icons/next.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import projectsIcon from '../assets/icons/projects.svg';
import pythonIcon from '../assets/icons/python.svg';
import reactIcon from '../assets/icons/react.svg';
import resumeIcon from '../assets/icons/resume.svg';
import skillsIcon from '../assets/icons/skills.svg';
import sparkIcon from '../assets/icons/spark.svg';
import translateIcon from '../assets/icons/translate.svg';
import worksIcon from '../assets/icons/works.svg';

export const iconMap: Record<string, string> = {
  about: aboutIcon,
  contact: contactIcon,
  dark: darkIcon,
  docker: dockerIcon,
  flutter: flutterIcon,
  git: gitIcon,
  hadoop: hadoopIcon,
  home: homeIcon,
  kafka: kafkaIcon,
  kubernetes: kubernetesIcon,
  light: lightIcon,
  next: nextIcon,
  nodejs: nodejsIcon,
  projects: projectsIcon,
  python: pythonIcon,
  react: reactIcon,
  resume: resumeIcon,
  skills: skillsIcon,
  spark: sparkIcon,
  translate: translateIcon,
  works: worksIcon,
};

export const getIcon = (iconName: string): string => {
  return iconMap[iconName] || '';
};
