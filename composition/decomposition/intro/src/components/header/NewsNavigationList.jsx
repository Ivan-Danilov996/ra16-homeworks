import NavigationItem from './NavigationItem'
import Date from './Date'

// навигация по новостям 

export default function NewsNavigationList({ navigationItems, date }) {

    return (
        <nav className="news__navigation">
            <ul className="news__navigation-items">
                {navigationItems.map((item, index) => <NavigationItem  key={index} item={item} />)}
            </ul>
            <Date date={date} />
        </nav>
    )
}

NewsNavigationList.defaultProps = {
    navigationItems: ['Сейчас в СМИ', 'в Германии', 'Рекомендуем'],
    date: '31 июля, среда 02:32'
}