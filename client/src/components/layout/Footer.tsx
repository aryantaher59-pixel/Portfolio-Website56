import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0e2431] text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Taher's Portfolio</h3>
            <p className="text-gray-300 leading-relaxed">
              Thank you for visiting my personal portfolio website. Connect with me over socials. 
              <br /><br />
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-white">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-300 hover:text-[#fc8c05] transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-[#fc8c05] transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-[#fc8c05] transition-colors">Skills</a>
              <a href="#education" className="text-gray-300 hover:text-[#fc8c05] transition-colors">Education</a>
              <a href="#work" className="text-gray-300 hover:text-[#fc8c05] transition-colors">Work</a>
              <a href="#experience" className="text-gray-300 hover:text-[#fc8c05] transition-colors">Experience</a>
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-white">Contact Info</h3>
            <p className="text-gray-300 hover:text-[#fc8c05] transition-colors flex items-center gap-2">
              +880 XXX-XXX-XXXX
            </p>
            <p className="text-gray-300 hover:text-[#fc8c05] transition-colors flex items-center gap-2">
              taherkhan5530@gmail.com
            </p>
            <p className="text-gray-300 hover:text-[#fc8c05] transition-colors flex items-center gap-2">
              Sylhet-3108, Bangladesh
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <h1 className="text-xl font-medium flex items-center justify-center gap-2">
            Designed with <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" /> by 
            <a href="#" className="text-[#fc8c05] hover:underline">taher</a>
          </h1>
        </div>
      </div>
    </footer>
  );
}
