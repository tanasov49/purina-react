export default function PopupAddress(props) {
    return (
        <div className={props.isOpen ? 'popup popup_opened' : 'popup'} onClick={props.onClose}>
            <button className="address-clients__close-btn" type='button' onClick={props.onClose}></button>
            <ul className="address">
            {props.cards.map((card, key) => (
            <li key={key} className="address__option">{card['Address']}</li>
            ))}
        </ul>
        </div>
    )
}