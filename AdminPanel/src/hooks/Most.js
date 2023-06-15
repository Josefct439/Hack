export const Most = (order, data, x) => {

    var new_list = {}

    data.forEach(product => {
        new_list[product["id"]] = 0
    });

    order.forEach(pedido => {
        pedido["products"].forEach(list => {
            var x = list["productId"]
            data.forEach(producto => {
                var y = producto["id"]
                if (x == y) {
                    new_list[producto["id"]] = new_list[producto["id"]] + list["quantity"]
                }
            });
        });
    });



    var max = 0
    var mejores = []
    for (var i in new_list) {
        var r = new_list[i]
        if (r > max) {
            max = r
            mejores[0] = i
        }
    }
    max = 0
    for (var i in new_list) {
        if (i != mejores[0]) {
            var r = new_list[i]
            if (r > max) {
                max = r
                mejores[1] = i
            }
        }
    }
    max = 0
    for (var i in new_list) {
        if (i != mejores[0] && i != mejores[1]) {
            var r = new_list[i]
            if (r > max) {
                max = r
                mejores[2] = i
            }
        }
    }

    if (x == "1"){
        data.forEach(prod => {
            if (mejores[0] == prod.id) {
                mejores[0] = prod.title
            }
            if (mejores[1] == prod.id) {
                mejores[1] = prod.title
            }
            if (mejores[2] == prod.id) {
                mejores[2] = prod.title
            }
        });
    }
  


    return (mejores)
}

