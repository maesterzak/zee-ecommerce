import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, Grid, Col, Text, Image} from '@nextui-org/react'
import { faArrowRight, faTextHeight} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


function CategoryCard(params) {
    const {mq, item} = params
    
    return(
        <>
        <Grid  xs={mq ? 12:3}>
            <Link href={`/category/${item.name.toLocaleLowerCase()}`}>
                <Card css={{height:'250px'}} variant="flat" isPressable
                isHoverable >
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
                  objectFit="fill"
                  alt="Card example background"
                  showSkeleton
                  maxDelay={10000}
                  >
                  </Card.Image>

                </Card>
                </Link>

            </Grid>
        </>
    )
}
export default CategoryCard;