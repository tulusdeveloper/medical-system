import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";

export default function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-slate-50 text-teal-600 border  fixed">
      {/* Top part */}
      <div className="flex flex-col">
        {/* Logo */}
        <Link href="#" className="bg-blue-100 hover:bg-sky-200 flex space-x-2 items-center py-3 px-2">
          <ShoppingCart />
          <span className="text-xl font-semibold">Medical</span>
        </Link>
        {/* Links */}
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link href="#" className="flex items-center space-x-2 bg-blue-100 text-teal-600 hover:bg-sky-200 p-2 rounded-md">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <button className="flex items-center space-x-2 p-2 hover:bg-sky-200 rounded-md">
            <BaggageClaim className="w-4 h-4" />
            <span>Queue</span>
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-sky-200 rounded-md">
            <BaggageClaim className="w-4 h-4" />
            <span>Appointments</span>
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-sky-200 rounded-md">
            <ShoppingBasket className="w-4 h-4" />
            <span>Patients</span>
          </button>
          <button className="flex items-center space-x-2 p-2  hover:bg-sky-200 rounded-md">
            <ShoppingBag className="w-4 h-4" />
            <span>Accounts</span>
          </button>
          <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-sky-200 rounded-md" >
            <Cable className="w-4 h-4" />
            <span>Settings</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-sky-200 rounded-md" >
            <BarChart4 className="w-4 h-4" />
            <span>Reports</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-sky-200 rounded-md" >
            <Files className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>
        <SubscriptionCard/>
      </div>
      {/* Bottom part */}
      <button className=" flex flex-col">
        <div className="bg-blue-200 flex space-x-2 justify-center items-center py-3 px-2">
          <ChevronLeft />
        </div>
      </button>
      {/* Subscription Card */}
      {/* Footer Icon */}
    </div>
  );
}
