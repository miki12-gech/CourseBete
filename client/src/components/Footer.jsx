import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">CourseBete</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Preserving our heritage through digital education. Join thousands of students learning Geez, Zema, and Bible History online.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/register" className="hover:text-white transition">Register</a></li>
            <li><a href="/login" className="hover:text-white transition">Student Login</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <div className="space-y-3 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
                <Mail size={16} /> <span>contact@coursebete.com</span>
            </div>
            <div className="flex items-center gap-2">
                <Phone size={16} /> <span>+251988278015</span>
            </div>
            <div className="flex space-x-4 mt-4">
                <Facebook className="cursor-pointer hover:text-blue-500 transition" size={20} />
                <Twitter className="cursor-pointer hover:text-blue-400 transition" size={20} />
                <Instagram className="cursor-pointer hover:text-pink-500 transition" size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-600 text-xs mt-12 border-t border-slate-800 pt-6">
        © {new Date().getFullYear()} CourseBete. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;