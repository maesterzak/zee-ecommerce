import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { Layout } from '../components/Layout';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Montserrat, Inter, Lato } from '@next/font/google'
import {useState, createContext} from 'react'
import dataContext from '../components/context/dataContext';
import '../styles/globals.css'
import { useEffect } from "react";

const montserrat =Inter()
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])

  const data ={
    cart:cart,
    setCart:setCart
  }
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '#4d5959',
        primaryLightHover: '$green300',
        primaryLightActive: '$green400',
        primaryLightContrast: '$green600',
        primary: '#4ADE7B',
        primaryBorder: '$green500',
        primaryBorderHover: '$green600',
        primarySolidHover: '$green700',
        primarySolidContrast: '$white',
        primaryShadow: '$green500',
        
        gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#5E1DAD',
  
        // you can also create your own color
        myColor: '#ff4ecd',
        linkColor: '#b59677',
        footerColor: 'rgba(255, 255, 255, 0.8)',
        
  
        // ...  more colors
      },
      space: {},
      fonts: {}
    }
  })

  const lightTheme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '#4d5959',
        primaryLightHover: '$green300',
        primaryLightActive: '$green400',
        primaryLightContrast: '$green600',
        primary: '#4ADE7B',
        primaryBorder: '$green500',
        primaryBorderHover: '$green600',
        primarySolidHover: '$green700',
        primarySolidContrast: '$white',
        primaryShadow: '$green500',
        
        gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#5E1DAD',
  
        // you can also create your own color
        myColor: '#ff4ecd',
        linkColor: '#b59677',
        footerColor: '#000000',
  
        // ...  more colors
      },
      space: {},
      fonts: {}
    }
  })

  return (
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider>
      <dataContext.Provider value={data}>
      <Layout>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
  <Component {...pageProps} />
  </Layout>
  </dataContext.Provider>
  </NextUIProvider>
  </NextThemesProvider>
  )
}

export default MyApp
