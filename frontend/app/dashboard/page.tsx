"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Award,
  BarChart3,
  Leaf,
  MapPin,
  Recycle,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Track your environmental impact and contributions
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Points</CardTitle>
            <CardDescription>Lifetime earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,250</div>
            <div className="text-xs text-muted-foreground mt-1">
              +125 points this month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recycled Items</CardTitle>
            <CardDescription>Total contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">78</div>
            <div className="text-xs text-muted-foreground mt-1">
              12.5 kg of waste recycled
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Reports Submitted</CardTitle>
            <CardDescription>Environmental issues reported</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15</div>
            <div className="text-xs text-muted-foreground mt-1">
              12 issues resolved
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">CO₂ Saved</CardTitle>
            <CardDescription>Environmental impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">35 kg</div>
            <div className="text-xs text-muted-foreground mt-1">
              Equivalent to planting 2 trees
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  type: "Recycling",
                  description: "Recycled 2.5kg of plastic bottles",
                  date: "Today",
                  icon: <Recycle className="h-5 w-5 text-primary" />,
                  points: "+25",
                },
                {
                  type: "Report",
                  description: "Reported illegal dumping at Riverside Park",
                  date: "Yesterday",
                  icon: <AlertTriangle className="h-5 w-5 text-primary" />,
                  status: "In Progress",
                },
                {
                  type: "Recycling",
                  description: "Recycled 1.8kg of paper waste",
                  date: "2 days ago",
                  icon: <Recycle className="h-5 w-5 text-primary" />,
                  points: "+18",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                >
                  <div className="bg-primary/10 p-2 rounded-full">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{activity.type}</span>
                      {activity.points && (
                        <span className="text-primary font-medium">
                          {activity.points}
                        </span>
                      )}
                      {activity.status && (
                        <span className="text-muted-foreground">
                          {activity.status}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {activity.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Environmental Impact</CardTitle>
            <CardDescription>
              Your contribution to sustainability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">
                    Monthly Recycling Goal
                  </span>
                  <span className="text-sm text-muted-foreground">
                    12.5 kg / 20 kg
                  </span>
                </div>
                <Progress value={62.5} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">
                    CO₂ Emissions Saved
                  </span>
                  <span className="text-sm text-muted-foreground">
                    35 kg / 100 kg goal
                  </span>
                </div>
                <Progress value={35} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Community Rank</span>
                  <span className="text-sm text-muted-foreground">Top 5%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button className="w-full" asChild>
                <Link href="/recycling">
                  <Recycle className="mr-2 h-4 w-4" />
                  Recycle Now
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/report">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Report Issue
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Available Rewards</CardTitle>
            <CardDescription>Redeem your points</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "10% Off at EcoStore",
                  points: 500,
                  description: "Valid for any purchase",
                },
                {
                  title: "Free Coffee",
                  points: 350,
                  description: "At participating cafes",
                },
                {
                  title: "Plant a Tree",
                  points: 1000,
                  description: "In your name",
                },
              ].map((reward, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0"
                >
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{reward.title}</span>
                      <span className="text-primary">{reward.points} pts</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {reward.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/recycling">View All Rewards</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nearby Facilities</CardTitle>
            <CardDescription>Waste disposal locations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "City Recycling Center",
                  distance: "1.2 km",
                  status: "Open",
                },
                {
                  name: "Green Waste Facility",
                  distance: "2.5 km",
                  status: "Open",
                },
                {
                  name: "Electronics Recycling",
                  distance: "3.8 km",
                  status: "Closed",
                },
              ].map((facility, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0"
                >
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{facility.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {facility.distance}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "text-xs",
                        facility.status === "Open"
                          ? "text-green-500"
                          : "text-red-500"
                      )}
                    >
                      {facility.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/tracker">View All Facilities</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Stats</CardTitle>
            <CardDescription>Local environmental impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Total Community Impact</div>
                  <div className="text-2xl font-bold">12.5 tons</div>
                  <div className="text-sm text-muted-foreground">
                    Waste recycled this month
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 pb-3 border-b">
                <div className="bg-primary/10 p-2 rounded-full">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Issues Resolved</div>
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-muted-foreground">
                    Resolution rate
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Active Users</div>
                  <div className="text-2xl font-bold">5,280+</div>
                  <div className="text-sm text-muted-foreground">
                    In your area
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
