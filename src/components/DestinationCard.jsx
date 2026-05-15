import {
  Card,
  CardHeader,
  CardFooter,
  Button,
} from "@heroui/react";
import { MapPin, Calendar, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = ({ destination }) => {

  return (
    <Card className="border-none bg-transparent shadow-none">
      {/* Image Section */}
      <CardHeader className="p-0 relative">
        <Image
          src={destination.imageUrl}
          height={200}
          width={200}
          alt="destination"
          className="object-cover w-full h-50 rounded-none"
        ></Image>
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1 rounded-sm shadow-sm">
          <span className="text-sm font-bold text-gray-800">4.5</span>
          <Star size={14} className="fill-black text-black" />
        </div>
      </CardHeader>

      {/* Replaced CardBody with a standard div and padding */}
      <div className="px-1 py-4 flex-col gap-2">
        {/* Location */}
        <div className="flex items-center gap-1 text-gray-500">
          <MapPin size={18} />
          <span className="text-sm font-medium">{destination.country}</span>
        </div>

        {/* Title and Price */}
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-semibold text-gray-900">
            {destination.destinationName}
          </h3>
          <div className="text-right">
            <span className="text-2xl font-bold text-gray-900">
              ${destination.price}
            </span>
            <span className="text-gray-500 text-sm">/Person</span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-500 mt-1">
          <Calendar size={18} />
          <span className="text-sm font-medium">{destination.duration}</span>
        </div>
      </div>

      <CardFooter className="px-1 py-0">
        <Link href={`/destinations/${destination._id}`}>
        <Button
          variant="light"
          className="p-0 h-auto text-[#2EB9D5] font-normal"
          endContent={<ArrowUpRight size={20} />}
        >
          BOOK NOW
        </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
