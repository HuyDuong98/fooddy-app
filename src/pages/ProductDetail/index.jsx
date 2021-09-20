import { Container, Grid, Typography, Box, Button, Tabs, Tab } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useEffect, useState } from "react";
import Style from "../../style/page/detail.module.scss";
import Comment from "../../containers/ProductDetail/Components/Comment"
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail(props) {
    const { fetchProductDetail, product } = props
    const { slug } = useParams()

    const history = useLocation()
    console.log("history",window.location.origin)

    useEffect(() => {
        fetchProductDetail(slug)
    }, [fetchProductDetail])

    const [currentImage, setCurrentImage] = useState(product.image)
    const [activeImage, setActiveImage] = useState(0)
    const [tabValue, setTabValue] = useState(0)

    function handleChangeImage(index, image) {
        setActiveImage(index)
        setCurrentImage(image)
    }

    const renderImageProduct = () => {
        return (
            <>
                <Box className={Style.imageReview}>
                    <Box className={Style.image}>
                        <img src={currentImage} />
                    </Box>
                </Box>
                <Box className={Style.childImage}>
                    <Box className={activeImage === 0 ? Style.thumbnailActive : Style.thumbnail} onClick={handleChangeImage.bind(null, 0, "https://bazar-react.vercel.app/assets/images/products/headphone.png")}>
                        <img src="https://bazar-react.vercel.app/assets/images/products/headphone.png" />
                    </Box>
                    <Box className={activeImage === 1 ? Style.thumbnailActive : Style.thumbnail} onClick={handleChangeImage.bind(null, 1, "https://bazar-react.vercel.app/assets/images/products/hiclipart.com%20(16).png")}>
                        <img src="https://bazar-react.vercel.app/assets/images/products/hiclipart.com%20(16).png" />
                    </Box>
                    <Box className={activeImage === 2 ? Style.thumbnailActive : Style.thumbnail} onClick={handleChangeImage.bind(null, 2, "https://bazar-react.vercel.app/assets/images/products/hiclipart.com%20(18).png")}>
                        <img src="https://bazar-react.vercel.app/assets/images/products/hiclipart.com%20(18).png" />
                    </Box>
                </Box>
            </>
        )
    }

    const renderDetailProduct = () => {
        return (
            <Box className={Style.detail}>
                <Typography component="h1">{product.title}</Typography>
                <Box className={Style.lineText}>
                    <Typography>Brand: </Typography>
                    <Typography className={Style.value}>Xiaomi</Typography>
                </Box>
                <Box className={Style.lineText}>
                    <Typography>Rate:</Typography>
                    <Rating className={Style.rating} value={product.rating} name="ratingProduct" readOnly={true} />
                    <Typography className={Style.value}>(50)</Typography>
                </Box>
                <Box className={Style.price}>
                    <Typography component="h2">${product.price}.00</Typography>
                    <Typography>Stock Available</Typography>
                </Box>
                <Button variant="contained" color="primary" className={Style.buttonAddCart}>Add To Cart</Button>
                <Box className={Style.lineText}>
                    <Typography>Sold By: </Typography>
                    <Typography className={Style.value}>Mobile Store</Typography>
                </Box>
            </Box>
        )
    }

    const renderTabPanel = () => {
        function a11yProps(index) {
            return {
                id: `simple-tab-${index}`,
                'aria-controls': `simple-tabpanel-${index}`,
            };
        }

        const handleChange = (event, newValue) => {
            setTabValue(newValue);
        };

        function TabPanel(props) {
            const { children, value, index, ...other } = props;

            return (
                <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`simple-tabpanel-${index}`}
                    aria-labelledby={`simple-tab-${index}`}
                    {...other}
                >
                    {value === index && (
                        <Box pb={3}>
                            <Typography>{children}</Typography>
                        </Box>
                    )}
                </div>
            );
        }

        return (
            <Box>
                <Tabs className={Style.tabHeader} value={tabValue} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Description" {...a11yProps(0)} />
                    <Tab label="Review (3)" {...a11yProps(1)} />
                </Tabs>
                <Box className={Style.tabContent}>
                    <TabPanel value={tabValue} index={0}>
                        <Typography component="h3">Specification:</Typography>
                        <Typography>
                            Brand: Beats<br />
                            Model: S450<br />
                            Wireless Bluetooth Headset<br />
                            FM Frequency Response: 87.5 – 108 MHz<br />
                            Feature: FM Radio, Card Supported (Micro SD / TF)<br />
                            Made in China<br />
                        </Typography>
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                        <Comment />
                    </TabPanel>
                </Box>
            </Box>
        )
    }

    return (
        <>
            <Container className={Style.marginTop}>
                <Grid container>
                    <Grid item md={6}>
                        {renderImageProduct()}
                    </Grid>
                    <Grid item md={6}>
                        {renderDetailProduct()}
                    </Grid>
                </Grid>
                {renderTabPanel()}
            </Container>
        </>
    )
};
