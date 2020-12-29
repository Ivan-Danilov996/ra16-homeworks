export default function Listing({ items }) {

    const listing = items.map((item) => {
        if (!item.error_messages) {
            return (
                <div key={item.listing_id} className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN}></img>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title.length > 50 ? item.title.substr(0, 50) + '...' : item.title}</p>
                        {item.currency_code === "GBR"? <p className="item-price">{item.price} {item.currency_code}</p>: (<p className="item-price">{item.currency_code === "USD"? "$" : "€"}{item.price}</p>)}
                        
                        <p className={item.quantity <= 10? 'level-low item-quantity' : (item.quantity <= 20? 'level-medium item-quantity' : 'level-high item-quantity')}>{item.quantity} left</p>
                    </div>
                </div>
            )
        }
        return null
    })

    return (
        <div className="item-list">
            {listing}
        </div>
    )
}
