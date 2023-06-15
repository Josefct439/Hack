import React, { useState, useEffect } from 'react';
import { Ventas } from './Ventas';
import { PricePro } from '../../hooks/PricePro';
import { Info } from '../../hooks/info';
import { Info2 } from '../../hooks/info2';
import { Almacen } from './Almacen';



export const Home = () => {

    const [data, setData] = useState([]);
    const [order, setOrder] = useState([]);

    const callAPI = (async () => {
        let res = await fetch("https://fakestoreapi.com/products")
        let jsonRes = await res.json()

        return jsonRes
    })
    const callAPIorder = (async () => {
        let resOrder = await fetch("https://fakestoreapi.com/carts")
        let jsonResOrder = await resOrder.json()

        return jsonResOrder
    })

    useEffect(() => {
        callAPI().then(res => {
            setData(res)

        }).catch(error => {
            console.log(error)
        })
    }, [])


    useEffect(() => {
        callAPIorder().then(resOrder => {
            setOrder(resOrder)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <section className="paginas">
                <article className='pages'>
                    {Info(data, order)}
                </article>
                <article className="pages">
                    {Ventas(data,order)}
                </article>
                <article className='pages'>
                    {Info2(data, order)}
                </article>
                <article className='pages'>
                    {Almacen(data)}
                </article>


                <h1>Precio Promedio de los productos: ${PricePro(data)}</h1>
               


            </section>




        </>
    )

}