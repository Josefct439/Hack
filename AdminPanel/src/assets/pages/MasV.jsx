import React, { useState, useEffect } from 'react';
import { Leftbar } from "../../hooks/Leftbar"
import { Most } from "../../hooks/Most"
import { Top } from "../../hooks/top"

export const MasV = (data, order) => {

    

    const traer = () =>{
        console.log("llegue aca")
        const id1 = Most(order, data, "1")[0]
        console.log(id1)


    }


    return (
        <>
            <Top />
            <Leftbar />
            <section className="paginas">
            <h1>{traer()}</h1>

            </section>


        </>
    )



}
