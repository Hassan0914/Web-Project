# ConfidentYou - AI-Powered Confidence Analysis

🎯 **A modern React-based web application that analyzes confidence levels from job interview videos using computer vision and AI.**

![ConfidentYou](https://img.shields.io/badge/ConfidentYou-v1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.11-38bdf8.svg)

## ✨ Features

### 🎪 **7 Complete Screens**
1. **Landing Page** - Hero section with modern design and compelling CTA
2. **Authentication** - Login/Sign Up with form validation and guest access
3. **Video Upload** - Drag & drop interface with progress tracking
4. **Analysis Screen** - Real-time processing with animated progress indicators
5. **Results Dashboard** - Comprehensive scoring with visual metrics
6. **Admin Panel** - Data management with search, filtering, and CSV export
7. **Detailed Feedback** - In-depth analysis with timeline and recommendations

### 🔍 **AI Analysis Features**
- **Eye Contact Tracking** - Measures gaze engagement and consistency
- **Facial Expression Analysis** - Evaluates emotions and confidence indicators
- **Hand Movement Detection** - Analyzes gestures and nervous habits
- **Posture Assessment** - Monitors body positioning and professional presence
- **Overall Confidence Score** - Comprehensive 0-100 rating system

### 🎨 **Modern UI/UX Design**
- Clean, professional, and minimal interface
- Light theme with consistent color palette
- Responsive layout for all device sizes
- Card-based components with subtle shadows
- Smooth animations and transitions
- Modern typography (Inter & Poppins fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd confident-you
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production
```bash
npm run build
```

## 🏗️ Project Structure

```
confident-you/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx       # Custom button component
│   │   ├── Card.tsx         # Card layout component
│   │   ├── Icons.tsx        # Custom SVG icons
│   │   ├── Input.tsx        # Form input component
│   │   └── ProgressBar.tsx  # Progress indicator
│   ├── pages/               # Main application screens
│   │   ├── LandingPage.tsx  # Landing/home page
│   │   ├── AuthPage.tsx     # Login/signup page
│   │   ├── UploadPage.tsx   # Video upload interface
│   │   ├── AnalysisPage.tsx # Processing screen
│   │   ├── ResultsPage.tsx  # Results dashboard
│   │   ├── DashboardPage.tsx# Admin panel
│   │   └── FeedbackPage.tsx # Detailed feedback
│   ├── types/               # TypeScript type definitions
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main app component with routing
│   └── index.tsx            # Application entry point
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **UI Components**: Custom components with consistent design
- **File Upload**: React Dropzone for drag & drop functionality
- **Icons**: Custom SVG icons and Heroicons
- **Build Tool**: Create React App with modern toolchain

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones (#0ea5e9 to #0369a1)
- **Secondary**: Gray scale (#f8fafc to #0f172a)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Headings**: Poppins font family
- **Body Text**: Inter font family
- **Consistent hierarchy**: h1-h6 with proper spacing

### Components
- **Cards**: Rounded corners with soft shadows
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Progress Bars**: Color-coded based on performance scores
- **Form Inputs**: Clean design with validation states

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 320px to 767px

## 🔄 Application Flow

1. **Welcome** → Landing page introduces the platform
2. **Authenticate** → User logs in or continues as guest
3. **Upload** → Drag & drop video file for analysis
4. **Process** → AI analyzes video with real-time progress
5. **Results** → View confidence scores and metrics
6. **Feedback** → Get detailed insights and recommendations
7. **Dashboard** → Admin view of all analyses and data

## 📊 Confidence Metrics

### Scoring System (0-100)
- **90-100**: Excellent (A+ grade)
- **80-89**: Very Good (A grade)
- **70-79**: Good (B+ grade)
- **60-69**: Fair (B grade)
- **50-59**: Needs Improvement (C grade)
- **Below 50**: Poor (D grade)

### Analysis Categories
1. **Eye Contact** - Gaze patterns and engagement
2. **Facial Expression** - Emotions and confidence indicators
3. **Hand Movement** - Gestures and nervous habits
4. **Posture** - Body positioning and professional presence

## 🚀 Features in Detail

### Video Upload
- Supports MP4, MOV, AVI, WMV formats
- Maximum file size: 500MB
- Real-time upload progress
- File validation and error handling

### AI Analysis
- Frame-by-frame video processing
- Computer vision for body language detection
- Machine learning confidence scoring
- Detailed timestamp analysis

### Results Dashboard
- Visual progress bars for each metric
- Circular progress indicator for overall score
- Performance comparison over time
- Downloadable PDF reports

### Admin Panel
- Search and filter functionality
- Sortable data tables
- CSV export capabilities
- User management features

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run dev` - Alias for start command
- `npm run preview` - Build and preview production version
- `npm run lint` - Run ESLint checks
- `npm run format` - Format code with Prettier

## 🌟 Key Features Summary

✅ **Modern React Architecture** - TypeScript, hooks, and functional components  
✅ **Beautiful UI/UX** - Professional design with Tailwind CSS  
✅ **Responsive Layout** - Works perfectly on all devices  
✅ **Real-time Processing** - Animated analysis with progress tracking  
✅ **Comprehensive Analytics** - Detailed scoring and feedback system  
✅ **Admin Dashboard** - Data management and export capabilities  
✅ **PDF Reports** - Downloadable analysis reports  
✅ **Guest Access** - No registration required to try the platform  

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ by the ConfidentYou Team**

*Empowering confident communication through AI-powered analysis.*
