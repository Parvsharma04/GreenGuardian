"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/Auth";
import { cn } from "@/lib/utils";
import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const userNavigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Recycling Rewards", href: "/recycling" },
  { name: "Report Issues", href: "/report" },
  { name: "Waste Tracker", href: "/tracker" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const auth = useAuth();

  function signOut() {
    localStorage.removeItem("token");
    auth.setToken(null);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">GreenGuardian</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {auth.token &&
            userNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          {!auth.token &&
            mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          {!auth.token ? (
            <>
              <Link href="/signup">
                <Button>Sign up</Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
            </>
          ) : (
            <Button variant="destructive" onClick={() => signOut()}>
              Sign Out
            </Button>
          )}
          <ModeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex items-center justify-between p-4 pt-6">
                <Link
                  href="/"
                  className="-m-1.5 p-1.5 flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Leaf className="h-8 w-8 text-primary" />
                  <span className="font-bold text-xl">GreenGuardian</span>
                </Link>
                <Button
                  variant="ghost"
                  className="-m-2.5 rounded-md p-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className={` flow-root px-6 dark:bg-black bg-white`}>
                <div className="space-y-2 py-6">
                  {auth.token &&
                    userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                          pathname === item.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t py-6 flex gap-4 justify-center">
                  {!auth.token ? (
                    <>
                      <Link href="/signup">
                        <Button>Sign up</Button>
                      </Link>
                      <Link href="/login">
                        <Button variant="ghost">Log in</Button>
                      </Link>
                    </>
                  ) : (
                    <Button variant="destructive" onClick={() => signOut()}>
                      Sign Out
                    </Button>
                  )}
                  <ModeToggle />
                  <div className="flex justify-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
