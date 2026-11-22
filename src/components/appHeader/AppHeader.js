import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"
import { useState } from "../../package/state/index.js"
import { AppNavigation, CustomInput } from "../index.js"

const AppHeader = () => {

    const navigation = useNavigation()

    

    const navigationData = [
        {text: "Home", link: "/"},
        {text: "Products", link: "/product-list"},
    ]


    return (
        html`
            <div class="app-header">
                <div class="holder">
                    <div class="top">
                        <button onclick=${() => navigation("/auth/login")}>Login</button>
                        <div>${CustomInput({type: "text", placeholder:"Search..."})}</div>
                    </div>
                    <div class="bottom">
                        <div class="left"></div>
                        <div class="right">
                            ${AppNavigation({dataMap: navigationData})}
                        </div>
                    </div>
                </div>
            </div>
        `
    )
}

export default AppHeader