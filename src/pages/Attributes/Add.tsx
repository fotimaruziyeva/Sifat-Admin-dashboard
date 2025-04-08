"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Bell,
  KeyRound,
  LogOutIcon,
  Search,
  Settings,
  Timer,
  User2,
} from "lucide-react";

import image from "../../assets/image.png";

import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { API_REQUEST } from "@/lib/apiRequest";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { toast } from "sonner";

export default function AttributesAdd() {
// const [name, setName] = useState("");
// const [characteristics, setCharacteristics] = useState("");
// const accessToken = Cookies.get("access_token");
// const navigate = useNavigate();
// const handleLogOut = () => {
//     Cookies.remove("access_token");
//     Cookies.remove("refresh");
//     navigate("/login");
//   };
//   const handleSubmit = async () => {
//     const data = {
//       name,
//      characteristics
//     };

  //   await axios
  //     .post(API_REQUEST.category, data, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //     .then(() => {
  //       toast.success("Muvaffaqiyatli qo'shildi", {
  //         position: "top-center",
  //         richColors: true,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <SidebarProvider className=" w-screen dark:text-white text-black dark:bg-black bg-white shadow-lg">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center justify-between px-4 border-b">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="text-lg font-bold text-white">WELCOME!</h1>
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
                <DropdownMenuItem >
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
      </SidebarInset>
    </SidebarProvider>
  );
}
