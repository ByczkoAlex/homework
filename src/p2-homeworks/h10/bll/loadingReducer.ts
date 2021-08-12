const initState = {
    isFetching: false as boolean,
}

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

export type setIsFetchingActionType = {
    isFetching: boolean
    type: typeof TOGGLE_IS_FETCHING
}

type actionsTypes = setIsFetchingActionType

export type InitialType = typeof initState

export const loadingReducer = (state = initState, action: actionsTypes): InitialType => { // fix any
    switch (action.type) {
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default: return state
    }
}

export const loadingAC = (isFetching: boolean): setIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching}) // fix any