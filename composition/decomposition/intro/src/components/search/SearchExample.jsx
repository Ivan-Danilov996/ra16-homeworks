// пример запроса

export default function SearchExample({text}) {
    return (
        <div className="example">
            <span className="example-text">Найдется все. Например, <a href="ya.ru">{text}</a> </span>
        </div>
    )
}

SearchExample.defaultProps = {
    text: 'фаза луны сегодня'
}