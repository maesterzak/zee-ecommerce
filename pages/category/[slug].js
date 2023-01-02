import { Card, Container, Grid, Spacer, Text, Image } from "@nextui-org/react";
import { useMediaQuery } from "../../components/mediaQuery";
import { useRouter } from 'next/router'
import styles from './styles.module.css'
import { LatestProducts } from "../../utils/data";
import React from 'react';
import ShopCard from "../../components/ShopCard";
import { useState, useEffect, useContext } from "react";
import {useTheme } from '@nextui-org/react'
import { MyStyledButton } from "../../components/Buttons/myStyledButton";
import { storeContext } from "../../components/context/Store";
import Button2 from "../../components/Buttons/Button2";

function Category(params) {
    const router = useRouter()
    const isMd = useMediaQuery(960);
    const { slug } = router.query

    return(
        <>
            <div className="">
                <div  className={styles.overlay}>
                <Text color='white'  h2>{slug?.toLocaleUpperCase()}</Text>
                </div>
                <div>
            <Image style={{height:'200px', width:'100vw', }}
            src={'/images/category-banner.jpg'}
            objectFit='cover'
            
            alt=""
            />
            
            </div>
            </div>
            <Spacer />
            
        
        <Container css={{paddingTop:"40px", maxWidth:"1504px", display:'flex', justifyContent:'center'}} fluid>
          <Grid.Container  gap={1} >
            {LatestProducts.map((item, index)=>{
              return(
                <React.Fragment key={index}>
                  <ShopCard mq={isMd} item={item} cardCount={3} />
                </React.Fragment>
              )
            })}

          </Grid.Container>
        </Container>

        <Spacer />
          <div className='d-flex justify-content-center'>
          <Button2 text={"Load more"} />
          </div>
          <Spacer />
        
        </>
    )
}
export default Category;