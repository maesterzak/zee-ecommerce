import { styled, Button, Textarea } from '@nextui-org/react';
import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react"
import { useState } from "react"
import Button2 from "../../components/Buttons/Button2"
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import { storeContext } from "../../components/context/Store";
import { useContext} from 'react';
import Image from 'next/image';
import {useTheme } from '@nextui-org/react'
import ButtonLink from '../../components/Buttons/ButtonLink'
import SubTotalCalculator from '../../components/cartController/subTotalCalculator';


function Cart(){
    const router = useRouter()
    const { isDark, type } = useTheme();
    const [terms, setTerms] = useState(false)
    const {state, dispatch} = useContext(storeContext);
    const ChangeCart = (action, product)=>{
              
        let prod = {
          
          name: product.name,
          price: product.price,
          slug: product.slug,
          attributes: product.attributes,
          quantity: 1
        }
        if (action === 'remove') {
          dispatch({ type: "CART_REMOVE_ITEM", payload: { ...prod } });
        }
        else if(action === 'add'){
          dispatch({ type: "CART_ADD_ITEM", payload: { ...prod } });
        }
        else if(action === 'delete'){
          dispatch({ type: "CART_DELETE_ITEM", payload: { ...prod } });
        }
        
      }
    const submitHandler =(e)=>{
        e.preventDefault();
        var formData = new FormData(e.target);

        const form_values = Object.fromEntries(formData);
        router.push('/checkout')
    }
    return(
        
        
        <Container css={{paddingTop:"40px", maxWidth:"1504px"}} >
            <Grid.Container >
                <Grid css={{width:"45%"}}>
                <Text  h4>Product</Text>
                    <hr />

                </Grid>
                <Grid css={{width:"20%"}}>
                <Text className="text-center" h4>Price</Text>
                <hr />

                </Grid>
                <Grid css={{width:"20%"}}>
                <Text className="text-center " h4>Quantity</Text>
                <hr />

                </Grid>
                <Grid css={{width:"13%"}}>
                <Text className="text-end" h4>Total</Text>
                <hr />

                </Grid>
            </Grid.Container>
            {state.cart.content.length > 0 ? <>
            {state.cart.content.map((item, index)=>{
                return(

               
            <Grid.Container key={index} css={{marginBottom: "20px"}} direction="row">
                <Grid css={{width:"45%"}} >
                    
                    <Grid className="d-flex" >
                        <Card css={{width:"150px", height:"100px"}}>
                            <Card.Image
                            // src={item}
                            css={{height: "100%"}}
                            showSkeleton
                            src={item.image}
                            objectFit="cover"
                            alt="Card example background"
                            maxDelay={10000}>
                            </Card.Image>
                        </Card>
                        <Grid css={{paddingLeft:"10px"}}>
                            <Text css={{fontSize:"$lg", margin:"0"}}>{item.name}</Text>
                            <Text css={{margin:"0"}}>Color: Yellow</Text>
                            <Text css={{margin:"0"}}>Size: XL</Text>

                        </Grid>

                    </Grid>
                    
                </Grid>
                <Grid css={{width:"20%"}}>
                
                <Grid className="d-flex justify-content-center align-items-center">
                    <Text>$ {item.price}</Text>
                </Grid>
                </Grid>
                <Grid css={{width:"20%"}}>
                
                <div className="d-flex justify-content-center align-items-center">
                <div className={`${styles.miniCartBtnWrapper} mb-1 `}>
                          <div className={`${styles.miniCartBtn}`}>
                               <Text
                               onClick={()=>ChangeCart('remove', item)}
                               css={{
                                 '@hover':{
                                   color:"#b59677"
                                 }
                               }} b>-</Text>
                          </div>
                          <div className={`${styles.miniCartCount}`}>
                          <Text b >{item.quantity}</Text>
                          </div>
                          <div className={`${styles.miniCartBtn}`}>
                          <Text
                          onClick={()=>ChangeCart('add', item)}
                          css={{
                                 '@hover':{
                                   color:"#b59677"
                                 }
                               }} b>+</Text>
                          </div>
                          </div>
                          </div>
                </Grid>
                <Grid css={{width:"13%"}}>
                
                <Grid className="d-flex justify-content-end align-items-center">
                    <Text>${item.price * item.quantity}</Text>
                </Grid>
                </Grid>
                
            </Grid.Container>
            
             )
             
            })}

            <Spacer />
            <form onSubmit={submitHandler}>
            <Grid.Container className="d-flex justify-content-between">
                <Grid>
                    <Text css={{fontSize:'$lg'}} h5 b>Add Order Note</Text>
                    <Textarea name='order_note' placeholder='How can we help you?' css={{width:'350px',}}>

                    </Textarea>
                </Grid>
                <Grid className="d-grid justify-content-end">
                    <Text css={{fontSize:"x-large"}} b span>SUBTOTAL: <Text span>$ {SubTotalCalculator(state.cart.content)}</Text></Text>
                    <Spacer />
                    <Text>Taxes, shipping and discounts codes calculated at checkout</Text>
                    
                    <Text><input onChange={()=> setTerms(!terms)} required type={'checkbox'} /> <label>I agree with the terms and conditions</label></Text>
                    <Button2 type='submit' disabled={terms ? false: true} fontSize="20px" width='300px' height="50px" text='CHECK OUT' />
                    
                </Grid>
                </Grid.Container>
                </form>

                </> :
                <>
                <Grid.Container css={{ justifyContent:'center'}} direction='column'>
                    <Grid  className='d-grid justify-content-center'>
                    <Image 
                        src={isDark ?  '/svg/bag-dark.svg': '/svg/bag-light.svg'}
                        width='200'
                        height={'200'}
                        alt=""
                        style={{ cursor:"pointer"}}
                      />
                        <Text b className='text-center' p>Your cart is empty</Text>
                        <Spacer />
                        <ButtonLink text='RETURN TO SHOP' href='/' />
                    </Grid>
                    
                </Grid.Container>
                
                </>
                
                }
            
            <Spacer />
        </Container>   
       
    )
    
}
export default Cart;