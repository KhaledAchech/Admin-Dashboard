import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    parent: {
        margin: theme.spacing(0.5),
        padding : '1px 1px'
    },
    label: {
        textTransform: 'none',
        justifyContent:'center'
    }
}))

export default function Button(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.parent, label: classes.parent }}>
            {text}
        </MuiButton>
    )
}
