import { Grid, Spacer, Text, Collapse, useTheme, Col } from "@nextui-org/react";
import { useMediaQuery } from "../mediaQuery";
import React from 'react'
import { faCartShopping, faHeart, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer(params) {
    const { theme } = useTheme();
    const isMd = useMediaQuery(960);
    const Category =[
        "Accessory", "Footware", "Handbag", "Shoes"
    ]

    return(
        <footer>
        
        <Grid.Container css={{background:"#000000", paddingTop:"40px", paddingBottom:"40px"}}>
            {isMd ? 
            
            <Grid>
        <Collapse.Group shadow css={{"background":"transparent", width:"100vw"}}>
          <Collapse  css={{"color":"White",fontSize:"$sm"}} color="white"  title="Get in Contact">
          <div>
                    <Text  h2 color="white">
                        3PLEZEE
                    </Text>
                    <Text  color="white">
                    184 Main Rd E, St Albans
                    VIC 3021, Australia
                    <Spacer />
                    contact@company.com
                    <Spacer />
                    +001 2233 456
                    </Text>

                </div>
          </Collapse>
          <Collapse css={{"color":"White",fontSize:"$sm"}} title="Categories">
          <div>
                    {/* <Text  color="white" h3>
                    CATEGORIES
                    </Text> */}
                    <Spacer />
                    <Text  color="white" >
                        {Category.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                {item}
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
          </Collapse>
          <Collapse title="Information">
          <div>
                    {/* <Text  color="white" h3>
                    CATEGORIES
                    </Text> */}
                    <Spacer />
                    <Text  color="white" >
                        {Category.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                {item}
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
          </Collapse>
          <Collapse title="Usefull links">
          <div>
                   
                    <Spacer />
                    <Text  color="white" >
                        {Category.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                {item}
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
          </Collapse>
          
        </Collapse.Group>
      </Grid>
            
            :<>
            <Grid css={{"padding":"10px"}} xs={isMd ? 6:3}>
                <div>
                    <Text  h2 color="white">
                        3PLEZEE
                    </Text>
                    <Text  color="white">
                    184 Main Rd E, St Albans
                    VIC 3021, Australia
                    <Spacer />
                    contact@company.com
                    <Spacer />
                    +001 2233 456
                    </Text>

                </div>
                
            </Grid>
            <Grid css={{"padding":"10px"}} xs={isMd ? 6:2}>
                <div>
                    <Text  color="white" h3>
                    CATEGORIES
                    </Text>
                    <Spacer />
                    <Text  color="white" >
                        {Category.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                {item}
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
                
            </Grid>
            <Grid css={{"padding":"10px"}} xs={isMd ? 6:2}>
                <div>
                    <Text  color="white" h3>
                    INFORMATION
                    </Text>
                    <Spacer />
                    <Text  color="white" >
                        {Category.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                {item}
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
                
            </Grid>
            <Grid css={{"padding":"10px"}} xs={isMd ? 6:2}>
                <div>
                    <Text color="white" h3>
                    USEFULL LINKS
                    </Text>
                    <Spacer />
                    <Text  color="white" >
                        {Category.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                {item}
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
                
            </Grid>
            <Grid css={{"padding":"10px"}} xs={isMd ? 6:3}>
                <div>
                    <Text  color="white" >
                    NEWSLETTER SIGNUP
                    </Text>
                    <Spacer />
                    <Text  color="white" >
                        {Category.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                {item}
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
                
            </Grid>
            </>
             
            
            
            }
        </Grid.Container>
        
        <Grid.Container css={{background: "$linkColor"}} >
            <Grid css={{padding:"5px", marginBottom: isMd ? "70px": 0}}>
                <Text css={{textAlign:"center"}} b>
            Copyright © 2022 3plezee  all rights reserved. Powered by @devmaesters
            </Text>
            </Grid>
            
            
            
        </Grid.Container>
        
        
        
        
        
        
        </footer>
    )
}
export default Footer;