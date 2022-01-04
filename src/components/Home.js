import {useDispatch, useSelector} from "react-redux"
import {listProducts} from "../actions/productActions"

import React, { useEffect } from 'react'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state)=> state.productList)
    const {products} = productList

    useEffect(() => {
        dispatch(listProducts())
       
    }, [dispatch])

    
    console.log(products)

    return (
        <div>
            <h2>Home Screen</h2>
        </div>
    )
}

export default HomeScreen
