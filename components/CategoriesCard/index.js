import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, Grid, Col, Text, Image} from '@nextui-org/react'
import { faArrowRight, faTextHeight} from '@fortawesome/free-solid-svg-icons';


function CategoryCard(params) {
    const {mq, item} = params
    
    return(
        <>
        <Grid xs={mq ? 12:6}>
                <Card variant="flat" isPressable
                isHoverable css={{}}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    
                    <Text transform="uppercase" h3 color="black">
                    {item.name}
                    </Text>
                    <Text   size={15}   color="#4d5959">
                    <i>Shop now  </i>
                    </Text>
                </Col>
                </Card.Header>
                  <Card.Image
                  src={item.image}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="Card example background"
                  showSkeleton
                  maxDelay={10000}
                  >
                  </Card.Image>

                </Card>

            </Grid>
        </>
    )
}
export default CategoryCard;