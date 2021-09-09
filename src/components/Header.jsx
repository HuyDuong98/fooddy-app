import { Navbar, Row, Col, Form, Button } from "react-bootstrap";
import { Avatar, Box, Container, Grid, IconButton, Menu, MenuItem, MenuList, Typography } from "@material-ui/core";
import { ExitToApp, LockOpen, PermIdentity, PersonOutline, SearchOutlined } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useStyles from "../style/useStyle";
import { useContext, useEffect, useState } from "react";
import CartModal from "../containers/CartModal";
import { Context } from "../core/AppProvider";
import DropdownList from "../customComponents/DropdownList";
import Style from "../style/components/Header.module.scss";
import Login from "../containers/Login";
import MenuComponent from '../components/Menu.jsx';

import { useTranslation } from 'react-i18next';
import { useHistory, useRouteMatch } from "react-router-dom";
import { pagePath } from '../utils/constants/pagePath';
import { ReactComponent as Logo} from "../asset/images/logo.svg";

export default function Header(props) {
    let { cart, categories, fetchCategories, auth, logoutPage } = props
    let history = useHistory()
    let {url} = useRouteMatch()
    const { t } = useTranslation()
    const classes = useStyles()

    let { toggleDrawer } = useContext(Context)
    let [show, setShow] = useState(false)
    const [openModalLogin, setOpenModalLogin] = useState(false);
    let [searchResult, setSearchResult] = useState()
    const [optionAvatar, setOptionAvatar] = useState(null);


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

    const handleClickOpen = () => {
        setOpenModalLogin(true);
    };

    const handleClose = () => {
        setOpenModalLogin(false);
    };

    const openOptionAvatar = (event) => {
        setOptionAvatar(event.currentTarget);
    };

    const closeOptionAvatar = () => {
        setOptionAvatar(null);
    };

    const handleLogout = () => {
        logoutPage()
        closeOptionAvatar()
    }

    const handelProfile = () => {
        closeOptionAvatar()
        history.push(pagePath.profileInfo)
    }

    return (
        <>
            <Navbar expand="lg" className={`${classes.bgWhite} ${classes.navbarRoot} ${show ? "show" : ""}`} >
                <Container className="d-flex justify-content-between">
                    <Box className={Style.brand}>
                        <Navbar.Brand href="/">
                            <Logo alt="" width="130px" height="34px" />
                        </Navbar.Brand>
                        {
                            show ? <DropdownList istitle={false} /> : <></>
                        }
                    </Box>
                    <div className={Style.searchBox}>
                        <div className={Style.searchNavbar}>
                            <Grid container>
                                <Grid item md={8} xs={7}>
                                    <SearchOutlined />
                                    <input type="text" className={Style.formControl} placeholder="Search by Keywords..." name="category" onChange={handleChange} />
                                </Grid>
                                <Grid item md={4} xs={5}>
                                    <Form.Select aria-label="Default select example" className={Style.selectCategory}>
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
                        {
                            auth && auth.status ? (
                                <>
                                    <IconButton aria-controls="menu-user" aria-haspopup="true" onClick={openOptionAvatar} className={Style.buttonAvatar}>
                                        <Avatar title={auth.user.lastName + " " + auth.user.firstName} src={auth.user.avatar} className={Style.avatar} />
                                    </IconButton>
                                    <Menu
                                        id="menu-user"
                                        anchorEl={optionAvatar}
                                        getContentAnchorEl={null}
                                        keepMounted
                                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                                        open={Boolean(optionAvatar)}
                                        onClose={closeOptionAvatar}
                                        className={Style.menuAvatar}
                                    >
                                        <MenuItem onClick={handelProfile} className={Style.item}><PersonOutline size="small" /> {t('Profile')}</MenuItem>
                                        <MenuItem onClick={closeOptionAvatar} className={Style.item}><LockOpen size="small" /> {t('ChangePassword')}</MenuItem>
                                        <MenuItem onClick={handleLogout} className={Style.item}><ExitToApp size="small" /> {t('Logout')}</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <Button variant="light" className={Style.userIcon} onClick={handleClickOpen}>
                                    <PermIdentity />
                                </Button>
                            )
                        }
                        <Button variant="light" className={Style.buttonCart} onClick={toggleDrawer(true)}>
                            <ShoppingCartOutlinedIcon />
                            {
                                cart && cart.length > 0 &&
                                <Typography className={Style.itemCart}>{cart.length}</Typography>
                            }

                        </Button>
                    </div>
                </Container>
            </Navbar>

            <Box className={classes.bgWhite}>
                <MenuComponent />
            </Box>
            <CartModal />
            {
                auth && !auth.status && <Login open={openModalLogin} handleClose={handleClose} />
            }
        </>
    )
};
