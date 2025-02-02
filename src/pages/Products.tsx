import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../components/mode-toggle";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { categories, gender, priceRanges, products, rating, sizes } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

export default function Products() {
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
            <div className="relative flex items-center rounded-lg dark:bg-zinc-900 bg-white px-2 py-1">
              <Input
                placeholder="Search..."
                className="border-none bg-transparent text-black placeholder-gray-400"
              />
              <Search className="absolute right-2 text-gray-400" />
            </div>
          </div>
        </header>
        <div className="dark:bg-zinc-900  text-white min-h-screen p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <Input placeholder="Search ..." className="pl-10 bg-zinc-800" />
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
            <aside className="w-1/4 bg-zinc-800 p-4 rounded-xl">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Categories</AccordionTrigger>
                  <AccordionContent>
                    <Checkbox /> All Categories
                    {categories.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <Checkbox /> {range}
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
                    {priceRanges.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <Checkbox /> {range}
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 className="text-lg font-semibold mt-4 mb-3">Product Price</h2>
              <Slider min={0} max={1000} defaultValue={[200]} />
              {/*  */}
              <Accordion className="pt-3 "  type="single" collapsible>
              <AccordionItem  value="item-1">
                  <AccordionTrigger className="rounded">Gender </AccordionTrigger>
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
                <Accordion className="pt-3 "  type="single" collapsible>
              <AccordionItem  value="item-1">
                  <AccordionTrigger className="rounded">Size &Fit </AccordionTrigger>
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
                <Accordion className="pt-3 "  type="single" collapsible>
              <AccordionItem  value="item-1">
                  <AccordionTrigger className="rounded">Rating </AccordionTrigger>
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
              {products.map((product, index) => (
                <Card key={index} className="bg-zinc-800 rounded-xl">
                  <CardContent className="p-4">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="rounded-lg mb-3"
                    />
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-yellow-400">
                      ★ {product.rating} ({product.reviews} Reviews)
                    </p>
                    <p className="text-gray-300 line-through">
                      ${product.originalPrice}
                    </p>
                    <p className="text-green-400 text-xl">
                      ${product.price}{" "}
                      <span className="text-sm">({product.discount})</span>
                    </p>
                    <div className="flex flex-row gap-2">
                      <Button className=" w-full mt-2">Add To Cart</Button>
                      <Button className=" w-full mt-2 bg-blue-600">
                        <Edit2 />
                      </Button>
                      <Button className="w-full mt-2" variant={"destructive"}>
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
