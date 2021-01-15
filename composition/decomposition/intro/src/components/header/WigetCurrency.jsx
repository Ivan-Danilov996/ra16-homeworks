import Currency from './Currency'

//виджет с курсами 

export default function WigetCurrency({ currencys }) {

    return (
        <div className="wiget-currency">
            <ul className="currencys">
                {currencys.map((currency, index) => <Currency key={index} currency={currency} />)}
            </ul>
        </div>
    )
}

WigetCurrency.defaultProps = {
    currencys: ['USD MOEX 63,52', 'EUR MOEX 70,86', 'НЕФТЬ 64,90']
}