import { Component } from 'react'
import Header from './Header';
import { LeftBackground, RightBackground, HomeContainer } from './styles';
import rightBackground from 'assets/rightBackground.jpg'
import leftBackground from 'assets/leftBackground.jpg'
import Routes from 'routes/homeRoute';


class Home extends Component {
    render() {
        return (
            <>
                <RightBackground src={rightBackground} alt="Imagem de fundo da página principal (Lado Direito)." />
                <LeftBackground src={leftBackground} alt="Imagem de fundo da página principal (Lado Esquerdo)." />
                <HomeContainer>
                    <Header history={this.props.history} />
                    <Routes />
                </HomeContainer>
            </>
        )
    }
}

export default Home;