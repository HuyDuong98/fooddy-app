import React from "react";
import Menu from "../../components/Menu";
import { Paper, Box, Container, IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { ArrowRight, ArrowForward, ArrowBack } from "@material-ui/icons";
import useStyles from "../../style/useStyle";
import Banner from "./components/Banner";
import CardProduct from "./components/CardProduct";
import Slider from "react-slick";

const products = [
    {
        chip: "20% off",
        image: "../asset/images/sp1.png",
        title: "Black Acid Wash",
        rating: 1,
        price: "$200.00",
        oldPrice: "250.00",
        like:true,
    },
    {
        chip: "20% off",
        image: "../asset/images/sp2.png",
        title: "Black Acid Wash",
        rating: 2,
        price: "$200.00",
        oldPrice: "250.00",
        like:false,
    },
    {
        chip: "20% off",
        image: "../asset/images/sp3.png",
        title: "Black Acid Wash",
        rating: 3,
        price: "$200.00",
        oldPrice: "250.00",
        like:false,
    },
    {
        chip: "20% off",
        image: "../asset/images/sp4.png",
        title: "Black Acid Wash",
        rating: 5,
        price: "$200.00",
        oldPrice: "250.00",
        like:true,
    },
    {
        chip: "20% off",
        image: "../asset/images/sp1.png",
        title: "Black Acid Wash",
        rating: 4,
        price: "$200.00",
        oldPrice: "250.00",
        like:true,

    }
]

export default function Home(params) {
    const classes = useStyles();
    const danger = red[800];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "30px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay:true,
    };

    console.log(products)

    return (
        <>
            <Box className={classes.bgWhite}>
                <Paper elevation={3} rounded={0} className={classes.paperRoot}>
                    <Menu />
                </Paper>
                <Banner />
            </Box>
            <Box>
                <Container>
                    <Box className={`${classes.boxdflex} ${classes.subHeader}`}>
                        <Box className={classes.boxdflex}>
                            <Box color={danger} className="icon-title-box">
                                <svg color="secondary" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.0765 9.48063H12.1242L15.5905 0L5 14.5194H11.9522L8.48592 24L19.0765 9.48063Z"></path></svg>
                            </Box>
                            <Box>
                                <h4 className="title-box">Flash Deals</h4>
                            </Box>
                        </Box>
                        <a href="#" className="view-all">View All <ArrowRight /></a>
                    </Box>
                    <Slider {...settings}>
                        {
                            products && products.length > 0 ?
                                products.map((product, i) =>
                                    <CardProduct key={i} chip={product.chip} image={product.image} title={product.title} rating={product.rating} price={product.price} oldPrice={product.oldPrice} like={product.like}/>
                                )
                                :
                                <></>
                        }
                    </Slider>


                    <Box className={`${classes.boxdflex} ${classes.subHeader}`}>
                        <Box className={classes.boxdflex}>
                            <Box color={danger} className="icon-title-box">
                                <svg color="secondary" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.0765 9.48063H12.1242L15.5905 0L5 14.5194H11.9522L8.48592 24L19.0765 9.48063Z"></path></svg>
                            </Box>
                            <Box>
                                <h4 className="title-box">Flash Deals</h4>
                            </Box>
                        </Box>
                        <a href="#" className="view-all">View All <ArrowRight /></a>
                    </Box>
                    <Slider {...settings}>
                        {
                            products && products.length > 0 ?
                                products.map((product, i) =>
                                    <CardProduct chip={product.chip} image={product.image} title={product.title} rating={product.rating} price={product.price} oldPrice={product.oldPrice} like={product.like}/>
                                )
                                :
                                <></>
                        }
                    </Slider>
                </Container>
            </Box>
        </>
    )
};


function NextArrow(props) {
    const classes = useStyles();
    const { className, style, onClick } = props;
    return (
        <IconButton aria-label="next arrow" size="large" variant="contained" className={classes.btnNextArrow} onClick={onClick}>
            <ArrowForward />
        </IconButton>
    );
}

function PrevArrow(props) {
    const classes = useStyles();
    const { className, style, onClick } = props;
    return (
        <IconButton aria-label="prev arrow" size="large" variant="contained" className={classes.btnPrevArrow} onClick={onClick}>
            <ArrowBack />
        </IconButton>
    );
}