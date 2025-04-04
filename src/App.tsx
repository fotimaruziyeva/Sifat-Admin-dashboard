import { ThemeProvider } from '@/components/theme-provider'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateCategory from './pages/Category/CreateCategory'
import EditCategory from './pages/Category/EditCategory'
import EditProducts from './pages/Product/EditProducts'
import CreateProducts from './pages/Product/CreateProducts'
import Orders from './pages/Orders/Orders'
import Profile from './pages/Profile/Profile'
import Login from './pages/Profile/Login'
import Products from './pages/Product/Products'
import Category from './pages/Category/Category'
import List from './pages/Coupons/List'
import Add from './pages/Coupons/Add'
import SellersList from './pages/Sellers/List'
import BannersList from './pages/Banners/List'
import BannersAdd from './pages/Banners/Add'
import AttributesAdd from './pages/Attributes/Add'
import AttributesEdit from './pages/Attributes/Edit'
import CreateSubcategory from './pages/Subcategory/Add'
import EditSubcategory from './pages/Subcategory/Edit'
function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Routes>
				<Route path='/' element={<HomePage />} />

				<Route path='/products' element={<Products/>}></Route>
				<Route path='/product-edit' element={<EditProducts/>}></Route>
				<Route path='/product-create' element={<CreateProducts/>}></Route>
				<Route path='/category' element={<Category/>}/>
				<Route path='/createcategory' element={<CreateCategory	/>}></Route>
				<Route path='/edit' element={<EditCategory/>}></Route>
				<Route path='/orders' element={<Orders/>}></Route>
				<Route path='/profile' element={<Profile/>}></Route>
				<Route path='/login' element={<Login/>}></Route>	
				<Route path='/coupons/list' element={<List/>}></Route>
				<Route path='/coupons/add' element={<Add/>}></Route>
				<Route path='/sellers/list' element={<SellersList/>}></Route>
				<Route path='/banners/list' element={<BannersList/>}></Route>
				<Route path='/banners/add' element={<BannersAdd/>}></Route>
				<Route path='/attribbutes/add' element={<AttributesAdd/>}></Route>
				<Route path='/attribbutes/edit' element={<AttributesEdit/>}></Route>
				<Route path='/subcategory/create' element={<CreateSubcategory/>}></Route>
				<Route path='/subcategory/edit' element={<EditSubcategory/>}></Route>
			</Routes>
		</ThemeProvider>
	)
}

export default App
