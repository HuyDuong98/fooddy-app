import { Visibility, FavoriteBorder, Add, Remove, Favorite } from "@material-ui/icons";
import { Box, Card, CardContent, Typography, CardActions, Button, Chip, Fab, makeStyles } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import { Link } from "react-router-dom"
import React, { useState } from "react";

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
        width: "274px",
        height: "274px",
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

export default function CardProduct({ chip, image, title, rating, price, oldPrice, like }) {
    const classes = useStyles()
    let [quantity, setQuantity] = useState(0)

    function addProduct() {
        let qt = quantity + 1
        setQuantity(qt)
        //console.log(quantity)
    }

    function removeProduct() {
        let qt = quantity - 1
        setQuantity(qt)
    }

    return (
        <Box className={classes.boxdflex}>
            <Card className={classes.cardProduct} >
                <Box>
                    <Chip color="secondary" size="small" label={chip} className={classes.chip} />
                    <Box className="extra-icons">
                        <Fab aria-label="see" size="small">
                            <Visibility size="small" />
                        </Fab>
                        <Fab aria-label="like" size="small">
                            {
                                like ? <Favorite size="small" color="secondary" onClick={() => console.log("set like false")} /> : <FavoriteBorder size="small" onClick={() => console.log("set like true")} />
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
                                <Typography color="secondary">{price}</Typography>
                            </Box>
                            <Box>
                                <Typography color="textSecondary"><del>{oldPrice}</del></Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.addCart}>
                        <Button variant="outlined" color="secondary" size="small" onClick={addProduct}>
                            <Add size="small" />
                        </Button>

                        {
                            quantity && quantity != 0 ?
                                <>
                                    <Box ><strong>{quantity}</strong></Box>
                                    <Button variant="outlined" color="secondary" size="small" onClick={removeProduct}>
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
