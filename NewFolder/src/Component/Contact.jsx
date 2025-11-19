import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      id="contact"
      className="max-h-screen w-full font-mont"
      style={{ backgroundColor: "#FFFDEA" }}
    >
      <div>

        <p className=" text-3xl md:text-4xl font-semibold pt-10 pb-10 text-center" style={{color:"#166534"}}>
          Contact Us
        </p>



        <div className=" text-white rounded-t-3xl py-10 px-6 md:px-16 lg:px-32" style={{backgroundColor:"#052E16"}}>
          <p className="text-3xl font-semibold text-center md:text-left md:text-4xl mb-10">
            Pure Pops
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-10">

            <div>
              <p className="text-2xl font-semibold mb-5">Visit Us</p>
              <p className="max-w-xs">
                Shop no 21, Building D, Eidgah Road, APMC Kalyan (W), Kalyan,
                Thane, Maharashtra, 421301
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold mb-5">Contact Us</p>
              <p className="mb-3">sales@sheenindustries.com</p>
              <p>numairsayed7@gmail.com</p>
            </div>

            <div>
              <p className="text-2xl font-semibold mb-5">Quick Links</p>

              <p
                className="hover:text-green-300 cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Home
              </p>

              <p
                className="my-3 hover:text-green-300 cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("product")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Our Products
              </p>

              <p
                className="my-3 hover:text-green-300 cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("service")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Services
              </p>

              <p
                className="hover:text-green-300 cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Why Choose Us?
              </p>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-400 mt-10 text-sm">
            © 2025 Pure Pops. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
