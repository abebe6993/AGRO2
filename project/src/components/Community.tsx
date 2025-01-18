import { Users2, Sprout, HandshakeIcon, GraduationCap, Building2, LineChart, ArrowRight } from 'lucide-react';
import { JoinCommunityDialog } from './JoinCommunityDialog';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Community() {
  const [showJoinDialog, setShowJoinDialog] = useState(false);

  const benefits = [
    {
      icon: <HandshakeIcon className="w-8 h-8" />,
      title: "Collective Bargaining",
      description: "Access better market prices and strengthen negotiating power through our unified network."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Training & Development",
      description: "Regular workshops and training sessions on modern farming techniques and business management."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Infrastructure Access",
      description: "Use of shared storage facilities, transportation, and processing equipment."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Market Access",
      description: "Direct connections to local and international markets for better profit margins."
    }
  ];

  const testimonials = [
    {
      name: "Alemayehu Tadesse",
      role: "Niger Seed Farmer",
      image: "https://images.unsplash.com/photo-1507103011901-e954d6ec0988?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Joining Admas transformed my farming business. The training and market access helped me double my income."
    },
    {
      name: "Tigist Bekele",
      role: "Dairy Cooperative Leader",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The cooperative's support in modernizing our dairy production has been invaluable for our community."
    },
    {
      name: "Getachew Assefa",
      role: "Grain Producer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Through Admas, we've gained access to better seeds and modern farming techniques."
    }
  ];

  return (
    <section id="community" className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjV2MTBINDBWMjVoMTB6TTMwIDI1djEwSDIwVjI1aDEweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />

        <div className="container-custom py-24">
          {/* Hero Section */}
          <div className="relative z-10 text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
                Join Our Community
              </span>
            </div>
            <h2 className="text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Growing Together,{' '}
              <span className="text-emerald-600 relative">
                Harvesting Success
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47.6667 2.33333 141 -0.499999 199 5.5" stroke="#059669" strokeWidth="2"/>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Join Ethiopia's leading agricultural cooperative, where farmers work together to achieve greater success.
            </p>
            <button
              onClick={() => setShowJoinDialog(true)}
              className="btn btn-primary group text-lg inline-flex shadow-lg shadow-emerald-500/20"
            >
              Become a Member
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Enhanced Tabbed Content */}
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="inline-flex h-11 items-center justify-center rounded-lg bg-neutral-100 p-1">
                <TabsTrigger
                  value="overview"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-neutral-200 data-[state=active]:hover:bg-emerald-500"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="benefits"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-neutral-200 data-[state=active]:hover:bg-emerald-500"
                >
                  Benefits
                </TabsTrigger>
                <TabsTrigger
                  value="testimonials"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-neutral-200 data-[state=active]:hover:bg-emerald-500"
                >
                  Testimonials
                </TabsTrigger>
                <TabsTrigger
                  value="join"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-neutral-200 data-[state=active]:hover:bg-emerald-500"
                >
                  Join
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Rest of the content remains the same */}
            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="bg-white rounded-2xl p-12 shadow-xl shadow-emerald-500/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    { value: '55+', label: 'Member Cooperatives' },
                    { value: '1000+', label: 'Active Farmers' },
                    { value: '20+', label: 'Years of Impact' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                      <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-lg text-neutral-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 space-y-6 text-lg text-neutral-600 leading-relaxed">
                  <p>
                    Our community is built on the principles of cooperation, mutual support, and sustainable agriculture. 
                    Through our network of member cooperatives, we've created a thriving ecosystem that benefits farmers 
                    across the Amhara region.
                  </p>
                  <p>
                    We focus on empowering farmers through knowledge sharing, resource pooling, and market access, 
                    creating opportunities for growth and development in rural communities.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Benefits Tab */}
            <TabsContent value="benefits">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group bg-white p-10 rounded-2xl shadow-xl shadow-emerald-500/5 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 text-white transform group-hover:rotate-6 transition-transform">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-neutral-900">{benefit.title}</h3>
                    <p className="text-neutral-600 text-lg leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-xl shadow-emerald-500/5 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
                    <div className="relative mb-8">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-2xl object-cover"
                      />
                      <div className="absolute -bottom-4 left-16 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-neutral-900">{testimonial.name}</h4>
                    <blockquote className="text-neutral-600 text-lg leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* How to Join Tab */}
            <TabsContent value="join">
              <div className="bg-white rounded-2xl p-12 shadow-xl shadow-emerald-500/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    { step: 1, title: 'Apply', desc: 'Fill out our membership application form with your details' },
                    { step: 2, title: 'Review', desc: 'Our team will review your application and contact you' },
                    { step: 3, title: 'Welcome', desc: 'Complete the registration process and join our community' }
                  ].map((item) => (
                    <div key={item.step} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                      <div className="relative p-8 text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                          <span className="text-2xl font-bold">{item.step}</span>
                        </div>
                        <h4 className="text-2xl font-semibold mb-4 text-neutral-900">{item.title}</h4>
                        <p className="text-neutral-600 text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setShowJoinDialog(true)}
                    className="btn btn-primary group text-lg inline-flex shadow-lg shadow-emerald-500/20"
                  >
                    Start Application
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Join Dialog */}
      <JoinCommunityDialog open={showJoinDialog} onOpenChange={setShowJoinDialog} />
    </section>
  );
}