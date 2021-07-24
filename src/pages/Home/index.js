import { Component } from 'react'
import Header from './Header';
import { LeftBackground, RightBackground } from './styles';
import rightBackground from 'assets/rightBackground.jpg'
import leftBackground from 'assets/leftBackground.jpg'
import Columns from './Columns';

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <RightBackground src={rightBackground} alt="Imagem de fundo da página principal (Lado Direito)." />
                <LeftBackground src={leftBackground} alt="Imagem de fundo da página principal (Lado Esquerdo)." />
                <Columns />
            </>
        )
    }
}

export default Home;