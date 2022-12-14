import { Card, Container, Grid, Spacer, Text, Textarea } from "@nextui-org/react";
import { useMediaQuery } from "../../components/mediaQuery";
import { useRouter } from 'next/router'
import styles from './styles.module.css'
import { LatestProducts } from "../../utils/data";
import React from 'react';
import ShopCard from "../../components/ShopCard";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import {useTheme } from '@nextui-org/react'
import { MyStyledButton } from "../../components/Buttons/myStyledButton";
import { storeContext } from "../../components/context/Store";
import { find} from "lodash";
import ReactStars from "react-rating-stars-component";
import {Slide} from "react-awesome-reveal";
import Button2 from "../../components/Buttons/Button2";


function ProductDetails() {
    const [mainImageIndex, setMainImageIndex] = useState(undefined)
    const isMd = useMediaQuery(960);
    const router = useRouter()
    const { isDark, type } = useTheme();
   
    const { slug } = router.query
    const {state, dispatch} = useContext(storeContext);

    
    const product = LatestProducts.find(el=> el.slug === slug)
    
    const ChangeCart = (e)=>{
      e.preventDefault();
    // get data from form
      var formData = new FormData(e.target);
      const form_values = Object.fromEntries(formData);
      
      
      
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

    useEffect(()=>{
      ImageHandler(0)
    }, [slug])
    const ImageHandler = (imageIndex) => {
      setMainImageIndex(imageIndex)
    };

    const addReview =(e)=>{
      e.preventDefault();
      var formData = new FormData(e.target);

      const form_values = Object.fromEntries(formData);
      
  }
    
    return(
        <>
        <Container css={{paddingTop:"40px", maxWidth:"1504px", display:'flex', justifyContent:'center'}} fluid>
            <Grid.Container>

            <form  onSubmit={ChangeCart}>
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
                            alt={product?.name}
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
                            alt={product?.name}
                            maxDelay={10000}>
                            </Card.Image>
                            


                        </Card>
                        
                    </Grid>
                    <Grid direction="column" css={{paddingLeft:isMd ? "":"30px", order: isMd ? 2: 2, paddingTop: isMd ? "20px":""}} xs={isMd ? 12: 5}>
                    <Slide right triggerOnce >
                    <Text b css={{fontSize:"18px", color:"$primaryLight"}} h1>{product?.name}</Text>
                    
                    <Text b css={{fontSize:"18px", color:"$primaryLight"}} h1>${product?.price}</Text>

                    <Spacer />

                    
                    <ReactStars
    count={5}
    // onChange={ratingChanged}
    size={30}
    activeColor="#b59677"
  />,
                    <Text p>{product?.description}</Text>

                    
                    <div className=' attr-div d-grid'>
                        {product?.attributes.map((item, index)=>{
                          return(
                            <React.Fragment key={index}>
                              {item.name ==='color' ? 
                              <>
                              <Text>{item.name.toLocaleUpperCase()}</Text>
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
                              <Text className="mt-1">{item.name.toLocaleUpperCase()}</Text>
                              <div className="d-flex gap-2">
                                
                              {item.value.map((e, index)=>{
                                return(
                                  
                                  <label key={index} className="attr-label">
                              <input
                                style={{ background: item.value }}
                                type={"radio"}
                                name={item.name}
                                defaultValue={e}
                                required
                                defaultChecked={
                                  item.value[0] === e ? "checked" : ""
                                }

                                // {item.displayValue}
                              />
                              <span>{e}</span>
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
                        <Spacer />
                    
                    
                        <Spacer />
                        <Grid className="d-flex mx-2 align-items-center gap-2">
                        
                        <MyStyledButton 
                        
                          type={'submit'}
                          // disabled= {params.disabled ?? false}
                          auto 
                          css={{height:"50px", width: "40%", fontSize: "auto"}}
                          size="mysize"
                          color="mycolor">
                            ADD TO CART
                        </MyStyledButton>
                        
                        
                             <div className={`${styles.wishList} p-2`}
                             onClick={()=>dispatch({ type: "WISHLIST_ITEM", payload: {"name": product?.name, "slug": product?.slug}  })}
                             ><Image
                        src={find(state.wishlist.content ,{name:product?.name, slug:product?.slug}) ? '/svg/heart-active.svg' :'/svg/heart-light.svg'}
                        width='50'
                        height={'50'}
                        alt=""

                      /></div>
                     
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
                    </Slide>
                    </Grid>
                </Grid.Container>


            </form>
            <Spacer />
            <Spacer />
            <Grid className="w-100">
                <Text h3 className='text-center ' b>REVIEWS</Text>
                     <Spacer />
                <Grid.Container css={{display: 'flex', justifyContent:'center'}}  gap={2} >
            <Grid xs={isMd ? 12:3} css={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Text className="m-0 p-0 text-center" css={{fontSize:'x-large'}}>4.5</Text>
              <div className="d-flex justify-content-center">
              <ReactStars
              count={5}
              
              // onChange={ratingChanged}
              size={40}
              isHalf
              activeColor="#b59677"
            />
            </div>
            <Text className="m-0 p-0 text-center">4 reviews</Text>
            <div className="d-flex justify-content-center">
            
            </div>
            </Grid>

            <Grid xs={isMd ? 12:3}>
              <form onSubmit={addReview}>
              <Textarea name='review' placeholder='How awesome is our product ?' css={{width:isMd ?  '270px':'350px',}}>

              </Textarea>
              <ReactStars
              count={5}
              
              // onChange={ratingChanged}
              size={30}
              isHalf
              activeColor="#b59677"
            />

            <MyStyledButton 
                        
              type={'submit'}
              // disabled= {params.disabled ?? false}
              auto 
              css={{height:"40px", width: "40%", fontSize: "medium"}}
              size="mysize"
              color="mycolor">
                Add Review
            </MyStyledButton>
            </form>

            </Grid>

            </Grid.Container>
                     <Spacer />
            <Grid.Container>
              <Grid css={{width:'30px', height:'30px', borderRadius:'50%', background:'#b59677', display:'flex', justifyContent:'center', alignItems:'center', color:'White'}}>
                A
              </Grid>
              <Grid css={{paddingLeft:'10px'}}>
                <Text>Abubakar zakari</Text>

                
              </Grid>
            </Grid.Container>
            <Grid.Container direction="column">
            <ReactStars
              count={5}
              
              // onChange={ratingChanged}
              size={25}
              isHalf
              activeColor="#b59677"
            />
              <Text>This product is awesome</Text>
            </Grid.Container>

                

            </Grid>
            <Spacer />
            <Grid className="w-100">
                <Text h3 className='text-center ' b>YOU MAY ALSO LIKE</Text>
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
                <Text h3 className='text-center ' b>RECENTLY VIEWED PRODUCTS</Text>
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