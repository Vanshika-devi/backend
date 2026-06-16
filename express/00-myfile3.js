//templates creates oveerhead
const express=require('express');
const app=express();
const {products}=require('./data')
app.get("/",(req,res)=>{
    res.send(`<h1>home page</h1><a href='/api/products'>products</a>`)
})
app.get('/api/products/1',(req,res)=>{
    // const newproducts = products.map((product)=>{
    //     const {id,name,image}=product;
    //     return {id,name,image}
    // })
    const singleProduct=products.find((product)=> product.id === 1)
    res.json(singleProduct)
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000....')
})