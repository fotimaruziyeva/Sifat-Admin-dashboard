import { AppSidebar } from '@/components/app-sidebar'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { ModeToggle } from '../components/mode-toggle'
import {
	Bell,
	KeyRound,
	LogOutIcon,
	Package,
	Search,
	Settings,
	Timer,
	User2,
} from 'lucide-react'
import { Input } from '../components/ui/input'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../components/ui/sheet'
import image from '../assets/image.png'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'
import { Link } from 'react-router-dom'
import {
	BarChart,
	Bar,
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Rectangle,
} from 'recharts'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { data, recentOrder } from '@/constants'
import { Button } from '@/components/ui/button'


export default function Navbar() {
	return (
		<SidebarProvider className=' w-screen dark:text-white text-black dark:bg-black bg-white shadow-lg'>
			<AppSidebar />
			<SidebarInset>
				<header className='flex h-16 items-center justify-between px-4 border-b'>
					<div className='flex items-center gap-4'>
						<SidebarTrigger className='-ml-1' />
						<h1 className='text-lg font-bold text-white'>WELCOME!</h1>
					</div>
					<div className='flex items-center gap-4'>
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
									alt='Profile'
									className='h-8 w-8 rounded-full cursor-pointer'
								/>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Link to='/profile'>
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
						<div className='relative flex items-center rounded-lg dark:bg-gray-800  bg-white px-2 py-1'>
							<Input
								placeholder='Search...'
								className='border-none bg-transparent text-black placeholder-gray-400'
							/>
							<Search className='absolute right-2 text-gray-400' />
						</div>
					</div>
				</header>
				<div className='flex flex-col  gap-4 mt-10 px-5'>
					<div className='grid grid-cols-5 gap-10'>
						<div className='flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300 dark:text-black'>
							<span className='absolute top-3 right-3 text-black'>
								<Package size={14} />
							</span>
							<span className='text-2xl font-semibold'>4000</span>
							<p className='text-muted-foreground dark:text-black'>Total Products</p>
						</div>
						<div className='flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300 dark:text-black'>
							<span className='absolute top-3 right-3 text-black'>
								<Package size={14} />
							</span>
							<span className='text-2xl font-semibold'>4000</span>
							<p className='text-muted-foreground dark:text-black'>Total Products</p>
						</div>
						<div className='flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300 dark:text-black'>
							<span className='absolute top-3 right-3 text-black'>
								<Package size={14} />
							</span>
							<span className='text-2xl font-semibold'>4000</span>
							<p className='text-muted-foreground dark:text-black'>Total Products</p>
						</div>
						<div className='flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300 dark:text-black'>
							<span className='absolute top-3 right-3 text-black'>
								<Package size={14} />
							</span>
							<span className='text-2xl font-semibold'>4000</span>
							<p className='text-muted-foreground dark:text-black'>Total Products</p>
						</div>
						<div className='flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300 dark:text-black'>
							<span className='absolute top-3 right-3 text-black'>
								<Package size={14} />
							</span>
							<span className='text-2xl font-semibold'>4000</span>
							<p className='text-muted-foreground dark:text-black'>Total Products</p>
						</div>
					</div>
					<div className='p-5 rounded-sm border border-solid border-[#00000012] h-[500px] flex flex-col gap-5'>
						<div className='flex justify-between items-center gap-4'>
							<h1 className='text-2xl font-semibold'>Analytics</h1>
							<Select>
								<SelectTrigger className='w-[180px]'>
									<SelectValue placeholder='Mode' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='yearly'>Yearly</SelectItem>
									<SelectItem value='monthly'>Monthly</SelectItem>
									<SelectItem value='weekly'>Weekly</SelectItem>
									<SelectItem value='daily'>Daily</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='h-full'>
							<ResponsiveContainer width='100%' height='100%'>
								<BarChart
									width={500}
									height={300}
									data={data}
									margin={{
										top: 5,
										right: 30,
										left: 20,
										bottom: 5,
									}}
								>
									<CartesianGrid strokeDasharray='3 3' />
									<XAxis dataKey='name' />
									<YAxis />
									<Tooltip />
									<Legend />
									<Bar
										dataKey='pv'
										fill='#8884d8'
										activeBar={<Rectangle fill='pink' stroke='blue' />}
									/>
									<Bar
										dataKey='uv'
										fill='#82ca9d'
										activeBar={<Rectangle fill='gold' stroke='purple' />}
									/>
								</BarChart>
							</ResponsiveContainer>
						</div>
					</div>
					<div className='p-5 rounded-sm border border-solid border-[#00000012]  flex flex-col gap-5'>
						<div className='flex justify-between items-center gap-4'>
							<h1 className='text-2xl font-semibold'>Recent Orders</h1>
							<div>
							<Button className='flex '>
								<Link to={'/orders'}>
								Create Orders
								</Link> </Button>
							</div>
							
						</div>
						<div className='h-full'>
  <table className='w-full border border-gray-700 text-center border-collapse'>
    <thead>
      <tr className='border border-gray-700'>
        <th className='p-2 border border-gray-700'>Order Id</th>
        <th className='p-2 border border-gray-700'>Date</th>
        <th className='p-2 border border-gray-700'>Product</th>
        <th className='p-2 border border-gray-700'>Customer Name</th>
        <th className='p-2 border border-gray-700'>Email ID</th>
        <th className='p-2 border border-gray-700'>Phone No.</th>
        <th className='p-2 border border-gray-700'>Address</th>
        <th className='p-2 border border-gray-700'>Payment Type</th>
        <th className='p-2 border border-gray-700'>Status</th>
      </tr>
    </thead>
    <tbody>
      {recentOrder.map((order) => (
        <tr key={order.id} className='border border-gray-700'>
          <td className='p-2 border border-gray-700'>{order.id}</td>
          <td className='p-2 border border-gray-700'>{order.date}</td>
          <td className='p-2 border border-gray-700'>
            <img src={order.product} alt="" className='w-16 h-16 mx-auto'/>
          </td>
          <td className='p-2 border border-gray-700'>{order.customerName}</td>
          <td className='p-2 border border-gray-700'>{order.emailId}</td>
          <td className='p-2 border border-gray-700'>{order.phoneNo}</td>
          <td className='p-2 border border-gray-700'>{order.address}</td>
          <td className='p-2 border border-gray-700'>{order.paymentType}</td>
          <td className='p-2 border border-gray-700'>{order.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
