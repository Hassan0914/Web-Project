import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import { LogoIcon, AnalyticsIcon, VideoIcon, UserIcon } from '../components/Icons';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterScore, setFilterScore] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'score' | 'name'>('date');

  const analysisData = [
    {
      id: '1',
      videoName: 'interview_practice_1.mp4',
      user: 'John Doe',
      email: 'john@example.com',
      date: '2024-01-20',
      score: 85,
      status: 'completed',
      metrics: { eyeContact: 88, facial: 82, hand: 78, posture: 92 }
    },
    {
      id: '2',
      videoName: 'mock_interview_session.mp4',
      user: 'Sarah Smith',
      email: 'sarah@example.com',
      date: '2024-01-19',
      score: 78,
      status: 'completed',
      metrics: { eyeContact: 75, facial: 85, hand: 72, posture: 80 }
    },
    {
      id: '3',
      videoName: 'behavioral_questions.mp4',
      user: 'Mike Johnson',
      email: 'mike@example.com',
      date: '2024-01-18',
      score: 92,
      status: 'completed',
      metrics: { eyeContact: 95, facial: 90, hand: 88, posture: 95 }
    },
    {
      id: '4',
      videoName: 'technical_interview.mp4',
      user: 'Emily Davis',
      email: 'emily@example.com',
      date: '2024-01-17',
      score: 73,
      status: 'completed',
      metrics: { eyeContact: 70, facial: 78, hand: 68, posture: 76 }
    },
    {
      id: '5',
      videoName: 'team_interview_prep.mp4',
      user: 'David Wilson',
      email: 'david@example.com',
      date: '2024-01-16',
      score: 88,
      status: 'completed',
      metrics: { eyeContact: 90, facial: 87, hand: 85, posture: 90 }
    },
  ];

  const stats = {
    totalAnalyses: analysisData.length,
    averageScore: Math.round(analysisData.reduce((sum, item) => sum + item.score, 0) / analysisData.length),
    activeUsers: new Set(analysisData.map(item => item.email)).size,
    completedToday: analysisData.filter(item => item.date === '2024-01-20').length,
  };

  const filteredData = analysisData
    .filter(item => {
      const matchesSearch = item.videoName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.user.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesScore = filterScore === '' || 
                          (filterScore === 'high' && item.score >= 80) ||
                          (filterScore === 'medium' && item.score >= 60 && item.score < 80) ||
                          (filterScore === 'low' && item.score < 60);
      return matchesSearch && matchesScore;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'score':
          return b.score - a.score;
        case 'name':
          return a.videoName.localeCompare(b.videoName);
        default:
          return 0;
      }
    });

  const getScoreBadgeColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-600';
    if (score >= 60) return 'bg-yellow-100 text-yellow-600';
    return 'bg-red-100 text-red-600';
  };

  const exportToCSV = () => {
    const headers = ['Video Name', 'User', 'Email', 'Date', 'Overall Score', 'Eye Contact', 'Facial Expression', 'Hand Movement', 'Posture'];
    const csvData = filteredData.map(item => [
      item.videoName,
      item.user,
      item.email,
      item.date,
      item.score,
      item.metrics.eyeContact,
      item.metrics.facial,
      item.metrics.hand,
      item.metrics.posture
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'confidence-analysis-report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
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
                ConfidentYou Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/upload')}>
                New Analysis
              </Button>
              <Button variant="ghost" onClick={() => navigate('/auth')}>
                Account
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4 font-heading">
            Analytics Dashboard
          </h2>
          <p className="text-lg text-secondary-600">
            Monitor and manage all video analyses, user performance, and system metrics.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <AnalyticsIcon size={24} className="text-primary-600" />
              </div>
              <div>
                <p className="text-sm text-secondary-600">Total Analyses</p>
                <p className="text-2xl font-bold text-secondary-900">{stats.totalAnalyses}</p>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">📊</span>
              </div>
              <div>
                <p className="text-sm text-secondary-600">Average Score</p>
                <p className="text-2xl font-bold text-secondary-900">{stats.averageScore}%</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserIcon size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-secondary-600">Active Users</p>
                <p className="text-2xl font-bold text-secondary-900">{stats.activeUsers}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <VideoIcon size={24} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-secondary-600">Today's Analyses</p>
                <p className="text-2xl font-bold text-secondary-900">{stats.completedToday}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Search videos or users..."
              value={searchTerm}
              onChange={setSearchTerm}
              icon={<span className="text-lg">🔍</span>}
            />
            
            <select
              value={filterScore}
              onChange={(e) => setFilterScore(e.target.value)}
              className="input-field"
            >
              <option value="">All Scores</option>
              <option value="high">High (80%+)</option>
              <option value="medium">Medium (60-79%)</option>
              <option value="low">Low (<60%)</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'score' | 'name')}
              className="input-field"
            >
              <option value="date">Sort by Date</option>
              <option value="score">Sort by Score</option>
              <option value="name">Sort by Name</option>
            </select>

            <Button
              variant="outline"
              onClick={exportToCSV}
              icon={<span className="text-lg">📊</span>}
              fullWidth
            >
              Export CSV
            </Button>
          </div>
        </Card>

        {/* Data Table */}
        <Card padding="none">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary-50 border-b border-secondary-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-secondary-600">Video</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-secondary-600">User</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-secondary-600">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-secondary-600">Overall Score</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-secondary-600">Metrics</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-secondary-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-200">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-secondary-50 transition-colors duration-150">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <VideoIcon size={20} className="text-primary-600" />
                        <div>
                          <p className="font-medium text-secondary-900">{item.videoName}</p>
                          <p className="text-sm text-secondary-600">{item.status}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-secondary-900">{item.user}</p>
                        <p className="text-sm text-secondary-600">{item.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-secondary-900">{item.date}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getScoreBadgeColor(item.score)}`}>
                        {item.score}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span>Eye: {item.metrics.eyeContact}%</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Face: {item.metrics.facial}%</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                          <span>Hand: {item.metrics.hand}%</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          <span>Posture: {item.metrics.posture}%</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => navigate('/feedback')}
                        >
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            // Simulate PDF download
                            const link = document.createElement('a');
                            link.href = '#';
                            link.download = `${item.videoName}-report.pdf`;
                            link.click();
                          }}
                        >
                          Export
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <AnalyticsIcon size={48} className="text-secondary-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-secondary-900 mb-2">No results found</h3>
              <p className="text-secondary-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
};

export default DashboardPage;