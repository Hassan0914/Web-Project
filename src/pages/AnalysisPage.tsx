import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { LogoIcon, EyeIcon, SmileIcon, HandIcon, PostureIcon } from '../components/Icons';

const AnalysisPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const analysisSteps = [
    {
      id: 'upload',
      title: 'Processing Upload',
      description: 'Preparing your video for analysis',
      icon: <span className="text-2xl">📁</span>,
      duration: 1000,
    },
    {
      id: 'eye-contact',
      title: 'Analyzing Eye Contact',
      description: 'Tracking gaze patterns and engagement levels',
      icon: <EyeIcon size={32} />,
      duration: 2000,
    },
    {
      id: 'facial-expression',
      title: 'Evaluating Facial Expressions',
      description: 'Assessing emotional states and confidence indicators',
      icon: <SmileIcon size={32} />,
      duration: 1800,
    },
    {
      id: 'hand-movement',
      title: 'Tracking Hand Movements',
      description: 'Analyzing gestures and body language',
      icon: <HandIcon size={32} />,
      duration: 1500,
    },
    {
      id: 'posture',
      title: 'Assessing Posture',
      description: 'Evaluating body positioning and confidence',
      icon: <PostureIcon size={32} />,
      duration: 1200,
    },
    {
      id: 'compilation',
      title: 'Compiling Results',
      description: 'Generating comprehensive confidence report',
      icon: <span className="text-2xl">📊</span>,
      duration: 800,
    },
  ];

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let stepTimeout: NodeJS.Timeout;

    const startAnalysis = () => {
      // Progress animation
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 2;
          return Math.min(newProgress, (currentStep + 1) * (100 / analysisSteps.length));
        });
      }, 100);

      // Step progression
      if (currentStep < analysisSteps.length - 1) {
        stepTimeout = setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, analysisSteps[currentStep].duration);
      } else {
        // Analysis complete
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            navigate('/results');
          }, 1500);
        }, analysisSteps[currentStep].duration);
      }
    };

    startAnalysis();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stepTimeout);
    };
  }, [currentStep, navigate]);

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-secondary-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <LogoIcon size={32} />
            <h1 className="text-xl font-bold text-secondary-900 font-heading">
              ConfidentYou
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4 font-heading">
              Analyzing Your Confidence
            </h2>
            <p className="text-lg text-secondary-600">
              Our AI is carefully examining your interview performance. This process typically takes 2-3 minutes.
            </p>
          </div>

          {/* Main Analysis Card */}
          <Card className="mb-8">
            {/* Overall Progress */}
            <div className="mb-8">
              <ProgressBar
                progress={progress}
                label="Overall Analysis Progress"
                size="lg"
              />
            </div>

            {/* Current Step */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500">
                <div className="text-primary-600">
                  {analysisSteps[currentStep].icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2 font-heading">
                {analysisSteps[currentStep].title}
              </h3>
              <p className="text-secondary-600">
                {analysisSteps[currentStep].description}
              </p>
            </div>

            {/* Steps List */}
            <div className="space-y-4">
              {analysisSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ${
                    index < currentStep
                      ? 'bg-green-50 border border-green-200'
                      : index === currentStep
                      ? 'bg-primary-50 border border-primary-200'
                      : 'bg-secondary-50 border border-secondary-200'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index < currentStep
                      ? 'bg-green-500'
                      : index === currentStep
                      ? 'bg-primary-500'
                      : 'bg-secondary-300'
                  }`}>
                    {index < currentStep ? (
                      <span className="text-white text-sm">✓</span>
                    ) : index === currentStep ? (
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    ) : (
                      <span className="text-white text-sm">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${
                      index <= currentStep ? 'text-secondary-900' : 'text-secondary-500'
                    }`}>
                      {step.title}
                    </p>
                    <p className={`text-sm ${
                      index <= currentStep ? 'text-secondary-600' : 'text-secondary-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                  {index === currentStep && (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Tips Card */}
          <Card>
            <h3 className="text-lg font-semibold text-secondary-900 mb-4 font-heading">
              💡 Did You Know?
            </h3>
            <div className="space-y-3 text-sm text-secondary-600">
              <p>
                <strong>Eye Contact:</strong> Maintaining eye contact 60-70% of the time is considered optimal for interviews.
              </p>
              <p>
                <strong>Facial Expressions:</strong> Subtle smiles and engaged expressions can increase perceived competence by up to 25%.
              </p>
              <p>
                <strong>Hand Gestures:</strong> Natural, purposeful gestures help convey confidence and enthusiasm.
              </p>
              <p>
                <strong>Posture:</strong> Sitting up straight with shoulders back projects confidence and professionalism.
              </p>
            </div>
          </Card>

          {/* Video Preview */}
          <Card className="mt-6">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4 font-heading">
              Your Video
            </h3>
            <div className="w-full h-48 bg-secondary-900 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">▶️</span>
                </div>
                <p className="text-sm opacity-80">interview_practice_session.mp4</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AnalysisPage;