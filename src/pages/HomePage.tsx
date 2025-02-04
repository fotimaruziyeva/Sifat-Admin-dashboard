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

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
]

export default function Navbar() {
	return (
		<SidebarProvider className=' w-screen'>
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
						<div className='flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300'>
							<span className='absolute top-3 right-3 text-black'>
								<Package size={14} />
							</span>
							<span className='text-2xl font-semibold'>4000</span>
							<p className='text-muted-foreground'>Total Products</p>
						</div>
						<div className='flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300'>
							<span className='absolute top-3 right-3 text-black'>
								<Package size={14} />
							</span>
							<span className='text-2xl font-semibold'>4000</span>
							<p className='text-muted-foreground'>Total Products</p>
						</div>
						<div className='flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300'>
							<span className='absolute top-3 right-3 text-black'>
								<Package size={14} />
							</span>
							<span className='text-2xl font-semibold'>4000</span>
							<p className='text-muted-foreground'>Total Products</p>
						</div>
						<div className='flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300'>
							<span className='absolute top-3 right-3 text-black'>
								<Package size={14} />
							</span>
							<span className='text-2xl font-semibold'>4000</span>
							<p className='text-muted-foreground'>Total Products</p>
						</div>
						<div className='flex flex-col gap-2 relative border border-solid border-[#00000012] p-5 rounded-sm bg-slate-300'>
							<span className='absolute top-3 right-3 text-black'>
								<Package size={14} />
							</span>
							<span className='text-2xl font-semibold'>4000</span>
							<p className='text-muted-foreground'>Total Products</p>
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
						</div>
						<div className='h-full'>//orders table data</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
