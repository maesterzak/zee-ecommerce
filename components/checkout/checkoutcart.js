import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react"
import Button2 from "../Buttons/Button2"
import { LatestProducts } from "../../utils/data"
import styles from './styles.module.css'
import Link from "next/link"

function CheckoutCart(){

    return(
        
        <>
        
        
        {LatestProducts.map((item, index)=>{
            return(
                <Grid.Container key={index} css={{padding:'20px'}} >
            <Grid xs={'8'}>
        <Card css={{width:"100px", height:"100px", position:'relative', overflow:'unset'}}>
                            <Card.Image
                            // src={item}
                            css={{height: "100%"}}
                            showSkeleton
                            src={'/images/cap.jpg'}
                            objectFit="cover"
                            alt="Card example background"
                            maxDelay={10000}>
                            </Card.Image>
                            <Grid css={{position:"absolute", top:'-10px', right:'-10px', borderRadius:'50%', width:'25px',height:'25px', background:'#b59677', display:'flex', 'justifyContent':'center', 'alignItems':'center', color:'White'}}>
                                    1
                            </Grid>
                        </Card>
                        <Grid css={{padding:'20px'}}>
                        <Text h3 css={{margin:'0'}} p>New chinoks</Text>
                        <Text p>Yellow / XS</Text>

                        </Grid>
                        </Grid>

                        <Grid className="d-flex justify-content-center align-items-center">
                            <Text b css={{textAlign:'end'}}>$ 300</Text>
                        </Grid>

                        </Grid.Container>


            )
        })}
        <Spacer />
        <hr />
        <Grid.Container>
            <Grid xs={'6'}>
                <Text css={{fontSize:'large'}}>Subtotal</Text>
            </Grid>
            <Grid css={{display:'flex', justifyContent:'flex-end'}} xs={'6'}>
                <Text css={{fontSize:'large'}} b>$ 300</Text>
            </Grid>
        </Grid.Container>

        <Grid.Container>
            <Grid xs={'6'}>
                <Text css={{fontSize:'large'}} >Shipping</Text>
            </Grid>
            <Grid css={{display:'flex', justifyContent:'flex-end'}} xs={'6'}>
                <Text css={{fontSize:'large'}} b>$ 300</Text>
            </Grid>
        </Grid.Container>
        
        <hr />
        <Grid.Container>
            <Grid xs={'6'}>
                <Text css={{fontSize:'x-large'}} >Total</Text>
            </Grid>
            <Grid css={{display:'flex', justifyContent:'flex-end'}} xs={'6'}>
                <Text css={{fontSize:'x-large'}} b>$ 300</Text>
            </Grid>
        </Grid.Container>
        </>
          
        
    )
}
export default CheckoutCart;