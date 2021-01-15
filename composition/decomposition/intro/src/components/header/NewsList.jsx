import NewsItem from './NewsItem'

//список новостей

export default function NewsList() {

    const newsItem = [
        'Путин упростил получение автомобильных номеров', 
        'В команде Зеленского раскрыли план реформ на Украине',
        'Турпомощь прокомметировала гибель десятков россиян в Анталье',
        'Суд закрыл дело Демпартии США против России',
        'На Украине призвали создать ракеты для удара по Москве']

    return (
        <ul className="news-list">
            {newsItem.map((item, index) => <NewsItem key={index} item={item}/>)}
        </ul>
    )
}