import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass

    return (
        <div className={s.general}>
            <div className={s.greeting}>
                <SuperInputText
                       onChange={setNameCallback}
                       className={inputClass}
                       onBlur={setNameCallback}
                />
                <SuperButton>add</SuperButton>
                <span>{totalUsers}</span>
            </div>
            <div>
                <span>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
