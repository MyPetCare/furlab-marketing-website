
import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
const SESSION_KEY = 'furlab_editor_auth';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if there's a valid session
    const checkSession = () => {
      try {
        const sessionData = localStorage.getItem(SESSION_KEY);
        if (sessionData) {
          const { timestamp } = JSON.parse(sessionData);
          const now = Date.now();
          
          // Check if session is still valid
          if (now - timestamp < SESSION_DURATION) {
            setIsAuthenticated(true);
            setIsLoading(false);
            return;
          } else {
            // Session expired, remove it
            localStorage.removeItem(SESSION_KEY);
          }
        }
      } catch (e) {
        // Invalid session data, remove it
        localStorage.removeItem(SESSION_KEY);
      }
      
      setIsLoading(false);
    };

    checkSession();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!ADMIN_PASSWORD) {
      setError('认证系统未正确配置。请联系管理员设置 VITE_ADMIN_PASSWORD 环境变量。');
      return;
    }

    if (password === ADMIN_PASSWORD) {
      // Store session with timestamp
      const sessionData = {
        timestamp: Date.now(),
        authenticated: true
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
      setIsAuthenticated(true);
      setPassword('');
    } else {
      setError('密码错误，请重试。');
      setPassword('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-bg">
        <div className="text-neutral-muted">加载中...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-gold/10">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-neutral-divider">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-poppins font-bold text-neutral-dark mb-2">
              内容编辑器
            </h1>
            <p className="text-neutral-muted">
              请输入密码以访问编辑器
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-text mb-2">
                密码
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 bg-neutral-bg border border-neutral-divider rounded-lg shadow-sm placeholder-neutral-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="输入密码"
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-accent-coral/10 border border-accent-coral text-accent-coral px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white font-poppins font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              登录
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-neutral-muted">
            会话将在 24 小时后自动过期
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {children}
      <button
        onClick={handleLogout}
        className="fixed bottom-4 right-4 bg-neutral-dark text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-neutral-text transition-colors shadow-lg z-50"
        title="退出登录"
      >
        退出
      </button>
    </div>
  );
};

export default PasswordProtection;

