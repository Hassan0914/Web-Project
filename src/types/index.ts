export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
}

export interface VideoAnalysis {
  id: string;
  userId: string;
  videoName: string;
  uploadDate: Date;
  overallScore: number;
  metrics: {
    eyeContact: number;
    facialExpression: number;
    handMovement: number;
    posture: number;
  };
  feedback: {
    eyeContact: string;
    facialExpression: string;
    handMovement: string;
    posture: string;
    overall: string;
  };
  status: 'uploading' | 'processing' | 'completed' | 'failed';
}

export interface UploadProgress {
  progress: number;
  status: 'idle' | 'uploading' | 'processing' | 'completed' | 'error';
  message?: string;
}

export interface MetricScore {
  name: string;
  score: number;
  icon: string;
  description: string;
  feedback: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isGuest: boolean;
}