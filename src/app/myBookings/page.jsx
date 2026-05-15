import Image from "next/image";
import { Button, Card, Chip } from "@heroui/react";
import { Calendar, Eye, Trash2 } from "lucide-react";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { BookingCancelAlert } from "@/components/BookingCancelAlert";

const MyBookingPage = async () => {
    const session = await auth.api.getSession({headers : await headers()})
    const user =  session?.user
    const res = await fetch(`http://localhost:1003/booking/${user?.id}`);
    const data = await res.json()
    console.log(data)
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen bg-white">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
          My Bookings
        </h1>
        <p className="text-gray-500 font-medium text-sm mt-1">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* Bookings Container Grid */}
      <div className="flex flex-col gap-5">
        {data.map((booking) => (
          <Card
            key={booking._id}
            className="p-5 border border-gray-100 shadow-sm bg-white rounded-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition-shadow"
          >
            {/* Left Side Grouping: Image and Content metadata */}
            <div className="flex flex-col sm:flex-row items-start gap-5 w-full md:w-auto">
              {/* Destination Crop Wrapper */}
              <div className="relative w-full sm:w-[240px] h-[135px] shrink-0 rounded-sm overflow-hidden">
                <Image
                  src={booking.destinationImage}
                  alt={booking.destinationName}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 240px"
                  priority
                />
              </div>

              {/* Informational Text Metadata */}
              <div className="flex flex-col gap-2 pt-1">
                {/* Dynamic Status Chip styling to mirror visual mockups */}
                {/* <div>
                  <Chip
                    size="sm"
                    variant="flat"
                    className="h-6 text-xs font-semibold px-2"
                    classNames={{
                      base:
                        booking.status === "Confirmed"
                          ? "bg-green-50 text-green-600 border border-green-100"
                          : "bg-amber-50 text-amber-600 border border-amber-100",
                    }}
                    startContent={
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1 ${
                          booking.status === "Confirmed"
                            ? "bg-green-500"
                            : "bg-amber-500"
                        }`}
                      />
                    }
                  >
                    {booking.status}
                  </Chip>
                </div> */}

                <h2 className="text-2xl font-semibold text-gray-900 leading-snug">
                  {booking.destinationName}
                </h2>

                <div className="flex flex-col gap-1.5 text-sm font-medium text-gray-500 mt-0.5">
                  <div className="flex items-center gap-2">
                    <Calendar size={15} className="text-gray-400 shrink-0" />
                    <span>Departure: {booking.departureDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-normal">
                    <span className="font-medium text-gray-500">
                      Booking ID:
                    </span>
                    <span>{booking._id}</span>
                  </div>
                </div>

                {/* Mobile / Tablet view: inline price rendering */}
                <div className="text-3xl font-bold text-[#1FB6CD] mt-2 md:hidden">
                  ${booking.destinationPrice}
                </div>
              </div>
            </div>

            {/* Right Side Grouping: Price and CTA controls (Desktop displays) */}
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center w-full md:w-auto pt-3 md:pt-0 border-t border-gray-50 md:border-none gap-4">
              {/* Standalone Desktop Price Field */}
              <div className="hidden md:block text-3xl font-bold text-[#1FB6CD] leading-none mb-2">
                ${booking.destinationPrice}
              </div>

              {/* Action Operations Container */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end ml-auto sm:ml-0">
                {/* Cancel Trigger Action */}
                <BookingCancelAlert booking={booking}></BookingCancelAlert>
                {/* View Details Target Link */}
                <Button
                  variant="solid"
                  size="md"
                //   onPress={() => handleViewDetails(booking._id)}
                  className="bg-[#1FB6CD] text-white hover:bg-[#1da4b9] font-medium h-9 px-4 rounded-sm shadow-none"
                  startContent={<Eye size={15} />}
                >
                  View
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;


// Object;
// departureDate: "2026-05-15T00:00:00.000Z";
// destinationCountry: "Maldives";
// destinationId: "6a061ead4898484c720536e6";
// destinationImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80";
// destinationName: "Maldives Overwater Luxury";
// destinationPrice: "6999";
// _id: "6a0753ae4f80e0fdad97d384";