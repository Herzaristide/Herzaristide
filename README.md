# 🚀 Aristide Pichereau - Portfolio V2

A modern, interactive portfolio website showcasing my skills as a **Data Engineer & Full Stack Developer**. Built with cutting-edge technologies and featuring smooth animations, 3D effects, and responsive design.

## ✨ Features

### 🎨 **Modern UI/UX**

- **Dark/Light Mode** toggle with smooth transitions
- **Responsive Design** that works on all devices
- **3D Card Flip Animations** for interactive work experience cards
- **Smooth Scrolling** and parallax effects
- **Floating Particles** and geometric animations

### 🌍 **Internationalization**

- **Multi-language Support** (English, French, German)
- **Dynamic Content Translation** using react-i18next
- **Language Switcher** with smooth transitions

### 🎯 **Interactive Sections**

#### 🏠 **Home**

- Animated hero section with staggered text animations
- **Skill buttons** with icons and hover effects
- Gradient text effects and floating background elements

#### 👨‍💻 **About**

- Personal introduction with smooth reveal animations
- Professional journey overview

#### 💼 **Work Experience**

- **Horizontal scrolling** work cards with GSAP animations
- **3D flip cards** revealing detailed project information
- **Auto-scrolling skills** showcase for each role
- Timeline of professional experiences

#### 🛠️ **Skills**

- **Interactive skill cards** with flip animations
- **Random numbers** displayed on card flip
- **Categorized technologies** with proficiency indicators

#### 📋 **Resume**

- Downloadable PDF resume
- Professional experience highlights

#### 📞 **Contact**

- Contact form with validation
- Social media links
- Professional contact information

### ⚡ **Performance & Animations**

- **GSAP (GreenSock)** for smooth, professional animations
- **CSS-based animations** for optimal performance
- **Lazy loading** and optimized assets
- **Auto-scrolling elements** with pause on hover

## 🛠️ Tech Stack

### **Frontend Framework**

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool

### **Styling & UI**

- **Tailwind CSS 4** - Utility-first CSS framework
- **Custom CSS animations** - Smooth transitions and effects
- **Responsive design** - Mobile-first approach

### **Animation Libraries**

- **GSAP (GreenSock)** - Professional animation library
- **CSS Keyframes** - Lightweight animations
- **React Transitions** - Component state animations

### **Internationalization**

- **react-i18next** - Complete i18n solution
- **JSON translation files** - Organized content management

### **Development Tools**

- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Git** - Version control

### **Deployment**

- **GitHub Pages** - Free hosting with custom domain
- **GitHub Actions** - Automated deployment pipeline

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/herzaristide/Herzaristide.git
cd Herzaristide
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint                       |
| `npm run deploy`  | Deploy to GitHub Pages           |

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Home.tsx        # Hero section
│   ├── Works.tsx       # Work experience
│   ├── WorkCard.tsx    # Individual work cards
│   ├── Skills.tsx      # Skills showcase
│   ├── SkillCard.tsx   # Individual skill cards
│   ├── Navigation.tsx  # Main navigation
│   └── ...
├── locales/            # Translation files
│   ├── en/            # English translations
│   ├── fr/            # French translations
│   └── de/            # German translations
├── assets/            # Static assets
│   ├── icons/         # SVG icons
│   └── CV_APICH_FR.pdf # Resume
├── utils/             # Utility functions
│   └── iconImports.ts # Icon management
├── constant.tsx       # App constants
├── i18n.ts           # Internationalization config
└── index.css         # Global styles
```

## 🎨 Key Components

### **WorkCard Component**

- 3D flip animation revealing detailed project information
- Auto-scrolling skills showcase
- Responsive design with hover effects

### **SkillCard Component**

- Interactive flip cards with random numbers
- Smooth animations and hover states
- Icon integration with proper asset handling

### **Navigation Component**

- Multi-language support
- Dark/light mode toggle
- Smooth section scrolling

## 🌐 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions:

1. **Production Build** - Optimized bundle with asset optimization
2. **Static Asset Handling** - Proper SVG and image processing
3. **Base Path Configuration** - Configured for GitHub Pages subdirectory
4. **Automated Deployment** - Push to main branch triggers deployment

## 🎯 Performance Optimizations

- **Vite Build Optimization** - Tree shaking and code splitting
- **Image Optimization** - Optimized SVG icons and assets
- **CSS Purging** - Unused styles removed in production
- **Lazy Loading** - Components loaded on demand
- **Animation Performance** - GPU-accelerated transforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Aristide Pichereau** - Data Engineer & Full Stack Developer

- 🔗 **Website**: [herzaristide.github.io](https://herzaristide.github.io/Herzaristide/)
- 💼 **LinkedIn**: [Connect with me](https://linkedin.com/in/aristide-pichereau)
- 📧 **Email**: [Contact me](mailto:your.email@example.com)

### **Expertise**

- **Data Engineering**: Apache Kafka, Spark, Hadoop, Python
- **Full Stack Development**: React, TypeScript, Node.js, Next.js
- **DevOps**: Docker, Kubernetes, Git
- **UI/UX Design**: Modern, responsive interfaces with smooth animations

---

<div align="center">
  
**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Aristide Pichereau](https://github.com/herzaristide)

</div>
