"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { RotateCcw, Home } from "lucide-react";

// We don't read ANY properties from the error prop to guarantee it won't crash
export default function Error({ reset }) {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-white px-4 text-center select-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Something went wrong
      </h1>

      <p className="text-gray-500 max-w-sm text-sm mb-6">
        An unexpected error occurred while loading this page. Please try again
        or head back to safety.
      </p>

      <div>
        {/* Safe fallback link */}
        <Link href="/" passHref>
          <Button
            variant="bordered"
            className="border-gray-200 text-gray-700 font-semibold h-11 px-5 rounded-md hover:bg-gray-50"
            startContent={<Home size={16} />}
          >
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
