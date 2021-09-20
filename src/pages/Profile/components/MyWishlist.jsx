import { Box, Grid, Typography } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import Style from '../../../style/components/MyWishlist.module.scss'
import CardProduct from "../../../containers/CardProduct";

export default function MyWishlist(props) {
    const { favorite, addProductToCart, removeProductToCart } = props
    console.log(favorite)
    return (
        <>
            <Box className={Style.header}>
                <Favorite />
                <Typography variant="h2">My Wish List</Typography>
            </Box>

            <Box>
                <Grid container spacing={3}>

                    {
                        favorite && favorite.length > 0 ?
                            favorite.map((product, i) =>
                                <Grid item lg={4}>
                                    <CardProduct key={i} {...product} add={()=>addProductToCart({...product})} remove={()=>removeProductToCart({...product})}/>
                                </Grid>
                            )
                            :
                            <></>
                    }
                </Grid>
            </Box>
        </>
    )
};
