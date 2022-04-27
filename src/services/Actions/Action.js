export const addToCart = (product)=>{

    console.log("Add to cart Action called");
    console.log(product);
    return{
        type: "ADD_TO_CART",
        product:product
    }
}
