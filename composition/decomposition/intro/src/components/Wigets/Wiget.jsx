export default function Wiget(props) {
    return (
        <div className="wiget">
            <h2 className="wiget-title">{props.title}</h2>
            {props.children}
        </div>
    )
}