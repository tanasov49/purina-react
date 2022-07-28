export default function PopupAddress(props) {
    const handleCardClick = () => props.onCardClick(props.card);
    return (
            <li className="address__option" onClick={handleCardClick} >{props.card['Address']}</li>
    )
}