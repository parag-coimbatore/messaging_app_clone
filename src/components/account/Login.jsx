import { Dialog, withStyles, Box, Typography , makeStyles, List, ListItem} from "@material-ui/core";

const useStyles = makeStyles({
    component:{
        display: 'flex'

    },
    leftComponent: {
        padding: '15px 0 56px 56px',

    },
    qrCode: {
        height: 304,
        width: 304,
        padding: '50px 50px 0px 290px'
    },
    textTitle: {
        fontSize: 30,
        fontfamily: 'Varela Round',
        marginBottom: 25
    },
    textNotice : {
      fontSize: 25,
      marginBottom: 4
    }
}) 

const style = {
    dialogPaper :{
        height: '75%',
        width: '80%',
        marginTop: '8%',
        boxShadow : 'none',
        borderRadius: 19,
        border: '2px solid rgb(210, 210, 210)',
        maxHeight: '100%',
        maxWidth: '100%'
    }
}

const Login = ({ classes}) => {
    const classname = useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';

    return(
        <Dialog  
            open = {true} 
            classes={{paper : classes.dialogPaper}}
            BackdropProps = {{style: {backgroundColor :'unset'}}} 
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Typography className={classname.textTitle}>To use Baatein , do the following steps:-</Typography>
                    <List>
                        <ListItem className={classname.textNotice}>1. Click on the button on the QR Code </ListItem>
                        <ListItem className={classname.textNotice}>2. Log in to your Google account</ListItem>
                        <ListItem className={classname.textNotice}>3. And enjoy chatting with your partner </ListItem>
                    </List>
                </Box>
                <Box>
                    <img src={qrurl} alt='qr' className={classname.qrCode}/>
                </Box>
            </Box>


        </Dialog>
    )
    
}

export default withStyles(style)(Login);