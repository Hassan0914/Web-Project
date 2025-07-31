import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { LogoIcon, EyeIcon, SmileIcon, HandIcon, PostureIcon } from '../components/Icons';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();

  const overallScore = 83;
  const metrics = [
    {
      name: 'Eye Contact',
      score: 85,
      icon: <EyeIcon size={24} className="text-blue-600" />,
      description: 'Consistent gaze engagement',
      color: 'blue'
    },
    {
      name: 'Facial Expression',
      score: 92,
      icon: <SmileIcon size={24} className="text-green-600" />,
      description: 'Positive and engaged expressions',
      color: 'green'
    },
    {
      name: 'Hand Movement',
      score: 78,
      icon: <HandIcon size={24} className="text-yellow-600" />,
      description: 'Natural gesture patterns',
      color: 'yellow'
    },
    {
      name: 'Posture',
      score: 88,
      icon: <PostureIcon size={24} className="text-purple-600" />,
      description: 'Professional positioning',
      color: 'purple'
    }
  ];

  const getScoreGrade = (score: number) => {
    if (score >= 90) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 80) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 70) return { grade: 'B+', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (score >= 60) return { grade: 'B', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (score >= 50) return { grade: 'C', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { grade: 'D', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const overallGrade = getScoreGrade(overallScore);

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-secondary-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <LogoIcon size={32} />
              <h1 className="text-xl font-bold text-secondary-900 font-heading">
                ConfidentYou
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                Dashboard
              </Button>
              <Button variant="ghost" onClick={() => navigate('/upload')}>
                New Analysis
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4 font-heading">
              Your Confidence Analysis Results
            </h2>
            <p className="text-lg text-secondary-600">
              Analysis completed for <span className="font-medium">interview_practice_session.mp4</span>
            </p>
          </div>

          {/* Overall Score */}
          <Card className="mb-8 text-center bg-gradient-to-br from-primary-600 to-primary-700 text-white">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                {/* Circular Progress */}
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - overallScore / 100)}`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold">{overallScore}</div>
                    <div className="text-sm opacity-90">Overall Score</div>
                  </div>
                </div>
              </div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-lg font-bold ${overallGrade.bg} ${overallGrade.color}`}>
                Grade: {overallGrade.grade}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 font-heading">
              Excellent Confidence Level!
            </h3>
            <p className="text-primary-100 mb-6">
              Your interview performance demonstrates strong confidence and professional presence.
            </p>
          </Card>

          {/* Metrics Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} hover>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-${metric.color}-100 rounded-lg flex items-center justify-center`}>
                    {metric.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-900 font-heading">
                      {metric.name}
                    </h3>
                    <p className="text-sm text-secondary-600">{metric.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-secondary-900">{metric.score}%</div>
                    <div className={`text-xs font-medium ${getScoreGrade(metric.score).color}`}>
                      {getScoreGrade(metric.score).grade}
                    </div>
                  </div>
                </div>
                <ProgressBar
                  progress={metric.score}
                  showLabel={false}
                  size="md"
                />
              </Card>
            ))}
          </div>

          {/* Detailed Analysis */}
          <Card className="mb-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-6 font-heading">
              Detailed Performance Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-secondary-900 mb-3">✅ Strengths</h4>
                <ul className="space-y-2 text-sm text-secondary-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Maintained excellent eye contact throughout most responses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Facial expressions showed genuine engagement and confidence</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Consistent professional posture demonstrated preparedness</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Voice tone projected confidence and enthusiasm</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-3">📈 Areas for Improvement</h4>
                <ul className="space-y-2 text-sm text-secondary-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Reduce fidgeting with hands during longer responses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Use more deliberate gestures to emphasize key points</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Maintain eye contact during pauses while thinking</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="primary"
              fullWidth
              onClick={() => navigate('/feedback')}
              icon={<span className="text-lg">📋</span>}
            >
              View Detailed Report
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                // Simulate PDF download
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'confidence-analysis-report.pdf';
                link.click();
              }}
              icon={<span className="text-lg">📄</span>}
            >
              Download PDF
            </Button>
            <Button
              variant="secondary"
              fullWidth
              onClick={() => navigate('/upload')}
              icon={<span className="text-lg">🔄</span>}
            >
              Analyze Another Video
            </Button>
          </div>

          {/* Performance Timeline */}
          <Card className="mt-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-6 font-heading">
              Performance Over Time
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div>
                  <p className="font-medium text-secondary-900">Previous Session</p>
                  <p className="text-sm text-secondary-600">January 15, 2024</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-secondary-900">78%</div>
                  <div className="text-sm text-blue-600">+5% improvement</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg border border-primary-200">
                <div>
                  <p className="font-medium text-secondary-900">Current Session</p>
                  <p className="text-sm text-secondary-600">Today</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-primary-600">{overallScore}%</div>
                  <div className="text-sm text-green-600">Great progress!</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;