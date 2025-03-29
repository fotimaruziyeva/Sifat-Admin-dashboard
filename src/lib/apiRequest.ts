const baseUrl = import.meta.env.VITE_APP_API_ENDPOINT

export const API_REQUEST = {
	login: `${baseUrl}/check/user`,
	orders:`${baseUrl}/orders`,
	category:`${baseUrl}/categories`,
	products:`${baseUrl}/products`,
	subcategories:`${baseUrl}/subcategories`,
	coupons:`${baseUrl}/coupons`,
	attributes:`${baseUrl}/attributes`,

}
