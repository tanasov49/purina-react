export default function DbcCodes({card, onClose}) {
    return (
        <div className="dbc-list" onClick={onClose}>
            <p className="dbc-list__text">{card ? card["Address"]:''}</p>
            {Object.keys(card).map((dbc, key) => {
                if (card[dbc] === "0") {
                    return (
                        <p className="dbc-list__text" key={key}>{card ? dbc:''}</p>
                    )
                }
            })}
        </div>
    )
}