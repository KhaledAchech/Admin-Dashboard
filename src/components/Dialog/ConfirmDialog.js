import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core';
import Controls from "../controls/Controls";
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';


const useStyles = makeStyles(theme => (
    {
        dialog: {
            padding: theme.spacing(2),
            position: 'absolute',
            top: theme.spacing(5)
        },
        dialogTitle: {
            textAlign: 'center'
        },
        dialogContent: {
            textAlign: 'center'
        },
        dialogAction: {
            justifyContent: 'center'
        },
        titleIcon: {
            left: '30%',
            color: theme.palette.secondary.main,
            '& .MuiSvgIcon-root': {
                fontSize: '8rem',
            }
        }
    }))

export default function ConfirmDialog(props) {

const {confirmDialog, setConfirmDialog} = props;
const classes = useStyles();
    return (
        <Dialog open={confirmDialog.isOpen} classes={{paper:classes.dialog}}>
            <DialogTitle className= {classes.dia}>
                <IconButton disableRipple className = {classes.titleIcon}>
                    <NotListedLocationIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent className= {classes.dialogContent}>
                <Typography variant = "h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant = "subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions classes= {classes.DialogAction}>
            <Controls.Button
            text = "Yes"
            color = "secondary"
            onClick={confirmDialog.onConfirm}/>
            <Controls.Button
            text = "No"
            color = "default"
            onClick={()=>setConfirmDialog({...confirmDialog, isOpen:false})}/>
            </DialogActions>
        </Dialog>
    )
}
