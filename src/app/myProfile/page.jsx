import Image from "next/image";
import { Avatar, Button, Card } from "@heroui/react";
import {
  Camera,
  Pencil,
  Plane,
  DollarSign,
  User, 
} from "lucide-react";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;

  console.log(user)
  
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  const bookings = await res.json();


  const totalBookings = Array.isArray(bookings) ? bookings.length : 0;

  const totalSpent = Array.isArray(bookings)
    ? bookings.reduce(
        (sum, booking) => sum + (Number(booking.destinationPrice) || 0),
        0
      )
    : 0;


  const memberSinceDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Mar 2024";

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen bg-white">
      <div className="mb-10">
        <h1 className="text-4xl font-normal text-gray-900 tracking-tight">
          My Profile
        </h1>
        <p className="text-gray-500 font-medium text-sm mt-2">
          Manage your account settings and travel preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <Card className="w-full lg:w-[400px] p-8 border border-gray-100 shadow-sm bg-white rounded-md shrink-0">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden relative border-4 border-white shadow-sm bg-gray-100 flex items-center justify-center">
                {user?.image ? (
                  <Avatar className="w-full h-full">
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user?.name.charAt(0)}
                      src={user?.image}
                    ></Avatar.Image>
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                ) : (
                  <User size={48} className="text-gray-400" />
                )}
              </div>
              <button className="absolute bottom-1 right-1 bg-[#1FB6CD] p-2 rounded-full text-white hover:bg-[#199db1] transition-colors border-2 border-white">
                <Camera size={14} />
              </button>
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              {user?.name || "Anonymous User"}
            </h2>
          </div>

          <div className="w-full h-px bg-gray-100 my-6"></div>

          <div className="flex flex-col gap-4 text-sm w-full mb-8">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Member since</span>
              <span className="font-semibold text-gray-900">
                {memberSinceDate}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Email</span>
              <span className="font-semibold text-gray-900">{user?.email}</span>
            </div>
          </div>

          <Button
            className="w-full bg-[#1FB6CD] text-white hover:bg-[#199db1] rounded-sm font-medium h-11"
            startContent={<Pencil size={16} />}
          >
            Edit Profile
          </Button>
        </Card>

        <div className="w-full flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Travel Statistics
          </h3>

          <div className="grid grid-cols-1 gap-4">
            <Card className="p-6 border border-gray-100 shadow-sm bg-white rounded-md flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-400">
                  Total Bookings
                </span>
                <span className="text-2xl font-semibold text-gray-900">
                  {totalBookings}
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                <Plane size={22} className="rotate-45" />
              </div>
            </Card>

            <Card className="p-6 border border-gray-100 shadow-sm bg-white rounded-md flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-400">
                  Total Spent
                </span>
                <span className="text-2xl font-semibold text-gray-900">
                  ${totalSpent.toLocaleString()}
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-fuchsia-50 flex items-center justify-center text-fuchsia-400">
                <DollarSign size={22} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
