import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../../components/mode-toggle";
import {
  Bell,
  Heart,
  KeyRound,
  LogOutIcon,
  Mail,
  Map,
  Phone,
  Search,
  Settings,
  Star,
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
import { companies } from "@/constants";
import { Button } from "@/components/ui/button";
export default function SellersList() {
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
        <div>
            <div className="w-full px-10 mt-10">
                <div className="flex justify-between">
                <h1 className="text-2xl font-medium ">Sellers List </h1>
                <Link to={'/'}>
                <Button className="dark:text-white text-black">+Add Sellers</Button>
                </Link>
                </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="dark:bg-zinc-800  bg-white shadow-md rounded-2xl p-6 w-[400px]"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-20 object-contain mb-4"
                />
                <div className="flex justify-between pt-6">
                <h2 className="text-xl font-bold dark:text-white">{company.name}</h2> 
                <div className="flex justify-end gap-2">
                <span className="flex gap-2"><Star className="text-yellow-600"/>{company.rating}</span>
                <span>{company.reviews}</span>
                </div>
                </div>
               <div className="flex flex-col pt-6">
                <div className="flex gap-2">
                    <Map/>
                    <span>{company.address}</span>
                </div>
                <div className="flex gap-2">
                    <Mail/>
                    <span>
                        {company.email}
                    </span>
                </div>
                <div className="flex gap-2">
                    <Phone/>
                    <span>{company.phone}</span>
                </div>

               </div>
               <div className="pt-6 flex items-center  gap-10">
                <div className="flex flex-col">
                    <em>{company.stock}</em>
                    <span>Item Stock</span>
                </div>
                <div className="flex flex-col">
                    <em>{company.sells}</em>
                    <span>Sellsk</span>
                </div>
                <div className="flex flex-col">
                    <em>{company.clients}</em>
                    <span>Happy Client</span>
                </div>
               </div>
               <div className="flex gap-2">
                <Button className="mt-4  text-white px-4 py-2 rounded-lg w-4/5">   View Profile</Button>
                <Button variant={'destructive'} className="mt-4  text-white px-4 py-2 rounded-lg"><Heart  size={24}/></Button>
                
               </div>
              </div>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
