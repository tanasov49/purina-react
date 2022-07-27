export default function DbcCodes(props) {
    const attributes = props.cards;
    return (
        <ul className="dbc-codes">
            {attributes.map((items, index) => {
  return (
    <li className="dbc-list" key={index}>
    {Object.keys(items).map((key) => {
      return (
        <p className="dbc-list__text" key={key + index}>{key}:{items[key]}</p>
      )
    })}
    </li>
  )
})}
        </ul>
    )

}