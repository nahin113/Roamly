'use client';

import Link from "next/link";
import { Button } from "@heroui/react";
import { Compass, ArrowLeft, Map } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] w-full flex flex-col items-center justify-center bg-white px-4 text-center select-none">
      {/* Animated/Styled Compass Icon Container */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-32 h-32 bg-cyan-50 rounded-full animate-pulse opacity-70" />
        <Compass 
          size={80} 
          className="text-[#1FB6CD] relative z-10 animate-[spin_20s_linear_infinite]" 
          strokeWidth={1.5}
        />
      </div>

      {/* Error Code Tag */}
      <span className="text-sm font-bold tracking-widest text-[#1FB6CD] uppercase bg-cyan-50 px-3 py-1 rounded-full mb-4">
        Error 404
      </span>

      {/* Main Typography */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
        Lost in Paradise?
      </h1>
      
      <p className="text-gray-500 max-w-md text-base md:text-lg font-medium leading-relaxed mb-8">
        It looks like you’ve wandered off the beaten path. The destination or travel itinerary you are looking for isn’t on our map!
      </p>

      {/* Call to Actions (CTAs) */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        
        {/* Primary Action: Back to Home */}
        <Link href="/" passHref className="w-full sm:w-auto">
          <Button
            className="w-full sm:w-auto bg-[#1FB6CD] text-white font-semibold text-md h-12 px-6 rounded-md hover:bg-[#199db1] shadow-none border-none flex items-center gap-2"
            startContent={<ArrowLeft size={18} />}
          >
            Back to Home
          </Button>
        </Link>

        {/* Secondary Action: Explore Packages */}
        <Link href="/destinations" passHref className="w-full sm:w-auto">
          <Button
            variant="bordered"
            className="w-full sm:w-auto border-gray-200 text-gray-700 font-semibold text-md h-12 px-6 rounded-md hover:bg-gray-50 flex items-center gap-2"
            startContent={<Map size={18} className="text-gray-400" />}
          >
            Explore Destinations
          </Button>
        </Link>

      </div>
    </div>
  );
}