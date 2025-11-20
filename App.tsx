import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ResourcesPage from './pages/ResourcesPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import DownloadPage from './pages/DownloadPage';
import WaitlistPage from './pages/WaitlistPage';
import WaitlistVerifyPage from './pages/WaitlistVerifyPage';
import ContentEditorPage from './pages/ContentEditorPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Editor route without Layout (full-screen) */}
        <Route path="/do-not-tell-others-here-is-an-editor" element={<ContentEditorPage />} />
        
        {/* All other routes with Layout */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
        <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} />
        <Route path="/resources/:slug" element={<Layout><ArticlePage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/download" element={<Layout><DownloadPage /></Layout>} />
        <Route path="/waitlist" element={<Layout><WaitlistPage /></Layout>} />
        <Route path="/waitlist/verify" element={<Layout><WaitlistVerifyPage /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
        <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </HashRouter>
  );
};

export default App;

