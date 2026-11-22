import { initEvents } from "../events/index.js"
import { resetIndexState } from "../state/index.js"

let initialRoutData = []

export const getPathName = () => {
    let pathName = window.location.hash
    pathName = pathName.slice(1, pathName.length)
    return pathName
}


export const createBrowserRouter = (routData) => {
    initialRoutData = routData
    rebuildWebPages()
    initEvents()
    // console.log("initialRoutData ==>", initialRoutData)
}


export const rebuildWebPages = () => {

    // const pathName = "/product-list"

    ///// reset state index
    resetIndexState()
    
    const pathName = getPathName()

    // console.log("newPathName ==>", newPathName)

    const rootElement = document.getElementById("root")
    rootElement.innerHTML = ""

    // console.log("rootElement ==>", rootElement)

    initialRoutData.forEach((rout) => {
        // console.log("rout paht ==>", rout.path)

        if (rout.path == pathName) {
            // console.log("rout ==>", rout)

            rootElement.innerHTML = rout.element()
        }
    })
}


export const useNavigation = () => {

    const navigation = (routName) => {
        window.location.hash = `#${routName}`
        rebuildWebPages()
    }

    return navigation
}