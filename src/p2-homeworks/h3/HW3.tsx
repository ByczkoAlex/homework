import React, {Dispatch, SetStateAction, useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState([] as Array<UserType>)

    const addUserCallback = (name: string) => {
        let user = {
            _id: v1(),
            name
        }
        setUsers([...users, user])
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW3
