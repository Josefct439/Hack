
export const Total = (data) =>{
    var suma = 0
    data.map(product =>(
        suma = suma + product["rating"]["count"]
    ))
    return suma
}