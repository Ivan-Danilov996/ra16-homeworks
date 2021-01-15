import News from './News'
import Adveristing from './Adveristing'



//шапка страницы с главными новостями и виджетом с рекламой  
export default function Header() {

    return (
        <header className="header">
            <News />
            <Adveristing />
        </header>
    )
}