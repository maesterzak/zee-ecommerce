import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react"
import Button2 from "../../components/Buttons/Button2"
import { LatestProducts } from "../../utils/data"
import styles from './styles.module.css'
import Link from "next/link"

function Information(){

    return(
        <Grid  xs={'6'}>
        <Spacer />
        <Grid.Container>
            <Grid  xs='6'>
            <Text css={{fontSize:"xx-large"}} h1>Contact Information</Text>
            </Grid>
            <Grid css={{display:"flex", justifyContent:"flex-end", alignItems:"start"}} xs='6'>
            <Text p>Already have an account ? <Link href={'#'}>log in</Link></Text>
            </Grid>
        </Grid.Container>
        
          
        </Grid>
    )
}
export default Information;