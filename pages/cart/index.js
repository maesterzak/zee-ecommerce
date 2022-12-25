import { styled, Button, Textarea } from '@nextui-org/react';
import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react"
import { useState } from "react"
import Button2 from "../../components/Buttons/Button2"
import { LatestProducts } from "../../utils/data"
import styles from './styles.module.css'
import { useRouter } from 'next/router'

function Cart(){
    const router = useRouter()
    const [terms, setTerms] = useState(false)
    const submitHandler =(e)=>{
        e.preventDefault();
        var formData = new FormData(e.target);

        const form_values = Object.fromEntries(formData);
        console.log("k", form_values)

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
            {LatestProducts.map((item, index)=>{
                return(

               
            <Grid.Container key={index} css={{marginBottom: "20px"}} direction="row">
                <Grid css={{width:"45%"}} >
                    
                    <Grid className="d-flex" >
                        <Card css={{width:"150px", height:"100px"}}>
                            <Card.Image
                            // src={item}
                            css={{height: "100%"}}
                            showSkeleton
                            src={item.images[0]}
                            objectFit="cover"
                            alt="Card example background"
                            maxDelay={10000}>
                            </Card.Image>
                        </Card>
                        <Grid css={{paddingLeft:"10px"}}>
                            <Text css={{fontSize:"$lg", margin:"0"}}>Cuffed Chino Shorts</Text>
                            <Text css={{margin:"0"}}>Color: Yellow</Text>
                            <Text css={{margin:"0"}}>Size: XL</Text>

                        </Grid>

                    </Grid>
                    
                </Grid>
                <Grid css={{width:"20%"}}>
                
                <Grid className="d-flex justify-content-center align-items-center">
                    <Text>$300</Text>
                </Grid>
                </Grid>
                <Grid css={{width:"20%"}}>
                
                <div className="d-flex justify-content-center align-items-center">
                <div className={`${styles.miniCartBtnWrapper} mb-1 `}>
                          <div className={`${styles.miniCartBtn}`}>
                               <Text css={{
                                 '@hover':{
                                   color:"#b59677"
                                 }
                               }} b>-</Text>
                          </div>
                          <div className={`${styles.miniCartCount}`}>
                          <Text b >1</Text>
                          </div>
                          <div className={`${styles.miniCartBtn}`}>
                          <Text css={{
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
                    <Text>$300</Text>
                </Grid>
                </Grid>
                
            </Grid.Container>
            
             )
             
            })}

            <Spacer />
            <form onSubmit={()=>submitHandler()}>
            <Grid.Container className="d-flex justify-content-between">
                <Grid>
                    <Text css={{fontSize:'$lg'}} h5 b>Add Order Note</Text>
                    <Textarea name='order_note' placeholder='How can we help you?' css={{width:'350px',}}>

                    </Textarea>
                </Grid>
                <Grid className="d-grid justify-content-end">
                    <Text css={{fontSize:"x-large"}} b span>SUBTOTAL: <Text span>$70.00</Text></Text>
                    <Spacer />
                    <Text>Taxes, shipping and discounts codes calculated at checkout</Text>
                    
                    <Text><input onChange={()=> setTerms(!terms)} required type={'checkbox'} /> <label>I agree with the terms and conditions</label></Text>
                    <Button2 type='submit' disabled={terms ? false: true} fontSize="20px" width='300px' height="50px" text='CHECK OUT' />
                    
                </Grid>
                </Grid.Container>
                </form>
            
            <Spacer />
        </Container>   
       
    )
    
}
export default Cart;