import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Recycle, Gift, BarChart3, QrCode } from "lucide-react";
import Link from "next/link";

export default function RecyclingPage() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recycling Rewards</h1>
          <p className="text-muted-foreground mt-1">
            Track your recycling efforts and earn rewards
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <QrCode className="h-4 w-4" />
          Scan Recycling QR
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Reward Points</CardTitle>
            <CardDescription>Current balance</CardDescription>
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
            <CardTitle className="text-lg">Environmental Impact</CardTitle>
            <CardDescription>CO₂ emissions saved</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">35 kg</div>
            <div className="text-xs text-muted-foreground mt-1">
              Equivalent to planting 2 trees
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="rewards" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="rewards">Available Rewards</TabsTrigger>
          <TabsTrigger value="history">Recycling History</TabsTrigger>
          <TabsTrigger value="impact">Your Impact</TabsTrigger>
        </TabsList>
        <TabsContent value="rewards" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "10% Off at EcoStore",
                description: "Use your points for a discount on sustainable products",
                points: 500,
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Free Coffee at GreenCafe",
                description: "Redeem a free coffee at participating locations",
                points: 350,
                image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Plant a Tree",
                description: "We'll plant a tree in your name in a reforestation project",
                points: 1000,
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Public Transport Pass",
                description: "One-day pass for local public transportation",
                points: 750,
                image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Reusable Water Bottle",
                description: "High-quality stainless steel water bottle",
                points: 1200,
                image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Farmers Market Voucher",
                description: "$10 voucher for local farmers market",
                points: 800,
                image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((reward, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={reward.image} 
                    alt={reward.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{reward.title}</CardTitle>
                  <CardDescription>{reward.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Gift className="h-4 w-4 text-primary" />
                      <span className="font-medium">{reward.points} points</span>
                    </div>
                    <Button>Redeem</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Recycling Activity</CardTitle>
              <CardDescription>Your recycling contributions over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { date: "May 15, 2025", type: "Plastic Bottles", amount: "1.2 kg", points: 120 },
                  { date: "May 10, 2025", type: "Paper & Cardboard", amount: "3.5 kg", points: 175 },
                  { date: "May 3, 2025", type: "Glass", amount: "2.8 kg", points: 140 },
                  { date: "April 28, 2025", type: "Aluminum Cans", amount: "0.8 kg", points: 80 },
                  { date: "April 22, 2025", type: "Electronic Waste", amount: "4.2 kg", points: 420 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Recycle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{item.type}</div>
                        <div className="text-sm text-muted-foreground">{item.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{item.amount}</div>
                      <div className="text-sm text-primary">+{item.points} points</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6">View All History</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="impact" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact</CardTitle>
                <CardDescription>Your contribution to sustainability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">CO₂ Emissions Saved</span>
                    <span className="text-sm text-muted-foreground">35 kg / 100 kg goal</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Water Saved</span>
                    <span className="text-sm text-muted-foreground">120 L / 500 L goal</span>
                  </div>
                  <Progress value={24} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Energy Saved</span>
                    <span className="text-sm text-muted-foreground">45 kWh / 200 kWh goal</span>
                  </div>
                  <Progress value={22.5} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Trees Equivalent</span>
                    <span className="text-sm text-muted-foreground">2 trees / 10 trees goal</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community Ranking</CardTitle>
                <CardDescription>How you compare to others in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center flex-col mb-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="text-4xl font-bold">42</div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      <BarChart3 className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-medium">Your Rank: 42 of 1,250</div>
                    <div className="text-sm text-muted-foreground">Top 3% in your city</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Recycling Consistency</span>
                    <span className="text-sm text-primary">Excellent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Diversity of Materials</span>
                    <span className="text-sm text-primary">Very Good</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Monthly Growth</span>
                    <span className="text-sm text-primary">+15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">How to Earn More Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <div className="bg-primary/10 p-2 rounded-full h-fit">
              <Recycle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Recycle More Materials</h3>
              <p className="text-sm text-muted-foreground">Expand the types of materials you recycle to earn bonus points.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-primary/10 p-2 rounded-full h-fit">
              <Gift className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Refer Friends</h3>
              <p className="text-sm text-muted-foreground">Invite friends to join GreenGuardian and earn 500 points per referral.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-primary/10 p-2 rounded-full h-fit">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Complete Challenges</h3>
              <p className="text-sm text-muted-foreground">Participate in monthly recycling challenges to earn bonus rewards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}