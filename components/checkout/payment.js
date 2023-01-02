import { Card, Container, Grid, Input, Popover, Spacer, Text, Textarea } from "@nextui-org/react"
import Button2 from "../../components/Buttons/Button2"

import Link from "next/link"
import { useMediaQuery } from "../mediaQuery"

function Payment(){
    
    
    const isMd = useMediaQuery(960);
   
    
    
    
    
    return(
        <Grid direction="column" className="p-0 m-0"   xs={'6'}>
        
        <div className="row w-100" >
            <div className="col-12 col-md-7 " >
            <Text css={{fontSize:"x-large"}} h1>Order Details</Text>
            </div>
            
        </div>

        <Grid.Container direction="row"   css={{border:'2px solid var(--nextui-colors-text)', padding:'10px', borderRadius:'10px'}}>


            
            <Grid xs={4} direction="column">
            <Text  >Email</Text>
            <Text  >Phone Number</Text>
            <Text  >Name</Text>
            <Text  >Ship to</Text>
            <Text >Total</Text>

                </Grid>
                <Grid xs={8} direction="column" >
                <Text >abubakarzakari1703@gmail.com</Text>
                <Text >+2348062257480</Text>
                <Text >Abubakar Zakari</Text>
                <Text>Housing estate Abuja</Text>
                <Text >$ 300</Text>

                </Grid>
            
            
            
            
            
            
            
            
        </Grid.Container>
        
        
        <Spacer />
        <div className="d-flex justify-content-end">
                <Link href={'/payment'}>
                <Button2 text='Continue to Payment' />
                </Link>

        

        </div>
        <Spacer />
        
        <Text css={{fontSize:"x-large"}} h1>Payment</Text>
        <Text css={{fontSize:"large"}} h2>Select Payment Method</Text>
        <Grid.Container>

        </Grid.Container>
          
        </Grid>
    )
}
export default Payment;