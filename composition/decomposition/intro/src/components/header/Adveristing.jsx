//рекламный виджет

export default function Adveristing({ img, title, text }) {

    return (
        <div className="advertising">
            <div className="logo">
                <img src={img} alt="" />
            </div>
            <div className="advertising-title">{title}</div>
            <div className="advertising-text">{text}</div>
        </div>
    )
}

Adveristing.defaultProps = {
    img: 'https://areait.com.au/wp-content/uploads/2017/12/circle-png-circle-icon-1600.png',
    title: 'Работа над ошибками',
    text: 'Смотрите на яндексе и запоминайте'
}