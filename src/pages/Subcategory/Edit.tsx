import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Bell, KeyRound, LogOutIcon, Search, Settings, Timer, User2 } from "lucide-react"
import { Link } from "react-router-dom"
import image from "../../assets/image.png";
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function EditSubcategory() {
  return (
    <div>
         <div>
      <SidebarProvider className="w-screen">
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center justify-between px-4 border-b ">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1" />
              <h1 className="text-lg font-bold pl-2 dark:text-white text-black uppercase">
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
                  <Link to="/profile" className="flex items-center gap-2"> 
                   <User2 /> Profile
                   </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <KeyRound /> Password
                  </DropdownMenuItem>
                  <DropdownMenuItem >
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
              <div className="dark:bg-zinc-900  bg-white h-3/4 p-6 rounded-xl shadow-lg ">
                <img src={image} alt="Category" className="w-1/2 h-1/2" />
                <div className="">
                  <h2 className="text-lg font-semibold mt-4 dark:text-[#aab8c5] text-black">
                 Subcategory
                  </h2>
                <p>Subcategory</p>
                </div>
               
              </div>

              
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

                 
                    <div>
                      <Label className="block pb-3 text-gray-700" >
                      Subcategory Title
                      </Label>
                      <Input
                        type="text"
                        placeholder="Enter Title"
                        className="w-full p-6 border  dark:text-white  rounded-md focus:outline-none focus:ring focus:border-blue-300  text-white"
                    
                        />
                  </div>
              <div>
                <Label className="block pb-3 mt-5 text-gray-700">
                Subcategory description
                </Label>
                <Textarea className=" text-white"/>
              </div>
                </div>
                <div className=" dark:bg-zinc-900 bg-white p-6 rounded-xl shadow-lg ">
                  <div className="flex justify-end gap-3">
                    <Button  className=" text-white">Save Changes</Button>
                    <Button className="bg-orange-500 px-10 py-4 hover:bg-orange-500 text-white" >Cancel</Button>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
    </div>
  )
}

export default EditSubcategory