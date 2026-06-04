'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Description, Label } from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const BookNowCard = ({mockData}) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [departureDate, setDepartureDate] = useState(null); 
    
    const handleBooking = async ()=> {
      const bookingData = {
          userId : user?.id,
          userImage : user?.image,
          userName : user?.name,
          destinationId : mockData.id,
          destinationName : mockData.title,
          destinationPrice : mockData.price,
          destinationImage : mockData.imageUrl,
          destinationCountry : mockData.country,
          departureDate : new Date(departureDate)
      }

      // send token to backend in client component
      const { data : tokenData } = await authClient.token()
      console.log(tokenData.token)

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json()
      console.log(data)
      if (data.acknowledged) toast.success("Booking Successful");

    }
  return (
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
          <DateField
            className="w-[256px]"
            name="date"
            value={departureDate}
            onChange={setDepartureDate}
          >
            <Label>Date</Label>
            <DateField.Group>
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>
            <Description>
              Current value:{" "}
              {departureDate ? departureDate.toString() : "(empty)"}
            </Description>
          </DateField>
          <div className="flex gap-2">
            <Button
              variant="flat"
              onPress={() => setDepartureDate(today(getLocalTimeZone()))}
            >
              Set today
            </Button>
            <Button variant="flat" onPress={() => setDepartureDate(null)}>
              Clear
            </Button>
          </div>

          {/* Book Button */}
          <Button onClick={handleBooking}
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
  );
};

export default BookNowCard;
