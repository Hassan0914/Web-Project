import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import { LogoIcon, UserIcon } from '../components/Icons';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (activeTab === 'signup') {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate('/upload');
    }, 1500);
  };

  const handleGuestAccess = () => {
    navigate('/upload');
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <LogoIcon size={48} />
            <h1 className="text-3xl font-bold text-secondary-900 font-heading">
              ConfidentYou
            </h1>
          </div>
          <p className="text-secondary-600">
            {activeTab === 'login' 
              ? 'Welcome back! Sign in to continue your confidence journey.' 
              : 'Join thousands improving their interview skills with AI.'
            }
          </p>
        </div>

        <Card>
          {/* Tab Navigation */}
          <div className="flex bg-secondary-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'login'
                  ? 'bg-white text-secondary-900 shadow-sm'
                  : 'text-secondary-600 hover:text-secondary-900'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'signup'
                  ? 'bg-white text-secondary-900 shadow-sm'
                  : 'text-secondary-600 hover:text-secondary-900'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {activeTab === 'signup' && (
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(value) => updateFormData('name', value)}
                error={errors.name}
                required
                icon={<UserIcon size={20} />}
              />
            )}

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(value) => updateFormData('email', value)}
              error={errors.email}
              required
              icon={<span className="text-lg">📧</span>}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(value) => updateFormData('password', value)}
              error={errors.password}
              required
              icon={<span className="text-lg">🔒</span>}
            />

            {activeTab === 'signup' && (
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(value) => updateFormData('confirmPassword', value)}
                error={errors.confirmPassword}
                required
                icon={<span className="text-lg">🔒</span>}
              />
            )}
          </div>

          {/* Submit Button */}
          <Button
            fullWidth
            onClick={handleSubmit}
            loading={loading}
            className="mt-6"
          >
            {loading 
              ? (activeTab === 'login' ? 'Signing In...' : 'Creating Account...') 
              : (activeTab === 'login' ? 'Sign In' : 'Create Account')
            }
          </Button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-secondary-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-secondary-500">Or</span>
            </div>
          </div>

          {/* Guest Access */}
          <Button
            variant="outline"
            fullWidth
            onClick={handleGuestAccess}
            icon={<span className="text-lg">👤</span>}
          >
            Continue as Guest
          </Button>

          {/* Footer Links */}
          <div className="mt-6 text-center">
            {activeTab === 'login' ? (
              <p className="text-sm text-secondary-600">
                Don't have an account?{' '}
                <button
                  onClick={() => setActiveTab('signup')}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p className="text-sm text-secondary-600">
                Already have an account?{' '}
                <button
                  onClick={() => setActiveTab('login')}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-secondary-500 hover:text-secondary-700 text-sm transition-colors duration-200"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;