import { AppHeader } from "../../components/index.js"
import { usersData } from "../../package/dataBase.js"
import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"

export const UserCardGenerator = (jsonData) => {
    const navigation = useNavigation()

    if (!jsonData.length) {
        return `<p class="empty-message">No users found.</p>`
    }

    return jsonData.map((user) => html`
        <article onclick=${() => navigation(`/product-list/id:${user.id}`)} class="user-card">
            <div class="card-header">
                ${user.image ? `<img class="avatar" src="${user.image}" alt="${user.title}">` : ""}
            </div>

            <div class="user-info">
                <h3>${user.title}</h3>
            </div>

            <p class="user-description">${user.description}</p>

            <div class="card-footer">
                <span class="joined-date">${user.joined}</span>
                <div class="card-buttons">
                    <button class="view-btn" type="button" data-id="${user.id}" data-action="view">View</button>
                    <button class="edit-btn" type="button" data-id="${user.id}" data-action="edit">Edit</button>
                    <button class="delete-btn" type="button" data-id="${user.id}" data-action="delete">Delete</button>
                </div>
            </div>
        </article>
    `).join("")
}

const LandingPage = () => {
    return `
        <div class="landing-page">
            ${AppHeader()}
            <section class="user-filters" id="userFilters">
                <div class="user-search">
                    <input type="search" id="userSearch" name="userSearch"
                        placeholder="Search product by title, description, or date">
                    <button class="user-search-sumbit" type="submit"></button>
                </div>
            </section>
            <main class="users" id="userCardContainer">
                ${UserCardGenerator(usersData)}
            </main>
        </div>
    `
}

export default LandingPage
