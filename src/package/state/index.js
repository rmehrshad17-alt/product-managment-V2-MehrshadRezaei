import { rebuildWebPages } from "../router/router.js"

let state = []
let indexState = 0

export const resetIndexState = () => { indexState = 0 }

export const useState = (initialState) => {
    const index = indexState++



    if (!(index in state)) {
        state[index] = initialState
    }



    let getState = () => {
        return state[index]
    }

    const setState = (newState) => {
        

        state[index] = newState

        rebuildWebPages()

        console.log("state in setState ==>", state)
    }

    return [state[index], setState, getState]
}