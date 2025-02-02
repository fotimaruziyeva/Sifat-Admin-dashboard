import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../components/mode-toggle";
import { Bell,  Edit2, Eye, Heart, KeyRound, LogOutIcon, Search, Settings, Timer, Trash2, User2 } from "lucide-react";
import { Input } from "../components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import image from "../assets/image.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import clothes from "../assets/clothes.png";
import image2 from "../assets/2..png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import { Card, CardContent } from "@/components/ui/card";
import { category } from "@/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


const categories = [
    { name: "Fashion Categories", 
     img:clothes,
     bgColor: "bg-slate-600" 
    },
    { name: "Electronics Headphone", 
        img: image2, 
        bgColor: "bg-orange-900" },
    { name: "Foot Wares", 
        img: image3, 
        bgColor: "bg-yellow-700" },
    { name: "Eye Ware & Sunglass", 
        img: image4, 
        bgColor: "bg-blue-900" 
    },
  ];
export default function Navbar() {
  return (
    <SidebarProvider className="w-screen">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center justify-between px-4 border-b ">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="text-lg font-bold text-white uppercase">Categories List!</h1>
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
              <SheetTrigger><Timer /></SheetTrigger>
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
                <img src={image} alt="Profile" className="h-8 w-8 rounded-full cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User2 /> Profile</DropdownMenuItem>
                <DropdownMenuItem><KeyRound /> Password</DropdownMenuItem>
                <DropdownMenuItem><LogOutIcon /> Logout</DropdownMenuItem>
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
        <div className="flex items-center justify-around p-6 ml-2 mr-2  mt-3  bg-zinc-900 rounded-xl">
      {categories.map((category, index) => (
        <Card key={index} className="w-60 bg-zinc-800 text-center p-4 rounded-xl">
          <CardContent className={`h-24 flex items-center pt-4 justify-center ${category.bgColor} rounded-lg`}>
            <img src={category.img} alt=""  className="w-20 h-20 "/>
          </CardContent>
          <p className="mt-4 text-white font-medium">{category.name}</p>
        </Card>
      ))}
    </div>
    <div>
      
    <div className="p-6 text-white min-h-screen">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">All Categories List</h2>
 <div className="flex gap-2">
 <Button variant={"outline"} className="bg-orange-500 px-2 py-2 rounded-lg text-white">Add Product</Button>
 <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="This Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="download" className="flex">Download</SelectItem>
          <SelectItem value="export">Export </SelectItem>
          <SelectItem value="import">Import</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

  </div>        
      </div>
      <div className="overflow-x-auto">
      <table className="w-full border-collapse border">
  <thead>
    <tr>
      <th className="p-3 border border-gray-700">
        <Checkbox />
      </th>
      <th className="p-3 border border-gray-700">Img</th>
      <th className="p-3 border border-gray-700">Categories</th>
      <th className="p-3 border border-gray-700">Starting Price</th>
      <th className="p-3 border border-gray-700">Created by</th>
      <th className="p-3 border border-gray-700">ID</th>
      <th className="p-3 border border-gray-700">Product Stock</th>
      <th className="p-3 border border-gray-700">Action</th>
    </tr>
  </thead>
  <tbody>
    {category.map((category) => (
      <tr key={category.id} className="border border-gray-700 text-center">
        <td className="p-3 border border-gray-700">
          <Checkbox />
        </td>
        <td>
          <img src={category.img} alt="" className="w-20 h-20" />
        </td>
        <td className="p-3 border border-gray-700">{category.name}</td>
        <td className="p-3 border border-gray-700">{category.price}</td>
        <td className="p-3 border border-gray-700">{category.creator}</td>
        <td className="p-3 border border-gray-700">{category.id}</td>
        <td className="p-3 border border-gray-700">{category.stock}</td>
        <td className="p-3 flex justify-center space-x-2">
          <Button>
            <Eye />
          </Button>
          <Button variant={"secondary"}>
            <Edit2 />
          </Button>
          <Button variant={"destructive"}>
            <Trash2 />
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

<div className=" mt-5 flex  items-centerjustify-between">
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>

      </div>
    </div>
    </div>
    <div>
      <footer className="flex items-center justify-center gap-3">
        <h4 className="text-center text-orange-500 font-mono">2025 © Larkon. Crafted by </h4>
        <Heart className="text-red-600 " size={16}/>
        <span className="text-green-600 font-mono">Techzaa</span>
        </footer>
    </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
