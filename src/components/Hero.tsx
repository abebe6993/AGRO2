import { ArrowRight, ChevronDown, Wheat, Sun, Cloud, Sprout } from 'lucide-react';
import { useState } from 'react';
import { JoinCommunityDialog } from './JoinCommunityDialog';

export default function Hero() {
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background layers remain unchanged */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=85")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjV2MTBINDBWMjVoMTB6TTMwIDI1djEwSDIwVjI1aDEweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />
      </div>

      {/* Floating Icons remain unchanged */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Wheat className="absolute top-20 left-[10%] text-emerald-400/20 w-16 h-16 animate-float" />
        <Sun className="absolute top-40 right-[15%] text-yellow-400/20 w-20 h-20 animate-float" style={{ animationDelay: '1s' }} />
        <Cloud className="absolute bottom-40 left-[20%] text-white/10 w-24 h-24 animate-float" style={{ animationDelay: '1.5s' }} />
        <Sprout className="absolute bottom-20 right-[25%] text-emerald-400/20 w-16 h-16 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <div className="mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-600/20 text-emerald-400 text-sm font-medium backdrop-blur-sm border border-emerald-400/20">
              Established 2003 in Amhara Region
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
            Growing Together,<br />
            <span className="text-emerald-400 inline-block relative">
              Harvesting Success
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C47.6667 2.33333 141 -0.499999 199 5.5" stroke="#34D399" strokeWidth="2"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-neutral-200 leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
            Uniting 55 cooperatives to empower farmers through sustainable agriculture and economic growth
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
            <button 
              onClick={() => setShowJoinDialog(true)}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold flex items-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-emerald-500/20"
            >
              Join Our Community
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={scrollToAbout}
              className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/20 text-lg"
            >
              Learn About Us
            </button>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-8 opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">20+</div>
              <div className="text-neutral-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">55</div>
              <div className="text-neutral-400">Cooperatives</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">1000+</div>
              <div className="text-neutral-400">Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">5+</div>
              <div className="text-neutral-400">Export Markets</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium text-emerald-400">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Join Community Dialog */}
      <JoinCommunityDialog open={showJoinDialog} onOpenChange={setShowJoinDialog} />
    </section>
  );
}