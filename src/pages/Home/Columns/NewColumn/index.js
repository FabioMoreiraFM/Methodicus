import { Component } from 'react'

import { Container, NewColumnClickable, Title } from './style';
import AddIcon from '@material-ui/icons/Add';
import withContext from 'hoc/withContext';
import TaskContext from 'context/tasks-context';

class NewColumn extends Component {
    render() {
        const {context} = this.props

        return (
            <Container>
                <NewColumnClickable to='/home' onClick={context.onClickCreateColumn}>
                    <AddIcon />
                    <Title>Nova Coluna</Title>
                </NewColumnClickable>
            </Container>
        )
    }
}

export default withContext(TaskContext)(NewColumn);