

function TakeOrder(a,b,c,callback){
    let Order = {
        item_1:a,
        item_2:b,
        item_3:c
        
    }
    callback(Order)
}

function ProcessOrder(order,callback){
    let Order={
        ...order,
        processOrder:"Done"
    }
    callback(Order)
}

function  DeliveryOrder(order,callback){
    let Order = {
        ...order,
        Delivery:"Done"
    }
    callback(Order)
}

function payBill(order){
    let Order={
        ...order,
        paybill:"paid"
    }
    console.log(Order)
}


TakeOrder("Cake","Pizza","Burger",(order)=>{
    ProcessOrder(order,(order)=>{
        DeliveryOrder(order,(order)=>{
            payBill(order)
        })
    })
})