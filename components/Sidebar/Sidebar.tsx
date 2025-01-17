import React from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  PersonIcon,
  DashboardIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";

import { Card, CardTitle } from "../ui/card";
import Link from "next/link";
const Sidebar = ({userType}:any) => {
  return (
    <div className="hidden sm:block min-w-[210px] shadow-xl px-3">
      <header>
        <Card className="p-4 py-4 shadow-none border-none">
          <CardTitle className="text-[2.5rem]"><a href='/'>WeCare</a></CardTitle>
        </Card>
      </header>
      <Card className="border-none shadow-none font-normal text-muted-foreground">
        <section className="flex flex-col gap-2">
          <Link
            href={userType === 'doctor'?`/doctor/dashboard`:userType === 'patient'?'/patient/dashboard':'/'}
            className="flex gap-1 items-center text-xl px-3  py-2 hover:bg-muted"
          >
            <DashboardIcon className="mr-2 h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href={userType === 'doctor'?`/doctor/patientlist`:userType === 'patient'?'/patient/history':'/patient/dashboard'}
            className="flex gap-1 items-center text-xl px-3  py-2 hover:bg-muted"
          >
            {userType === 'doctor'?(<><PersonIcon className="mr-2 h-5 w-5" /><span>Patient List</span></>):userType === 'patient'?<><FileTextIcon className="mr-2 h-5 w-5"/><span>History</span></>:''}
          </Link>
          <Link
            href={userType === 'doctor'?`/doctor/appointments`:userType === 'patient'?'/patient/appointments':'/patient/dashboard'}
            className="flex gap-1 items-center text-xl px-3  py-2 hover:bg-muted"
          >
            <CalendarIcon className="mr-2 h-5 w-5" />
            <span>Appointments</span>
          </Link>
          <Link
            href={userType === 'doctor'?`/doctor/messages`:userType === 'patient'?'/patient/messages':'/patient/dashboard'}
            className="flex gap-1 items-center text-xl px-3  py-2 hover:bg-muted"
          >
            <EnvelopeClosedIcon className="mr-2 h-5 w-5" />
            <span>Messages</span>
          </Link>
        </section>
      </Card>
    </div>
  );
};

export default Sidebar;
