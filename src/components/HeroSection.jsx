import React, { useEffect, useState } from "react";

import { useFetchList } from "../hooks/api/useFetchList";


export const HeroSection = () => {

const { data, isLoading } = useFetchList("/quotes", "quotes");
// console.log("data",data);
  
    if (isLoading) return <p>Loading...</p>;

  return (
    <main className="py-16 h-full container mx-auto max-w-[1020px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="w-[75%] mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">
              Inspirational Quotes
            </h1>
            <div className="space-y-6 mt-10">
             {
                data?.quotes?.slice(0, 10).map((quote, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#0b4d6fb5] rounded shadow-md border-l-4 border-blue-500"
                  >
                    <p className="text-white font-medium text-[1.4rem] italic">
                      "{quote.quote}"
                    </p>
                    <p className="text-white text-[1rem] mt-2 text-right">
                      – {quote.author}
                    </p>
                  </div>
                ))
}
            </div>
          
          </div>

          
        </div>
      </div>
    </main>
  );
};
