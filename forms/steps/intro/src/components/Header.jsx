export default function Header({ sumbitHandler, handlerChange, form}) {


    return (
        <header className="header">
            <form onSubmit={sumbitHandler}>
                <div className="column">
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input id="date" type="text" name="date" value={form.date} onChange={handlerChange} />
                </div>
                <div className="column">
                    <label htmlFor="distance">Пройдено км</label>
                    <input id="distance" type="text" name="distance" value={form.distance} onChange={handlerChange} />
                </div>
                <div className="column">
                    <button className="btn" type="submit">ok</button>
                </div>
            </form>
        </header>
    )
}