import { useState, useRef, useEffect } from 'react';
import { Button, Popper, Grow, Paper, ClickAwayListener, MenuItem, MenuList, Box, makeStyles } from "@material-ui/core";
import { Widgets, NavigateNext } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    popperDropdown: {
        width: "100%",
        minWidth: "240px",
        top: "14px !important",
    },
    buttonMenuDropdown: {
        minWidth: "50px",
        backgroundColor: "#F6F9FC",
        color: "#2b3445"
    },
    buttonMenuDropdown_Text: {
        fontWeight: "600",
        textAlign: "left",
        flex: "1 1 0px",
        marginLeft: "10px",
        textTransform: "capitalize",
        color: "rgb(125, 135, 156)",
        width: "200px"
    },
    relative: {
        position: "relative"
    }
}));

export default function DropdownList({ istitle = true }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Box className={classes.relative}>
            <Button className={classes.buttonMenuDropdown}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}>
                <Widgets fontSize="small" />
                {
                    istitle ? <div className={classes.buttonMenuDropdown_Text}>Categories</div> : <></>
                }

                <NavigateNext />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popperDropdown}>
                {({ TransitionProps, placement }) => (
                    <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }} >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <Box>
                                        <MenuItem onClick={handleClose}>
                                            Profile
                                        </MenuItem>
                                    </Box>
                                    <Box><MenuItem onClick={handleClose}>My account</MenuItem></Box>
                                    <Box><MenuItem onClick={handleClose}>Logout</MenuItem></Box>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    )
};
