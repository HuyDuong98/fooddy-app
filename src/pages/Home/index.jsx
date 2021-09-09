import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import CardCategory from "./components/CardCategory";
import NewArrivals from "./components/NewArrivals";
import CardProduct from "../../containers/CardProduct";
import Banner from "./components/Banner";
import TopRatings from "./components/TopRatings"
import FeaturedBrands from "./components/FeaturedBrands";
import { Box, Container, IconButton, Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { ArrowRight, ArrowForward, ArrowBack } from "@material-ui/icons";
import useStyles from "../../style/useStyle";
import Slider from "react-slick";
import { ReactComponent as TopCategoriesIcon } from "../../asset/icon/icon_top_categories.svg";
import { ReactComponent as TopRatingsIcon } from "../../asset/icon/top_ratings.svg";
import { ReactComponent as FeaturedBrandsIcon } from "../../asset/icon/featured_brands.svg";
import { ReactComponent as NewArrivalsIcon } from "../../asset/icon/new.svg";
import { ReactComponent as FlashDealsIcon } from "../../asset/icon/flash_deals.svg";
import Style from "../../style/page/home.module.scss"

export default function Home({ products, cart, fetchProducts, addProductToCart, removeProductToCart }) {
    const classes = useStyles()
    const danger = red[800]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        //autoplay: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const settingsCategory = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const [productFlashSale, setProductFlashSale] = useState({})
    const [productMore, setProductMore] = useState({})

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    useEffect(() => {
        setProductFlashSale(products.flash_deals)
        setProductMore(products.flash_deals)
    }, [products])

    function handleAddProduct(product) {
        addProductToCart(product)
    }

    function handleRemoveProduct(product) {
        removeProductToCart(product)
    }

    return (
        <>
            <Box className={classes.bgWhite}>
                <Banner />
            </Box>
            <Box>
                <Container>
                    <Box className={`${classes.boxdflex} ${classes.subHeader}`}>
                        <Box className={classes.boxdflex}>
                            <Box color={danger} className="icon-title-box">
                                <FlashDealsIcon color="secondary" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" />
                            </Box>
                            <Box>
                                <h4 className="title-box">Flash Deals</h4>
                            </Box>
                        </Box>
                        <a href="#" className="view-all">View All <ArrowRight /></a>
                    </Box>
                    <Slider {...settings}>
                        {
                            productFlashSale && productFlashSale.length > 0 ?
                                productFlashSale.map((product, i) =>
                                    <CardProduct key={i} {...product} add={() => handleAddProduct({ ...product })} remove={() => handleRemoveProduct({ ...product })} />
                                )
                                :
                                <></>
                        }
                    </Slider>


                    <Box className={`${classes.boxdflex} ${classes.subHeader}`}>
                        <Box className={classes.boxdflex}>
                            <Box color={danger} className="icon-title-box">
                                <TopCategoriesIcon color="primary" />
                            </Box>
                            <Box>
                                <h4 className="title-box">Top Categories</h4>
                            </Box>
                        </Box>
                        <a href="#" className="view-all">View All <ArrowRight /></a>
                    </Box>
                    <Slider {...settingsCategory}>
                        {
                            products.top_categories && products.top_categories.length > 0 ?
                                products.top_categories.map((e, i) =>
                                    <CardCategory key={e.id} tag_name={e.tag_name} num_order={e.num_order} image={e.image} />
                                )
                                :
                                <></>
                        }
                    </Slider>

                    <Grid container spacing={5}>
                        <Grid item md={6} >
                            <Box className={`${classes.boxdflex} ${classes.subHeader}`}>
                                <Box className={classes.boxdflex}>
                                    <Box className="icon-title-box">
                                        <TopRatingsIcon />
                                    </Box>
                                    <Box>
                                        <h4 className="title-box">Top Ratings</h4>
                                    </Box>
                                </Box>
                                <a href="#" className="view-all">View All <ArrowRight /></a>
                            </Box>
                            <Box>
                                <TopRatings />
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Box className={`${classes.boxdflex} ${classes.subHeader}`}>
                                <Box className={classes.boxdflex}>
                                    <Box className="icon-title-box">
                                        <FeaturedBrandsIcon />
                                    </Box>
                                    <Box>
                                        <h4 className="title-box">Featured Brands</h4>
                                    </Box>
                                </Box>
                                <a href="#" className="view-all">View All <ArrowRight /></a>
                            </Box>
                            <Box>
                                <FeaturedBrands />
                            </Box>
                        </Grid>
                    </Grid>

                    <Box className={`${classes.boxdflex} ${classes.subHeader}`}>
                        <Box className={classes.boxdflex}>
                            <Box className="icon-title-box">
                                <NewArrivalsIcon />
                            </Box>
                            <Box>
                                <h4 className="title-box">New Arrivals</h4>
                            </Box>
                        </Box>
                        <a href="#" className="view-all">View All <ArrowRight /></a>
                    </Box>
                    <Box>
                        <NewArrivals />
                    </Box>

                    <Box className={Style.subBannner}>
                        <img src="../asset/images/banner-1.png" />
                        <img src="../asset/images/banner-2.png" />
                    </Box>

                    <Box className={`${classes.boxdflex} ${classes.subHeader}`}>
                        <Box className={classes.boxdflex}>
                            <Box>
                                <h4 className="title-box">More For You</h4>
                            </Box>
                        </Box>
                        <a href="#" className="view-all">View All <ArrowRight /></a>
                    </Box>
                    <Box>
                        <Grid container spacing={3}>

                            {
                                productMore && productMore.length > 0 ?
                                    productMore.map((product, i) =>
                                        <Grid item lg={3}>
                                            <CardProduct key={i} {...product} add={() => handleAddProduct({ ...product })} remove={() => handleRemoveProduct({ ...product })} />
                                        </Grid>
                                    )
                                    :
                                    <></>
                            }
                        </Grid>
                    </Box>



                </Container>
            </Box>

        </>
    )
};


function NextArrow(props) {
    const classes = useStyles();
    const { className, style, onClick } = props;
    return (
        <IconButton aria-label="next arrow" size="medium" variant="contained" className={classes.btnNextArrow} onClick={onClick}>
            <ArrowForward />
        </IconButton>
    );
}

function PrevArrow(props) {
    const classes = useStyles();
    const { className, style, onClick } = props;
    return (
        <IconButton aria-label="prev arrow" size="medium" variant="contained" className={classes.btnPrevArrow} onClick={onClick}>
            <ArrowBack />
        </IconButton>
    );
}