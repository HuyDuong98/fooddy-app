import { Container, Box, Button, Grid } from "@material-ui/core";
import { Carousel } from 'react-bootstrap';
import useStyles from "../../../style/useStyle";
import { useTranslation } from 'react-i18next';
import Style from '../../../style/components/Banner.module.scss';



export default function Banner({ }) {
    const classes = useStyles()
    const { t } = useTranslation()
    return (
        <Carousel >
            <Carousel.Item key={1}>
                <Container className={Style.bannerMain}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Box className={Style.infomation}>
                                <Box>
                                    <h3 className={Style.title}>{t('sologan')}</h3>
                                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.</p>
                                    <Button variant="contained" color="primary" disableElevation>
                                        Shop Now
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img className={Style.image} src="../asset/images/nike-black.png" alt="Second slide" />
                        </Grid>
                    </Grid>
                </Container>
            </Carousel.Item>
        </Carousel>
    )
};

