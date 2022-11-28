// import { Content } from "./Content.js"
import { Box } from "../Navbar/Box";
// import { Navbar } from "@nextui-org/react";

import NavbarWrapper from "../Navbar";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
      <NavbarWrapper />

    {children}
    {/* <Content /> */}
  </Box>
);