import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../../components/mode-toggle";
import {
  Bell,
  KeyRound,
  LogOutIcon,
  Package,
  Search,
  Settings,
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
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orders } from "@/constants";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Orders() {
  return (
    <SidebarProvider className=" w-screen">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center justify-between px-4 border-b">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="text-lg font-bold text-white">Orders</h1>
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
                className="border-none bg-transparent dark:text-white text-black placeholder-gray-400"
              />
              <Search className="absolute right-2 text-gray-400" />
            </div>
          </div>
        </header>
        <div className="p-6  min-h-screen">
          <div className="grid grid-cols-5 gap-10">
            <div className="flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300 dark:text-black">
              <span className="absolute top-3 right-3 text-black">
                <Package size={14} />
              </span>
              <span className="text-2xl font-semibold">4000</span>
              <p className="text-muted-foreground dark:text-black">
                Total Orders
              </p>
            </div>
            <div className="flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300 dark:text-black">
              <span className="absolute top-3 right-3 text-black">
                <Package size={14} />
              </span>
              <span className="text-2xl font-semibold">4000</span>
              <p className="text-muted-foreground dark:text-black">
                Total Orders
              </p>
            </div>
            <div className="flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300 dark:text-black">
              <span className="absolute top-3 right-3 text-black">
                <Package size={14} />
              </span>
              <span className="text-2xl font-semibold">4000</span>
              <p className="text-muted-foreground dark:text-black">
                Total Orders
              </p>
            </div>
            <div className="flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300 dark:text-black">
              <span className="absolute top-3 right-3 text-black">
                <Package size={14} />
              </span>
              <span className="text-2xl font-semibold">4000</span>
              <p className="text-muted-foreground dark:text-black">
                Total Orders
              </p>
            </div>
            <div className="flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300 dark:text-black">
              <span className="absolute top-3 right-3 text-black">
                <Package size={14} />
              </span>
              <span className="text-2xl font-semibold">4000</span>
              <p className="text-muted-foreground dark:text-black">
                Total Orders
              </p>
            </div>
          </div>

          <div className="p-6  min-h-screen">
            <Card className="">
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Created At</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Payment Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="text-blue-500">
                          {order.customer}
                        </TableCell>
                        <TableCell>{order.priority}</TableCell>
                        <TableCell>{order.total}</TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Pending" >
                              Pending</SelectItem>
                              <SelectItem value="processing">
                                Processing
                              </SelectItem>
                              <SelectItem value="completed">
                                Completed
                              </SelectItem>
                              <SelectItem value="cancelled">
                                Cancelled
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="flex gap-2">
                          <Button  variant={'secondary'} className="bg-green-600">Submit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
