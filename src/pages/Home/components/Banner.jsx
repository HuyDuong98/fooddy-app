import {Container, Box, Button} from "@material-ui/core";
import { Carousel } from 'react-bootstrap';
import useStyles from "../../../style/useStyle";



export default function Banner(params) {
    const classes = useStyles()
    return (
        <Carousel >
            <Carousel.Item>
                <Container className={`${classes.bannerMain}`}>
                    <Box className="w-50">
                        <h3 className={classes.title}>50% Off For Your First Shopping</h3>
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.</p>
                        <Button variant="contained" color="secondary" size="large">
                            Shop Now
                        </Button>
                    </Box>
                    <Box className="w-50">
                        <img className="d-block w-100" src="../asset/images/nike-black.png" alt="Second slide" />
                    </Box>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className={`${classes.bannerMain}`}>
                    <Box className="w-50">
                        <h3 className={classes.title}>50% Off For Your First Shopping</h3>
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.</p>
                        <Button variant="contained" color="secondary">
                            Shop Now
                        </Button>
                    </Box>
                    <Box className="w-50">
                        <img className="d-block w-100" src="../asset/images/nike-black.png" alt="Second slide" />
                    </Box>
                </Container>
            </Carousel.Item>
        </Carousel>
    )
};

