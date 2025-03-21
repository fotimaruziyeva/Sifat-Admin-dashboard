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
import image from "../../assets/image.png";
import images from "../../assets/clothes.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const CreateProducts = () => {
  const [inputs, setInputs] = useState<string[]>([]);

  const addInputs = () => {
    setInputs([...inputs, ""]);
  };
  return (
    <div>
      <SidebarProvider className="w-screen">
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center justify-between px-4 border-b ">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1" />
              <h1 className="text-lg font-bold pl-2 text-black uppercase">
                Product edit
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
                    <User2 /> Profile
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
              <div className="dark:bg-zinc-900  bg-white h-full p-6 rounded-xl shadow-lg ">
                <div className="flex justify-center items-center dark:bg-zinc-800 bg-white  rounded ">
                  <img src={images} alt="Category" className="w-48 h-48" />
                </div>
                <div className="">
                  <h2 className="text-lg font-semibold mt-4 dark:text-[#aab8c5] text-black">
                    Men Black Slim Fit T-shirt (Fashion)
                  </h2>
                  <div className="flex mt-2 flex-col gap-2">
                    <p>Price:</p>
                    <p className="text-lg">
                      <span className="line-through text-gray-600 decoration-2">
                        $100
                      </span>
                      <span className="text-gray-400 ml-2">$ 80(30% Off)</span>
                    </p>
                  </div>
                  <div className="mt-2">
                    <h4>Size:</h4>
                    <div className="flex gap-2 ">
                      <Button>XS</Button>
                      <Button>S</Button>
                      <Button>M</Button>
                      <Button>L</Button>
                      <Button>XL</Button>
                    </div>
                  </div>
                  {/* colors */}
                  <div className="mt-2">
                    <h4>Colors:</h4>
                    <div className="flex gap-2">
                      <Button className="bg-red-500 text-white rounded-full  w-10 h-8"></Button>
                      <Button className="bg-blue-500 text-white rounded-full w-10 h-8"></Button>
                      <Button className="bg-green-500 text-white rounded-full w-10 h-8"></Button>
                      <Button className="bg-yellow-500 text-white rounded-full w-10 h-8"></Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="md:col-span-2 space-y-6">
                <div className="dark:bg-zinc-900 bg-white p-6 rounded-xl ">
                  <h3 className="font-semibold text-lg dark:text-[#aab8c5] text-black">
                    Add Thumbnail Photo
                  </h3>
                  <Input type="file" className="mt-10"></Input>
                </div>
                <div className="dark:bg-zinc-900 p-6 rounded-xl shadow-lg text-black">
                  <h4 className="dark:text-[#aab8c5] text-black">
                    Product Information
                  </h4>
                  <div className="space-y-4 dark:text-white text-black">
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                        <Label>Mahsulot nomi</Label>
                        <Input placeholder="Mahsulot nomi" />
                      </div>
                     <div>
                      <Label>Mahsulot kategoriyasi</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a category" />
                        </SelectTrigger>
                        <SelectContent className="dark:text-white text-black">
                          <SelectItem
                            value="clothing"
                            className="dark:text-white text-black"
                          >
                            Clothing
                          </SelectItem>
                          <SelectItem
                            value="accessory"
                            className="dark:text-white text-black"
                          >
                            Accessory
                          </SelectItem>
                          <SelectItem
                            value="Footwear"
                            className="dark:text-white text-black"
                          >
                            Footwear
                          </SelectItem>
                          <SelectItem
                            value="Furniture"
                            className="dark:text-white text-black"
                          >
                            Furniture
                          </SelectItem>
                          <SelectItem
                            value="Headphones"
                            className="dark:text-white text-black"
                          >
                            Headphones
                          </SelectItem>
                        </SelectContent>
                      </Select>
                     </div>
                   
                    </div>
                    <div className="grid grid-cols-2 gap-4 ">
                     <div >
                      <Label>Mahsulot narxi</Label>
                     <Input placeholder="Product Price" type="number" />
                     </div>
                     <div>
                      <Label>Mahsulotning chegirma narxi</Label>
                      <Input placeholder="Product Stock" />
                     </div>
                    </div>
                  </div>
                  <div className="space-y-4 dark:text-white text-black">
                    <div className="grid grid-cols-2 gap-4 pt-3">
                      <Input placeholder="Product Price" />
                      <Input placeholder="Product Stock" />
                    </div>
                  </div>
                  <div>
                  {inputs.map((id) => (
                    <div key={id} className="grid grid-cols-2 gap-4 pt-4">
                      <Input placeholder="Product Price" />
                      <Input placeholder="Product Stock" />
                    </div>
                  ))} <br /> 
                  <Button
                  onClick={addInputs}
                  className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
                >
                  Xususiyatlar
                </Button>
                  </div>
                  <div className="flex justify-end gap-4">
                  <Button className="bg-green-500 text-white px-10 py-6 rounded-md mb-4">Yangilash</Button>
                  <Button className="bg-green-500 text-white px-10 py-6 rounded-md mb-4">Saqlash</Button>
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

export default CreateProducts;
