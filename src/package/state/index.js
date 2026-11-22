import { rebuildWebPages } from "../router/router.js"

let state = []
let indexState = 0

export const resetIndexState = () => { indexState = 0 }

export const useState = (initialState) => {
    const index = indexState++

    // console.log("indexState ==>", indexState)

    // console.log("initialState ==>", initialState) // ProductPageBtn

    // const findStateIndex = state.findIndex((item) => item == initialState)

    // console.log(state.length)
    // console.log(indexState)

    // if (findStateIndex == -1 && state.length == 0) {
    //     state = [index]
    // } else if (findStateIndex == -1) {
    //     state[index] = initialState
    // }

    // if (!(index in state)) {state[index] = initialState}

    if (!(index in state)) {
        state[index] = initialState
    }

    // console.log("findStateIndex ==>", findStateIndex)

    let getState = () => {
        return state[index]
    }

    const setState = (newState) => {
        // state = newState

        // console.log("state in setState ==>", state)

        // getState = () => {
        //     return state
        // }

        state[index] = newState

        rebuildWebPages()

        console.log("state in setState ==>", state)
    }

    return [state[index], setState, getState]
}