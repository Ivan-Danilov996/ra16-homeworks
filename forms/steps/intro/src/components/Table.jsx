export default function Table({ steps, deleteStep, editStep }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Дата (ДД.ММ.ГГ)</th>
                    <th>Пройдено км</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {
                    steps.sort((a, b) => {
                        const dateA = new Date(a.date).getTime();
                        const dateB = new Date(b.date).getTime();
                        return dateB - dateA;
                    })
                        .map(step => (
                            <tr key={step.id}>
                                <td>{step.date}</td>
                                <td>{step.distance}</td>
                                <td className="events">
                                    <div className="edit" onClick={() => editStep(step.id)}>✎</div>
                                    <div className="delete" onClick={() => deleteStep(step.id)}>✘</div>
                                </td>
                            </tr>
                        ))
                }
                {/* {steps.map(step => 
                <tr key={step.id}>
                    <td>{step.date}</td>
                    <td>{step.distance}</td>
                    <td className="events">
                        <div className="edit" onClick={() => editStep(step.id)}>✎</div>
                        <div className="delete" onClick={() => deleteStep(step.id)}>✘</div>
                    </td>
                </tr>)} */}
            </tbody>
        </table>
    )

}