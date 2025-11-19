import React,{useState} from "react";
import { motion } from "framer-motion";
import packet from "../assets/packet.jpg";
import loose from "../assets/loose.jpg";
import { X } from "lucide-react";

const products = [
  {
  image: loose,
  title: "Loose Makhana",
  description: [
    "Premium, hand-selected makhana ideal for wholesale, repacking, and bulk buyers. ✅",
    "Consistent quality, uniform size, and fully lab-tested for purity and safety. 🧪",
  ],
  
},
  {
    image: packet,
    title: "Packet Makhana",
    description: [
      "Retail-ready, hygienically packed makhana designed for modern trade and export shelves.🌍",
      "Attractive packaging, long shelf life, and guaranteed premium-grade quality.⭐",
    ],
    
  },
];

export default function Products() {
  
  const [details, setDetails] = useState({});
  return (
    <section className=" py-20 font-mont " style={{backgroundImage:"linear-gradient(to bottom, white, #FFFDEA)"}} id="product">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold  tracking-wide" style={{color: "#14532D"}}>
          Our Products
        </h2>
        <p className="text-gray-600 mt-3 text-lg px-5">
          Handpicked, Roasted, and Packed with Love - Discover Our Makhana Range
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-30 px-6 md:px-20">
        {products.map((item, index) => (
          <motion.div
         
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.15,
              y: -10,
              boxShadow: "0 10px 25px rgba(0, 128, 0, 0.25)",
            }}
            viewport={{ amount: 0.3 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden w-91 cursor-pointer transition-all duration-500"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold  mb-3 text-center" style={{color:"#166534"}}>
                {item.title}
              </h3>
              <ul className="text-gray-700 space-y-1 text-sm px-5">
                {item.description.map((line, i) => (
                  <li key={i}>• {line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
