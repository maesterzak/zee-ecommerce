import Head from 'next/head'
import { useTheme, Text, Grid, Spacer, Card, Col, Row,Button,  Container} from '@nextui-org/react';
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import { useMediaQuery } from '../../components/mediaQuery';
import ShopCard from '../../components/ShopCard';
import React from 'react'
import Button1 from '../../components/Buttons/Button1';
import { faCartShopping, faShoppingBag, faHeart, faHeartbeat, faHeartCirclePlus, faSearch, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LatestProducts } from '../../utils/data';


function WishList(){
    const isMd = useMediaQuery(960);
  const { theme } = useTheme();

    return(
        <>
        <Grid className='d-flex align-items-center justify-content-center' css={{height:"100px", width:"100%", background:"transparent"}}>
            <Text css={{textAlign:"center", marginTop:"$5"}}  h2>View Your Wishlist Products</Text>
        </Grid>

        <Container css={{paddingTop:"0px", maxWidth:"1504px", margin:0}} fluid >
        <Grid.Container  gap={1} >
            {LatestProducts.map((item, index)=>{
              return(
                <React.Fragment key={index}>
                  <ShopCard mq={isMd} item={item} cardCount={4} />
                </React.Fragment>
              )
            })}

          </Grid.Container>
        </Container>
        
        </>
    )
}
export default WishList;