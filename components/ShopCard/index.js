import { faMinus, faPlus,faCartPlus, faCartShopping, faCartArrowDown, faRotateBack, faHeart, faEye, faShoppingCart, faShoppingBasket, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, Grid, Text} from '@nextui-org/react'
import Link from 'next/link';
import styles from './styles.module.css'

function ShopCard(params) {
    const {mq, item, cardCount} = params
    console.log("cccc",cardCount)
    return(
        <>
        <Grid  xs={mq ? 6:cardCount}>
                <Card variant={'shadow'}
                css={{borderRadius:"unset"}}
                isHoverable

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
                      <div>
                      <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <div className='p-1 d-none d-md-block'>
                      <FontAwesomeIcon icon={faEye} />
                          
                      </div>
                      
                     

                  </div>

                  <div className={styles.addToCartWrapper}>
                      <div>
                      <FontAwesomeIcon rotate={280} icon={faCartShopping} />
                      </div>
                      
                      
                     

                  </div>
                  
                    
                    </div>
                  
                  <Card.Body css={{overflow:'hidden'}}>
                    <Text className='d-flex justify-content-center'>
                      <Link css={{
                        color:"var(--nextui-colors-text)"
                        }}
                        href={`/product/${item.slug}`}>{item.name}</Link>
                         </Text>
                      <Text css={{textAlign:"center",}}>$ {item.price}</Text>
                      <div className=' d-flex align-items-center justify-content-center'>
                        {item.colors?.map((item, index)=>{
                          return(
                            
                            <div key={index} style={{background:`${item}`}} className={`mx-1 ${styles.productColor}`}></div>
                            
                          )
                        })}
                            
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                            <div className={`bg-success mx-1 ${styles.productSize}`}></div>
                            <div className={`bg-info mx-1 ${styles.productSize}`}></div>
                            <div className={`bg-dark mx-1 ${styles.productSize}`}></div>
                            <div className={`bg-light mx-1 ${styles.productSize}`}></div>
                            </div>
                      

                  </Card.Body>


                </Card>

            </Grid>
        </>
    )
}
export default ShopCard;