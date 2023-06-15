export const PricePro = (data) => {
    var pro = 0
    var cont = 0
    var suma = 0
    data.map(product =>(
        cont = cont + 1
    ))

    data.map(product =>(
        suma = suma + product["price"]
    ))
    pro = suma/cont
    return(pro.toFixed(2))
}