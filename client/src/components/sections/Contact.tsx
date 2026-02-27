import { useState } from "react";
import { motion } from "framer-motion";
import { Headset, User, Mail, Phone, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      alert("Message sent — thank you!");
    } catch (err) {
      console.error(err);
      alert("Sorry — failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="min-h-screen py-20 bg-[#f7f7f7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0e2431] flex items-center justify-center gap-3">
            <Headset className="w-10 h-10" /> Get in <span className="text-[#7303a7]">Touch</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex-1 w-full max-w-md">
            <img
              src="/assets/images/contact1.png"
              alt="Contact"
              className="w-full h-auto object-contain animate-pulse"
            />
          </div>

          <div className="flex-1 w-full max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName((e.target as HTMLInputElement).value)}
                  className="pl-10 py-6 text-lg bg-[#f7f7f7] border-none focus:ring-2 focus:ring-[#7303a7]"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                  className="pl-10 py-6 text-lg bg-[#f7f7f7] border-none focus:ring-2 focus:ring-[#7303a7]"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <Input
                  placeholder="Phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
                  className="pl-10 py-6 text-lg bg-[#f7f7f7] border-none focus:ring-2 focus:ring-[#7303a7]"
                />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <Textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
                  className="pl-10 py-4 text-lg bg-[#f7f7f7] border-none focus:ring-2 focus:ring-[#7303a7] min-h-[150px]"
                />
                <MessageSquare className="absolute left-3 top-6 text-gray-400" />
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-[#7303a7] hover:bg-[#5a0282] text-white py-6 text-lg rounded-full group">
                {loading ? "Sending..." : (
                  <>
                    Submit <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
