import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {initialPeopleType} from "../../HW8";

let initialState: initialPeopleType

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT_USERS', payload: 'up'})
    expect(newState[0]._id).toBe(1)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT_USERS', payload: 'down'})
    expect(newState[0]._id).toBe(0)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK_USERS', payload: 18})
    expect(newState.length).toBe(4)
})
