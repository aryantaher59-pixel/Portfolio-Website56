import { motion } from "framer-motion";
import { Laptop, Eye, Code } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section id="work" className="min-h-screen py-20 bg-[#0e2431]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
            <Laptop className="w-10 h-10" /> Projects <span className="text-[#fc8c05]">Made</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a3b50] rounded-lg overflow-hidden shadow-xl group relative"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`/assets/images/projects/${project.image}.png`}
                  onError={(e) => {
                    // Fallback mechanism
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('password-gen')) {
                        if (target.src.endsWith('.png')) {
                            target.src = `/assets/images/projects/${project.image}.PNG`;
                        } else if (target.src.endsWith('.PNG')) {
                            target.src = `/assets/images/projects/${project.image}.jpg`;
                        }
                    }
                  }}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button variant="secondary" size="sm" asChild className="rounded-full">
                    <a href={project.links.view} target="_blank" rel="noreferrer">
                      <Eye className="w-4 h-4 mr-2" /> View
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild className="rounded-full">
                    <a href={project.links.code} target="_blank" rel="noreferrer">
                      <Code className="w-4 h-4 mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 text-sm line-clamp-3">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-[#fc8c05] hover:bg-[#e07b00] text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
