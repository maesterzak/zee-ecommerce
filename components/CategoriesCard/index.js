import {Card, Grid, Col, Text} from '@nextui-org/react'

function CategoryCard(params) {
    const {mq, item} = params
    
    return(
        <>
        <Grid xs={mq ? 12:6}>
                <Card variant="flat" isPressable
                isHoverable css={{}}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#4d5959">
                    New
                    </Text>
                    <Text h3 color="black">
                    Acme camera
                    </Text>
                </Col>
                </Card.Header>
                  <Card.Image
                  src={item.image}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="Card example background"
                  >
                  </Card.Image>

                </Card>

            </Grid>
        </>
    )
}
export default CategoryCard;