export const Ingresos = (order, data) => {
    var suma = 0
    order.forEach(pedido => {
        pedido["products"].forEach(list => {
            var x = list["productId"]
            data.forEach(producto => {
                var y = producto["id"]

                if (x == y) {
                    suma = suma + ((list["quantity"]) * (producto["price"]))
                }
            });
        });
    });
    return (suma.toFixed(2))
}
