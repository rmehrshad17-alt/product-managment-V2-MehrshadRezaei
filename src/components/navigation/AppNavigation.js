import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"

export const AppNavigation = ({ dataMap }) => {

    console.log("dataMap ==>", dataMap)

    const navigation = useNavigation()

    const clickHandler = (link) => {
        navigation(link)
    }

    return 
}

