import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
import image from "../assets/image.png";
import images from "../assets/clothes.png";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
const CreateCategory = () => {
  return (
    <div>
      <SidebarProvider className="w-screen">
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center justify-between px-4 border-b ">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1" />
              <h1 className="text-lg font-bold pl-2 text-black uppercase">
                Create Category
              </h1>
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
          <div className="p-6  min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {/* Left Card */}
              <div className="dark:bg-zinc-900  bg-white h-2/4 p-6 rounded-xl shadow-lg ">
                <img src={images} alt="Category" className="w-1/2 h-1/2" />
                <div className="">
                  <h2 className="text-lg font-semibold mt-4 dark:text-[#aab8c5] text-black">
                    Fashion Men, Women & Kid's
                  </h2>
                  <p className="dark:text-[#aab8c5] text-black text-sm">
                    Created By: <span className="text-blue-600">Seller</span>
                  </p>
                  <p className="dark:text-[#aab8c5]   text-black text-sm">
                    Stock: <span className="font-bold">46233</span>
                  </p>
                  <p className="dark:text-[#aab8c5] text-black text-sm">
                    ID: <span className="font-bold">FS16276</span>
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button className="px-10 py-4 border rounded-lg dark:text-black text-white">
                    Create Category
                  </Button>
                  <Button className="px-10 py-2 bg-orange-500 dark:text-black text-white rounded-lg">
                    Cancel
                  </Button>
                </div>
              </div>

              {/* Right Form */}
              <div className="md:col-span-2 space-y-6">
                <div className="dark:bg-zinc-900 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-lg dark:text-[#aab8c5] text-black">
                    Add Thumbnail Photo
                  </h3>
                  <div className="mt-4 border-dashed border-2 border-gray-300 rounded-lg py-12 flex flex-col items-center justify-center text-gray-500">
                    <Input type="file" className="hidden"></Input>
                    <p className="text-sm">
                      Drag and drop your photo here or click to select
                    </p>
                  </div>
                </div>
                <div className="dark:bg-zinc-900 p-6 rounded-xl shadow-lg text-black">
                  <h3 className="font-semibold text-lg dark:dark:text-[#aab8c5] text-black ">
                    General Information
                  </h3>
                  <hr  className="my-4 border-dashed border-2 border-gray-300 "/>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="block pb-3 text-gray-700">
                        Category Title
                      </Label>
                      <Input
                        type="text"
                        placeholder="Enter Title"
                        className="w-full p-6 border  dark:text-white text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      />
                    </div>
                    <div >
                      <Label className="block dark:text-gray-700 text-black pb-3 ">Created By</Label>
                      <select className="w-full p-4 dark:bg-zinc-900  border rounded-md focus:outline-none focus:ring focus:border-blue-300">
                        <option className="dark:text-white text-black">Select Creator</option>
                        <option className="dark:text-white text-black">Admin</option>
                        <option className="dark:text-white text-black">Other</option>
                        <option className="dark:text-white text-black">Seller</option>
                      </select>
                    </div>
                    <div>
                      <Label className="block pb-3 text-gray-700 ">Stock</Label>
                      <Input
                        type="number"
                        placeholder="Quantity"
                        className="w-full p-6    dark:text-white text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      />
                    </div>
                    <div>
                      <Label className="block pb-3 text-gray-700">Tag ID</Label>
                      <Input
                        type="text"
                        placeholder="#******"
                        className="w-full p-6  dark:text-white text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label className="block pb-3 text-gray-700">Description</Label>
                    <Textarea
                      placeholder="Type description"
                      className="w-full p-2  dark:text-white text-black border rounded-md h-32 focus:outline-none focus:ring focus:border-blue-300"
                    ></Textarea>
                  </div>
                </div>
                <div className=" dark:bg-zinc-900 bg-white p-6 rounded-xl shadow-lg ">
                  <div className="flex justify-end gap-3">
                    <Button>Save Changes</Button>
                    <Button className="bg-orange-500 px-10 py-4">Cancel</Button>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default CreateCategory;
