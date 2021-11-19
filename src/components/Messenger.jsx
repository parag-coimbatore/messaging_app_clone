import { AppBar, Toolbar ,  makeStyles } from "@material-ui/core";
import Login from "./account/Login";
import { AccountContext } from "../contacts/AccountProvider";
import React ,{ useContext } from "react";
import ChatBox from "./ChatBox";


const useStyles = makeStyles({
    loginHeader : {
        height: 200,
        background: '#FFA500',
        boxShadow: 'none'

    }
})


const Messenger = () => {
    const classes = useStyles();
    const {account} = useContext(AccountContext);
    return(
        <>
            <AppBar className={classes.loginHeader}>
                <Toolbar>

                </Toolbar>
            </AppBar>
            { account ? <ChatBox/> : <Login/>} /* if user is logged in successfully open chatbox else open login page*/

        </>
    )
}

export default Messenger;