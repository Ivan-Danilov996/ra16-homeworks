//блок с виджетами 

import Wiget from './Wiget'

export default function Wigets({ weather, visited, tv, broadcast }) {
    return (
        <div className="wigets">
            <Wiget title='Погода'>
                <div className="weather-now">{weather.now}</div>
                <div className="weather-morning">Утром {weather.morning}</div>
                <div className="weather-day">днем {weather.day}</div>
            </Wiget>
            <Wiget title='Посещаемое'>
                <ul>
                    {visited.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </Wiget>
            <Wiget title='Карта Германии'>
                <li className="item">Расписания</li>
            </Wiget>
            <Wiget title='Телепрограмма'>
                <ul>
                    {tv.map((item, index) => <li key={index}>{item.time} {item.name} {item.chanel}</li>)}
                </ul>
            </Wiget>
            <Wiget title='Эфир'>
                <ul className='broadcast'>
                    {tv.map((item, index) => <li key={index}><img src={item.icon} className='broadcast-img' />{item.name} {item.chanel}</li>)}
                </ul>
            </Wiget>
        </div>
    )
}

Wigets.defaultProps = {
    weather: {
        now: +17,
        morning: +17,
        day: +20
    },
    visited: [
        'Недвижимость - о сталинках',
        'Маркет - люстры и светильники',
        'Авто.ру - привод 4х4 до 500 000'
    ],
    tv: [
        {
            time: '02:00',
            name: 'Джинглики',
            chanel: 'Карусель INT'
        },
        {
            time: '02:15',
            name: 'THT.Best',
            chanel: 'THT International'
        },
        {
            time: '02:25',
            name: 'Наедине со всеми',
            chanel: 'Первый'
        }
    ],
    broadcast: [
        {
            icon: 'https://banner2.cleanpng.com/20180202/qye/kisspng-light-flame-fire-combustion-blue-circle-flame-5a744c276ff8d2.3110440515175711114587.jpg',
            name: 'Управление как искусство',
            chanel: 'Успех'
        },
        {
            icon: 'https://banner2.cleanpng.com/20180202/qye/kisspng-light-flame-fire-combustion-blue-circle-flame-5a744c276ff8d2.3110440515175711114587.jpg',
            name: 'Ночь. Мир в это время',
            chanel: 'earthTV'
        },
        {
            icon: 'https://banner2.cleanpng.com/20180202/qye/kisspng-light-flame-fire-combustion-blue-circle-flame-5a744c276ff8d2.3110440515175711114587.jpg',
            name: 'Андрей Возн...',
            chanel: 'Совершенно секретно'
        }
    ]
}