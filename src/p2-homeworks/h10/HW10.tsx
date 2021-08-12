import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import PreloaderGif from '../../assets/Preloader.gif'
import s from './HW10.module.css'
import {loadingAC} from "./bll/loadingReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";

function HW10() {
    let isFetching = useSelector((state: AppStoreType) => state.loading.isFetching)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };


    return (

        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            <div className={s.toggle}>
                {isFetching
                    ? (
                        <div><img className={s.preloader} src={PreloaderGif}/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
