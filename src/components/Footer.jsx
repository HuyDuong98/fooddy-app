import { Box, Container, Grid, IconButton, MenuItem, MenuList, Typography } from "@material-ui/core";
import { Facebook, Pinterest, Twitter, YouTube } from "@material-ui/icons";
import Style from "../style/components/Footer.module.scss";

export default function Footer(params) {
    return (
        <Box className={Style.footerContainer}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={4}>
                        <img src="../asset/images/logo.svg" alt="" width="130px" height="34px" className={Style.logo} />
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item lg={2}>
                        <Box>
                            <Typography component="h3">About Us</Typography>
                            <MenuList >
                                <MenuItem>Careers</MenuItem>
                                <MenuItem>Our Stores</MenuItem>
                                <MenuItem>Our Cares</MenuItem>
                                <MenuItem>Terms & Conditions</MenuItem>
                                <MenuItem>Privacy Policy</MenuItem>
                            </MenuList>
                        </Box>
                    </Grid>
                    <Grid item lg={3}>
                        <Box>
                            <Typography component="h3">Customer Care</Typography>
                            <MenuList >
                                <MenuItem>Help Center</MenuItem>
                                <MenuItem>How to Buy</MenuItem>
                                <MenuItem>Track Your Order</MenuItem>
                                <MenuItem>Corporate & Bulk Purchasing</MenuItem>
                                <MenuItem>Returns & Refunds</MenuItem>
                            </MenuList>
                        </Box>
                    </Grid>
                    <Grid item lg={3}>
                        <Box>
                            <Typography component="h3">Contact Us</Typography>
                            <MenuList >
                                <MenuItem>70 Washington Square South, New York, NY 10012, United States</MenuItem>
                                <MenuItem>Email: uilib.help@gmail.com</MenuItem>
                                <MenuItem>Phone: +1 1123 456 780</MenuItem>
                            </MenuList>
                            <Box className={Style.social}>
                                <IconButton aria-label="Facebook" size="small" variant="contained">
                                    <Facebook fontSize="inherit" />
                                </IconButton>
                                <IconButton aria-label="Twitter" size="small" variant="contained">
                                    <Twitter fontSize="inherit" />
                                </IconButton>
                                <IconButton aria-label="delete" size="small" variant="contained">
                                    <YouTube fontSize="inherit" />
                                </IconButton>
                                <IconButton aria-label="delete" size="small" variant="contained">
                                    <Pinterest fontSize="inherit" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};
