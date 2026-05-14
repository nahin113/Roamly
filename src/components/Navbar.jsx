import { Link, Button } from "@heroui/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <ul className="flex items-center gap-4">
            <li>
              <Link className="no-underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="no-underline" href="/destinations">
                Destinations
              </Link>
            </li>
            <li>
              <Link className="no-underline" href="#">
                My Bookings
              </Link>
            </li>
            <li>
              <Link className="no-underline" href="#">
                Admin
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <Image
              className="w-25"
              src={"/assets/roamly_logo_main.png"}
              height={60}
              width={60}
              alt="roamly_logo_main"
            ></Image>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#" className="no-underline">
                Profile
              </Link>
            </li>
            <li>
              <Link className="no-underline" href="#">
                Login
              </Link>
            </li>
            <li>
              <Link className="no-underline" href="#">
                Sign Up
              </Link>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
