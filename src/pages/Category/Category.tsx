"use client";
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
  Eye,
  Heart,
  KeyRound,
  LogOutIcon,
  Search,
  Settings,
  Timer,
  Trash2,
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
import clothes from "../../assets/clothes.png";
import image2 from "../../assets/2..png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_REQUEST } from "@/lib/apiRequest";
import { Category } from "@/interfaces";
import { toast } from "sonner";

const categories = [
  { name: "Fashion Categories", img: clothes, bgColor: "bg-slate-600" },
  { name: "Electronics Headphone", img: image2, bgColor: "bg-orange-900" },
  { name: "Foot Wares", img: image3, bgColor: "bg-yellow-700" },
  { name: "Eye Ware & Sunglass", img: image4, bgColor: "bg-blue-900" },
];
export default function Categorys() {
  const [category, setCategory] = useState<Category[]>([]);
  const accessToken = Cookies.get("access_token"); 
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh");
    navigate("/login");
  };
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(API_REQUEST.category, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        setCategory(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategory();
  }, [accessToken]);

  const handleDelete = async (id: number) => {
    if (!accessToken) {
      toast.warning("Iltimos tizimga kiring!", {
        position: "top-center",
        richColors: true,
      });
  
      navigate("/login");
      return;
    }
  
    await axios
      .delete(`${API_REQUEST.category}/{id}?category_id=${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        toast.info("Deleted success!", {
          position: "top-center",
          richColors: true,
        });
        setRefresh(!refresh); 
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
        toast.error("Xatolik yuz berdi, qayta urinib ko‘ring!", {
          position: "top-center",
          richColors: true,
        });
      });
  };
  

  return (
    <SidebarProvider className="w-screen">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center justify-between px-4 border-b ">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="text-lg font-bold text-white uppercase">
              Categories List!
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
                <Link to="/profile">
                  <User2 /> Profile
                </Link>
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
        <div className="flex items-center justify-around p-6 ml-2 mr-2  mt-3  dark:bg-zinc-900 bg-white shadow-lg rounded-xl">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="w-60 dark:bg-zinc-800 shadow-xl dark:text-white text-center p-4 rounded-xl"
            >
              <CardContent
                className={`h-24 flex items-center pt-4 justify-center ${category.bgColor} rounded-lg`}
              >
                <img src={category.img} alt="" className="w-20 h-20 " />
              </CardContent>
              <p className="mt-4  font-medium">{category.name}</p>
            </Card>
          ))}
        </div>
        <div>
          <div className="p-6 dark:text-white text-black min-h-screen">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">All Categories List</h2>
              <div className="flex gap-2">
                <Button
                  variant={"outline"}
                  className="bg-orange-500 px-2 py-2 rounded-lg text-white"
                >
                  Add Product
                </Button>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="This Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="download" className="flex">
                        Download
                      </SelectItem>
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
                    <th className="p-3 border border-gray-700"></th>
                    <th className="p-3 border border-gray-700">Img</th>
                    <th className="p-3 border border-gray-700">Categories</th>
                    <th className="p-3 border border-gray-700">Description</th>
                    <th className="p-3 border border-gray-700">Sub-Category</th>

                    <th className="p-3 border border-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {category.map((category) => (
                    <tr
                      key={category.id}
                      className="border border-gray-700 text-center"
                    >
                      <td className="p-3 border border-gray-700">
                        <Checkbox />
                      </td>
                      <td></td>
                      <td className="p-3 border border-gray-700">
                        {category.name}
                      </td>
                      <td className="p-3 border border-gray-700">
                        {category.description}
                      </td>
                      <td className="p-3 border border-gray-700">
                        {category.subcategories.map((subcategory) => (
                          <p key={subcategory.id}>{subcategory.name}</p>
                        ))}
                      </td>
                      <td className="p-3 flex justify-center space-x-2">
                        <Button>
                          <Eye />
                        </Button>
                        <Button variant={"secondary"}>
                          <Edit2 />
                        </Button>
                        <Button
                          variant={"destructive"}
                          onClick={() => handleDelete(category.id)}
                        >
                          <Trash2 />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className=" mt-5 flex  items-center justify-between">
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
            <h4 className="text-center text-orange-500 font-mono">
              2025 © Larkon. Crafted by{" "}
            </h4>
            <Heart className="text-red-600 " size={16} />
            <span className="text-green-600 font-mono">Techzaa</span>
          </footer>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
