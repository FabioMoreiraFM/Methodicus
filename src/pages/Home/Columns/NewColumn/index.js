import { Component } from 'react'

import { Container, NewColumnClickable, Title } from './style';
import AddIcon from '@material-ui/icons/Add';
import withContext from 'hoc/withContext';

class NewColumn extends Component {
    render() {
        const {context} = this.props

        return (
            <Container>
                <NewColumnClickable to='#' onClick={context.onClickCreateColumn}>
                    <AddIcon />
                    <Title>Nova Coluna</Title>
                </NewColumnClickable>
            </Container>
        )
    }
}

export default withContext(NewColumn);