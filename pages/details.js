import { Container, Grid } from "@nextui-org/react";
import { useMediaQuery } from "../components/mediaQuery";


function ProductDetails(params) {
    const isMd = useMediaQuery(960);
    return(
        <>
        <Container fluid>
            <Grid.Container>
            <Grid xs={isMd ? 12: 6}>
                <Grid.Container>
                    <Grid xs={isMd ? 12: 2}>

                    </Grid>
                    <Grid xs={isMd ? 12: 10}>

                    </Grid>
                </Grid.Container>


            </Grid>
            <Grid xs={isMd ? 12: 6}>


            </Grid>
            </Grid.Container>
        </Container>
        </>
    )
}
export default ProductDetails;