import {Container, Box, Button} from "@material-ui/core";
import { Carousel } from 'react-bootstrap';
import useStyles from "../../../style/useStyle";
import { useTranslation } from 'react-i18next'


export default function Banner(params) {
    const classes = useStyles()
    const { t } = useTranslation()
    return (
        <Carousel >
            <Carousel.Item>
                <Container className={`${classes.bannerMain}`}>
                    <Box className="w-50">
                        <h3 className={classes.title}>{t('sologan')}</h3>
                        <h3 className={classes.title}></h3>
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
                        <h3 className={classes.title}>{t('sologan')}</h3>
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

