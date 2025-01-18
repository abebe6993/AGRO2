import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">Contact Us</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us to learn more about our cooperative union and how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-neutral-50 p-10 rounded-2xl shadow-sm">
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Address</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Injibara, Awi Zone<br />
                  Amhara Region, Ethiopia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Phone</h3>
                <p className="text-neutral-600 leading-relaxed">+251 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-neutral-600 leading-relaxed">info@admascooperative.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}