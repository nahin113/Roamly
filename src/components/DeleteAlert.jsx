"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2, AlertCircle } from "lucide-react";
import { redirect } from "next/navigation";

export function DeleteAlert({ destination}) {
    const handleDelete = async ()=> {
        const res = await fetch(`http://localhost:1003/destination/${destination._id}`, {
            method : "DELETE",
            headers : {
                "content-type" : "application.json"
            }
        });
        const data = await res.json()
        console.log(data)
        redirect('/destinations')
    }
  return (
    <AlertDialog>
      <Button
        variant="bordered"
        color="danger"
        startContent={<Trash2 size={16} />}
        className="border-red-200 text-red-500 bg-white hover:bg-red-50"
      >
        Delete
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
                  "{destination.destinationName}"
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
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                className="rounded-sm bg-[#EF4444] text-white px-6 h-12 font-medium hover:bg-red-600"
                startContent={<Trash2 size={18} />}
              >
                Delete Package
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
