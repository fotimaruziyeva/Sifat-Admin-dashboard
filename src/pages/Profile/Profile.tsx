import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, KeyRound, LogOutIcon, Search, Settings, Timer, User2 } from "lucide-react";

import image from "../../assets/image.png";
import profile from "../../assets/Man2profile.jpeg"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
<SidebarProvider className=" w-screen">
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
        <div className="flex min-h-screen dark:bg-zinc-900 bg-white shadow-lg rounded-lg overflow-hidden mt-10 m-10">
      <div className="w-1/3 dark:bg-zinc-900 bg-white-100 shadow-lg p-6 text-center border-r">
        <img
          src={profile}
          alt="Profil rasmi"
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        <h2 className="text-xl font-bold mt-4">Fotima Ruziyeva</h2>
        <ul className="mt-6">
          <li className="py-4 dark:bg-zinc-900 bg-white dark:text-white text-black shadow-lg rounded-md">Ma'lumotlarim</li>
        </ul>
      </div>
      <div className="w-2/3 p-6">
        <h3 className="text-lg font-semibold mb-4">Ma'lumotlarim</h3>
        <form>
          <div className="mb-4">
            <Label className="block text-sm font-medium">Rasm yuklash</Label>
            <Input type="file" className=" mt-1 block w-full text-sm " />
          </div>
         <div className="mt-2">
         <Label className="block text-sm font-medium">Ism</Label>
            <Input type="text" className="mt-1 block w-full text-sm p-6" />
         </div>
         <div className="mt-2">
         <Label className="block text-sm font-medium">Familya</Label>
            <Input type="text" className="mt-1 block w-full text-sm p-6" />
         </div>
         <div className="mt-2">
         <Label className="block text-sm font-medium">Telefon raqam</Label>
            <Input type="text" className="mt-1 block w-full text-sm p-6" />
         </div>
         <div className="mt-2">
         <Label className="block text-sm font-medium">Email</Label>
            <Input type="text" className="mt-1 block w-full text-sm p-6" />
         </div>
        </form>
        <div className="flex justify-end gap-3 ">
           <Button className="mt-4" variant={"destructive"}>Tahrirlash</Button>
            <Button className="mt-4 bg-green-600">Saqlash</Button>
            
        </div>
      </div>
    </div>
      </SidebarInset>
    </SidebarProvider>

    </div>
  )
}

export default Profile