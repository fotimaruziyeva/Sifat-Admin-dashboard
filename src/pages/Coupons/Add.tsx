
"use client"
import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../../components/mode-toggle";
import {
  Bell,
  CalendarIcon,
  KeyRound,
  LogOutIcon,
  Search,
  Settings,
  Timer,
  User2,
} from "lucide-react";
import { Input } from "../../components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import image from "../../assets/image.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns"
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
export default function Add() {
const [date, setDate] = React.useState<Date>()
  return (
    <SidebarProvider className=" w-screen">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center justify-between px-4 border-b">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="text-lg font-bold text-white">Add Coupons</h1>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Bell />
            <Sheet>
              <SheetTrigger>
                <Settings />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Theme Settings</SheetTitle>
                  <SheetDescription>
                    Customize your theme settings here.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger>
                <Timer />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img
                  src={image}
                  alt="Profile"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile">
                    <User2 /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <KeyRound /> Password
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOutIcon /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Bar */}
            <div className="relative flex items-center rounded-lg dark:bg-gray-800  bg-white px-2 py-1">
              <Input
                placeholder="Search..."
                className="border-none bg-transparent text-black placeholder-gray-400"
              />
              <Search className="absolute right-2 text-gray-400" />
            </div>
          </div>
        </header>
        <div className="flex items-center justify-center mt-10">
        <div className="w-1/2 p-4 dark:bg-zinc-900 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-center mt-4 mb-6">
        <h1 className="text-2xl font-semibold dark:text-white text-gray-800">Add Coupons</h1>
      </div>
      <div className="space-y-5">
        {/* Coupon Name */}
        <div>
          <Label className="dark:text-white text-gray-700">Coupon Name</Label>
          <Input className="mt-2" placeholder="Enter coupon name" />
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="dark:text-white text-gray-700">Belgilangan qiymat</Label>
            <Input className="mt-2" placeholder="5000" />
          </div>
          <div>
            <Label className="dark:text-white text-gray-700">Foiz qiymat</Label>
            <Input className="mt-2" placeholder="0%" />
          </div>
        </div>

        {/* Date Picker */}
        <div>
          <Label className="dark:text-white text-gray-700">Muddati</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full mt-2 flex items-center justify-start px-4 py-2 border border-gray-300 rounded-md",
                  !date && "text-gray-500"
                )}
              >
                <CalendarIcon className="w-5 h-5 mr-2 text-gray-600" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        {/* Minimal Trade */}
        <div>
          <Label className="dark:text-white text-gray-700">Minimal savdo</Label>
          <Input className="mt-2" placeholder="Enter amount" />
        </div>

        {/* Active Status */}
        <div className="flex items-center justify-between">
          <Label className="dark:text-white text-gray-700">Aktiv qilish</Label>
          <Switch />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button className="dark:text-white text-black">
            Saqlash
          </Button>
        </div>
      </div>
    </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
