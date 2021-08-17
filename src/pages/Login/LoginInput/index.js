import React, { Component } from "react";

import PropTypes from 'prop-types';

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
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
                color: "#F87F7F",
                fontWeight: "600"
            },
            "& .MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error": {
                color: "#F87F7F",
                fontWeight: "600"
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
            this.setState({ type: "text", icon: faEye, ariaLabel: "Ocultar Senha" })
        } else {
            this.setState({ type: "password", icon: faEyeSlash, ariaLabel: "Mostrar Senha" })
        }
    }

    render() {
        const { classes, id, placeholder, password, onChange, onClick, helperText, error } = this.props

        return (
            <TextField
                id={id}
                className={classes.root}
                inputRef={this.textInput}
                fullWidth
                label={placeholder}
                variant="outlined"
                type={password ? this.state.type : "text"}
                onChange={onChange}
                onClick={onClick}
                helperText={helperText}
                error={error}
                InputProps={password && {
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

LoginInput.propTypes = {
    classes: PropTypes.object,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    password: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    helperText: PropTypes.string,
    error: PropTypes.bool
}