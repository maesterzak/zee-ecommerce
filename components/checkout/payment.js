import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react"
import Link from "next/link"
import Button2 from "../../components/Buttons/Button2"
import { LatestProducts } from "../../utils/data"
import styles from './styles.module.css'


function Payment(){

    return(
        <Grid xs={'6'}>
        <Spacer />
        <Grid.Container>
            <Grid xs='6'>
            <Text h1>Payment</Text>
            </Grid>
            <Grid xs='6'>
            <Text>Already have an account ? <Link href={'#'}>log in</Link></Text>
            </Grid>
        </Grid.Container>
        
          
        </Grid>
    )
}
export default Payment;