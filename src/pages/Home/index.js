import { Component } from 'react'

import leftBackground from 'assets/leftBackground.jpg'
import rightBackground from 'assets/rightBackground.jpg'
import { TaskContextProvider } from 'context/tasks-context';
import Routes from 'routes/homeRoute';

import { LeftBackground, RightBackground, HomeContainer } from './styles';

import Header from './Header';

class Home extends Component {
    render() {
        return (
            <TaskContextProvider>
                <RightBackground src={rightBackground} alt="Imagem de fundo da página principal (Lado Direito)." />
                <LeftBackground src={leftBackground} alt="Imagem de fundo da página principal (Lado Esquerdo)." />
                <HomeContainer>
                    <Header history={this.props.history} />
                    <Routes />
                </HomeContainer>
            </TaskContextProvider>
        )
    }
}

export default Home;