//навигация по поиску
import Category from './Category'

export default function SearchNavigation({categories}) {
    return (
        <ul className='categories'>
            {categories.map((category, index) => <Category key={index} category={category}/>)}
        </ul>
    )
}

SearchNavigation.defaultProps = {
    categories: ['Видео','Картинки','Новости','Карты','Маркет','Переводчик','Эфир','Еще']
}