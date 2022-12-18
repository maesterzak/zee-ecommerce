import {  faCartShopping, faCartArrowDown, faRotateBack, faHeart, faEye, faShoppingCart, faShoppingBasket, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, Grid, Spacer, Text} from '@nextui-org/react'
import Link from 'next/link';
import styles from './styles.module.css';
import dataContext from '../context/dataContext';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { LatestProducts } from '../../utils/data';

function ShopCard(params) {
  const value = useContext(dataContext)
  const {cart, setCart} = value
    const {mq, item, cardCount} = params

    const addToCart = (e)=>{
      e.preventDefault();
    // get data from form
      var formData = new FormData(e.target);
      const form_values = Object.fromEntries(formData);

      let product = LatestProducts.find((el)=>el.slug === form_values.slug)
      console.log("hj", product)
    }
    
    return(
        <>
        <Grid   xs={mq ? 6:cardCount}>
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
                      
                      <FontAwesomeIcon pulse icon={faHeart} />
                     
                      
                      
                     

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
                      
                      <FontAwesomeIcon size='1x' icon={faCartShopping} />
                      
                      
                      
                     

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