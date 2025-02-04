import { ThemeProvider } from '@/components/theme-provider'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Category from './pages/Category'
import CreateCategory from './pages/CreateCategory'
import EditCategory from './pages/EditCategory'
import Products from './pages/Products'
import EditProducts from './pages/EditProducts'
import CreateProducts from './pages/CreateProducts'
import Orders from './pages/Orders'
import Profile from './pages/Profile'



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
			</Routes>
		</ThemeProvider>
	)
}

export default App
