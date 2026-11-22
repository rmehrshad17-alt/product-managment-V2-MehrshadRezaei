import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"

export const AppNavigation = ({ dataMap }) => {

    console.log("dataMap ==>", dataMap)

    const navigation = useNavigation()

    const clickHandler = (link) => {
        navigation(link)
    }

    return (
        `
            <div class="app-navigation">${dataMap.map((item) => {
            console.log(item)
            return (
                html`<h4 onclick=${() => {
                    console.log(item)
                    navigation(item.link)
                    clickHandler(item.link)
                }}>${item.text}</h4>`
            )
        })
        }</div>   
        `
    )

    // return (
    //     `
    //         <div lass="app-navigation">
    //             <h4 >Home</h4>
    //             <h4 >Products</h4>
    //         </div>
    //     `
    // )
}

