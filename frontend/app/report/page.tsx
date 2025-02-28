"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Camera, MapPin, Upload, CheckCircle2 } from "lucide-react";

export default function ReportPage() {
  const [reportSubmitted, setReportSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the report data to the backend
    setReportSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setReportSubmitted(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Report Environmental Issues</h1>
        <p className="text-muted-foreground mt-1">
          Help us identify and address environmental problems in your community
        </p>
      </div>

      <Tabs defaultValue="new-report" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="new-report">New Report</TabsTrigger>
          <TabsTrigger value="my-reports">My Reports</TabsTrigger>
          <TabsTrigger value="community">Community Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="new-report" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Submit a New Report</CardTitle>
              <CardDescription>
                Provide details about the environmental issue you've observed
              </CardDescription>
            </CardHeader>
            <CardContent>
              {reportSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-3 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Report Submitted Successfully!</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Thank you for your contribution. Our team will review your report and take appropriate action.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="issue-type">Issue Type</Label>
                      <Select required>
                        <SelectTrigger id="issue-type">
                          <SelectValue placeholder="Select issue type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="illegal-dumping">Illegal Dumping</SelectItem>
                          <SelectItem value="sanitation">Sanitation Problem</SelectItem>
                          <SelectItem value="industrial-pollution">Industrial Pollution</SelectItem>
                          <SelectItem value="water-pollution">Water Pollution</SelectItem>
                          <SelectItem value="air-pollution">Air Pollution</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <div className="flex gap-2">
                        <Input id="location" placeholder="Enter address or location" className="flex-1" required />
                        <Button type="button" variant="outline" className="flex gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="hidden sm:inline">Use Current</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Describe the environmental issue in detail..." 
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label>Severity</Label>
                      <RadioGroup defaultValue="medium" className="flex flex-col sm:flex-row gap-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="low" id="low" />
                          <Label htmlFor="low" className="font-normal">Low</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium" className="font-normal">Medium</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="high" id="high" />
                          <Label htmlFor="high" className="font-normal">High</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="critical" id="critical" />
                          <Label htmlFor="critical" className="font-normal">Critical</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label>Upload Photos</Label>
                      <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center">
                        <div className="flex flex-col items-center">
                          <Camera className="h-8 w-8 text-muted-foreground mb-2" />
                          <div className="text-sm text-muted-foreground mb-4">
                            Drag and drop photos here or click to browse
                          </div>
                          <Button type="button" variant="outline" size="sm" className="flex gap-1">
                            <Upload className="h-4 w-4" />
                            Browse Files
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="contact">Contact Information (Optional)</Label>
                      <Input id="contact" placeholder="Email or phone number for follow-up" />
                      <p className="text-xs text-muted-foreground mt-1">
                        We may contact you for additional information if needed.
                      </p>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">Submit Report</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="my-reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>My Submitted Reports</CardTitle>
              <CardDescription>
                Track the status of issues you've reported
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { 
                    id: "REP-2025-0142", 
                    type: "Illegal Dumping", 
                    location: "Riverside Park, East Side", 
                    date: "May 12, 2025", 
                    status: "In Progress",
                    statusColor: "bg-yellow-500"
                  },
                  { 
                    id: "REP-2025-0128", 
                    type: "Sanitation Problem", 
                    location: "Main Street & 5th Avenue", 
                    date: "May 5, 2025", 
                    status: "Resolved",
                    statusColor: "bg-green-500"
                  },
                  { 
                    id: "REP-2025-0097", 
                    type: "Industrial Pollution", 
                    location: "Factory District, Building 7", 
                    date: "April 22, 2025", 
                    status: "Under Investigation",
                    statusColor: "bg-blue-500"
                  },
                ].map((report, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4 mb-3 md:mb-0">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{report.type}</div>
                        <div className="text-sm text-muted-foreground">{report.location}</div>
                        <div className="text-xs text-muted-foreground">Reported on {report.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${report.statusColor} mr-2`}></div>
                        <span className="text-sm">{report.status}</span>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="community" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Community Reports</CardTitle>
              <CardDescription>
                Environmental issues reported in your area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Label htmlFor="filter-area">Filter by Area</Label>
                <Select defaultValue="5km">
                  <SelectTrigger id="filter-area">
                    <SelectValue placeholder="Select distance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1km">Within 1 km</SelectItem>
                    <SelectItem value="5km">Within 5 km</SelectItem>
                    <SelectItem value="10km">Within 10 km</SelectItem>
                    <SelectItem value="city">Entire City</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-6">
                {[
                  { 
                    type: "Water Pollution", 
                    location: "Green River, North Bridge", 
                    date: "May 14, 2025", 
                    status: "Reported",
                    statusColor: "bg-red-500",
                    distance: "1.2 km away",
                    upvotes: 12
                  },
                  { 
                    type: "Illegal Dumping", 
                    location: "Forest Trail, Sector 3", 
                    date: "May 13, 2025", 
                    status: "In Progress",
                    statusColor: "bg-yellow-500",
                    distance: "3.5 km away",
                    upvotes: 8
                  },
                  { 
                    type: "Air Pollution", 
                    location: "Industrial Zone, East District", 
                    date: "May 10, 2025", 
                    status: "Under Investigation",
                    statusColor: "bg-blue-500",
                    distance: "4.8 km away",
                    upvotes: 23
                  },
                  { 
                    type: "Sanitation Problem", 
                    location: "Central Park, West Entrance", 
                    date: "May 8, 2025", 
                    status: "Scheduled for Cleanup",
                    statusColor: "bg-purple-500",
                    distance: "2.1 km away",
                    upvotes: 15
                  },
                ].map((report, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4 mb-3 md:mb-0">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{report.type}</div>
                        <div className="text-sm text-muted-foreground">{report.location}</div>
                        <div className="flex gap-3 text-xs text-muted-foreground">
                          <span>Reported on {report.date}</span>
                          <span>{report.distance}</span>
                          <span>{report.upvotes} upvotes</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${report.statusColor} mr-2`}></div>
                        <span className="text-sm">{report.status}</span>
                      </div>
                      <Button variant="outline" size="sm">View on Map</Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-6">Load More Reports</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Reporting Guidelines</CardTitle>
            <CardDescription>Tips for submitting effective reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="bg-primary/10 p-2 rounded-full h-fit">
                <Camera className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Include Clear Photos</h3>
                <p className="text-sm text-muted-foreground">Photos help our team assess the situation accurately.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-primary/10 p-2 rounded-full h-fit">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Provide Precise Location</h3>
                <p className="text-sm text-muted-foreground">Accurate location information speeds up response time.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-primary/10 p-2 rounded-full h-fit">
                <AlertTriangle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Be Specific</h3>
                <p className="text-sm text-muted-foreground">Detailed descriptions help prioritize and address issues effectively.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Impact of Your Reports</CardTitle>
            <CardDescription>How community reporting makes a difference</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Reports Submitted</span>
                <span className="text-sm">1,430+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Issues Resolved</span>
                <span className="text-sm">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Average Response Time</span>
                <span className="text-sm">48 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Community Satisfaction</span>
                <span className="text-sm">92%</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                Your reports help create a cleaner, healthier environment for everyone. Thank you for your contribution to our community!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}