import { useState, useRef, useEffect } from 'react';
import { Button, Popper, Grow, Paper, ClickAwayListener, MenuItem, MenuList, Box, makeStyles } from "@material-ui/core";
import { Widgets, NavigateNext } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    popperDropdown: {
        width: "100%",
        top: "14px !important",
    },
    buttonMenuDropdown: {
        width: "278px",
        backgroundColor: "#F6F9FC",
        color: "#2b3445"
    },
    buttonMenuDropdown_Text: {
        fontWeight: "600",
        textAlign: "left",
        flex: "1 1 0px",
        marginLeft: "10px",
        textTransform: "capitalize",
        color: "rgb(125, 135, 156)"
    },
    relative: {
        position: "relative"
    }
}));

export default function DropdownList(params) {
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
                <div className={classes.buttonMenuDropdown_Text}>Categories</div>
                <NavigateNext />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popperDropdown}>
                {({ TransitionProps, placement }) => (
                    <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }} >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    )
};
