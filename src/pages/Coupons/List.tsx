"use client"
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../../components/mode-toggle";
import {
  Bell,
  Edit2,
  KeyRound,
  LogOutIcon,
  Search,
  Settings,
  Timer,
  Trash,
  User2,
} from "lucide-react";
import { RiCoupon2Line } from "react-icons/ri";
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

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { Coupons } from "@/interfaces";
import Cookies from "js-cookie";
import { API_REQUEST } from "@/lib/apiRequest";
import axios from "axios";

export default function List() {
  const[coupons,setCoupons]=useState<Coupons[]>([])
  const navigate=useNavigate();
  const accessToken = Cookies.get("access_token"); 


 const handleLogOut = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh");
    navigate("/login");
  };

   
  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await axios.get(API_REQUEST.coupons, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        setCoupons(response.data.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCoupons();
  }, [accessToken]);
  return (
    <SidebarProvider className=" w-screen">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center justify-between px-4 border-b">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="text-lg font-bold text-white">List Coupons</h1>
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
                  <Link to="/profile" className="flex items-center gap-2">
                    <User2 /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <KeyRound /> Password
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogOut}>
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
        <div className="w-full px-10 mt-10 ">
          <div className="flex justify-between pb-5">
            <h1>Kupon ro'yxati</h1>
            <Link to={'/coupons/add'}>
            <Button>+ Add coupon</Button>
            </Link>
          </div>
          <div className="flex flex-wrap flex-row gap-7">
            {
             coupons.map((coupon=>(
              <div className="w-80 bg-whitebg-gray-100 dark:bg-zinc-700 rounded-2xl shadow-lg overflow-hidden" key={coupon.id}>
              <div className="flex items-center justify-center h-32">
                <RiCoupon2Line className="text-5xl text-gray-500 dark:text-gray-400" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center pb-3 ">
                  <p className="text-black dark:text-white text-sm font-medium">
                    {coupon.name}
                  </p>
                  <div className="flex gap-2">
                    <Button  size="icon">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p className="text-black dark:text-white text-sm font-medium">
                    Belgilangan qiymat:
                  </p>
                  <div className="flex gap-2">
                    <p>{coupon.discount}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p className="text-black dark:text-white text-sm font-medium">
                    Muddati:
                  </p>
                  <div className="flex gap-2">
                    <p>{coupon.date}</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-between items-center">
                  <p className="text-black dark:text-white text-sm font-medium">
                    Aktiv
                  </p>
                  <div className="flex gap-2">
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
             )))
            }
           
      
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
