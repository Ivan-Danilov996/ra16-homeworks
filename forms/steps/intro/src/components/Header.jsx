export default function Header({ sumbitHandler, handlerChange, form}) {


    return (
        <header className="header">
            <form onSubmit={sumbitHandler}>
                <div className="column">
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input id="date" type="text" name="date" value={form.date} onChange={handlerChange} required maxLength='10'/>
                </div>
                <div className="column">
                    <label htmlFor="distance">Пройдено км</label>
                    <input id="distance" type="number" name="distance" value={form.distance} onChange={handlerChange} required/>
                </div>
                <div className="column">
                    <button className="btn" type="submit">ok</button>
                </div>
            </form>
        </header>
    )
}