import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"

const AppHeader = () => {
    const navigation = useNavigation()

    return html`
        <main class="page">
            <header class="topbar">
                <nav class="tabs">
                    <div class="brand">
                        <h1>Product Management</h1>
                    </div>
                    <button onclick=${() => navigation("/")} class="tab active" type="button">Products</button>
                    <button onclick=${() => navigation("/add-product")} class="add-user-btn" id="showUserFormBtn" type="button">
                        <span>＋</span> Add Product
                    </button>
                </nav>
            </header>

            

            <p class="empty-message hide" id="emptyMessage">No users found.</p>
        </main>
    `
}

export default AppHeader