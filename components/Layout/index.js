// import { Content } from "./Content.js"
import { Box } from "../Navbar/Box";
// import { Navbar } from "@nextui-org/react";

import NavbarWrapper from "../Navbar";
import Footer from "../Footer";
import Mfooter from "../Footer/mobileFooterNav";

export const Layout = ({ children }) => (
  <>

  <Box
    css={{
      maxW: "100%",
      maxH:"100%"
    }}
  >
    <div className='mainBody '>
      <NavbarWrapper />

    {children}
    

    <Footer />
    </div>
    <Mfooter />
    {/* <Content /> */}
  </Box>
  </>
);