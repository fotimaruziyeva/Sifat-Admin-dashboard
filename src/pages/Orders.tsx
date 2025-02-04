import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../components/mode-toggle";
import {
  BadgeDollarSign,
  Bell,
  Edit,
  Eye,
  KeyRound,
  LogOutIcon,
  Search,
  Settings,
  Timer,
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
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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
          <div className="grid grid-cols-4 gap-4 pt-3">
            <div className="flex flex-row gap-2 rounded-lg border border-gray-200 p-6">
              <div>
                <h3 className="text-lg font-bold text-black">Payment Refund</h3>
                <span>490</span>
              </div>
              <div>
                <BadgeDollarSign />
              </div>
            </div>
            <div className="flex flex-row gap-2 rounded-lg border border-gray-200 p-4">
              <div>
                <h3 className="text-lg font-bold text-black">Payment Refund</h3>
                <span>490</span>
              </div>
              <div>
                <BadgeDollarSign />
              </div>
            </div>
            <div className="flex flex-row gap-2 rounded-lg border border-gray-200 p-4">
              <div>
                <h3 className="text-lg font-bold text-black">Payment Refund</h3>
                <span>490</span>
              </div>
              <div>
                <BadgeDollarSign />
              </div>
            </div>
            <div className="flex flex-row gap-2 rounded-lg border border-gray-200 p-4">
              <div>
                <h3 className="text-lg font-bold text-black">Payment Refund</h3>
                <span>490</span>
              </div>
              <div>
                <BadgeDollarSign />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-3">
            <div className="flex flex-row gap-2 rounded-lg border border-gray-200 p-2">
              <div>
                <h3 className="text-lg font-bold text-black">Payment Refund</h3>
                <span>490</span>
              </div>
              <div>
                <BadgeDollarSign />
              </div>
            </div>
            <div className="flex flex-row gap-2 rounded-lg border border-gray-200 p-4">
              <div>
                <h3 className="text-lg font-bold text-black">Payment Refund</h3>
                <span>490</span>
              </div>
              <div>
                <BadgeDollarSign />
              </div>
            </div>
            <div className="flex flex-row gap-2 rounded-lg border border-gray-200 p-4">
              <div>
                <h3 className="text-lg font-bold text-black">Payment Refund</h3>
                <span>490</span>
              </div>
              <div>
                <BadgeDollarSign />
              </div>
            </div>
            <div className="flex flex-row gap-2 rounded-lg border border-gray-200 p-4">
              <div>
                <h3 className="text-lg font-bold text-black">Payment Refund</h3>
                <span>490</span>
              </div>
              <div>
                <BadgeDollarSign />
              </div>
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
                      <TableHead>Payment Status</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Delivery Number</TableHead>
                      <TableHead>Order Status</TableHead>
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
                        <TableCell>
                          <Badge
                            variant={
                              order.paymentStatus === "Paid"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {order.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{order.delivery}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.orderStatus === "Completed"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {order.orderStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="flex gap-2">
                          <Button size="icon" variant="outline">
                            <Eye size={16} />
                          </Button>
                          <Button size="icon" variant="outline">
                            <Edit size={16} />
                          </Button>
                          <Button size="icon" variant="destructive">
                            <Trash2 size={16} />
                          </Button>
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
