import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import Button from '../components/Button';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { UploadIcon, VideoIcon, LogoIcon } from '../components/Icons';
import { UploadProgress } from '../types';

const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({
    progress: 0,
    status: 'idle',
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadHistory] = useState([
    { name: 'interview_practice_1.mp4', date: '2024-01-15', score: 85 },
    { name: 'mock_interview_session.mp4', date: '2024-01-10', score: 78 },
    { name: 'behavioral_questions.mp4', date: '2024-01-05', score: 92 },
  ]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith('video/')) {
      setUploadedFile(file);
      simulateUpload();
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.wmv'],
    },
    maxSize: 500 * 1024 * 1024, // 500MB
    multiple: false,
  });

  const simulateUpload = () => {
    setUploadProgress({ progress: 0, status: 'uploading', message: 'Uploading video...' });
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const newProgress = prev.progress + Math.random() * 15;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/analysis');
          }, 1000);
          return { progress: 100, status: 'completed', message: 'Upload complete! Redirecting...' };
        }
        
        return { ...prev, progress: newProgress };
      });
    }, 300);
  };

  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setUploadedFile(file);
        simulateUpload();
      }
    };
    input.click();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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
              <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                Dashboard
              </Button>
              <Button variant="ghost" onClick={() => navigate('/auth')}>
                Account
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
              Upload Your Interview Video
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Upload a mock interview video for comprehensive behavioral analysis. 
              Our AI will analyze your eye contact, facial expressions, gestures, and posture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Section */}
            <div className="lg:col-span-2">
              <Card>
                <h3 className="text-xl font-semibold text-secondary-900 mb-6 font-heading">
                  Select Video File
                </h3>

                {uploadProgress.status === 'idle' ? (
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200 ${
                      isDragActive
                        ? 'border-primary-400 bg-primary-50'
                        : 'border-secondary-300 hover:border-primary-400 hover:bg-primary-50'
                    }`}
                  >
                    <input {...getInputProps()} />
                    <UploadIcon size={48} className="text-secondary-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-secondary-900 mb-2">
                      {isDragActive ? 'Drop your video here' : 'Drag & drop your video here'}
                    </h4>
                    <p className="text-secondary-600 mb-4">
                      or click to browse files
                    </p>
                    <p className="text-sm text-secondary-500">
                      Supports MP4, MOV, AVI, WMV (max 500MB)
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* File Info */}
                    {uploadedFile && (
                      <div className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-lg">
                        <VideoIcon size={24} className="text-primary-600" />
                        <div className="flex-1">
                          <p className="font-medium text-secondary-900">{uploadedFile.name}</p>
                          <p className="text-sm text-secondary-600">
                            {formatFileSize(uploadedFile.size)}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Progress */}
                    <ProgressBar
                      progress={uploadProgress.progress}
                      label={uploadProgress.message || 'Uploading...'}
                      color={uploadProgress.status === 'completed' ? 'success' : 'primary'}
                    />

                    {uploadProgress.status === 'completed' && (
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-green-600 text-xl">✓</span>
                        </div>
                        <p className="text-green-600 font-medium">Upload successful!</p>
                        <p className="text-sm text-secondary-600 mt-1">
                          Redirecting to analysis...
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {uploadProgress.status === 'idle' && (
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      fullWidth
                      onClick={handleFileSelect}
                      icon={<UploadIcon size={20} />}
                    >
                      Browse Files
                    </Button>
                  </div>
                )}
              </Card>
            </div>

            {/* Instructions & History */}
            <div className="space-y-6">
              {/* Instructions */}
              <Card>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 font-heading">
                  Upload Instructions
                </h3>
                <div className="space-y-3 text-sm text-secondary-600">
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      1
                    </span>
                    <p>Record yourself answering interview questions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      2
                    </span>
                    <p>Ensure good lighting and clear audio</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      3
                    </span>
                    <p>Upload video in MP4, MOV, AVI, or WMV format</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      4
                    </span>
                    <p>Wait for AI analysis to complete</p>
                  </div>
                </div>
              </Card>

              {/* Upload History */}
              <Card>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 font-heading">
                  Recent Uploads
                </h3>
                <div className="space-y-3">
                  {uploadHistory.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-secondary-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-secondary-600">{item.date}</p>
                      </div>
                      <div className="ml-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.score >= 80 
                            ? 'bg-green-100 text-green-600'
                            : item.score >= 60 
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-red-100 text-red-600'
                        }`}>
                          {item.score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  fullWidth
                  className="mt-4"
                  onClick={() => navigate('/dashboard')}
                >
                  View All
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadPage;