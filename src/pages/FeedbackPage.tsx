import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { LogoIcon, EyeIcon, SmileIcon, HandIcon, PostureIcon } from '../components/Icons';

const FeedbackPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'recommendations'>('overview');

  const detailedFeedback = {
    eyeContact: {
      score: 85,
      feedback: "Your eye contact was consistent throughout most of the interview. You maintained appropriate gaze for 85% of the conversation, which demonstrates confidence and engagement. However, there were a few moments during longer responses where you looked away while thinking.",
      suggestions: [
        "Practice maintaining eye contact during pauses while formulating responses",
        "Use the 'triangle technique' - look at different parts of the interviewer's face",
        "If you need to look away while thinking, return eye contact when delivering your answer"
      ],
      keyMoments: [
        { time: "0:45", description: "Excellent eye contact during opening introduction", type: "positive" },
        { time: "2:15", description: "Lost eye contact for 8 seconds while thinking", type: "improvement" },
        { time: "4:30", description: "Strong eye contact while explaining technical skills", type: "positive" },
        { time: "6:20", description: "Brief distraction, looked at hands", type: "improvement" }
      ]
    },
    facialExpression: {
      score: 92,
      feedback: "Excellent use of facial expressions! You displayed genuine enthusiasm and engagement throughout the interview. Your facial expressions were natural and appropriately matched the tone of your responses. The subtle smiles during positive topics enhanced your likability.",
      suggestions: [
        "Continue using natural facial expressions to convey emotion",
        "Practice a genuine smile when discussing your achievements",
        "Be mindful of maintaining a pleasant expression during challenging questions"
      ],
      keyMoments: [
        { time: "1:20", description: "Genuine smile when discussing favorite project", type: "positive" },
        { time: "3:45", description: "Appropriate concern when discussing challenges", type: "positive" },
        { time: "5:10", description: "Engaged expression during technical discussion", type: "positive" },
        { time: "7:30", description: "Confident expression during salary negotiation", type: "positive" }
      ]
    },
    handMovement: {
      score: 78,
      feedback: "Your hand gestures were generally natural and supportive of your verbal communication. You used purposeful gestures to emphasize key points, which enhanced your message delivery. However, there were instances of nervous fidgeting that could be reduced.",
      suggestions: [
        "Keep hands visible and relaxed on the table or in your lap",
        "Use deliberate gestures to emphasize important points",
        "Avoid touching your face or playing with objects during responses",
        "Practice calming techniques before interviews to reduce nervous movements"
      ],
      keyMoments: [
        { time: "1:50", description: "Effective gesture while explaining process", type: "positive" },
        { time: "2:45", description: "Fidgeting with pen during difficult question", type: "improvement" },
        { time: "4:15", description: "Good hand positioning, open and confident", type: "positive" },
        { time: "6:45", description: "Nervous hand clasping", type: "improvement" }
      ]
    },
    posture: {
      score: 88,
      feedback: "Your posture was professional and confident throughout most of the interview. You maintained an upright position that conveyed interest and engagement. Occasional slight leaning forward showed active listening, which is positive.",
      suggestions: [
        "Continue maintaining upright, confident posture",
        "Slight forward lean shows interest - use this strategically",
        "Avoid slouching or leaning back too much",
        "Keep shoulders relaxed but not slumped"
      ],
      keyMoments: [
        { time: "0:30", description: "Excellent opening posture, confident and alert", type: "positive" },
        { time: "2:30", description: "Good forward lean showing interest", type: "positive" },
        { time: "4:45", description: "Slight slouch during long response", type: "improvement" },
        { time: "7:00", description: "Strong closing posture", type: "positive" }
      ]
    }
  };

  const timelineData = [
    { time: "0:00-1:00", overall: 88, eyeContact: 90, facial: 95, hand: 85, posture: 92, note: "Strong opening, confident introduction" },
    { time: "1:00-2:00", overall: 82, eyeContact: 78, facial: 90, hand: 75, posture: 85, note: "Slight nervousness, fidgeting increased" },
    { time: "2:00-3:00", overall: 85, eyeContact: 82, facial: 88, hand: 80, posture: 90, note: "Recovered confidence, better body control" },
    { time: "3:00-4:00", overall: 89, eyeContact: 88, facial: 94, hand: 85, posture: 90, note: "Excellent technical explanation" },
    { time: "4:00-5:00", overall: 80, eyeContact: 85, facial: 85, hand: 70, posture: 80, note: "Challenging question caused tension" },
    { time: "5:00-6:00", overall: 87, eyeContact: 88, facial: 92, hand: 82, posture: 85, note: "Good recovery, positive engagement" },
    { time: "6:00-7:00", overall: 91, eyeContact: 90, facial: 95, hand: 88, posture: 92, note: "Strong closing, confident wrap-up" }
  ];

  const overallRecommendations = [
    {
      priority: "High",
      category: "Eye Contact",
      recommendation: "Practice maintaining eye contact during thinking pauses",
      impact: "Will increase perceived confidence by 15-20%"
    },
    {
      priority: "Medium",
      category: "Hand Gestures",
      recommendation: "Reduce fidgeting during stressful questions",
      impact: "Will improve overall professionalism score"
    },
    {
      priority: "Low",
      category: "Posture",
      recommendation: "Maintain consistent upright posture throughout",
      impact: "Minor improvement in executive presence"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-600';
      case 'Medium': return 'bg-yellow-100 text-yellow-600';
      case 'Low': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

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
              <Button variant="ghost" onClick={() => navigate('/results')}>
                Back to Results
              </Button>
              <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4 font-heading">
              Detailed Confidence Report
            </h2>
            <p className="text-lg text-secondary-600">
              In-depth analysis and personalized recommendations for <span className="font-medium">interview_practice_session.mp4</span>
            </p>
          </div>

          {/* Tab Navigation */}
          <Card className="mb-8">
            <div className="flex bg-secondary-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'overview'
                    ? 'bg-white text-secondary-900 shadow-sm'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                📊 Detailed Analysis
              </button>
              <button
                onClick={() => setActiveTab('timeline')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'timeline'
                    ? 'bg-white text-secondary-900 shadow-sm'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                📈 Timeline View
              </button>
              <button
                onClick={() => setActiveTab('recommendations')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'recommendations'
                    ? 'bg-white text-secondary-900 shadow-sm'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                💡 Recommendations
              </button>
            </div>
          </Card>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {Object.entries(detailedFeedback).map(([key, data]) => {
                const icons = {
                  eyeContact: <EyeIcon size={24} className="text-blue-600" />,
                  facialExpression: <SmileIcon size={24} className="text-green-600" />,
                  handMovement: <HandIcon size={24} className="text-yellow-600" />,
                  posture: <PostureIcon size={24} className="text-purple-600" />
                };
                
                return (
                  <Card key={key}>
                    <div className="flex items-center space-x-3 mb-4">
                      {icons[key as keyof typeof icons]}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-secondary-900 font-heading capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <ProgressBar
                          progress={data.score}
                          showLabel={false}
                          size="sm"
                        />
                      </div>
                      <div className="text-2xl font-bold text-secondary-900">
                        {data.score}%
                      </div>
                    </div>

                    <p className="text-secondary-700 mb-4 leading-relaxed">
                      {data.feedback}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-secondary-900 mb-2">💡 Suggestions</h4>
                      <ul className="space-y-1">
                        {data.suggestions.map((suggestion, index) => (
                          <li key={index} className="text-sm text-secondary-600 flex items-start space-x-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">🔍 Key Moments</h4>
                      <div className="space-y-2">
                        {data.keyMoments.map((moment, index) => (
                          <div key={index} className={`p-3 rounded-lg border ${
                            moment.type === 'positive' 
                              ? 'bg-green-50 border-green-200' 
                              : 'bg-yellow-50 border-yellow-200'
                          }`}>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-xs font-mono bg-secondary-900 text-white px-2 py-1 rounded">
                                {moment.time}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                moment.type === 'positive' 
                                  ? 'bg-green-100 text-green-600' 
                                  : 'bg-yellow-100 text-yellow-600'
                              }`}>
                                {moment.type === 'positive' ? 'Strength' : 'Opportunity'}
                              </span>
                            </div>
                            <p className="text-sm text-secondary-700">{moment.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          {activeTab === 'timeline' && (
            <Card>
              <h3 className="text-xl font-semibold text-secondary-900 mb-6 font-heading">
                Performance Timeline
              </h3>
              <div className="space-y-6">
                {timelineData.map((segment, index) => (
                  <div key={index} className="border-b border-secondary-200 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-secondary-900">{segment.time}</h4>
                        <p className="text-sm text-secondary-600">{segment.note}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-secondary-900">{segment.overall}%</div>
                        <div className="text-sm text-secondary-600">Overall</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <EyeIcon size={16} className="text-blue-600" />
                          <span className="text-sm font-medium">Eye Contact</span>
                        </div>
                        <ProgressBar progress={segment.eyeContact} showLabel={false} size="sm" />
                        <div className="text-xs text-secondary-600 mt-1">{segment.eyeContact}%</div>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <SmileIcon size={16} className="text-green-600" />
                          <span className="text-sm font-medium">Expression</span>
                        </div>
                        <ProgressBar progress={segment.facial} showLabel={false} size="sm" />
                        <div className="text-xs text-secondary-600 mt-1">{segment.facial}%</div>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <HandIcon size={16} className="text-yellow-600" />
                          <span className="text-sm font-medium">Gestures</span>
                        </div>
                        <ProgressBar progress={segment.hand} showLabel={false} size="sm" />
                        <div className="text-xs text-secondary-600 mt-1">{segment.hand}%</div>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <PostureIcon size={16} className="text-purple-600" />
                          <span className="text-sm font-medium">Posture</span>
                        </div>
                        <ProgressBar progress={segment.posture} showLabel={false} size="sm" />
                        <div className="text-xs text-secondary-600 mt-1">{segment.posture}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'recommendations' && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-semibold text-secondary-900 mb-6 font-heading">
                  Prioritized Improvement Plan
                </h3>
                <div className="space-y-4">
                  {overallRecommendations.map((rec, index) => (
                    <div key={index} className="border border-secondary-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                            {rec.priority} Priority
                          </span>
                          <h4 className="font-semibold text-secondary-900">{rec.category}</h4>
                        </div>
                      </div>
                      <p className="text-secondary-700 mb-2">{rec.recommendation}</p>
                      <p className="text-sm text-secondary-600">
                        <strong>Expected Impact:</strong> {rec.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-secondary-900 mb-6 font-heading">
                  Practice Exercises
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">🎯 Eye Contact Training</h4>
                    <ul className="space-y-2 text-sm text-secondary-600">
                      <li>• Practice the "triangle technique" with a mirror</li>
                      <li>• Record yourself maintaining eye contact while speaking</li>
                      <li>• Use video calls to practice natural gaze patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">✋ Gesture Control</h4>
                    <ul className="space-y-2 text-sm text-secondary-600">
                      <li>• Practice deliberate hand positions during mock interviews</li>
                      <li>• Use stress-reduction techniques before interviews</li>
                      <li>• Record yourself to identify nervous habits</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Button
              variant="primary"
              fullWidth
              onClick={() => navigate('/upload')}
              icon={<span className="text-lg">🔄</span>}
            >
              Analyze Another Video
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                // Simulate PDF download
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'detailed-feedback-report.pdf';
                link.click();
              }}
              icon={<span className="text-lg">📄</span>}
            >
              Download Full Report
            </Button>
            <Button
              variant="secondary"
              fullWidth
              onClick={() => navigate('/dashboard')}
              icon={<span className="text-lg">📊</span>}
            >
              View All Analyses
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeedbackPage;