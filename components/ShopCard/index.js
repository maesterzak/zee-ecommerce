import {  faCartShopping, faCartArrowDown, faRotateBack, faHeart, faEye, faShoppingCart, faShoppingBasket, faShoppingBag, faHouseCrack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, Grid, Spacer, Text} from '@nextui-org/react'
import Link from 'next/link';
import styles from './styles.module.css';
import dataContext from '../context/dataContext';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { LatestProducts } from '../../utils/data';
import Image from 'next/image';
import { useTheme } from 'next-themes'


function ShopCard(params) {
  const value = useContext(dataContext)
  const { isDark, type } = useTheme();
  const {cart, setCart} = value
    const {mq, item, cardCount} = params


    //stt
    const CartController = (
      param
    ) => {
      //get the current value of cart from localstorage
      const localCart = localStorage.getItem("cart");
      
      console.log(localCart)
      // check if a product with the same attributes and slug exist in cart. Return it's index or return -1 if not found
      if (localCart != undefined) {
          //parse the current value of cart
            const cartContent = JSON.parse(localCart);
            console.log(cartContent)
            const index = cartContent["cart"].findIndex(
                (item) => isEqual(item.slug, param.slug) && isEqual(item.attributes, param.attributes)
              );

             console.log("oe", index)
      }
      else{
        // let CartContent = [{cart:[]}, {cartAmount:0}]
        // let content = JSON.stringify(param),
        
        //   localStorage.setItem('cart', JSON.stringify(param))
      }
      
     
    };

    //ee

    const addToCart = (e)=>{
      e.preventDefault();
    // get data from form
      var formData = new FormData(e.target);
      const form_values = Object.fromEntries(formData);

      let product = LatestProducts.find((el)=>el.slug === form_values.slug)
      
      let prod = {
        action: "add",
        name: product.name,
        price: product.price,
        slug: product.slug,
        attributes:{color: "blue", size:"xl"},
        itemQuantity: 3
      }
      CartController(prod)
      
      
      
    }
    
    return(
        <>
        <Grid   xs={mq ? 6:cardCount ?? 3}>
                <Card variant={'shadow'}
                css={{borderRadius:"unset"}}
                isHoverable
                className={`${styles.ShopCard}`}

                >
                    <div className='position-relative product-card'>
                      <Link 
                          href={`/product/${item.slug}`}>
                    <Card.Image 
                    
                    
                    css={{height:"100%"}}
                    // css={{"height": mq ? "40vh":"75vh"}}
                  src={item.images[0]}
                //   width="100%"
                  showSkeleton
                  placeholder='/images/img1.jpg'
                  objectFit="cover"
                  alt="Card example background"
                  maxDelay={10000}
                  >
                      
                  </Card.Image>
                  </Link>
                  <div className={styles.wishlist}>
                      
                      {/* <FontAwesomeIcon size='1x' icon={"fa-thin fa-heart"} /> */}
                      <Image
                        src={'/svg/heart-active.svg'}
                        width='50'
                        height={'50'}
                      />
                  </div>
                  <form onSubmit={addToCart}>
                    <input name='slug' type={'hidden'} value={item.slug} />
                  <div    className={`${styles.moreInfoWrapper}`}>

                  <Text css={{fontSize:"small"}} span>COLOR: BLUE</Text>
                    <div className=' d-flex'>
                        {item?.colors.map((item, index)=>{
                          return(
                            
                            <button  key={index} style={{background:`${item}`}} className={index == 0 ? `mx-1 main-cart-color-button main-cart-color-button-active d-flex justify-content-center align-items-center`:`mx-1 main-cart-color-button d-flex justify-content-center align-items-center`}></button>
                            
                          )
                        })}
                            
                            </div>
                        <Spacer />
                            <Text css={{fontSize:"small"}} span>SIZE: XL</Text>
                    <div className=' d-flex'>
                        {item?.sizes.map((item, index)=>{
                          return(
                            
                            <button key={index}  className={index == 0 ? `mx-1 main-cart-size-button main-cart-size-button-active d-flex justify-content-center align-items-center`:`mx-1 main-cart-size-button d-flex justify-content-center align-items-center`}>{item}</button>
                            
                          )
                        })}
                            
                            </div>

                  </div>

                  <button type='submit' className={`${styles.addToCartWrapper} btn d-flex align-items-center justify-content-center`}>
                      
                  <Image
                        src={'/svg/cart-light.svg'}
                        width='50'
                        height={'50'}
                        // style={{margin:"0"}}
                      />
                      
                      
                      
                     

                  </button>
                  </form>
                  
                    
                    </div>
                  
                  <Card.Body css={{overflow:'hidden', maxHeight:"90px"}}>
                    <Text css={{fontSize: mq ? 'small':''}} className='d-flex justify-content-center'>
                      <Link css={{
                        color:"var(--nextui-colors-text)"
                        }}
                        href={`/product/${item.slug}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}</Link>
                         </Text>
                      <Text css={{textAlign:"center",}}>$ {item.price}</Text>
                      
                              
                            {/* <div className='d-flex align-items-center justify-content-center'>
                            <div className={`bg-success mx-1 ${styles.productSize}`}></div>
                            <div className={`bg-info mx-1 ${styles.productSize}`}></div>
                            <div className={`bg-dark mx-1 ${styles.productSize}`}></div>
                            <div className={`bg-light mx-1 ${styles.productSize}`}></div>
                            </div> */}
                      

                  </Card.Body>


                </Card>

            </Grid>
        </>
    )
}
export default ShopCard;