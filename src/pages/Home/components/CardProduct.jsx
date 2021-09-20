import { Visibility, FavoriteBorder, Add, Remove, Favorite } from "@material-ui/icons";
import { Box, Card, CardContent, Typography, Button, Chip, Fab, makeStyles } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
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

export default function CardProduct(props) {
    const { id, chip, image, title, rating, price, oldPrice, cart, add, remove, favorite, addProductFavorite, removeProductFavorite } = props
    const [like, setLike] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const classes = useStyles()

    useEffect(() => {
        let index = -1
        index = findItemInArrayById(favorite, id)
        if (index === -1) {
            setLike(false)
        } else {
            setLike(true)
        }
    }, [favorite])

    useEffect(() => {
        let indexCart = -1
        indexCart = findProductInCart(cart, id)
        if (indexCart === -1) {
            setQuantity(0)
        } else {
            setQuantity(cart[indexCart].quantity)
        }
    }, [cart])

    const addFavorite = (product) => {
        addProductFavorite(product)
    }

    const removeFavorite = (product) => {
        removeProductFavorite(product)
    }

    const findItemInArrayById = (array, itemID) => {
        let index = -1
        if (array.length > 0) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].id === itemID) {
                    index = i
                    break
                }
            }
        }
        return index
    }

    const findProductInCart = (cart, productID) => {
        let index = -1
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].product.id === productID) {
                    index = i
                    break
                }
            }
        }
        return index
    }

    return (
        <Box className={Style.boxProduct}>
            <Card className={classes.cardProduct} >
                <Box>
                    <Chip color="primary" size="small" label={chip} className={classes.chip} />
                    <Box className={Style.extraIcons}>
                        <Fab aria-label="see" size="small" className={Style.icon}>
                            <Visibility size="small" />
                        </Fab>
                        <Fab aria-label="like" size="small" className={Style.icon}>
                            {
                                like ?
                                    <Favorite size="small" color="primary" onClick={() => removeFavorite({ id })} />
                                    :
                                    <FavoriteBorder size="small" onClick={() => addFavorite({ id, chip, image, title, rating, price, oldPrice, like })} />
                            }

                        </Fab>
                    </Box>
                    <Link to={`/detail/${id}`} className={classes.cardImage}>
                        <img className={classes.image} src={image} alt="" />
                    </Link>
                </Box>
                <CardContent className={classes.cardContent}>
                    <Box>
                        <Link to={`/detail/${id}`} className={classes.subtitle}>{title}</Link>
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
                            <Add size="small" color="primary"/>
                        </Button>

                        {
                            quantity && quantity !== 0 ?
                                <>
                                    <Box ><strong>{quantity}</strong></Box>
                                    <Button variant="outlined" color="primary" size="small" onClick={remove}>
                                        <Remove size="small" color="primary"/>
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
