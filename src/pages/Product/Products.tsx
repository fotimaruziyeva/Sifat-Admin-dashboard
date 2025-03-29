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
  KeyRound,
  LogOutIcon,
  Search,
  Settings,
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
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import {  gender, rating, sizes } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate, } from "react-router-dom";
import { useEffect, useState } from "react";
import { Category, Product } from "@/interfaces";
import axios from "axios";
import { API_REQUEST } from "@/lib/apiRequest";
import Cookies from "js-cookie";
import { toast } from "sonner";


export default function Products() {
  const [category, setCategory] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [refresh, setRefresh] = useState(false)
  const accessToken = Cookies.get("access_token"); 
  const navigate=useNavigate()
  
 const handleLogOut = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh");
    navigate("/login");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_REQUEST.products);
        setProducts(response.data.data);
        console.log(API_REQUEST.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [refresh]);

  const handleDelete = async (id: number) => {
		if (!accessToken) {
			toast.warning('Iltimos tizimga kiring!', {
				position: 'top-center',
				richColors: true,
			})

			navigate('/login')
		}
		await axios
			.delete(`${API_REQUEST.products}/{id}?product_id=${id}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
				},
			})
			.then(() => {
				toast.info('Deleted success!', {
					position: 'top-center',
					richColors: true,
				})
        setRefresh(!refresh)
			})
			.catch(err => console.log(err))
	}
  
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


  if (!products || !Array.isArray(products)) {
    return <p>Loading...</p>;
  }

  return (
    <SidebarProvider className="w-screen">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center justify-between px-4 border-b">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="text-lg font-bold text-white">Product List!</h1>
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
                <DropdownMenuItem onClick={handleLogOut}>
                  <LogOutIcon /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="relative flex items-center rounded-lg dark:bg-zinc-900 bg-white px-2 py-1">
              <Input
                placeholder="Search..."
                className="border-none bg-transparent text-black placeholder-gray-400"
              />
              <Search className="absolute right-2 text-gray-400" />
            </div>
          </div>
        </header>
        <div className="dark:bg-zinc-900  bg-white dark:text-white text-black min-h-screen p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <Input
                placeholder="Search ..."
                className="pl-10 dark:bg-zinc-800 bg-white shadow-lg"
              />
              <Search
                className="absolute left-3 top-2 text-gray-400"
                size={20}
              />
            </div>
            <Button className="bg-green-500 hover:bg-green-600">
              + New Product
            </Button>
          </div>
          <div className="flex gap-4">
            <aside className="w-1/4 dark:bg-zinc-800 bg-white shadow-lg dark:text-white text-black p-4 rounded-xl">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Categories</AccordionTrigger>
                  <AccordionContent>
                    <Checkbox /> All Categories
                    {category.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <Checkbox /> {range.name}
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Product price</AccordionTrigger>
                  <AccordionContent>
                    <Checkbox /> All Price
                    {products.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <Checkbox /> {range.price}
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 className="text-lg font-semibold mt-4 mb-3">Product Price</h2>
              <Slider min={0} max={1000} defaultValue={[200]} />
              {/*  */}
              <Accordion className="pt-3 " type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="rounded">
                    Gender{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    {gender.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <Checkbox /> {range}
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/*  */}
              <Accordion className="pt-3 " type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="rounded">
                    Size &Fit{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    {sizes.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <Checkbox /> {range}
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* rating */}
              <Accordion className="pt-3 " type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="rounded">
                    Rating{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    {rating.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <Checkbox /> {range}
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Button className="w-full mt-4">Apply</Button>
            </aside>
            <main className="w-3/4 grid grid-cols-3 gap-4">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="dark:bg-zinc-800 bg-white shadow-lg rounded-xl"
                >
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-yellow-400">★ {product.view_count}</p>
                    <p className="text-gray-300 line-through">
                      ${product.price}
                    </p>
                    {product.dis_count_price && (
                      <p className="text-green-400 text-xl">
                        ${product.dis_count_price}
                      </p>
                    )}
                    <div className="flex flex-row gap-2">
                      <Button className="w-full mt-2">Add To Cart</Button>
                      <Button className="w-full mt-2 bg-blue-600">
                        <Edit2 />
                      </Button>
                      <Button className="w-full mt-2" variant={"destructive"} onClick={() => handleDelete(product.id)} >
                        <Trash2 />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </main>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
