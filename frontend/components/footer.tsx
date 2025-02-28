import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/privacy" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
            Contact Us
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">GreenGuardian</span>
          </div>
          <p className="text-center text-xs leading-5 text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} GreenGuardian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}