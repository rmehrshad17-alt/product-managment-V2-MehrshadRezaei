
import { createBrowserRouter, useNavigation } from "./package/router/router.js";
import { LandingPage,  ProductListPage, AddProduct } from "./pages/index.js";


const navigation = useNavigation()
navigation("/")

createBrowserRouter([
    { path: "/", element: () => LandingPage({ text: "Landing Page..." }) },
    { path: "/product-list", element: () => ProductListPage() },
    { path: "/add-product", element: () => AddProduct() },
])