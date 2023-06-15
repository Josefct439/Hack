import React from 'react';
import { Total } from './Total';
import { Npedidos } from './Npedidos';
import { Ingresos } from './Ingresos';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
export const Info = (data, order) => {

    return (
        <section className='informacion'>
            <article className='infoitem'>
                <h1 className='infotitle'>Numero total de productos en la tienda</h1>
                <div className='infomoneycontainer'>

                    <span> {Total(data)}</span>
                    <div className='iconinfo'><InventoryIcon /></div>
                </div>
            </article>
            <article className='infoitem'>
                <h1 className='infotitle'>Numero total de pedidos realizados</h1>
                <div className='infomoneycontainer'>

                    <span>{Npedidos(order)}</span>
                    <div className="iconinfo"><ShoppingBagIcon /></div>
                </div>

            </article>
            <article className='infoitem'>
                <h1 className='infotitle'>Ingresos</h1>
                <div className='infomoneycontainer'>
                    <span>{Ingresos(order, data)}</span>
                    <div className="iconinfo"><AttachMoneyIcon /></div>
                </div>

            </article>
        </section>

    )


}