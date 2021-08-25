import { Visibility, FavoriteBorder, Add, Remove, Favorite } from "@material-ui/icons";
import { Box, Card, CardContent, Typography, CardActions, Button, Chip, Fab, makeStyles } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import { Link } from "react-router-dom"
import React, { useState } from "react";
import Style from "../../../style/components/CardProduct.module.scss"

const useStyles = makeStyles((theme) => ({
    boxdflex: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "space-between"
    },
    bgWhite: {
        backgroundColor: "#fff"
    },
    textDefaultColor: {
        color: "#2B3445",
    },
    title: {
        fontSize: "50px",
        color: "#2B3445",
        marginTop: "0",
        marginBottom: "1.35rem",
        lineHeight: "1.2",
        fontWeight: "bold"
    },
    subtitle: {
        color: "#0F3460",
        marginBottom: "8px",
        marginTop: "0px",
        fontSize: "14px",
        textDecoration: "none",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        textTransform: "none",
        fontWeight: "600",
        lineHeight: "1.5",
        display: "block",
        "&:hover": {
            color: "#0F3460",
        }
    },
    cardProduct: {
        position: "relative",
        boxShadow: "0px 1px 3px rgb(3 0 71 / 9%)",
        "& > .MuiCardContent-root:last-child": {
            paddingBottom: "16px"
        }
    },
    chip: {
        position: "absolute",
        top: "15px",
        left: "15px",
    },
    cardImage: {

    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    addCart: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column-reverse",
        webkitBoxAlign: "center",
        webkitBoxPack: "justify",
        width: "30px",
        "& > button": {
            width: "30px",
            padding: "2px",
            minWidth: "auto",
            justifyContent: "center",
        }
    },
    price: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "space-between",
        "& > .MuiBox-root": {
            marginRight: "8px",
            "& > p": {
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "Quicksand",
                marginTop: "4px"
            }
        }
    },
    cardContent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "space-between"
    }
}));

export default function CardProduct({ chip, image, title, rating, price, oldPrice, like, quantity, add, remove }) {
    const classes = useStyles()

    return (
        <Box className={Style.boxProduct}>
            <Card className={classes.cardProduct} >
                <Box>
                    <Chip color="primary" size="small" label={chip} className={classes.chip} />
                    <Box className="extra-icons">
                        <Fab aria-label="see" size="small">
                            <Visibility size="small" />
                        </Fab>
                        <Fab aria-label="like" size="small">
                            {
                                like ? <Favorite size="small" color="primary" onClick={() => console.log("set like false")} /> : <FavoriteBorder size="small" />
                            }

                        </Fab>
                    </Box>
                    <Link to="#" className={classes.cardImage}>
                        <img className={classes.image} src={image} alt="" />
                    </Link>
                </Box>
                <CardContent className={classes.cardContent}>
                    <Box>
                        <Link to="#" className={classes.subtitle}>{title}</Link>
                        <Box>
                            <Rating name="rating" value={rating} readOnly />
                        </Box>
                        <Box className={classes.price}>
                            <Box>
                                <Typography color="primary">${price}.00</Typography>
                            </Box>
                            <Box>
                                <Typography><del>${oldPrice}.00</del></Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.addCart}>
                        <Button variant="outlined" color="primary" size="small" onClick={add} >
                            <Add size="small" />
                        </Button>

                        {
                            quantity && quantity != 0 ?
                                <>
                                    <Box ><strong>{quantity}</strong></Box>
                                    <Button variant="outlined" color="primary" size="small" onClick={remove}>
                                        <Remove size="small" />
                                    </Button>
                                </>
                                :
                                <></>
                        }

                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
};
