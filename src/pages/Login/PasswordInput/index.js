import { Component } from "react";

import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


export default class PasswordInput extends Component {
    state = {
        icon: faEyeSlash,
        type: "password"
    }

    handleChangeEyeState = () => {
        if (this.state.type === "password") {
            this.setState({type: "text", icon: faEye})
        } else {
            this.setState({type: "password", icon: faEyeSlash})
        }
    }

    render() {
        return (
            <TextField 
                fullWidth id="outlined-basic" 
                label={this.props.placeholder} 
                variant="outlined" 
                type={this.state.type}
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
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