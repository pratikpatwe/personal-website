"use client";

import { useState, useEffect } from "react";

const IntroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="intro" className="py-20 px-4 md:px-8 lg:px-16 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">INTRODUCTION</h2>
      </div>


      <div className="max-w-4xl mx-auto">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          {isClient && (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID?rel=0&autoplay=0&modestbranding=1&showinfo=0"
              title="Meet Pratik - AI Software Entrepreneur"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;