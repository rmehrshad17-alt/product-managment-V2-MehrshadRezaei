import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"
import { useState } from "../../package/state/index.js"
import { AppNavigation, CustomInput } from "../index.js"

const AppHeader = () => {

    const navigation = useNavigation()

    

    const navigationData = [
        {text: "Home", link: "/"},
        {text: "Add Products", link: "/add-product"},
    ]


    return (
        html`
            <main class="page">
                <header class="topbar">
                    <div class="brand">
                        <h1>Product Management</h1>
                    </div>

                    <nav class="tabs">
                        <button class="tab active" type="button">Products</button>
                        <button onclick=${()=>navigation("/add-product")} class="add-user-btn" id="showUserFormBtn" type="button">
                            <span>＋</span> Add Product
                        </button>
                    </nav>

                    
                </header>

                <section class="user-filters" id="userFilters">
                    <div class="user-search">
                        <!-- <label for="userSearch">Search users</label> -->
                        <input type="search" id="userSearch" name="userSearch"
                            placeholder="Search product by title, description, or date">
                        <button class="user-search-sumbit" type="submit"></button>
                    </div>
                </section>

                <main class="users" id="userCardContainer"></main>
                <p class="empty-message hide" id="emptyMessage">No users found.</p>
            </main>
        `
    )
}



export default AppHeader