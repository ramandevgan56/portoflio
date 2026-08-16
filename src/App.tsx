import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initialPortfolioData } from './data/portfolio';
import type { PortfolioData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PortfolioCustomizer } from './components/PortfolioCustomizer';
import { ScrollToTop } from './components/ScrollToTop';

// Dedicated Page View
import { HomePage } from './pages/HomePage';

export function App() {
  const [data, setData] = useState<PortfolioData>(initialPortfolioData);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans antialiased selection:bg-[#ea580c] selection:text-white flex flex-col justify-between">
        
        {/* Sticky Header Navigation with Page Router Links */}
        <Navbar
          personal={data.personal}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage data={data} />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/skills" element={<HomePage data={data} />} />
            <Route path="/projects" element={<HomePage data={data} />} />
            <Route path="/certifications" element={<HomePage data={data} />} />
            <Route path="/education" element={<Navigate to="/" replace />} />
            <Route path="/contact" element={<HomePage data={data} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer personal={data.personal} />

        {/* Live Customizer Modal Overlay */}
        <PortfolioCustomizer
          data={data}
          onUpdate={setData}
          isOpen={isCustomizerOpen}
          onClose={() => setIsCustomizerOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
