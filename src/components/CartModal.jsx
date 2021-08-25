import { Avatar, Box, Button, Divider, Grid, SwipeableDrawer, Typography } from "@material-ui/core"
import { Fragment, useEffect, useState } from "react"
import { useContext } from "react"
import { Context } from "../core/AppProvider"
import Style from "../style/components/CartModal.module.scss"

import { ShoppingCartOutlined } from '@material-ui/icons';
import CartModalItem from "./CartModalItem";
import { ReactComponent as BagEmptySVG } from "../asset/images/shopping-bag.svg"

export default function CartModal({ cart, removeAllProductToCart, removeProductToCart, addProductToCart }) {
    let { showCart, toggleDrawer } = useContext(Context)

    const [categories, setCategories] = useState({})


    useEffect(() => {
        setCategories(cart)
    }, [cart])

    console.log("cart: ", categories)

    function handleRemoveAllProductCart(product) {
        removeAllProductToCart(product)
    }

    function handleAddProductCart(product) {
        addProductToCart(product)
    }

    function handleRemoveProductCart(product) {
        removeProductToCart(product)
    }


    return (
        <Fragment key="right">
            <SwipeableDrawer
                anchor="right"
                open={showCart}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box className={Style.cartBox}>
                    <Box className={Style.sumItems}>
                        <ShoppingCartOutlined />
                        <Typography>{categories.length} items</Typography>
                    </Box>
                    <Box>
                        <Divider />
                        {
                            categories && categories.length > 0 ?
                                categories.map((e) =>
                                    <CartModalItem key={e.product.id} {...e.product} quantity={e.quantity} add={() => handleAddProductCart({ ...e.product })} remove={() => handleRemoveProductCart({ ...e.product })} removeAll={() => handleRemoveAllProductCart({ ...e.product })} />
                                )
                                :
                                <Box className={Style.bagEmpty}>
                                    <BagEmptySVG />
                                    <Box>
                                        <Typography>Your shopping bag is empty.<br /> Start shopping</Typography>
                                    </Box>
                                </Box>
                        }
                    </Box>
                </Box>
                {
                    categories && categories.length > 0 &&
                    <Box className={Style.checkout}>
                        <Button variant="contained" color="primary" disableElevation>Checkout Now (${
                            categories.reduce(
                                function (total, currentValue) {
                                    return total + (currentValue.product.price * currentValue.quantity)
                                }, 0)}
                            .00)</Button>
                        <Button variant="outlined" color="primary">View Card</Button>
                    </Box>
                }
            </SwipeableDrawer>
        </Fragment>
    )
};
