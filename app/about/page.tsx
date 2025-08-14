"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);

  useGSAP(() => {
    // Story section animation
    gsap.from(".story-image", {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".story-content", {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });

    // Mission section animation
    gsap.from(".mission-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });

    // Team member animations
    gsap.from(".team-member", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50 z-[-1]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            From Artisan Hands to Global Markets
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            This is the story behind Oitijjho Express – where culture, commerce,
            and community meet.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 story-image">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#FF5722]/10 rounded-full" />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#FF9800]/10 rounded-full" />
                <div className="relative z-10 h-64 md:h-96 bg-gray-300 rounded-xl overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-orange-500/20" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 story-content">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] rounded-full mb-6"></div>

              <p className="text-gray-600 mb-6">
                What does it feel like to hold a piece of history in your hands?
              </p>

              <p className="text-gray-600 mb-6">
                That question is what started Oitijjho Express. In 2010, we set
                out to protect the stories woven into Bangladesh's heritage. Not
                by putting them in a museum. But by keeping them alive in every
                home, on every table, through every product.
              </p>

              <p className="text-gray-600 mb-6">
                It began with a few handwoven textiles and a promise to a single
                artisan. Today, it is a nationwide movement built with over 200
                families who carry ancient knowledge in their hands.
              </p>

              <p className="text-gray-600 mb-6">
                Each product we offer is more than an item. It is a thread of
                someone's legacy, a clay pot shaped by the riverbank, a textile
                dyed by memory, a spice carried from field to port with care.
                When you choose from our collection, you do more than buy. You
                become part of a living story.
              </p>

              <p className="text-gray-600">
                We partner with global buyers, retailers, and conscious
                businesses to bring these stories forward. Together, we are not
                just selling. We are preserving. We are uplifting. We are
                connecting roots with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section ref={missionRef} className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We exist to honor what is beautiful and make it last. At Oitijjho
              Express, our mission is to keep tradition alive while building
              opportunity. Every relationship we build and every item we share
              is rooted in ethical sourcing, artisan empowerment, and cultural
              pride.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Because heritage should not be hidden, it should be held,
              celebrated, and shared.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mission-card bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center bg-[#FF5722]/10 text-[#FF5722] rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Preserve Heritage
              </h3>
              <p className="text-gray-600">
                We are committed to keeping traditional techniques alive. By
                giving artisans a platform to share their craft, we celebrate
                history not as something past, but as something still in motion.
              </p>
            </div>

            <div className="mission-card bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center bg-[#FF5722]/10 text-[#FF5722] rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Empower Artisans
              </h3>
              <p className="text-gray-600">
                Behind every item is a maker with a story. We ensure fair pay,
                sustainable work, and growth opportunities for the artisans who
                carry these traditions forward.
              </p>
            </div>

            <div className="mission-card bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center bg-[#FF5722]/10 text-[#FF5722] rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Promote Sustainability
              </h3>
              <p className="text-gray-600">
                We believe progress should never come at the cost of the planet.
                That is why we choose eco-conscious materials and time-honored
                methods that respect nature and reduce impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section ref={teamRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Oitijjho Express is made possible by a team that shares one
              mission: to uplift heritage through heart, hands, and hard work.
              From creative direction to community outreach, every member brings
              a story of their own to the journey we are building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                name: "Zinan Ishmam",
                role: "Founder and CEO",
                description: "Zinan Ishmam is the Founder and Chief Executive Officer of Oitijjho Express. Currently pursuing a Bachelor of Business Administration (BBA), he has completed a startup development program during his studies, equipping him with valuable entrepreneurial skills. Zinan oversees the company's strategic direction and sales operations, guiding the startup's growth with a clear vision. He is passionate about promoting Bangladesh's rich cultural heritage and is committed to bringing it recognition on the global stage."
              },
              {
                name: "Mostahidur Rahman Rafi",
                role: "Co-Founder & Managing Director",
                description: "Mostahidur Rahman Rafi is the Co-Founder and Managing Director of Oitijjho Express. He oversees core operations, including team coordination, strategic planning, and quality control. His structured approach ensures operational efficiency and alignment with the company's standards, contributing to the smooth and consistent execution of business activities."
              },
              {
                name: "M. Hasan Aoyon",
                role: "Chief Rural Development Manager",
                description: "M Hasan Aoyon leads rural engagement at Oitijjho Express as the Chief Rural Development Manager. His primary focus is building and maintaining strong relationships with artisan communities across the country. By understanding their needs and empowering their craft, he plays a key role in connecting tradition with opportunity, ensuring sustainable collaboration between the brand and its grassroots partners."
              },
              {
                name: "Shawon Mahbub",
                role: "Chief Technology Officer (CTO)",
                description: "Shawon Mahbub brings extensive technical expertise to Oitijjho Express as the Chief Technology Officer. With professional experience in a multinational company and a background in one of the country's leading telecom brands, he leads the development of the company's digital infrastructure. His knowledge in scalable systems and tech-driven solutions is vital to the startup's growth and innovation."
              },
             
              {
                name: "Shouvik Ahmed",
                role: "Chief Operating Officer (COO)",
                description: "Shouvik Ahmed is the Chief Operating Officer of Oitijjho Express, bringing valuable corporate experience to the startup environment. Known for his agility and adaptability, he oversees strategic implementation and client relations. His leadership ensures that the company's operations align with its long-term goals while maintaining strong relationships with clients and stakeholders."
              },
              {
                name: "Taimur Rohan",
                role: "Head of Production",
                description: "Taimur Rohan serves as the Head of Production at Oitijjho Express. With experience in leading restaurant chains across the country, he now oversees the development of visual content, promotional materials, and corporate media. His work is instrumental in enhancing the brand's identity and effectively communicating its values to a broader audience."
              }
            ].map((member, index) => (
              <div
                key={index}
                className="team-member bg-white p-6 rounded-xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
                  {/* Placeholder for team member photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-orange-500/20" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#FF5722] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                 
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
