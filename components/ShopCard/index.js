import {  faCartShopping, faCartArrowDown, faRotateBack, faHeart, faEye, faShoppingCart, faShoppingBasket, faShoppingBag, faHouseCrack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, Grid, Spacer, Text} from '@nextui-org/react'
import Link from 'next/link';
import styles from './styles.module.css';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { LatestProducts } from '../../utils/data';
import Image from 'next/image';
import { useTheme } from 'next-themes'
import React from 'react';
import { storeContext } from "../../components/context/Store";
import {isEqual, find} from "lodash";


function ShopCard(params) {
  const { isDark, type } = useTheme();
  const {state, dispatch} = React.useContext(storeContext);
    const {mq, item, cardCount} = params


    
    const ChangeCart = (e)=>{
      e.preventDefault();
    // get data from form
      var formData = new FormData(e.target);
      const form_values = Object.fromEntries(formData);
      
      let product = LatestProducts.find((el)=>el.slug === form_values.slug)
      delete form_values.slug;
      console.log("jg", form_values)
      let prod = {
        
        name: product.name,
        price: product.price,
        slug: product.slug,
        image: product.images[0],
        attributes: form_values,
        quantity: 1
      }
      dispatch({ type: "CART_ADD_ITEM", payload: prod  });
      
      
      
    }
    const checkWishList=(name, slug)=>{
      let inWishlist = state.wishlist.content.findIndex(
        (item) => isEqual(item.slug, slug) && isEqual(item.name, name)
      );
      return inWishlist
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
                    
                    
                    css={{maxHeight:'400px', padding:'5px'}}
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
                        src={find(state.wishlist.content ,{name:item.name, slug:item.slug}) ? '/svg/heart-active.svg' :'/svg/heart-light.svg'}
                        width='50'
                        onClick={()=>dispatch({ type: "WISHLIST_ITEM", payload: {"name": item.name, "slug": item.slug}  })}
                        height={'50'}
                        alt=''
                        style={{cursor:'pointer'}}
                      />
                  </div>
                  <form onSubmit={ChangeCart}>
                    <input name='slug' type={'hidden'} value={item.slug} />
                  <div  className={`${styles.moreInfoWrapper}`}>

                  <div className=' attr-div d-grid'>
                        {item?.attributes.map((item, index)=>{
                          return(
                            <React.Fragment key={index}>
                              {item.name ==='color' ? 
                              <>
                              <Text>{item.name.toLocaleUpperCase()}: BLUE</Text>
                              <div className="d-flex gap-2">
                            {item.value.map((e, index)=>{
                              return(
                                <input 
                            type={'radio'} 
                            name = {item.name}
                            key={index} 
                            style={{background:item.name === 'color' ? `${e}`: ''}}
                            defaultValue={e}
                            className={index == 0 ? `mx-1 main-cart-color-button main-cart-color-button-active d-flex justify-content-center align-items-center`:`mx-1 main-cart-color-button d-flex justify-content-center align-items-center`}
                            defaultChecked={
                             item.value[0] === e ? "checked" : ""
                            }
                            />

                              )
                            })}
                            </div>

                              </>
                              :
                              <>
                              <Text>{item.name.toLocaleUpperCase()}: BLUE</Text>
                              <div className="d-flex gap-2">
                                
                              {item.value.map((e, index)=>{
                                return(
                                  
                                  <label key={index} className="attr-label">
                              <input
                                style={{ background: item.value}}
                                type={"radio"}
                                name={item.name}
                                defaultValue={e}
                                required
                                
                                defaultChecked={
                                  item.value[0] === e ? "checked" : ""
                                }

                                // {item.displayValue}
                              />
                              <span>{item.value[index]}</span>
                            </label>

                                  

                                )
                              })}
                              
                              </div>
                              </>
                            
                            }
                              
                              
                            
                            </React.Fragment>
                            
                          )
                        })}
                            
                            </div>
                            {/* <Text css={{fontSize:"small"}} span>SIZE: XL</Text>
                    <div className=' d-flex'>
                        {item?.sizes.map((item, index)=>{
                          return(
                            
                            <button key={index}  className={index == 0 ? `mx-1 main-cart-size-button main-cart-size-button-active d-flex justify-content-center align-items-center`:`mx-1 main-cart-size-button d-flex justify-content-center align-items-center`}>{item}</button>
                            
                          )
                        })}
                            
                            </div> */}

                  </div>

                  <button type='submit' className={`${styles.addToCartWrapper} btn d-flex align-items-center justify-content-center`}>
                      
                  <Image
                        src={'/svg/cart-light.svg'}
                        width='50'
                        height={'50'}
                        alt=''
                        // style={{margin:"0"}}
                      />
                      
                      
                      
                     

                  </button>
                  </form>
                  
                    
                    </div>
                  
                  <Card.Body css={{overflow:'hidden', }}>
                    <Text css={{fontSize: mq ? '$xs':'medium', margin:0}} className='d-flex justify-content-start'>
                      <Link css={{
                        color:"var(--nextui-colors-text)"
                        }}
                        href={`/product/${item.slug}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1).toUpperCase()}</Link>
                         </Text>
                      <Text css={{fontSize: mq ? '$xs':'medium'}}>$ {item.price}</Text>
                      
                              
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