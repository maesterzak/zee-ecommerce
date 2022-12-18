import { Text, Grid, Switch, useTheme, Popover, Card, Spacer} from '@nextui-org/react';
import { useMediaQuery } from "../mediaQuery";
import { useTheme as useNextTheme } from 'next-themes'
import { faShoppingBag,faHeartCirclePlus, faSearch, faStore, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MoonIcon} from '../Navbar/MoonIcon'
import {SunIcon} from '../Navbar/SunIcon'
import { LatestProducts} from '../../utils/data';
import styles from './styles.module.css'
import Button2 from '../Buttons/Button2';
import Link from 'next/link';

function Mfooter(params) {
    const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
    const isMd = useMediaQuery(960);
    const collapseItems = [
        "Store",
        "Categories",
        "Latest products",
        "Our products",
        
      ];
    return(
        <>
        {isMd && 
        <Grid.Container css={{  borderTop:"white 2px solid", borderTopLeftRadius:"15px", borderTopRightRadius:"15px", background: "var(--nextui-colors-backgroundAlpha)",position:"fixed", bottom:0, height:"70px", overflow:"hidden"}} >
            
            <div className="row  w-100 px-3 py-1 g-0 gap-1 d-flex justify-content-around align-items-flex-start">
                <div className="col-1 g-grid justify-content-around mb-3">
                
                
                <Text><Link className={`${styles.link}`} href='/'><FontAwesomeIcon size={'2x'} icon={faStore}   />Shop</Link></Text>

                </div>
                <div className="col-1 position-relative">
                <div  className='cartAmount'>
                1
              </div>
              
                <Text><Link  className={`${styles.link}`} href='/wishlist'><FontAwesomeIcon icon={faHeartCirclePlus}  size={'2x'} />Wishlist</Link></Text>
                
                <br/>
                

                </div>
                <div className="col-1 position-relative">
                <div  className='cartAmount'>
                1
              </div>
              <Popover placement={'top'}>
              <Popover.Trigger >

                <Text><FontAwesomeIcon size={'2x'} icon={faShoppingBag} />Bag</Text>
                </Popover.Trigger>
                <Popover.Content css={{maxHeight: "500px", overflowY:"hidden", width:'300px', padding:"20px"}}>
                <Text h3>Mini-Cart</Text>
                <Grid.Container className='gap-3 scrollbar' css={{maxHeight:"400px", overflowY:"scroll", overflowX:"hidden"}}>
                {LatestProducts.map((item, index)=>{
                  return(
                    <Grid.Container key={index} css={{height:"auto", width:'70%', }}>
                  <Grid xs={6}>
                  <Card
                                isHoverable
                                isPressable
                                key={index}
                        variant="fiat"
                        css={{borderRadius:"0", marginBottom:"$5",padding:'10px'}}

                        >
                            <Card.Image
                            
                            
                            src={item.images[0]}
                            // css={{height: isMd ? "90px":"auto"}}
                            showSkeleton
                            
                            objectFit="cover"
                            alt="Card example background"
                            maxDelay={10000}>
                            </Card.Image>


                        </Card>

                  </Grid>
                  <Grid direction='column' className='p-1' xs={6}>
                      <Text css={{fontSize:"small", margin:"0"}} h6>{item.name}</Text>
                      <Text css={{fontSize:"small", margin:"0"}}>Yellow / XS </Text>
                      <Text css={{fontSize:"small", margin:"0"}}>${item.price} </Text>
                      <Spacer />
                      <Grid className='d-flex gap-2 align-items-center'>
                      <FontAwesomeIcon size='1x' color='#b59677' icon={faTrash} />
                        <div className={`${styles.miniCartBtnWrapper} mb-1`}>
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
                        
                      </Grid>
                  </Grid>
                </Grid.Container>
                  )
                })}
                </Grid.Container>
                <Spacer />
                <Text h5>Sub total: $400</Text>
                <Text p> Taxes, shipping and discounts codes calculated at checkout</Text>
                <Grid.Container className='d-flex justify-content-between'>
                  <Button2 text='Cart' /><Button2 text='Checkout' />

                </Grid.Container>

            </Popover.Content>
                </Popover>
                <br/>
                </div>
                <div className="col-1">
                <Popover placement={'top'}>
              <Popover.Trigger>
                  <Text>
                <FontAwesomeIcon icon={faSearch} size={'2x'} />Search</Text>
                </Popover.Trigger>
                <Popover.Content>
              <Text>Search popover</Text>
            </Popover.Content>
                </Popover>
                

                </div>
                <div className="col-1 d-flex ">
                 <div style={{color:"var(--nextui-colors-text)"}}>
                 <Switch 
                 shadow color="warning"
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOn={<SunIcon filled />}
          iconOff={<MoonIcon filled />}
      />Theme</div>

    
                

                </div>

            </div>
            
            
            
        </Grid.Container>
        }
        </>
    )
}
export default Mfooter;