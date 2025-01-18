import { Sprout, BookOpen, Package, Globe, Tractor, Users2, Warehouse, LineChart } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Fertilizer Distribution",
      description: "Importing and distributing high-quality fertilizers to member cooperatives on credit, ensuring farmers have access to essential agricultural inputs without financial strain."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Agricultural Products",
      description: "Purchasing staple crops directly from members at competitive prices, supporting both local consumption needs and export opportunities."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Training Programs",
      description: "Organizing comprehensive training on modern farming techniques, pest management, and crop rotation to enhance agricultural productivity."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Export Activities",
      description: "Facilitating international trade of products like niger seed and soybeans, connecting local farmers to global markets including China."
    }
  ];

  const initiatives = [
    {
      icon: <Tractor className="w-6 h-6" />,
      title: "Niger Seed Oil Production",
      description: "Establishing semi-refinery facilities for niger seed oil production and bottling"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Partnerships",
      description: "Collaborating with organizations like Agriterra for capacity building"
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Infrastructure",
      description: "Investing in transportation and storage facility improvements"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Market Development",
      description: "Creating new revenue streams through value-added products"
    }
  ];

  return (
    <section id="activities" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">Our Activities</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Supporting farmers through comprehensive services and innovative initiatives
          </p>
        </div>

        {/* Main Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                {activity.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{activity.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Business Initiatives */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Business Initiatives</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="group">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  {initiative.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{initiative.title}</h4>
                <p className="text-neutral-600 text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}