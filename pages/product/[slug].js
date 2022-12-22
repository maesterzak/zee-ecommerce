import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react";
import { useMediaQuery } from "../../components/mediaQuery";
import { useRouter } from 'next/router'
import styles from './styles.module.css'
import { LatestProducts } from "../../utils/data";
import React from 'react';
import ShopCard from "../../components/ShopCard";
import Button1 from "../../components/Buttons/Button1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function ProductDetails() {
    const [mainImageIndex, setMainImageIndex] = useState(undefined)
    const isMd = useMediaQuery(960);
    const router = useRouter()
   
    const { slug } = router.query
    
    const product = LatestProducts.find(el=> el.slug === slug)
    useEffect(()=>{
      ImageHandler(0)
    }, [slug])
    const ImageHandler = (imageIndex) => {
      setMainImageIndex(imageIndex)
    };
    
    return(
        <>
        <Container css={{paddingTop:"40px", maxWidth:"1504px", margin:0}} fluid>
            <Grid.Container>
            <Grid  xs={isMd ? 12: 12}>
                <Grid.Container >
                    <Grid className={isMd ? `d-flex ${styles.scrollbar}`:`d-grid ${styles.scrollbar}`}  css={{gap:"10px", maxHeight:isMd ? "100px":"500px", overflowY:isMd ? "":"scroll", overflowX:isMd ? "scroll":"", order: isMd ? 1: 0}} xs={isMd ? 12: 1}>
                        <Grid xs={isMd ? 12: ''}  className={`${styles.carouselImagesWrapper}`}>
                        {product?.images.map((item, index)=>{
                            return(
                                <>
                                <Card
                                isHoverable
                                isPressable
                                key={index}
                        variant="fiat"
                        css={{borderRadius:"0", marginBottom:"$5"}}

                        >
                            <Card.Image
                            
                            onClick={()=>ImageHandler(index)}
                            src={item}
                            css={{height: isMd ? "90px":"auto"}}
                            showSkeleton
                            placeholder='/images/img1.jpg'
                            objectFit="cover"
                            alt="Card example background"
                            maxDelay={10000}>
                            </Card.Image>


                        </Card>
                                
                                </>
                            )
                        })}
                        
                        </Grid>
                        
                    </Grid>
                    <Spacer />
                    <Grid css={{order: isMd ? 0: 1}} xs={isMd ? 12: 5}>
                    <Card
                        variant="fiat"
                        css={{borderRadius:"0", marginBottom:"$5"}}

                        >
                            <Card.Image
                            
                            
                            src={product?.images[mainImageIndex]}
                            
                            showSkeleton
                            placeholder='/images/img1.jpg'
                            objectFit="cover"
                            alt="Card example background"
                            maxDelay={10000}>
                            </Card.Image>


                        </Card>
                        
                    </Grid>
                    <Grid direction="column" css={{paddingLeft:isMd ? "":"30px", order: isMd ? 2: 2, paddingTop: isMd ? "20px":""}} xs={isMd ? 12: 5}>
                    <Text b css={{fontSize:"18px", color:"$primaryLight"}} h1>{product?.name}</Text>
                    
                    <Text b css={{fontSize:"18px", color:"$primaryLight"}} h1>${product?.price}</Text>

                    <Spacer />

                    <Text>Reviews</Text>
                    <Text p>{product?.description}</Text>

                    <Text>COLOR: BLUE</Text>
                    <div className=' d-flex'>
                        {product?.colors.map((item, index)=>{
                          return(
                            
                            <button key={index} style={{background:`${item}`}} className={index == 0 ? `mx-1 main-cart-color-button main-cart-color-button-active d-flex justify-content-center align-items-center`:`mx-1 main-cart-color-button d-flex justify-content-center align-items-center`}></button>
                            
                          )
                        })}
                            
                            </div>
                        <Spacer />
                    <Text>SIZE: XL</Text>
                    <div className=' d-flex'>
                        {product?.sizes.map((item, index)=>{
                          return(
                            
                            <button key={index}  className={index == 0 ? `mx-1 main-cart-size-button main-cart-size-button-active d-flex justify-content-center align-items-center`:`mx-1 main-cart-size-button d-flex justify-content-center align-items-center`}>{item}</button>
                            
                          )
                        })}
                            
                            </div>  
                        <Spacer />
                        <Grid className="d-flex mx-2 align-items-center gap-2">
                            <Button1 text={"ADD TO CART"} /> <div className={`${styles.wishList} p-2`}><FontAwesomeIcon size='1x' icon={faHeart} /></div>
                        </Grid>

                        <Spacer />
                     <Grid className="d-flex gap-3" direction="row">
                     <Text size={isMd ? '$sm':'$md'}>Size Guide</Text><Text size={isMd ? '$sm':'$md'} >Delivery and return</Text><Text size={isMd ? '$sm':'$md'} >Ask a question</Text>    
                     <Spacer />
                     
                    </Grid>    
                    <Grid direction="row">
                    <Text>SKU : 001</Text>
                     <Text>Categories : {product?.category}</Text>
                     <Text>Tags : {product?.tags.map((item, index)=>{
                         return(
                             <span key={index}>{item}, </span>
                         )
                     })}</Text>
                        
                    </Grid>         

                    </Grid>
                </Grid.Container>


            </Grid>
            <Spacer />
            <Grid className="w-100">
                <Text h3 className='text-center '>YOU MAY ALSO LIKE</Text>
                     <Spacer />
                <Grid.Container  gap={2} >
            {product?.similarProducts.map((item, index)=>{
              return(
                <React.Fragment key={index}>
                  <ShopCard mq={isMd} item={item} cardCount = {3} />
                </React.Fragment>
              )
            })}

          </Grid.Container>

                

            </Grid>

            <Spacer />
            <Grid className="w-100">
                <Text h3 className='text-center '>RECENTLY VIEWED PRODUCTS</Text>
                     <Spacer />
                <Grid.Container  gap={2} >
            {LatestProducts.map((item, index)=>{
              return(
                <React.Fragment key={index}>
                  <ShopCard mq={isMd} item={item} cardCount = {3} />
                </React.Fragment>
              )
            })}

          </Grid.Container>

                

            </Grid>
            </Grid.Container>
        </Container>
        </>
    )
}
export default ProductDetails;