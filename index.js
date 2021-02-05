

function TakeOder(a,b,c,callback){
    console.log('Take Oder')
    callback({ item1:a,item2:b,item3:c}, deliveryOrder)
}

function ProccessOder(order,callback){
    const Order = {
        ...order,
        Process:"Done"
    }
    console.log(Order)
    callback(Order,payBill)
}


function deliveryOrder(order,callback){
    let Order ={
        ...order,
        DeliveryOrder: "done"
    }
    
    callback(Order)
}

function payBill(order){
    const Order={
        ...order,
        payBill:"paid"
    }
    console.log(Order)
}


TakeOder("Cake","Pizaa","Burger",ProccessOder)



