import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Self Employed",
      role: "Full Stack Developer",
      date: "Oct 2021 - present",
      align: "right"
    },
    {
      company: "Mapstreak Flyseas",
      role: "Web Developer | Internship",
      date: "June 2021 - Dec 2021",
      align: "left"
    },
    {
      company: "The Spark Foundation",
      role: "Website Developer | Internship",
      date: "May 2021 - June 2021",
      align: "right"
    },
    {
      company: "The Spark Foundation",
      role: "Mobile Application Developer | Internship",
      date: "April 2021 - May 2021",
      align: "left"
    },
    {
      company: "Frshr Technologies",
      role: "Wordpress Developer | Internship",
      date: "April 2021 - April 2021",
      align: "right"
    },
    {
      company: "WonderingBlog",
      role: "Web Development & SEO | Internship",
      date: "March 2021 - April 2021",
      align: "left"
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0e2431] flex items-center justify-center gap-3">
            <Briefcase className="w-10 h-10" /> <span className="text-[#0e2431]">Experience</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0e2431] hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: exp.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  exp.align === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-5/12"></div>
                
                <div className="w-8 h-8 bg-white border-4 border-[#0e2431] rounded-full z-10 hidden md:block"></div>
                
                <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#7303a7] relative">
                  <h2 className="text-xl font-bold text-[#7303a7]">{exp.company}</h2>
                  <h3 className="text-lg font-semibold text-[#0e2431] mt-1">{exp.role}</h3>
                  <p className="text-gray-500 mt-2">{exp.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
