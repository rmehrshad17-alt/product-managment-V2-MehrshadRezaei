// import LandingPage from "./pages/landing/LandingPage.js"
// import LandingPage from "./pages/landing/LandingPage.js"
// import ProductListPage from "./pages/productList/ProductListPage.js"
// import { LandingPage, ProductListPage } from "./pages/index.js"

// const rootElement = document.getElementById("rootElement")

// const landingPageElem = LandingPage()


// rootElement.innerHTML = landingPageElem

// const ProductPageBtnElem = document.getElementById("ProductPageBtn")
// const LandingPageBtnElem = document.getElementById("LandingPageBtn")

// rootElement.innerHTML = ProductListPage()

//// events
// ProductPageBtnElem.addEventListener("click", () => {
//     rootElement.innerHTML = ProductListPage()
// })


// LandingPageBtnElem.addEventListener("click", () => {
//     rootElement.innerHTML = LandingPage()
// })


// console.log("rootElement ==>", rootElement)
// console.log("landingPageElem ==>", landingPageElem)




//////////////
import { createBrowserRouter, useNavigation } from "./package/router/router.js";
import { LandingPage, LoginPage, ProductListPage } from "./pages/index.js";


const navigation = useNavigation()
navigation("/")

createBrowserRouter([
    { path: "/", element: () => LandingPage({ text: "Landing Page..." }) },
    { path: "/product-list", element: () => ProductListPage() },
    { path: "/product-list", element: () => ProductListPage() },
    { path: "/auth/login", element: () => LoginPage() },
])