import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Award, MapPin, Recycle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Empowering Users to Protect Their Environment
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl">
            Join our community of environmental guardians. Earn rewards for
            recycling, report issues, and track waste management in your area.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/signup">
              <Button size="lg" className="rounded-md px-6">
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="rounded-md px-6 dark:text-white text-[#288453] border-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How GreenGuardian Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our platform provides multiple ways for you to contribute to a
              cleaner, healthier environment.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="space-y-1">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Recycling Rewards</CardTitle>
                <CardDescription>
                  Earn tokens and coupons for your recycling efforts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Scan QR codes at recycling points, track your contributions,
                  and redeem rewards from our partner businesses.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="space-y-1">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Report Issues</CardTitle>
                <CardDescription>
                  Flag sanitation problems and pollution concerns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Submit reports with photos and location data to alert
                  authorities about environmental hazards in your area.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="space-y-1">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Waste Tracker</CardTitle>
                <CardDescription>
                  Find nearby disposal sites and track collection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Real-time tracking of garbage collection vehicles and
                  information about proper waste disposal locations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="space-y-1">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community Impact</CardTitle>
                <CardDescription>
                  See the difference you're making
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track your environmental impact metrics and see how your
                  community is working together for a cleaner planet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Impact So Far
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Together, our community is making a significant difference in
              environmental protection.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-primary">5,280+</span>
              <span className="mt-2 text-base text-muted-foreground">
                Active Users
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-primary">12.5 tons</span>
              <span className="mt-2 text-base text-muted-foreground">
                Waste Recycled
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-primary">1,430+</span>
              <span className="mt-2 text-base text-muted-foreground">
                Issues Resolved
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-primary">$45,000+</span>
              <span className="mt-2 text-base text-muted-foreground">
                Rewards Distributed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 mb-10">
            Join thousands of environmentally conscious individuals who are
            working together to create a cleaner, healthier planet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="rounded-md px-6">
                Sign Up Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="rounded-md px-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
