"use client";
import { authClient } from "@/lib/auth-client";
import { Link, Button, Avatar } from "@heroui/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async ()=> {
    await authClient.signOut()
  }
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
            {user ? (
              <>
                <li>
                  <Avatar>
                    <Avatar.Image referrerPolicy="no-referrer"
                      alt={user?.name.charAt(0)}
                      src={user?.image}
                    ></Avatar.Image>
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </li>
                <li>
                  <Button onClick={handleLogout} className="rounded-sm" variant="danger">
                  Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="no-underline" href="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="no-underline" href="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
