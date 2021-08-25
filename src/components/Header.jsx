import { Navbar, Row, Col, Form, Button } from "react-bootstrap";
import { Box, Container, Grid, MenuItem, MenuList, Typography } from "@material-ui/core";
import { PermIdentity, SearchOutlined } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useStyles from "../style/useStyle";
import { useContext, useEffect, useState } from "react";
import CartModal from "../containers/CartModal";
import { Context } from "../core/AppProvider";
import DropdownList from "../customComponents/DropdownList";
import Style from "../style/components/Header.module.scss";

export default function Header({ cart, categories, fetchCategories }) {

    const classes = useStyles();

    let { toggleDrawer } = useContext(Context)

    let [show, setShow] = useState(false)
    let [searchResult, setSearchResult] = useState()

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setShow(window.pageYOffset > 140);
    };

    const handleChange = (e) => {
        if (e.target.value.length > 0) {
            let m = e.target.value.substring(0, 1)
            const items = categories.filter(c => c.title.startsWith(m))
            setSearchResult(items)
        } else {
            setSearchResult({})
        }
    }

    return (
        <>
            <Navbar expand="lg" className={`${classes.bgWhite} ${classes.navbarRoot} ${show ? "show" : ""}`} >
                <Container className="d-flex justify-content-between">
                    <Box className={Style.brand}>
                        <Navbar.Brand href="#">
                            <img src="../asset/images/logo.svg" alt="" width="130px" height="34px" />
                        </Navbar.Brand>
                        {
                            show ? <DropdownList istitle={false} /> : <></>
                        }
                    </Box>
                    <div className={`searchwrapper ${Style.searchBox}`}>
                        <div className={`searchbox ${classes.searchNavbar}`}>
                            <Grid container>
                                <Grid item md={8} xs={7}>
                                    <SearchOutlined />
                                    <input type="text" className="form-control" placeholder="Search by Keywords..." name="category" onChange={handleChange} />
                                </Grid>
                                <Grid item md={4} xs={5}>
                                    <Form.Select aria-label="Default select example" className="form-control category">
                                        <option value="All Category">All Category</option>
                                        <option value="Car">Car</option>
                                        <option value="Clothes">Clothes</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Laptop">Laptop</option>
                                    </Form.Select>

                                </Grid>
                            </Grid>
                        </div>
                            {
                                searchResult && searchResult.length > 0 &&
                                <MenuList className={Style.resultSearch}>
                                    {
                                        searchResult.map((e, i) =>
                                            <MenuItem key={i}>{e.title}</MenuItem>
                                        )
                                    }
                                </MenuList>
                            }
                    </div>
                    <div className={Style.navbarAction}>
                        <Button variant="light" className="user-icon">
                            <PermIdentity />
                        </Button>
                        <Button variant="light" className={`cart-icon ${Style.buttonCart}`} onClick={toggleDrawer(true)}>
                            <ShoppingCartOutlinedIcon />
                            {
                                cart && cart.length > 0 &&
                                <Typography className={Style.itemCart}>{cart.length}</Typography>
                            }

                        </Button>
                    </div>
                </Container>
            </Navbar>
            <CartModal />

        </>
    )
};
