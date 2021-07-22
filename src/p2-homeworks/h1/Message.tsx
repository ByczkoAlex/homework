import React from 'react'
import s from './Message.module.css'

type messageData = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: messageData) {
    return (
        <div>
            <div id="reviews">
                <div className={s.message}>
                    <div>
                        <img src={props.avatar} alt="" className={s.avatar}/>
                    </div>
                    <div className={s.angle}></div>
                    <div className={s.description}>
                        <p className={s.author}>{props.name}</p>
                        <p className={s.comment_text}>{props.message}</p>
                        <p className={s.time}>{props.time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
