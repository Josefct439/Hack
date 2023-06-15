import React, { PureComponent } from 'react';
import { datachart } from '../datos/dataventa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const Ventas = (data, order) => {

    return (
        <>

            <article className='grafico'>
                <h3 className="titlechar">
                    En almacén por ID
                </h3>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="id" />
                        <YAxis />
                        <Tooltip />
                        
                        <Bar dataKey="rating.count" fill="red" />

                    </BarChart>
                </ResponsiveContainer>

            </article>

        </>
    )

}