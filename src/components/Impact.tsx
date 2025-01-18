import { Users, Calendar, Leaf } from 'lucide-react';

export default function Impact() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "55+",
      label: "Member Cooperatives"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "20+",
      label: "Years of Service"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      number: "1000+",
      label: "Farmers Supported"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Making a difference in Ethiopian agriculture through sustainable practices and farmer empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto mb-8 bg-white/10 rounded-2xl flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold mb-4">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}