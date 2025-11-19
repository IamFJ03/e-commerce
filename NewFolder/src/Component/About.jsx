import React from "react";
import { motion } from "framer-motion";
import { Award, Leaf, Tractor, Flame, Wallet, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Award className="w-10 h-10 text-green-700" />,
    title: "Premium Quality Makhana",
    desc: "We source only the finest, handpicked lotus seeds to ensure every bite is light, crunchy, and fresh.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-green-700" />,
    title: "100% Natural & Healthy",
    desc: "Roasted, not fried — free from preservatives or additives. Perfect for guilt-free snacking!",
  },
  {
    icon: <Tractor className="w-10 h-10 text-green-700" />,
    title: "Direct from Farmers",
    desc: "We work directly with local farmers to bring you ethically sourced makhana with fair trade quality.",
  },
  {
    icon: <Flame className="w-10 h-10 text-green-700" />,
    title: "Freshly Roasted on Demand",
    desc: "Each batch is freshly roasted to preserve crunch, aroma, and nutrition — delivered to your door.",
  },
  {
    icon: <Wallet className="w-10 h-10 text-green-700" />,
    title: "Affordable & Value-Packed",
    desc: "Enjoy premium-grade makhana at competitive prices — quality without compromise.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-700" />,
    title: "Hygienically Packed",
    desc: "Every pack is sealed with care in a clean, hygienic environment to ensure freshness and safety.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" py-20 px-6 md:px-16 lg:px-32 text-center font-mont border-b" style={{backgroundImage:"linear-gradient(to bottom, white, #FFFDEA)"}} id="about">
      <h2 className="text-4xl font-bold mb-20" style={{color:"#166534"}}>
        Why Choose Us ?
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ amount: 0.3 }}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2" style={{color:"#166534"}}>
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
