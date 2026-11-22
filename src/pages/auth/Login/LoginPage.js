import { html } from "../../../package/events/index.js"
import { useNavigation } from "../../../package/router/router.js"

const LoginPage = () => {

    const navigation = useNavigation()

    return (
        html`<div>
            <h1>Welcome To Login Page...</h1>
            <button onclick=${() => {navigation("/")}}>Back To Home</button>
        </div>`
    )
}

export default LoginPage