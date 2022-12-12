import { Container, Row, Col, Image } from '@nextui-org/react';
import { Navbar, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
// import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { SearchIcon } from "./searchIcon.js";
import { Link } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeartCirclePlus, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '../mediaQuery/index';


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
            <Navbar.Link href="#">Categories</Navbar.Link>
            <Navbar.Link href="#">Latest Products</Navbar.Link>
            <Navbar.Link href="#">Our Products</Navbar.Link>
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
              
          <FontAwesomeIcon size={'2x'} icon={faShoppingBag} />
          </div>
          </Navbar.Item>
          <Navbar.Item css={isMd ?  {"display":"none"}:{"width":"25px",height:"25px"}}>
            <div className='position-relative w-100 h-100'>
              <div className='cartAmount'>
                1
              </div>
              
          <FontAwesomeIcon size={'2x'} icon={faHeartCirclePlus} />
          </div>
          </Navbar.Item>
          <Navbar.Item css={isMd ?  {"display":"none"}:{"width":"25px",height:"25px"}}>
          
          
      
      <Switch 
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
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