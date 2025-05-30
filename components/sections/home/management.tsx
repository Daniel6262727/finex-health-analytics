"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import ManagementCard from "@/components/sections/home/management-card";
import { TextReveal } from "@/components/ui/text-reveal";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function ManagementSection() {
  const { ref } = useSectionScroll("team");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section id="team" ref={ref} className="flex justify-center items-center">
      <div
        ref={animationRef}
        className="flex flex-col container relative py-[10rem] max-w-7xl mx-auto px-[6rem] mb-[10rem]"
      >
        <motion.div
          className="container max-w-6xl mb-10"
          initial="hidden"
          animate={animationState}
          variants={variants}
          transition={transition}
        >
          <h2 className="text-start text-7xl font-bold mb-4 text-zinc-700 font-urbanist font-urban">
            Meet our Management Team
          </h2>
          <p className="text-gray-600 text-lg font-medium mb-8 max-w-3xl">
            Our management team is a blend of healthcare analytics experts and
            data scientists. We are committed to delivering innovative solutions
            that can transform the healthcare landscape.
          </p>
        </motion.div>

        <div className="flex flex-col items-start gap-10">
          <div className="flex gap-8 justify-start">
            {/* Management Card - passing the parent animation state */}
            <ManagementCard
              name="Chris N. Anazia"
              description="Expert in healthcare innovation, cybersecurity, and fintech with 15+ years in risk management, AI, and healthcare financing."
              position="Founder & CEO"
              image="/images/ceo.webp"
              animationState={animationState}
              delay={0.3}
            />

            <ManagementCard
              name="Stanley U. Egbuchulam"
              description="Specialist in financial optimization, digital transformation, and strategic business development."
              position="Finance & Business Strategy Expert"
              image="/images/stanley.png"
              animationState={animationState}
              delay={0.3}
            />
          </div>
          <motion.div
            initial="hidden"
            animate={animationState}
            variants={variants}
            transition={{ ...transition, delay: 0.8 }}
          >
            <Button
              className="bg-[#EEF2FF] font-bold rounded-full text-neutral-600 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white text-lg p-8 drop-shadow-xl drop-shadow-indigo-100 shadow-xl transition duration-300 w-full hover:scale-110 cursor-pointer"
              variant={"outline"}
              onClick={() => window.open("/company", "_self")}
            >
              Explore More
            </Button>
          </motion.div>
          <div className="mt-10">
            <TextReveal>
              &#34;Finex Healthcare Analytics was founded in 2022 to improve
              global healthcare delivery through digital innovation, with a
              focus on health economics and public health.&#34;
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
