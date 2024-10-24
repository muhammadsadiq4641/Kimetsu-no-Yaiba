"use client";
import FaqsCard from "@components/common/faq-card";
import { motion } from "framer-motion";
import React from "react";

const Faqs = () => {
  const cardData = [
    {
      id: 1,
      question: "High Throughput Capability",
      answer:
        "TNET handles up to 25,000 transactions per second, ensuring rapid processing and minimal latency for users, making it ideal for high-volume transaction environments.",
    },
    {
      id: 2,
      question: "EVM Compatibility",
      answer:
        "Fully compatible with the Ethereum Virtual Machine, TNET offers seamless integration for developers to migrate and deploy existing Ethereum-based applications, facilitating easy access to a robust and scalable blockchain infrastructure.",
    },
    {
      id: 3,
      question: "Advanced Security Protocols",
      answer:
        "TNET enhances transaction security through advanced cryptographic techniques, including zero-knowledge proofs and ring signatures, offering privacy and security without compromising on speed or usability",
    },
    {
      id: 4,
      question: "Community-Driven Governance",
      answer:
        "TNET supports a decentralized governance model, giving token holders a direct voice in important decisions and future developments of the network. This democratic approach ensures that the blockchain evolves in alignment with the community's needs and values.",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="  border-t-2  border-white "
        id="faqs"
      />
      <div className="py-2 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="flex flex-row lg:justify-start items-start gap-4 lg:gap-64 "
          >
            <p className="text-white">05</p>
            <p className="text-white uppercase">FAQs</p>
          </motion.div>

          <div className="py-12 grid grid-cols-1 lg:grid-cols-2 overflow-clip gap-4 lg:ps-20 xl:ps-32 ">
            {cardData.map((item) => (
              <FaqsCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
