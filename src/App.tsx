import { ThemeProvider } from '@/components/theme-provider'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Category from './pages/Category'
import CreateCategory from './pages/CreateCategory'
import EditCategory from './pages/EditCategory'
import Products from './pages/Products'


function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/products' element={<Products/>}></Route>
				<Route path='/category' element={<Category/>}/>
				<Route path='/createcategory' element={<CreateCategory	/>}></Route>
				<Route path='/edit' element={<EditCategory/>}></Route>
			</Routes>
		</ThemeProvider>
	)
}

export default App
