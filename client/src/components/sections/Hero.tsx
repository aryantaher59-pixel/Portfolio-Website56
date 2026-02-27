import { motion } from "framer-motion";
import { ArrowDownCircle, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center relative overflow-hidden bg-[#f7f7f7]">
      {/* Background Particles/Effect would go here - simplified for React */}
      
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-[#0e2431]"
          >
            Hi There,<br />
            I'm Taher
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-[#0e2431] font-semibold"
          >
            I am into <span className="text-[#7303a7]">Web Development</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-start"
          >
            <Button 
              asChild 
              className="bg-[#7303a7] hover:bg-[#5a0282] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <a href="#about">
                About Me <ArrowDownCircle className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-taher-khan-8864503b0/", color: "bg-[#0077b5]" },
              { icon: Twitter, href: "https://x.com/MuhammedTa4048", color: "bg-[#1da1f2]" },
              { icon: Instagram, href: "https://www.instagram.com/cxtaher?igsh=NjN0d3F2dWJldDN3", color: "bg-[#e1306c]" },
              { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582955453879", color: "bg-[#1877f2]" },
            ].map((social, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.15 }}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center z-10"
        >
          <motion.img
            src="/assets/images/taher.jpg"
            alt="Hero"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).onerror = null;
              (e.currentTarget as HTMLImageElement).src = "/assets/images/profile.png";
            }}
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-lg object-contain drop-shadow-2xl animate-float rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
