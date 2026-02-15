import { motion } from "framer-motion";
import { Laptop } from "lucide-react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-[#f7f7f7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0e2431] flex items-center justify-center gap-3">
            <Laptop className="w-10 h-10" /> Skills & <span className="text-[#7303a7]">Abilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center gap-4 group cursor-pointer border-b-4 border-transparent hover:border-[#7303a7]"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-purple-50 transition-colors">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-lg font-semibold text-[#0e2431] group-hover:text-[#7303a7] transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
