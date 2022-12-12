import { faMinus, faPlus,faCartPlus, faCartShopping, faCartArrowDown, faRotateBack, faHeart, faEye, faShoppingCart, faShoppingBasket, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, Grid, Text, Col} from '@nextui-org/react'
import styles from './styles.module.css'

function ShopCard(params) {
    const {mq, item} = params
    
    return(
        <>
        <Grid  xs={mq ? 6:4}>
                <Card variant={'shadow'}
                css={{borderRadius:"unset"}}
                isHoverable
                >
                    <div className='position-relative'>
                    <Card.Image
                    
                    css={{"height": mq ? "40vh":"75vh"}}
                  src={item.image}
                //   width="100%"
                  showSkeleton
                  objectFit="cover"
                  alt="Card example background"
                  >
                      
                  </Card.Image>
                  <div className={styles.wishlist}>
                      <div>
                      <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <div className='p-1'>
                      <FontAwesomeIcon icon={faEye} />
                          
                      </div>
                      
                     

                  </div>
                  
                    
                    </div>
                  
                  <Card.Body css={{overflow:'hidden'}}>
                      <Text css={{textAlign:"center",}}>{item.name}</Text>
                      <Text css={{textAlign:"center",}}>$ {item.price}</Text>
                      <div className='d-flex align-items-center justify-content-center'>
                            <div className={`bg-success mx-1 ${styles.productColor}`}></div>
                            <div className={`bg-info mx-1 ${styles.productColor}`}></div>
                            <div className={`bg-dark mx-1 ${styles.productColor}`}></div>
                            <div className={`bg-light mx-1 ${styles.productColor}`}></div>
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