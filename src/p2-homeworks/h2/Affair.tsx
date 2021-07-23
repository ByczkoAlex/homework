import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix таски заменяются вместо удаления

    return (
        <div className={s.affairs}>
            <p>{props.affair.name}</p>
                <p>{props.affair.priority}</p>
                <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair