import NewsNavigationList from './NewsNavigationList'
import NewsList from './NewsList'
import WigetCurrency from './WigetCurrency'

//главные новости

export default function News() {
    return (
        <section className="news">
            <NewsNavigationList />
            <NewsList />
            <WigetCurrency />
        </section>
    )
}