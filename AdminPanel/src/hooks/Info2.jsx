import React from 'react';
import { Most } from './Most';
export const Info2 = (data, order) => {

    return (
        <>
        <h1 className='titlesec'>PRODUCTOS MAS VENDIDOS</h1>
        <section className='informacion'>            
            <article className='infoitem'>
                <h1 className='infomoneycontainer'>{Most(order, data, "1")[0]}</h1>
                <div className='infomoneycontainer'>

                    
                    <div className='iconinfo'></div>
                </div>
            </article>
            <article className='infoitem'>
                <h1 className='infomoneycontainer'>{Most(order, data, "1")[1]}</h1>
                <div className='infomoneycontainer'>

                    
                    <div className="iconinfo"></div>
                </div>

            </article>
            <article className='infoitem'>
                <h1 className='infomoneycontainer'>{Most(order, data, "1")[2]}</h1>
                <div className='infomoneycontainer'>
                    
                    <div className="iconinfo"></div>
                </div>

            </article>
        </section>
        </>      
    )
}