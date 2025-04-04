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
  Camera,
  KeyRound,
  LogOutIcon,
  Search,
  Settings,
  Timer,
  Trash2,
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
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const EditProducts = () => {
  const [inputs, setInputs] = useState<string[]>([]);
  
    const addInputs = () => {
      setInputs([...inputs, ""]);
    };
    const [mainImage, setMainImage] = useState<File | null>(null);
    const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  
    const handleMainImageChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      if (event.target.files && event.target.files[0]) {
        setMainImage(event.target.files[0]);
      }
    };
  
    const handleAdditionalImagesChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      if (event.target.files) {
        setAdditionalImages([...additionalImages, event.target.files[0]]);
      }
    };
  
  return (
    <div>
      <SidebarProvider className="w-screen">
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center justify-between px-4 border-b ">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1" />
              <h1 className="text-lg font-bold pl-2 uppercase">
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
                  className="border-none bg-transparent placeholder-gray-400"
                />
                <Search className="absolute right-2 text-gray-400" />
              </div>
            </div>
          </header>
          <div className="p-6  min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              <div className="dark:bg-zinc-900  bg-white h-min p-6 rounded-xl shadow-md ">
                <div className="flex justify-center items-center dark:bg-zinc-800 bg-white  rounded ">
                  <img src={images} alt="Category" className="w-48 h-48" />
                </div>
                <div className="">
                  <h2 className="text-lg font-semibold mt-4 dark:text-[#aab8c5]">
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
                <div className="dark:bg-zinc-900 p-6 rounded-xl shadow-md">
                  <div className="space-y-4 dark:text-white">
                    <div className="grid grid-cols-3 gap-4 pt-2">
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
                          <SelectContent className="dark:text-white">
                            <SelectItem
                              value="clothing"
                              className="dark:text-white"
                            >
                              Clothing
                            </SelectItem>
                            <SelectItem
                              value="accessory"
                              className="dark:text-white"
                            >
                              Accessory
                            </SelectItem>
                            <SelectItem
                              value="Footwear"
                              className="dark:text-white"
                            >
                              Footwear
                            </SelectItem>
                            <SelectItem
                              value="Furniture"
                              className="dark:text-white"
                            >
                              Furniture
                            </SelectItem>
                            <SelectItem
                              value="Headphones"
                              className="dark:text-white"
                            >
                              Headphones
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Mahsulot subkategoriyasi</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a category" />
                          </SelectTrigger>
                          <SelectContent className="dark:text-white">
                            <SelectItem
                              value="clothing"
                              className="dark:text-white"
                            >
                              Clothing
                            </SelectItem>
                            <SelectItem
                              value="accessory"
                              className="dark:text-white"
                            >
                              Accessory
                            </SelectItem>
                            <SelectItem
                              value="Footwear"
                              className="dark:text-white"
                            >
                              Footwear
                            </SelectItem>
                            <SelectItem
                              value="Furniture"
                              className="dark:text-white"
                            >
                              Furniture
                            </SelectItem>
                            <SelectItem
                              value="Headphones"
                              className="dark:text-white"
                            >
                              Headphones
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 ">
                      <div>
                        <Label className="mt-2">Mahsulot narxi</Label>
                        <Input placeholder="Product Price" type="text" />
                      </div>
                      <div>
                        <Label>Mahsulotning chegirma narxi</Label>
                        <Input placeholder="Product Stock" />
                      </div>
                    </div>
                    <Textarea />
                  </div>
                </div>
                <div className="dark:bg-zinc-900 p-6 rounded-xl shadow-md">
                  <div>
                    <h1 className="dark:text-white text-xl">
                      Xususiyatlar
                    </h1>
                    <div className="space-y-4 dark:text-white">
                      <div className="grid grid-cols-3 gap-4 pt-3">
                        <div className="flex flex-col">
                          <Label className="pb-2">Xususiyat nomi</Label>
                          <Input placeholder="Xususiyat nomi" />
                        </div>
                        <div className="flex flex-col">
                          <Label className="pb-2">Izohi</Label>
                          <Input placeholder="Izohi" />
                        </div>
                        <Button
                          variant={"destructive"}
                          className="text-white w-[100px] mt-5"
                        >
                          <Trash2 />
                        </Button>
                      </div>
                    </div>
                    <div>
                      {inputs.map((id) => (
                        <div
                          key={id}
                          className="grid grid-cols-3 gap-4 pt-4 dark:text-white"
                        >
                          <div className="flex flex-col">
                            <Label className="pb-2">Xususiyat nomi</Label>
                            <Input placeholder="Xususiyat nomi" />
                          </div>
                          <div className="flex flex-col">
                            <Label className="pb-2">Izohi</Label>
                            <Input placeholder="Izohi" />
                          </div>
                          <Button
                            className="text-white w-[100px] mt-5"
                            variant={"destructive"}
                          >
                            <Trash2 />
                          </Button>
                        </div>
                      ))}{" "}
                      <br />
                      <Button
                        onClick={addInputs}
                        className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
                      >
                        Xususiyatlar
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="dark:bg-zinc-900 p-6 rounded-xl shadow-md">
                  <div className="flex justify-between">
                    <h1 className="text-xl">Attribut qo'shish</h1>
                    <Button>+Add Attribute</Button>
                  </div>
                  <div>
                    <Label>Attribut nomi</Label>
                    <Input />
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 pt-3">
                      <div>
                        <Label>Label</Label>
                        <Input placeholder="Label kiriting:" />
                      </div>
                      <div>
                        <Label>Narxini kiriting</Label>
                        <Input placeholder="Narxini kiriting:" />
                      </div>
                      <div>
                        <Label>Soni</Label>
                        <Input type="number " defaultValue={0} required />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Button className="text-white w-[200px] mt-5">
                      +Add Label
                    </Button>
                  </div>
                </div>
                <div className="dark:bg-zinc-900 p-6 rounded-xl shadow-md">
                  <div className="space-y-4 px-4">
                    <h2 className="text-lg font-semibold">
                      Mahsulot rasmlarini yuklang
                    </h2>

                    <div className="flex justify-between gap-8 ">
                      {/* Asosiy rasm */}
                      <div className="flex flex-col items-center space-y-2">
                        <Label className="text-gray-500">Asosiy rasm</Label>
                        <label className="w-24 h-24 flex items-center justify-center border rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
                          {mainImage ? (
                            <img
                              src={URL.createObjectURL(mainImage)}
                              alt="Asosiy rasm"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <span className="text-gray-500 text-sm">
                              <Camera />
                            </span>
                          )}
                          <Input
                            type="file"
                            className="hidden"
                            onChange={handleMainImageChange}
                          />
                        </label>
                      </div>

                      {/* Qo'shimcha rasmlar */}
                      <div className="flex flex-col space-y-2 ">
                        <Label className="text-gray-500">Qo'shimcha rasm</Label>
                        <div className="flex gap-4">
                          {[...Array(7)].map((_, index) => (
                            <label
                              key={index}
                              className="w-20 h-20 flex items-center justify-center border rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
                            >
                              {additionalImages[index] ? (
                                <img
                                  src={URL.createObjectURL(
                                    additionalImages[index]
                                  )}
                                  alt={`Qo'shimcha rasm ${index + 1}`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              ) : (
                                <span className="text-gray-500 text-sm">
                                  <Camera />
                                </span>
                              )}
                              <Input
                                type="file"
                                className="hidden"
                                onChange={handleAdditionalImagesChange}
                              />
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <Button className="bg-green-500 text-white px-10 py-6 rounded-md mb-4">
                    Yangilash
                  </Button>
                  <Button className="bg-green-500 text-white px-10 py-6 rounded-md mb-4">
                    Saqlash
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default EditProducts;
