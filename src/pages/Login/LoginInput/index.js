import React, { Component } from "react";

import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
    root: {
        [theme.breakpoints.down("xs")]: {
            "& .MuiOutlinedInput-root": {
                "& fieldset": {                    
                    border: "none"
                },
                "&.Mui-focused": {
                    backgroundColor: "white",
                    color: "black",
                    opacity: 1,
                    "& .MuiIconButton-label": {
                        color: "black"                        
                    }
                },
                color: "white",          
                backgroundColor: "rgba(255,255,255,0.1)"
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
                color: "black"                              
            },
            "& .MuiInputLabel-root": {
                color: "white",                
            },
            "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
                marginTop: "7px"
            },
            "& .MuiIconButton-root": {
                color: "white"
            }
        }
    }
})

class LoginInput extends Component {    
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }

    state = {
        icon: faEyeSlash,
        type: "password"
    }

    componentDidUpdate() {
        this.textInput.current.focus()
    }

    handleChangeEyeState = () => {
        if (this.state.type === "password") {
            this.setState({type: "text", icon: faEye})
        } else {
            this.setState({type: "password", icon: faEyeSlash})
        }            
    }

    render() {
        const {classes} = this.props

        return (
            <TextField 
                autoFocus={this.state.autoFocus}
                className={classes.root}
                inputRef={this.textInput}
                fullWidth id="outlined-basic" 
                label={this.props.placeholder} 
                variant="outlined" 
                type={this.props.password ? this.state.type : "text"}
                InputProps={this.props.password && {
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton onClick={this.handleChangeEyeState}>
                                <FontAwesomeIcon icon={this.state.icon} />
                            </IconButton>
                        </InputAdornment>
                    )                    
                }}
            />
        )
    }
}

export default withStyles(styles)(LoginInput)