import { Leftbar } from "../../hooks/Leftbar"
import { Top } from "../../hooks/top"

export const Almacen = (data) =>{
    return(
        <>

        <section className="productos hamburguesas">
        <h1 className="titulo_sec"> Productos en Almacen</h1>            
            {data.map(product => (
                <article className="articulo" key={product.id}>
                
                    <div className="conpro">
                        <img className="imagenes" src={product.image} alt="" />
                    </div>
                    <div className="conpro">
                        <h2>{product.title}</h2>
                        <p className="desc">{product.description}</p>
                    </div>
                    <div className="conpro">
                        <p >Price: $ {product.price}</p>
                        <p >Stock: {product.rating.count}</p>
                    </div>
          
                </article>          
            ))}           
        </section>
        </>
        
        )
}