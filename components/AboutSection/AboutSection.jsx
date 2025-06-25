"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="pt-20 pb-14 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video Section */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <video
              width="100%"
              height="100%"
              poster="https://www.japantimes.co.jp/uploads/imported_images/uploads/2021/02/np_file_65624.jpeg"
              controls
              className="rounded-xl shadow-lg max-w-2xl w-full"
            >
              <source src="qfs.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About QUANTUM FINANCIAL SYSTEM
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Little is it known that this new system has been designed in preparation for the takeover of the Central Bank Monetary Debt System to end the financial slavery and control over the populace. The Alliance gave President Trump the magic wand of taking over the old banking system without changing it.
                <br /><br />
                Humanity does not have the technology to fight the Deep State’s financial system. Extraterrestrials came to the rescue with alien or even other-dimensional technologies to accomplish this task. In Quantum Computers, intelligence is embedded without 3D proprieties. No 3D creation is able to replace the power of a living being. To this end, artificial intelligence (AI) was designed to replace conscious beings.
              </p>
            </div>
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4">
                <span className="text-blue-600 text-2xl pt-1">
                  {/* Example icon, replace with your own SVG or icon library */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2M7 7a4 4 0 118 0 4 4 0 01-8 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Easy to work with</h3>
                  <p className="text-gray-600">
                    QFS will consistently exceed customer expectation by providing value-adding banking solutions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-purple-600 text-2xl pt-1">
                  {/* Example icon, replace with your own SVG or icon library */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1m4 0h-1v4h-1" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Offers</h3>
                  <p className="text-gray-600">
                    QFS return outstanding value through our wide range of products and services.
                  </p>
                </div>
              </li>
            </ul>
            <a
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded transition shadow"
              href="https://www.qfs1776.com/_files/ugd/a16bfe_46e53371c3924d10a587d58fb9e5a0e1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              QUANTUM FINANCIAL SYSTEM manual
            </a>
          </motion.div>
         </div>
      </div>
    </section>
  );
}