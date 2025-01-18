import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Community from './components/Community';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Members from './pages/admin/Members';
import Cooperatives from './pages/admin/Cooperatives';
import AdminActivities from './pages/admin/Activities';
import Settings from './pages/admin/Settings';
import FrontPage from './pages/admin/FrontPage';

function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#activities', label: 'Activities' },
    { href: '#community', label: 'Community' },
    { href: '#impact', label: 'Impact' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className="relative min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container-custom">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-emerald-700">Admas</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`text-neutral-600 hover:text-emerald-600 transition-all px-3 py-2 rounded-md ${
                    activeSection === href.slice(1)
                      ? 'text-emerald-600 bg-emerald-50'
                      : ''
                  }`}
                >
                  {label}
                </a>
              ))}
              <Link
                to="/admin/dashboard"
                className="text-emerald-600 hover:text-emerald-700 transition-all px-3 py-2 rounded-md border border-emerald-600 hover:bg-emerald-50"
              >
                Admin Panel
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`block px-4 py-2 text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md ${
                    activeSection === href.slice(1)
                      ? 'text-emerald-600 bg-emerald-50'
                      : ''
                  }`}
                >
                  {label}
                </a>
              ))}
              <Link
                to="/admin/dashboard"
                className="block px-4 py-2 mt-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-md"
              >
                Admin Panel
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Activities />
        <Community />
        <Impact />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Admas</h3>
              <p className="text-neutral-400">
                Empowering farmers through sustainable agriculture and economic growth since 2003.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="text-neutral-400 hover:text-emerald-400 transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>Injibara, Awi Zone</li>
                <li>Amhara Region, Ethiopia</li>
                <li>info@admascooperative.com</li>
                <li>+251 123 456 789</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media links here */}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-400">
            <p>&copy; {new Date().getFullYear()} Admas Cooperative Union. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/members" element={<Members />} />
        <Route path="/admin/cooperatives" element={<Cooperatives />} />
        <Route path="/admin/activities" element={<AdminActivities />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/front-page" element={<FrontPage />} />
      </Routes>
    </Router>
  );
}

export default App;