import {isEqual} from "lodash";

const CartController = (
  param
) => {
  //get the current value of cart from localstorage
  const localCart = localStorage.getItem("cart");
  
  console.log(localCart)
  // check if a product with the same attributes and slug exist in cart. Return it's index or return -1 if not found
  if (localCart != undefined) {
      //parse the current value of cart
        // const cartContent = JSON.parse(localCart);
        // const index = cartContent["cart"].findIndex(
        //     (item) => isEqual(item.slug, param.slug) && isEqual(item.attributes, param.attributes)
        //   );
        //  console.log("oe", index)
  }
  else{
      localStorage.setItem('cart', param)
  }
  
 
};
export default CartController;
