"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import {
  MapPin,
  Calendar,
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { destinationFeatured } from "@/lib/actions";


const defaultDestinations = [
  {
    _id: "6a061e0b273df41ad77d7ad2",
    destinationName: "Bali Paradise",
    country: "Indonesia",
    category: "Beach",
    price: "1299",
    duration: "6 Days / 5 Nights",
    departureDate: "2026-05-15",
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    description: "Bali Paradise represents the ultimate tropical escape...",
  },
  {
    _id: "6a061ead4898484c720536e3",
    destinationName: "Everest Base Camp Trek",
    country: "Nepal",
    category: "Adventure",
    price: "1899",
    duration: "14 Days / 13 Nights",
    departureDate: "2026-10-01",
    imageUrl:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    description:
      "Everest Base Camp Trek takes you through the legendary Himalayas...",
  },
  {
    _id: "6a061ead4898484c720536e4",
    destinationName: "Tokyo City Explorer",
    country: "Japan",
    category: "City",
    price: "3199",
    duration: "10 Days / 9 Nights",
    departureDate: "2026-09-20",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    description:
      "Tokyo City Explorer immerses you in Japan's electric capital...",
  },
  {
    _id: "6a061ead4898484c720536e6",
    destinationName: "Maldives Overwater Luxury",
    country: "Maldives",
    category: "Luxury",
    price: "6999",
    duration: "6 Days / 5 Nights",
    departureDate: "2026-12-20",
    imageUrl:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
    description:
      "Maldives Overwater Luxury places you in a private bungalow suspended over the crystal-clear Indian Ocean...",
  },
];

export default function Featured({ destinations }) {
    const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive logic: items visible at once (Desktop: 3, Tablet: 2, Mobile: 1)
  const totalItems = destinations.length;

  const nextSlide = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to the start safely
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(totalItems - 1); // Loop to the end safely
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-white select-none">
      {/* 1. Header Layout Block */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Featured Destinations
          </h2>
          <p className="text-gray-500 font-medium text-sm mt-1">
            Handpicked travel experiences for the adventure seekers.
          </p>
        </div>

        <Link href="/destinations" passHref>
          <Button
            variant="light"
            className="text-[#1FB6CD] font-semibold text-xs tracking-wider p-0 h-auto hover:bg-transparent min-w-none flex items-center gap-1.5"
            endContent={<ArrowRight size={14} className="mt-0.5" />}
          >
            ALL DESTINATIONS
          </Button>
        </Link>
      </div>

      {/* 2. Sliding Track Window Container */}
      <div className="overflow-hidden w-full relative drop-shadow-sm py-2">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(-${currentIndex * 100}% / 3))` }}
        >
          {destinations.map((item) => (
            <div
              key={item._id}
              className="w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0"
            >
              <Card className="border-none bg-transparent shadow-none flex flex-col gap-3 group">
                {/* Image Wrap Section with Overlay Floating Rating Badge */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.destinationName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-white px-2 py-1 rounded-md shadow-sm text-xs font-bold text-gray-800">
                    <span>4.5</span>
                    <span className="text-amber-500">★</span>
                  </div>
                </div>

                {/* Content Details Block */}
                <div className="flex flex-col gap-1 px-1">
                  {/* Location Meta */}
                  <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                    <MapPin size={13} className="shrink-0" />
                    <span>{item.country}</span>
                  </div>

                  {/* Title & Pricing Grid Row */}
                  <div className="flex justify-between items-start gap-2 mt-0.5">
                    <h3 className="text-xl font-bold text-gray-900 leading-snug truncate max-w-[70%]">
                      {item.destinationName}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-xl font-bold text-gray-900">
                        ${item.price}
                      </span>
                      <span className="text-gray-400 text-xs font-normal">
                        /Person
                      </span>
                    </div>
                  </div>

                  {/* Duration Metadata */}
                  <div className="flex items-center gap-1 text-gray-400 text-xs font-medium mt-1">
                    <Calendar size={13} className="shrink-0" />
                    <span>{item.duration}</span>
                  </div>

                  {/* Booking CTA Trigger Action */}
                  <div className="mt-3">
                    <Link href={`/destinations/${item._id}`} passHref>
                      <Button
                        variant="light"
                        className="p-0 h-auto text-[#1FB6CD] font-bold text-xs tracking-wider hover:bg-transparent min-w-none flex items-center gap-1"
                        endContent={<ArrowUpRight size={15} />}
                      >
                        BOOK NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Slider Step Pagination & Controls Block (Matches Screenshot Bottom Footer Perfectly) */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-6">
        {/* Dynamic Display Index Counter step logic */}
        <div className="text-sm font-semibold text-gray-800 tracking-wide">
          {currentIndex + 1}/{totalItems}
        </div>

        {/* Carousel Chevron Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            isIconOnly
            radius="full"
            variant="bordered"
            onPress={prevSlide}
            className="w-10 h-10 min-w-none border-gray-200 text-gray-500 hover:bg-gray-50"
            aria-label="Previous step"
          >
            <ChevronLeft size={18} />
          </Button>
          <Button
            isIconOnly
            radius="full"
            variant="bordered"
            onPress={nextSlide}
            className="w-10 h-10 min-w-none border-gray-200 text-gray-500 hover:bg-gray-50"
            aria-label="Next step"
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
