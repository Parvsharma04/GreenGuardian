import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BarChart3, Leaf, Recycle, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-7xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          About GreenGuardian
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our mission is to empower communities to protect their environment
          through technology, incentives, and collective action.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-foreground/10 p-2 rounded-full">
                <Leaf className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-primary-foreground/90 mb-4">
              A world where every individual is empowered to contribute to
              environmental sustainability, creating cleaner, healthier
              communities for generations to come.
            </p>
            <p className="text-primary-foreground/90">
              We envision a future where waste management is efficient,
              transparent, and rewarding, where environmental issues are
              promptly addressed, and where communities work together to protect
              our planet.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              To provide innovative tools and incentives that make environmental
              protection accessible, engaging, and rewarding for everyone.
            </p>
            <p className="text-muted-foreground">
              We're committed to developing technology that connects
              individuals, communities, and organizations in a collaborative
              effort to create sustainable environmental practices and address
              ecological challenges.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">How GreenGuardian Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform combines technology, incentives, and community
            engagement to create a comprehensive environmental protection
            system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Recycle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">
                  Incentivized Recycling
                </h3>
                <p className="text-muted-foreground">
                  Earn rewards for recycling waste through our QR code system at
                  collection points. Track your contributions and redeem points
                  for valuable rewards.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Issue Reporting</h3>
                <p className="text-muted-foreground">
                  Report environmental hazards and sanitation problems. Our
                  system ensures accountability and tracks resolution progress.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Waste Tracking</h3>
                <p className="text-muted-foreground">
                  Access real-time information about garbage collection
                  schedules and nearby disposal facilities for different types
                  of waste.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Community Impact</h3>
                <p className="text-muted-foreground">
                  See the collective environmental impact of your community and
                  participate in challenges to amplify your contribution.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="mb-16 bg-muted rounded-lg p-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since our launch, GreenGuardian has made a significant difference in
            environmental protection efforts.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">5,280+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">12.5</div>
            <div className="text-muted-foreground">Tons of Waste Recycled</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">1,430+</div>
            <div className="text-muted-foreground">Issues Resolved</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">$45K+</div>
            <div className="text-muted-foreground">Rewards Distributed</div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals behind GreenGuardian who are
            dedicated to creating a more sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Rivera",
              role: "Founder & CEO",
              bio: "Environmental scientist with 15+ years of experience in waste management and sustainability initiatives.",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Samantha Chen",
              role: "CTO",
              bio: "Tech innovator with a background in IoT and environmental monitoring systems.",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Marcus Johnson",
              role: "Head of Community",
              bio: "Community organizer who has led successful environmental campaigns across multiple cities.",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Priya Patel",
              role: "Environmental Director",
              bio: "Environmental engineer specializing in waste reduction strategies and circular economy principles.",
              image:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "David Kim",
              role: "Partnerships Manager",
              bio: "Business development expert focused on creating sustainable partnerships with eco-conscious brands.",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Olivia Martinez",
              role: "UX Designer",
              bio: "Designer passionate about creating intuitive interfaces that make environmental action accessible to everyone.",
              image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
          ].map((member, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <div className="text-primary font-medium mb-2">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with organizations that share our commitment to
            environmental sustainability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6].map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center p-4 bg-muted/50 rounded-lg h-24"
            >
              <div className="text-2xl font-bold text-muted-foreground">
                Partner {partner}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Award className="h-12 w-12" />
        </div>
        <h2 className="text-3xl font-bold mb-4">
          Join the GreenGuardian Community
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Be part of the solution. Start making a difference in your community
          today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="rounded-md px-8">
              Sign Up Now
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="rounded-md px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-[#288453] dark:text-white"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
