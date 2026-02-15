import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0e2431] flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10" /> My <span className="text-[#7303a7]">Education</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg italic">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#f7f7f7] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="/assets/images/educat/college.jpg" 
                alt="College" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0e2431]">Bachelor of Engineering in Information Technology</h3>
              <p className="text-gray-600 mt-2">Zeal College of engineering and research | SPPU</p>
              <h4 className="text-[#7303a7] font-bold mt-4">2020-2024 | Pursuing</h4>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#f7f7f7] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="/assets/images/educat/school.jpg" 
                alt="School" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0e2431]">HSC Science | Informatic Practices</h3>
              <p className="text-gray-600 mt-2">Shri L. G. Haria Multipurpose School | CBSE</p>
              <h4 className="text-[#7303a7] font-bold mt-4">2018-2020 | Completed</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
