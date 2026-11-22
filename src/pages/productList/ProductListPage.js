import { AppHeader } from "../../components/index.js"
import { usersData } from "../../package/dataBase.js"

const ProductListPage = () => {
    const path = window.location.hash
    const idPart = path.split("/").pop()
    const routeId = idPart.replace("id:", "")
    const productId = Number(routeId)
    const product = usersData.find((item) => item.id === productId)

    if (!product) {
        return `
            <div class="product-list-page">
                ${AppHeader()}
                <p class="empty-message">Product not found.</p>
            </div>
        `
    }

    return `
        <div class="product-list-page">
            ${AppHeader()}
            <main class="product-list-page-users">
                <article class="product-list-page-user-card">
                    <div class="product-list-page-card-header">
                        ${product.image ? `<img class="product-list-page-avatar" src="${product.image}" alt="${product.title}">` : ""}
                    </div>

                    <div class="product-list-page-user-info">
                        <h1>${product.title}</h1>
                    </div>

                    <p class="product-list-page-user-description">${product.description}</p>

                    <div class="product-list-page-card-footer">
                        <span class="product-list-page-joined-date">${product.joined}</span>
                    </div>
                </article>
            </main>
        </div>
    `
}

export default ProductListPage