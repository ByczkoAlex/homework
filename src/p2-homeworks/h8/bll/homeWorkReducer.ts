import {initialPeopleType} from "../HW8";

const SORT_USERS = "SORT_USERS";
const CHECK_USERS = "CHECK_USERS";

export type SortUsersActionType = {
    type: typeof SORT_USERS,
    payload: string
}

export type CheckUsersActionType = {
    type: typeof CHECK_USERS,
    payload: number
}

type ActionTypes = SortUsersActionType | CheckUsersActionType

export const homeWorkReducer = (state: initialPeopleType, action: ActionTypes): initialPeopleType => {
    switch (action.type) {
        case 'SORT_USERS': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'CHECK_USERS': {
            return state.filter(a => a.age >= action.payload)
        }
        default:
            return state
    }
}