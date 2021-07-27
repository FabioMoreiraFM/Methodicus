import { Component } from 'react'

import { Container, NewColumnClickable, Title } from './style';
import AddIcon from '@material-ui/icons/Add';

class NewColumn extends Component {
    render() {
        return (
            <Container>
                <NewColumnClickable to='#' onClick={this.props.onClickCreateColumn}>
                    <AddIcon />
                    <Title>Nova Coluna</Title>
                </NewColumnClickable>
            </Container>
        )
    }
}

export default NewColumn;