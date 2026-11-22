import {AppHeader} from "../../components/index.js"

//// parameter in function

//// props in components

const LandingPage = ({text}) => {
    return (
        `<div class="landing-page">
            ${AppHeader()}
            <p>${text}</p>
        </div>`
    )
}


//// export default
export default LandingPage

//// named export
// export {LandingPage, LandingHeader}