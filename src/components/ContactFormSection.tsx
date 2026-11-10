import { MapPin, Mail, Phone, Globe, ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';

export function ContactFormSection() {
  return (
    <section className="bg-white py-24 px-6 relative z-20">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Get In Touch */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
            We are always excited to connect with farmers, innovators, researchers, students, and organizations working toward a smarter agricultural future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Office Address Card */}
            <div className="bg-[#f4fbe9] rounded-3xl p-8 border border-[#e2f3d8]">
              <div className="w-12 h-12 rounded-2xl bg-white text-brand flex items-center justify-center mb-6 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Office Address</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                AgroSathi Innovation Lab<br/>
                Bangalore, Karnataka<br/>
                India
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-[#f4fbe9] rounded-3xl p-8 border border-[#e2f3d8]">
              <div className="w-12 h-12 rounded-2xl bg-white text-brand flex items-center justify-center mb-6 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <div className="flex flex-col gap-1">
                <a href="mailto:anjankumarln120@gmail.com" className="text-gray-600 hover:text-brand text-[15px] transition-colors">anjankumarln120@gmail.com</a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#f4fbe9] rounded-3xl p-8 border border-[#e2f3d8]">
              <div className="w-12 h-12 rounded-2xl bg-white text-brand flex items-center justify-center mb-6 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                <a href="tel:+917795988470" className="hover:text-brand transition-colors block mb-2 font-medium">+91 7795988470</a>
                Monday – Saturday<br/>
                9:00 AM – 7:00 PM
              </p>
            </div>

            {/* Website Card */}
            <div className="bg-[#f4fbe9] rounded-3xl p-8 border border-[#e2f3d8]">
              <div className="w-12 h-12 rounded-2xl bg-white text-brand flex items-center justify-center mb-6 shadow-sm">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Website</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                <a href="http://www.agrosathi.ai" className="hover:text-brand transition-colors block mb-2 font-medium">www.agrosathi.ai</a>
                Available Worldwide
              </p>
            </div>

          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us A Message</h2>
          
          <form className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">Full Name</label>
                <input type="text" placeholder="Enter your name" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8F24A] focus:border-transparent transition-all bg-gray-50/50" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">Email Address</label>
                <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8F24A] focus:border-transparent transition-all bg-gray-50/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8F24A] focus:border-transparent transition-all bg-gray-50/50" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">Organization (Optional)</label>
                <input type="text" placeholder="Enter organization name" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8F24A] focus:border-transparent transition-all bg-gray-50/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">City</label>
                <input type="text" placeholder="Enter city" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8F24A] focus:border-transparent transition-all bg-gray-50/50" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">State</label>
                <input type="text" placeholder="Enter state" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8F24A] focus:border-transparent transition-all bg-gray-50/50" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">Country</label>
                <select className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8F24A] focus:border-transparent transition-all bg-gray-50/50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.2em_1.2em] bg-no-repeat bg-[position:right_1rem_center]">
                  <option>Select country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Subject</label>
              <select className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8F24A] focus:border-transparent transition-all bg-gray-50/50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.2em_1.2em] bg-no-repeat bg-[position:right_1rem_center]">
                <option>Select a subject</option>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Farmer Support</option>
                <option>Business Partnership</option>
                <option>Government Collaboration</option>
                <option>Research Collaboration</option>
                <option>Project Demo</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Message</label>
              <textarea rows={4} placeholder="Write your message here..." className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8F24A] focus:border-transparent transition-all bg-gray-50/50 resize-none"></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Upload Attachment <span className="text-gray-400 font-normal">(Optional)</span></label>
              <div className="flex items-center gap-4">
                <button type="button" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg border border-gray-200 transition-colors">
                  Choose File
                </button>
                <span className="text-sm text-gray-500">No file chosen</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button type="button" className="flex-1 bg-[#B8F24A] hover:bg-[#a5db40] text-[#0a1f12] font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
              <button type="button" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-bold py-4 rounded-xl border border-gray-200 transition-colors flex items-center justify-center gap-2">
                Reset Form <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> We typically respond within 24 hours.
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
