export default function DbcCodes(props) {
    const attributes = props.cards;
    return (
        <ul className="dbc-codes">
            {attributes.map((items, index) => {
                return (
                    <li className="dbc-list" key={index}>
                        {Object.keys(items).map(key => {
                            if (items[key] === "0") {
                                return (
                                    <p className="dbc-list__text" key={key + index}>{key}</p>
                                        )
                        }
                        return null;
                        })}
                    </li>
                        )
            })}
        </ul>
    )
}