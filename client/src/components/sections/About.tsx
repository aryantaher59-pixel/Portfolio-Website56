import { motion } from "framer-motion";
import { User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0e2431] flex items-center justify-center gap-3">
            <User className="w-10 h-10" /> About <span className="text-[#7303a7]">Me</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img 
              src="/assets/images/profile2.jpg" 
              alt="Profile" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#0e2431]">I'm Jigar</h3>
            <span className="text-[#7303a7] text-xl font-semibold">Full Stack Developer</span>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              I am a Full-Stack developer based in Pune, India. 
              I am an Information Technology undergraduate from SPPU.
              I am very passionate about improving my coding skills & developing applications & websites.
              I build WebApps and Websites using MERN Stack.
              Working for myself to improve my skills.
              Love to build Full-Stack clones.
            </p>

            <div className="space-y-2 text-lg text-gray-700">
              <p><span className="text-[#7303a7] font-bold">Email:</span> jigarsable21@gmail.com</p>
              <p><span className="text-[#7303a7] font-bold">Place:</span> Pune, India - 412206</p>
            </div>

            <Button className="bg-[#7303a7] hover:bg-[#5a0282] text-white px-8 py-6 rounded-full text-lg mt-6 group">
              <a href="https://drive.google.com/file/d/1rZiXl562q7aVyk1kJ2nO85YBAq8ixTiw/view" target="_blank" className="flex items-center gap-2">
                Resume <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
