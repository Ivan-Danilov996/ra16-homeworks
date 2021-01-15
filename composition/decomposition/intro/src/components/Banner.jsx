export default function Banner({img}) {
    return (
        <div className="banner">
            <img src={img} alt=""/>
        </div>
    )
}

Banner.defaultProps = {
    img: 'ya.ru'
}