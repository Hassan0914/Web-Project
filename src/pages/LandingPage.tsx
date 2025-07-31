import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { LogoIcon, VideoIcon, AnalyticsIcon, EyeIcon } from '../components/Icons';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <EyeIcon size={24} className="text-primary-600" />,
      title: 'Eye Contact Analysis',
      description: 'Advanced computer vision to track and analyze your eye contact patterns during interviews.'
    },
    {
      icon: <VideoIcon size={24} className="text-primary-600" />,
      title: 'Video Processing',
      description: 'Upload your interview videos and get detailed behavioral analysis within minutes.'
    },
    {
      icon: <AnalyticsIcon size={24} className="text-primary-600" />,
      title: 'Detailed Reports',
      description: 'Comprehensive feedback on posture, facial expressions, and hand movements.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <LogoIcon size={40} />
            <h1 className="text-2xl font-bold text-secondary-900 font-heading">
              ConfidentYou
            </h1>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate('/auth')}
          >
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6 font-heading">
            AI-Powered
            <span className="text-primary-600 block">Confidence Analysis</span>
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Enhance your interview skills with intelligent behavioral analysis. 
            Get detailed feedback on your body language, eye contact, and presentation confidence.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/auth')}
            className="px-8 py-4 text-lg"
          >
            Get Started
          </Button>
        </div>

        {/* Hero Illustration */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-12 text-center" shadow="medium">
            <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <VideoIcon size={80} className="text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Virtual Interview Analysis</h3>
                <p className="text-primary-600">Upload your video and get instant confidence insights</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-secondary-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <EyeIcon size={16} className="text-green-600" />
                </div>
                <span className="text-secondary-700 font-medium">Eye Contact: 85%</span>
              </div>
              <div className="bg-secondary-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 text-sm">😊</span>
                </div>
                <span className="text-secondary-700 font-medium">Expression: 92%</span>
              </div>
              <div className="bg-secondary-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-600 text-sm">✋</span>
                </div>
                <span className="text-secondary-700 font-medium">Gestures: 78%</span>
              </div>
              <div className="bg-secondary-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 text-sm">🧍</span>
                </div>
                <span className="text-secondary-700 font-medium">Posture: 88%</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white" shadow="hard">
          <h3 className="text-3xl font-bold mb-4 font-heading">
            Ready to boost your confidence?
          </h3>
          <p className="text-primary-100 mb-6 text-lg">
            Start analyzing your interview skills today with our AI-powered platform.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/auth')}
            className="bg-white text-primary-600 hover:bg-primary-50"
          >
            Get Started Now
          </Button>
        </Card>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-secondary-500">
        <p>&copy; 2024 ConfidentYou. Empowering confident communication through AI.</p>
      </footer>
    </div>
  );
};

export default LandingPage;