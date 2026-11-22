import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"
import { useState } from "../../package/state/index.js"
import { AppNavigation, CustomInput } from "../index.js"

const AppCards = () => {

    const navigation = useNavigation()

    

    const navigationData = [
        {text: "Home", link: "/"},
        {text: "Product Info", link: "/product-info"},
    ]
}