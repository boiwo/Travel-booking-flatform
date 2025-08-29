import React from 'react';
import { User, Globe, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

export default function Header() {
  const { user, isAuthenticated, signOut, setShowAuthModal, showAuthModal } = useAuth();

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                Book.com
              </a>
              <span className="ml-2 text-sm text-gray-500 hidden sm:inline">
                Travel & Experiences
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Your trips
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                List property
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Support
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 hidden sm:inline">
                    Welcome, {user?.name}
                  </span>
                  <button
                    onClick={signOut}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">Sign out</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign in</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      {showAuthModal && <AuthModal />}
    </>
  );
}