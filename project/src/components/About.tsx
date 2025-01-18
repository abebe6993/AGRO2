import { Users, Target, History, Leaf } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">About Admas</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Since 2003, Admas Multipurpose Farmers Cooperative Union has been uniting and empowering farmers across the Amhara region through sustainable agriculture, fair trade practices, and comprehensive education programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mission */}
          <div className="feature-card group">
            <div className="w-16 h-16 mb-6 bg-emerald-100 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6">
              <Target className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed">
              Empowering local farmers through enhanced agricultural productivity, fair market access, and sustainable farming practices.
            </p>
          </div>

          {/* Community */}
          <div className="feature-card group">
            <div className="w-16 h-16 mb-6 bg-emerald-100 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Community</h3>
            <p className="text-neutral-600 leading-relaxed">
              A thriving network of 55 member cooperatives working together to strengthen smallholder farmers across the region.
            </p>
          </div>

          {/* Sustainability */}
          <div className="feature-card group">
            <div className="w-16 h-16 mb-6 bg-emerald-100 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6">
              <Leaf className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
            <p className="text-neutral-600 leading-relaxed">
              Promoting environmentally conscious farming practices while ensuring economic viability for our members.
            </p>
          </div>

          {/* History */}
          <div className="feature-card group">
            <div className="w-16 h-16 mb-6 bg-emerald-100 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6">
              <History className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Journey</h3>
            <p className="text-neutral-600 leading-relaxed">
              From our establishment in 2003 to today, we've grown into a leading agricultural cooperative in Ethiopia.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20 bg-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Objectives</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Enhancing agricultural productivity through modern techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Facilitating better market opportunities and fair pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Providing platform for resource and knowledge sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Supporting members with training and financial resources</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Future Plans</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Expanding awareness campaigns for new business opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Investing in transportation and storage infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Developing niger seed oil production facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Enhancing training programs and educational initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}