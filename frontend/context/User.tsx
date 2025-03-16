"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./Auth";

interface UserContextType {
  profile: Profile | null;
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>;
  recycleStats: RecycleStat | null;
  setRecycleStats: React.Dispatch<React.SetStateAction<RecycleStat | null>>;
  reportStats: ReportStat | null;
  setReportStats: React.Dispatch<React.SetStateAction<ReportStat | null>>;
}

interface Profile {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  points: number;
}

interface RecycleLog {
  id: string;
  userId: string;
  type: string;
  weight: number;
  points: number;
  location: string;
  createdAt: string;
}

interface RecycleStat {
  totalRecycled: number;
  totalWeight: number;
  weightByType: {
    type?: number;
  };
  totalPoints: number;
  monthlyStats: {
    points: number;
    weight: number;
    count: number;
  };
  recentLogs: RecycleLog[];
}

interface ReportLog {
  id: string;
  userId: string;
  type: string;
  description: string;
  location: string;
  status: string;
  severity: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

interface ReportStat {
  totalReports: number;
  resolvedReports: number;
  pendingReports: number;
  inProgressReports: number;
  statsByType: {};
  monthlyStats: {
    total: number;
    resolved: number;
  };
  recentReports: ReportLog[];
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [recycleStats, setRecycleStats] = useState<RecycleStat | null>(null);
  const [reportStats, setReportStats] = useState<ReportStat | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL}/api/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setProfile(profile.data);
        const recycle = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL}/api/user/recycling-stats`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setRecycleStats(recycle.data);
        const report = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL}/api/user/report-stats`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setReportStats(report.data);
      } catch (error) {
        if (error instanceof Error) console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        profile,
        setProfile,
        recycleStats,
        setRecycleStats,
        reportStats,
        setReportStats,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
}
