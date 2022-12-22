
import { Card, Container, Grid, Text } from "@nextui-org/react"
import { LatestProducts } from "../../utils/data"
import styles from './styles.module.css'

function Cart(){

    return(
        <>
        <Container css={{paddingTop:"40px", maxWidth:"1504px", margin:0}} fluid>
            <Grid.Container direction="row">
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
                <Grid css={{width:"15%"}}>
                
                <Grid className="d-flex justify-content-end align-items-center">
                    <Text>$300</Text>
                </Grid>
                </Grid>
                
            </Grid.Container>
            
             )
             
            })}

        </Container>

        
        </>
    )
}
export default Cart;