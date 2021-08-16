import { Navbar, Row, Col, Form, Button } from "react-bootstrap";
import { Container } from "@material-ui/core";
import { PermIdentity, SearchOutlined } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useStyles from "../style/useStyle";
import { useEffect, useState } from "react";

export default function Header(params) {
    const classes = useStyles();

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setShow(window.pageYOffset > 140);
    };

    console.log(show);
    return (
        <Navbar expand="lg" className={`${classes.bgWhite} ${classes.navbarRoot} ${show ? "show": ""}`} >
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#"><img src="../asset/images/logo.svg" alt="" width="130px" height="34px" /></Navbar.Brand>

                <div className="searchwrapper">
                    <div className={`searchbox ${classes.searchNavbar}`}>
                        <Row>
                            <Col md={8}>
                                <SearchOutlined />
                                <input type="text" className="form-control" placeholder="Search by Keywords..." /></Col>
                            <Col md={4}>
                                <Form.Select aria-label="Default select example" className="form-control category">
                                    <option value="All Category">All Category</option>
                                    <option value="Car">Car</option>
                                    <option value="Clothes">Clothes</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Laptop">Laptop</option>
                                </Form.Select>

                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="d-flex">
                    <Button variant="light" className="user-icon">
                        <PermIdentity color="disabled" />
                    </Button>
                    <Button variant="light" className="cart-icon">
                        <ShoppingCartOutlinedIcon color="disabled" />
                    </Button>
                </div>
            </Container>
        </Navbar>
    )
};
