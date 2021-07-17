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
            },
            "& .MuiFormLabel-root.Mui-error": {
                color: "red"
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
        type: "password",
        ariaLabel: "Mostrar Senha"
    }

    componentDidUpdate(_, prevState) {
        if (prevState.icon !== this.state.icon) {
            this.textInput.current.focus()
        }
    }

    handleChangeEyeState = () => {
        if (this.state.type === "password") {
            this.setState({type: "text", icon: faEye, ariaLabel: "Ocultar Senha"})
        } else {
            this.setState({type: "password", icon: faEyeSlash, ariaLabel: "Mostrar Senha"})
        }            
    }

    render() {
        const {classes} = this.props

        return (
            <TextField 
                id={this.props.id}
                className={classes.root}
                inputRef={this.textInput}
                fullWidth
                label={this.props.placeholder} 
                variant="outlined" 
                type={this.props.password ? this.state.type : "text"}
                onChange={this.props.onChange}
                onClick={this.props.onClick}
                helperText={this.props.helperText}
                error={this.props.error}
                InputProps={this.props.password && {
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton onClick={this.handleChangeEyeState} arial-label={this.state.ariaLabel}>
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