import { Card, Grid, Spacer } from '@nextui-org/react';
import { Navbar, Text, Avatar, Dropdown, Input, Popover } from "@nextui-org/react";
// import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { SearchIcon } from "./searchIcon.js";
import Link from 'next/link';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCirclePlus, faShoppingBag, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '../mediaQuery/index';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';
import Button2 from '../Buttons/Button2.js';
import { LatestProducts } from '../../utils/data.js';
import styles from './styles.module.css'

function NavbarWrapper(params) {
  const isMd = useMediaQuery(960);
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
    const collapseItems = [
        "Store",
        
        "Categories",
        "Latest products",
        "Our products",
        "Dashboard",
        
      ];
    
    return(
        <>
        
      <Navbar  isBordered variant="floating">
      <Navbar.Toggle showIn='xs' css={{mr:"$4"}} aria-label="toggle navigation" />
        <Navbar.Brand css={{ mr: "$4" }}>
        
          <AcmeLogo />
          <Text b color="inherit" css={{ mr: "$11" }} >
            3PLEZEE
          </Text>
          <Navbar.Content enableCursorHighlight hideIn="xs" activeColor={"warning"} variant="highlight">
            <Navbar.Link isActive href="#">
              Store
            </Navbar.Link>
            <Navbar.Link href="#categories">Categories</Navbar.Link>
            <Navbar.Link href="#latest-products">Latest Products</Navbar.Link>
            <Navbar.Link href="#our-products">Our Products</Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
            display:"flex", justifyContent:"flex-end"
          }}
        >
          <Navbar.Item
          hideIn="xs"
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input 
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
            
          </Navbar.Item>
          <Navbar.Item css={isMd ?  {"display":"none"}:{"width":"25px",height:"25px"}}>
            <div className='position-relative w-100 h-50 d-flex align-items-center'>
              <div className='cartAmount'>
                1
              </div>
              <Popover placement={'bottom'}>
              <Popover.Trigger>
          <FontAwesomeIcon size={'2x'} icon={faShoppingBag} />
          </Popover.Trigger>
          <Popover.Content css={{maxHeight: "500px", overflowY:"hidden", width:'300px', padding:"20px"}}>
                <Text h3>Mini-Cart</Text>
                <Grid.Container className='gap-3 scrollbar' css={{maxHeight:"300px", overflowY:"scroll", overflowX:"hidden"}}>
                {LatestProducts.map((item, index)=>{
                  return(
                    <Grid.Container key={index} css={{height:"auto", width:'100%', }}>
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
          </div>
          </Navbar.Item>
          <Navbar.Item css={isMd ?  {"display":"none"}:{"width":"25px",height:"25px"}}>
            <div className='position-relative w-100 h-100'>
              <div className='cartAmount'>
                1
              </div>
              <Link className={`${styles.link}`} href='/wishlist'>
          <FontAwesomeIcon size={'2x'} icon={faHeartCirclePlus} /></Link>
         
          
          </div>
          </Navbar.Item>
          <Navbar.Item css={isMd ?  {"display":"none"}:{"width":"25px",height:"25px"}}>
          
          
      
      <Switch 
      shadow color="warning"
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOn={<SunIcon filled />}
          iconOff={<MoonIcon filled />}
      />
      
              
    
          </Navbar.Item>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger >
                <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>

        </>
    )
}
export default NavbarWrapper;