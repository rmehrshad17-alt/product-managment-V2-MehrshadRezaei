import { createBrowserRouter, useNavigation } from "./package/router/router.js";
import { LandingPage, ProductListPage, AddProduct } from "./pages/index.js";
import { UserCardGenerator } from "./pages/landing/LandingPage.js";
import { usersData } from "./package/dataBase.js";
import { idGenerator } from "./package/idGenerator.js";

const navigation = useNavigation()

const getRoutes = () => [
    { path: "/", element: () => LandingPage() },
    { path: "/product-list", element: () => ProductListPage() },
    ...usersData.map((product) => ({
        path: `/product-list/id:${product.id}`,
        element: () => ProductListPage()
    })),
    { path: "/add-product", element: () => AddProduct() }
]

createBrowserRouter(getRoutes())

navigation("/")

const searchUsers = (products, searchValue) => {
    const query = searchValue.trim().toLowerCase()

    if (!query) return products

    return products.filter((product) =>
        [product.title, product.description, product.joined]
            .join(" ")
            .toLowerCase()
            .includes(query)
    )
}

const renderCards = (products) => {
    const container = document.getElementById("userCardContainer")
    const emptyMessage = document.getElementById("emptyMessage")

    if (!container) return

    container.innerHTML = UserCardGenerator(products)

    if (emptyMessage) {
        emptyMessage.classList.toggle("hide", products.length > 0)
    }
}

const filterUsersHandler = () => {
    const searchInput = document.getElementById("userSearch")
    if (!searchInput) return

    renderCards(searchUsers(usersData, searchInput.value))
}

document.addEventListener("input", (event) => {
    if (event.target.id === "userSearch") {
        filterUsersHandler()
    }
})

document.addEventListener("submit", (event) => {
    if (event.target.id !== "createUserForm") return

    event.preventDefault()

    const dateInput = document.getElementById("userDate")?.value.trim()
    let joined = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    })

    if (dateInput) {
        const [year, month, day] = dateInput.split("/")
        const parsedDate = new Date(Number(year), Number(month) - 1, Number(day))

        if (!Number.isNaN(parsedDate.getTime())) {
            joined = parsedDate.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            })
        }
    }

    const title = document.getElementById("userName")?.value.trim()

    if (!title) {
        document.getElementById("userName")?.focus()
        return
    }

    usersData.push({
        id: idGenerator(usersData),
        title,
        image: document.getElementById("userImage")?.value.trim() || "",
        description: document.getElementById("userDescription")?.value.trim() || "",
        joined
    })

    createBrowserRouter(getRoutes())
    event.target.reset()
    navigation("/")
})

document.addEventListener("click", (event) => {
    const clickedButton = event.target.closest("button[data-action]")

    if (!clickedButton) return

    const userId = Number(clickedButton.dataset.id)
    const action = clickedButton.dataset.action
    const selectedUser = usersData.find((user) => user.id === userId)

    if (!selectedUser) return

    if (action === "view") {
        sessionStorage.setItem("selectedProductId", String(userId))
        navigation(`/product-list/id:${userId}`)
    }

    if (action === "delete") {
        if (!confirm(`Delete ${selectedUser.title}?`)) return

        const userIndex = usersData.findIndex((user) => user.id === userId)
        usersData.splice(userIndex, 1)
        createBrowserRouter(getRoutes())
        filterUsersHandler()
    }

    if (action === "edit") {
        const newTitle = prompt("Enter new title:", selectedUser.title)

        if (newTitle?.trim()) {
            selectedUser.title = newTitle.trim()
            filterUsersHandler()
        }
    }
})
