import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useTheme, Text, Grid, Spacer, Card, Col, Row,Button,  Container} from '@nextui-org/react';
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import { useMediaQuery } from '../components/mediaQuery';
import ShopCard from '../components/ShopCard';
import CategoryCard from '../components/CategoriesCard';
import React from 'react'
import Button1 from '../components/Buttons/Button1';
import Footer from '../components/Footer';
import Button2 from '../components/Buttons/Button2';
const AutoplaySlider = withAutoplay(AwesomeSlider)
import { faCartShopping, faShoppingBag, faHeart, faHeartbeat, faHeartCirclePlus, faSearch, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LatestProducts } from '../utils/data';
import { Categoryitems } from '../utils/data';
import { InstagramPics } from '../utils/data';

export default function Home() {
  const isMd = useMediaQuery(960);
  const { theme } = useTheme();
  const SecondMain = {
    "image":"https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  }
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main}>
      <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          
              <div data-src="/images/img1.jpg" />
              <div data-src="/images/img2.jpg" />
              <div data-src="/images/img3.jpg" />
           

          </AutoplaySlider>
          <Spacer />
          
          
          <Container css={{paddingTop:"40px", maxWidth:"1504px", margin:0}} fluid >
          <Grid.Container id='categories' gap={2}>
            {Categoryitems.map((item, index)=>{
              return(
                <React.Fragment key={index}>
                <CategoryCard mq={isMd} item={item} />
                </React.Fragment>
              )}
            )}
            
          </Grid.Container>
                <br />
          <Text id='latest-products' className='text-center' h3>LATEST PRODUCTS</Text>
          <Grid.Container  gap={1} >
            {LatestProducts.map((item, index)=>{
              return(
                <React.Fragment key={index}>
                  <ShopCard mq={isMd} item={item} cardCount={3} />
                </React.Fragment>
              )
            })}

          </Grid.Container>
          <Spacer />
          <div className='d-flex justify-content-center'>
          <Button2 text={"Load more"} />
          </div>
          <Spacer />

          <Text id="our-products" className='text-center' h3>OUR PRODUCTS</Text>

          <Grid.Container css={{"display":"flex", "justifyContent":"center", 'gap':"10px"}}>
              <div className='our_products_buttons'>
              <button className='active_btn btn'>Featured</button>
              <button className='btn'>Top rated</button>
              <button className='btn'>Best</button>
              </div>
              
            

          </Grid.Container>
          <Spacer />
          <Spacer />

          <Grid.Container  gap={1} >
            {LatestProducts.map((item, index)=>{
              return(
                <React.Fragment key={index}>
                  <ShopCard mq={isMd} item={item} cardCount={3} />
                </React.Fragment>
              )
            })}

          </Grid.Container>

          <Spacer />

          
          </Container>
          <Text h3>@ FOLLOW US ON INSTAGRAM</Text>
          <Spacer />
          <Grid.Container>
            
            {InstagramPics.map((item, index)=>{
              return(
                <Grid  key={index} xs={isMd ? 4: 2}>
                  <Card 
                  variant={'shadow'}
                  isHoverable
                  isPressable
                  
                  css={{minHeight:"150px", borderRadius:"unset"}}
                  >
                  <Card.Image
                  src={item.image}
                  width="100%"
                  height="100%"
                  objectFit='cover'
                  alt="Card example background"
                  >
                  </Card.Image>
                  </Card>


                </Grid>

              )
            })}
            <Grid xs={12} css={{ display:'flex', justifyContent:'center', alignItems: 'center'}} >
            <Card.Image css={{maxHeight:"70vh", display:'flex', justifyContent:'center', alignItems: 'center', minHeight:"50vh"}}
                  src={"https://cdn.shopify.com/s/files/1/0437/1913/1293/files/store-baner-if_2450x.jpg?v=1613697029"}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="Card example background"
                  >
                  </Card.Image>

                  <Card css={{ position: "absolute", width: isMd ? "80%":"40%", background:"rgba(181, 150, 119, 0.8)", textAlign:'center'}}>
                <Col>
                    <Text h3 weight="bold" color='#ffffff' transform="uppercase">
                    3PLEZEE 
                    </Text>
                    <Text color='#ffffff' >
                      200 unit housing estate lokoja, kogi state.
                    </Text>
                    <Spacer />
                    <Text h5 color='#ffffff'>
                      Opening Hours
                    </Text>
                    <Text color='#ffffff'>
                      Monday to Friday : 9:00am - 9:00pm
                      <br />
                      Saturday to Sunday : 9:00am - 9:00pm
                    </Text>
                </Col>
                </Card>


            </Grid>



          </Grid.Container>



        
      </main>

      
      
        {/* <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Lobster;
  }

  * {
    box-sizing: border-box;
  }
`}</style> */}
    </div>
  )
}
