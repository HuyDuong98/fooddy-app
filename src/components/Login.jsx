import { Dialog, DialogContent, Button, Typography, TextField, FormControl, Box, Divider, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as FaceBookIcon } from "../asset/icon/facebook-filled-white.svg";
import { ReactComponent as GoogleIcon } from "../asset/icon/google.svg";
import Style from '../style/components/Login.module.scss';
import useFormValidate from "../core/useFormValidate";
import { useEffect, useState } from 'react';

export default function Login({ message, open, handleClose, loginPage }) {
    let { form, error, inputChange, check, inputOutFocus } = useFormValidate({
        username: '',
        password: '',
    }, {
        rule: {
            password: {
                required: true,
            },
            username: {
                required: true,
                pattern: 'emailorphone'
            },
        },
        message: {
            password: {
                required: 'Mật khẩu không được để trống'
            },
            username: {
                required: 'Email không được để trống',
                pattern: 'Email hoặc SĐT không hợp lệ'
            },
        },
        options: {
            localStorage: 'login'
        }
    })

    const funcLogin = () => {
        let error = check()

        if (Object.keys(error).length === 0) {
            loginPage(form)
        }
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="xs"
                scroll="body"
            >
                <DialogContent className={Style.content}>
                    <Box className={Style.modalHeader}>
                        <Typography component="h2">Welcome To Fooddy App</Typography>
                        <Box>
                            <Typography>Log in with email & password</Typography>
                        </Box>
                        {
                            message && <Typography color="primary">{message}</Typography>
                        }
                    </Box>
                    <from>
                        <Box>
                            <FormControl fullWidth={true} autoComplete="off">
                                <TextField
                                    label="Email or Phone Number"
                                    type="email"
                                    value={form.username}
                                    onChange={inputChange}
                                    onBlur={inputOutFocus}
                                    name="username"
                                    color="secondary"
                                />
                                {error.username ? <Typography component="small" color="primary" className={Style.errorMessage}>{error.username}</Typography> : null}
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl fullWidth={true}>
                                <TextField
                                    label="Password"
                                    type="password"
                                    value={form.password}
                                    onChange={inputChange}
                                    onBlur={inputOutFocus}
                                    name="password"
                                    color="secondary"
                                />
                                {error.password ? <Typography component="small" color="primary" className={Style.errorMessage}>{error.password}</Typography> : null}
                            </FormControl>
                        </Box>
                        <Button type="submit" onClick={funcLogin} fullWidth={true} variant="contained" color="primary" className={Style.buttonLogin}>
                            Login
                        </Button>
                        <Box className={Style.lineText}>
                            <Box className={Style.line}>
                                <Divider fullWidth={true} />
                            </Box>
                            <Box className={Style.text}>
                                <Box>on</Box>
                            </Box>
                        </Box>
                        <Button fullWidth={true} onClick={handleClose} variant="contained" className={Style.buttonLoginFacebook}>
                            <FaceBookIcon /> Continue with Facebook
                        </Button>
                        <Button fullWidth={true} variant="contained" onClick={handleClose} className={Style.buttonLoginGoogle}>
                            <GoogleIcon /> Continue with Google
                        </Button>
                    </from>
                </DialogContent>
                <Box className={Style.signUp}>
                    <Typography>Don’t have account? </Typography>
                    <Link to="#">Sign Up</Link>
                </Box>
                <Box className={Style.resetPassword}>
                    <Typography>Forgot your password? </Typography>
                    <Link to="#">Reset It</Link>
                </Box>
            </Dialog>
        </>
    )
};
