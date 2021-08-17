import { Component } from 'react'

import TaskContext from 'context/tasks-context';
import withContext from 'hoc/withContext';
import PropTypes from 'prop-types';

import AddIcon from '@material-ui/icons/Add';

import { Container, NewColumnClickable, Title } from './style';

class NewColumn extends Component {
    render() {
        const { context } = this.props

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

NewColumn.propTypes = {
    context: PropTypes.object
}