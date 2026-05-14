import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import {
  ArrowLeft,
  Trash2, // Using Trash2 for the cancel/delete icon
  MapPin,
  Star,
  Calendar,
  Check,
  ArrowRight,
} from "lucide-react";
import { EditModal } from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlert";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Fetch data
  const res = await fetch(`http://localhost:1003/destination/${id}`);
  const destination = await res.json();

  // Fallback mock data to match your screenshot perfectly while you wire up your DB
  const mockData = {
    imageUrl: destination?.imageUrl || "/placeholder-hero.jpg", // Ensure this exists or use external URL
    country: destination?.country || "Indonesia",
    title: destination?.destinationName || "Bali Paradise",
    rating: destination?.rating || "4.9",
    reviews: destination?.reviews || "234",
    duration: destination?.duration || "7 Days / 6 Nights",
    overview:
      destination?.description ||
      "Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.",
    price: destination?.price || "1299",
    highlights: destination?.highlights || [
      "Luxury beachfront accommodation",
      "Visit Uluwatu Temple at sunset",
      "Traditional Balinese spa treatment",
      "Private beach dinner experience",
      "Sunrise trek to Mount Batur",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full bg-white min-h-screen">
      {/* 1. Top Navigation Bar */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-100">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Destinations</span>
        </Link>
        <div className="flex items-center gap-3">
          <EditModal destination={destination}></EditModal>
          <DeleteAlert destination={destination}></DeleteAlert>
        </div>
      </div>

      {/* 2. Hero Image Section */}
      <div className="w-full h-[350px] relative mt-6 rounded-lg overflow-hidden">
        <Image
          src={mockData.imageUrl}
          alt={mockData.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 3. Main Content Layout (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-1 text-gray-500 mb-2">
              <MapPin size={18} />
              <span className="font-medium">{mockData.country}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {mockData.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <Star size={18} className="fill-green-600 text-green-600" />
                <span>{mockData.rating}</span>
                <span className="text-gray-500 font-normal">
                  ({mockData.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-gray-500" />
                <span>{mockData.duration}</span>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-medium text-gray-900">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {mockData.overview}
            </p>
          </div>

          {/* Highlights Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-medium text-gray-900">Highlights</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-2">
              Discover the magic of Bali with pristine beaches, ancient temples,
              and vibrant culture. Experience luxury resorts, tropical
              landscapes, and unforgettable sunsets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
              {mockData.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-gray-600"
                >
                  <Check size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Booking Widget */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-8 shadow-sm border border-gray-100 bg-white rounded-xl">
            <div className="flex flex-col gap-6">
              {/* Pricing */}
              <div>
                <p className="text-gray-500 font-medium">Starting from</p>
                <div className="flex items-end gap-1 mt-1">
                  <h2 className="text-4xl font-bold text-[#1FB6CD]">
                    ${mockData.price}
                  </h2>
                </div>
                <p className="text-gray-500 text-sm mt-1">per person</p>
              </div>

              {/* Mock Date Picker Input */}
              <div className="w-full bg-gray-50 border border-gray-200 rounded-md p-3 text-gray-700 mt-2">
                05/15/2026
              </div>

              {/* Book Button */}
              <Button
                className="w-full bg-[#1FB6CD] text-white font-medium text-lg py-6 rounded-md hover:bg-[#199db1]"
                endContent={<ArrowRight size={18} />}
              >
                Book Now
              </Button>

              {/* Perks list */}
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-green-500 shrink-0" />
                  <span>Free cancellation up to 7 days</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-green-500 shrink-0" />
                  <span>Travel insurance included</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-green-500 shrink-0" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
