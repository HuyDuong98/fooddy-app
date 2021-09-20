import { Avatar, Box, Button, IconButton, Typography } from "@material-ui/core";
import { Add, Close, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Style from "../style/components/CartModal.module.scss"

export default function CartModalItem({ title, image, price, quantity, removeAll, remove, add }) {
    return (
        <Box className={Style.itemCart}>
            <Box className={Style.addCart}>
                <Button variant="outlined" color="primary" size="small" onClick={add}>
                    <Add size="small" color="inherit" />
                </Button>

                <Box className={Style.quantity}>{quantity}</Box>
                <Button variant="outlined" color="primary" size="small" disabled={quantity > 1 ? false : true} onClick={remove}>
                    <Remove size="small" />
                </Button>
            </Box>
            <Box>
                <Avatar className={Style.cartAvatar} alt="" src={image} />
            </Box>
            <Box className={Style.info}>
                <Link to="#" className={Style.title}><Typography component="h5">{title}</Typography></Link>
                <Typography component="small" className={Style.subTitle}>${price} x {quantity}</Typography>
                <Box>
                    <Typography color="primary" className={Style.price}>${price * quantity}</Typography>
                </Box>
            </Box>
            <IconButton size="small" onClick={removeAll}>
                <Close fontSize="inherit" />
            </IconButton>
        </Box>
    )
};
