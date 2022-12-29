import { Card, Container, Grid, Input, Popover, Spacer, Text, Textarea } from "@nextui-org/react"
import Button2 from "../../components/Buttons/Button2"
import { LatestProducts } from "../../utils/data"
import styles from './styles.module.css'
import Link from "next/link"
import { useMediaQuery } from "../mediaQuery"
import SelectDesktop from "../Select/SelectCountries"
import {useState} from 'react'
import SelectState from "../Select/SelectState"
function Payment(){
    
    
    const isMd = useMediaQuery(960);
   
    
    
    
    
    return(
        <Grid direction="column" className="p-0 m-0"   xs={'6'}>
        
        <div className="row w-100" >
            <div className="col-12 col-md-7 " >
            <Text css={{fontSize:"x-large"}} h1>Order Details</Text>
            </div>
            
        </div>

        <Grid.Container direction="column"   css={{border:'2px solid var(--nextui-colors-text)', padding:'10px', borderRadius:'10px'}}>
            <Grid xs='12' direction="row" >
            <Grid  xs={3} >
            <Text  >Email</Text>
            </Grid>
            <Grid xs={9}  css={{display:"flex", justifyContent:"flex-start"}}>
            <Text b p>abubakarzakari1703@gmail.com</Text>
            </Grid>
            </Grid>

            <Grid xs='12' className="gap-5"  direction="row" >
            
            <Text  >Phone Number</Text>
            
            
            <Text >+2348062257480</Text>
            
            </Grid>

            <Grid xs='12 ' className="gap-5"  direction="row" >
            
            <Text  >Name</Text>
            
            
            <Text >Abubakar Zakari</Text>
            
            </Grid>

            <Grid xs='12' className="gap-5"  direction="row" >
            
            <Text  >Ship to</Text>
            
            <Text>Housing estate Abuja</Text>
            
            </Grid>

            <Grid xs='12'   direction="row" >
            
            <Text css={{width:'200px'}}>Total</Text>
            
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