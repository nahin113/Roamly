"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2, AlertCircle } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";

export function BookingCancelAlert({ booking }) {
  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${booking._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application.json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      toast.error("Booking Canceled");
      redirect("/myBookings");
    } else toast.error("Try Again");
  };
  return (
    <AlertDialog>
      <Button
        variant="bordered"
        size="md"
        className="border-red-200 text-red-500 bg-white hover:bg-red-50 font-medium h-9 px-4 rounded-sm"
        startContent={<Trash2 size={15} />}
      >
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          {/* Increased width slightly to match the screenshot aspect ratio */}
          <AlertDialog.Dialog className="sm:max-w-[500px] rounded-none p-4">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header className="flex flex-row items-center gap-4 border-none pb-2">
              {/* Custom Icon container to match the soft red circle */}
              <div className="bg-red-50 p-3 rounded-full">
                <AlertCircle className="text-red-500 size-6" />
              </div>
              <AlertDialog.Heading className="text-xl font-normal text-gray-800">
                Delete Travel Package
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body className="py-2 px-14">
              <p className="text-gray-500 leading-relaxed">
                Are you sure you want to delete{" "}
                <strong className="text-gray-900 font-bold">
                  "{booking.destinationName}"
                </strong>
                ? This action cannot be undone and will permanently remove this
                travel package from the system.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="border-none pt-6 pb-2 flex justify-end gap-3">
              <Button
                slot="close"
                variant="outline"
                className="rounded-sm border-gray-200 text-gray-500 px-8 h-12 font-medium hover:bg-gray-50"
              >
                Abort
              </Button>
              <Button
                onClick={handleDelete}
                className="rounded-sm bg-[#EF4444] text-white px-6 h-12 font-medium hover:bg-red-600"
                startContent={<Trash2 size={18} />}
              >
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
