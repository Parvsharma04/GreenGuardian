"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Calendar, Clock, Info, MapPin, Recycle, Truck } from "lucide-react";
import { useState } from "react";

export default function TrackerPage() {
  const [selectedTab, setSelectedTab] = useState("trucks");

  return (
    <div className="container mx-auto py-10 px-4 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Waste Tracker</h1>
        <p className="text-muted-foreground mt-1">
          Track garbage collection and find proper waste disposal locations
        </p>
      </div>

      <Tabs defaultValue="trucks" className="mb-8" onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="trucks">Garbage Truck Tracker</TabsTrigger>
          <TabsTrigger value="locations">Disposal Locations</TabsTrigger>
        </TabsList>

        <TabsContent value="trucks" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Live Truck Tracker</CardTitle>
                  <CardDescription>
                    View real-time locations of garbage collection vehicles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-[400px] md:h-[500px] bg-muted rounded-md overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg text-center">
                        <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">Map view would display here</p>
                        <p className="text-xs text-muted-foreground mt-1">Showing real-time truck locations</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Label htmlFor="address">Your Address</Label>
                      <div className="flex gap-2 mt-1">
                        <Input id="address" placeholder="Enter your address" className="flex-1" />
                        <Button variant="outline" className="flex gap-1 whitespace-nowrap">
                          <MapPin className="h-4 w-4" />
                          <span className="hidden sm:inline">Current Location</span>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="radius">Radius</Label>
                      <Select defaultValue="5km">
                        <SelectTrigger id="radius" className="mt-1">
                          <SelectValue placeholder="Select radius" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1km">1 km</SelectItem>
                          <SelectItem value="5km">5 km</SelectItem>
                          <SelectItem value="10km">10 km</SelectItem>
                          <SelectItem value="20km">20 km</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <CardTitle>Nearby Trucks</CardTitle>
                  <CardDescription>
                    Collection vehicles in your area
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: "GT-1042", type: "General Waste", eta: "10 min", distance: "0.8 km" },
                      { id: "GT-0937", type: "Recycling", eta: "25 min", distance: "2.1 km" },
                      { id: "GT-1105", type: "Green Waste", eta: "40 min", distance: "3.5 km" },
                    ].map((truck, index) => (
                      <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Truck className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">{truck.id}</span>
                            <span className="text-sm text-muted-foreground">{truck.distance}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{truck.type}</div>
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-3 w-3" />
                            <span>ETA: {truck.eta}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Info className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Collection Schedule</CardTitle>
                  <CardDescription>
                    Upcoming waste collection in your area
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { day: "Monday", date: "May 20", type: "General Waste", time: "7:00 AM - 9:00 AM" },
                      { day: "Wednesday", date: "May 22", type: "Recycling", time: "8:00 AM - 10:00 AM" },
                      { day: "Friday", date: "May 24", type: "Green Waste", time: "7:00 AM - 9:00 AM" },
                    ].map((schedule, index) => (
                      <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{schedule.day}, {schedule.date}</div>
                          <div className="text-sm">{schedule.type}</div>
                          <div className="text-sm text-muted-foreground">{schedule.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">View Full Schedule</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="locations" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Waste Disposal Locations</CardTitle>
                  <CardDescription>
                    Find the nearest proper waste disposal facilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-[400px] md:h-[500px] bg-muted rounded-md overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg text-center">
                        <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">Map view would display here</p>
                        <p className="text-xs text-muted-foreground mt-1">Showing nearby disposal locations</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location-address">Your Address</Label>
                      <div className="flex gap-2 mt-1">
                        <Input id="location-address" placeholder="Enter your address" className="flex-1" />
                        <Button variant="outline" className="flex gap-1 whitespace-nowrap">
                          <MapPin className="h-4 w-4" />
                          <span className="hidden sm:inline">Current</span>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="waste-type">Waste Type</Label>
                      <Select defaultValue="all">
                        <SelectTrigger id="waste-type" className="mt-1">
                          <SelectValue placeholder="Select waste type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="general">General Waste</SelectItem>
                          <SelectItem value="recycling">Recycling</SelectItem>
                          <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                          <SelectItem value="electronic">Electronic Waste</SelectItem>
                          <SelectItem value="green">Green Waste</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Nearby Facilities</CardTitle>
                  <CardDescription>
                    Waste disposal locations in your area
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        name: "City Recycling Center",
                        type: "Recycling",
                        distance: "1.2 km",
                        address: "123 Green Street",
                        hours: "Mon-Sat: 8AM-6PM, Sun: Closed",
                        accepts: ["Paper", "Plastic", "Glass", "Metal"]
                      },
                      {
                        name: "EcoWaste Disposal",
                        type: "General & Hazardous",
                        distance: "3.5 km",
                        address: "456 Environment Ave",
                        hours: "Mon-Fri: 7AM-8PM, Sat-Sun: 9AM-5PM",
                        accepts: ["Household", "Hazardous", "Electronic"]
                      },
                      {
                        name: "GreenLife Composting",
                        type: "Green Waste",
                        distance: "4.8 km",
                        address: "789 Nature Blvd",
                        hours: "Mon-Sun: 7AM-7PM",
                        accepts: ["Yard Waste", "Food Waste", "Compostables"]
                      },
                    ].map((facility, index) => (
                      <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Recycle className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <span className="font-medium">{facility.name}</span>
                              <span className="text-sm text-muted-foreground">{facility.distance}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">{facility.type}</div>
                            <div className="text-sm text-muted-foreground">{facility.address}</div>
                          </div>
                        </div>
                        <div className="ml-10 space-y-2">
                          <div className="text-xs">
                            <span className="font-medium">Hours: </span>
                            <span className="text-muted-foreground">{facility.hours}</span>
                          </div>
                          <div className="text-xs">
                            <span className="font-medium">Accepts: </span>
                            <span className="text-muted-foreground">{facility.accepts.join(", ")}</span>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" variant="outline" className="flex-1">Directions</Button>
                            <Button size="sm" variant="outline" className="flex-1">Details</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">View All Facilities</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Waste Disposal Guidelines</CardTitle>
              <CardDescription>
                Learn how to properly dispose of different types of waste
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    type: "Recyclables",
                    icon: <Recycle className="h-5 w-5 text-primary" />,
                    items: "Paper, cardboard, plastic bottles, glass, aluminum cans",
                    instructions: "Clean and separate items. Remove caps from bottles. Flatten cardboard boxes."
                  },
                  {
                    type: "Hazardous Waste",
                    icon: <AlertTriangle className="h-5 w-5 text-primary" />,
                    items: "Batteries, paint, chemicals, fluorescent bulbs, motor oil",
                    instructions: "Never mix with regular trash. Take to designated collection points only."
                  },
                  {
                    type: "Electronic Waste",
                    icon: <Info className="h-5 w-5 text-primary" />,
                    items: "Computers, phones, TVs, appliances, cables",
                    instructions: "Take to e-waste recycling centers. Many retailers also offer take-back programs."
                  },
                ].map((guide, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        {guide.icon}
                      </div>
                      <h3 className="font-medium">{guide.type}</h3>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium">Includes: </span>
                        <span className="text-sm text-muted-foreground">{guide.items}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Instructions: </span>
                        <span className="text-sm text-muted-foreground">{guide.instructions}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6">View Complete Disposal Guide</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-muted rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Waste Management Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <div className="bg-primary/10 p-2 rounded-full h-fit">
              <Recycle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Reduce & Reuse</h3>
              <p className="text-sm text-muted-foreground">Choose reusable items over single-use products to minimize waste generation.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-primary/10 p-2 rounded-full h-fit">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Collection Schedule</h3>
              <p className="text-sm text-muted-foreground">Set reminders for collection days to ensure timely waste disposal.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-primary/10 p-2 rounded-full h-fit">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Special Disposal</h3>
              <p className="text-sm text-muted-foreground">Use our map to find specialized facilities for hazardous or electronic waste.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}