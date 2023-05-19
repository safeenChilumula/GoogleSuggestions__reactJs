import './index.css'

const SuggestionsItem = props => {
  const {eachItem, onArrowSelect} = props
  const {suggestion} = eachItem

  const onClickArrow = () => {
    onArrowSelect(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <img
        onClick={onClickArrow}
        alt="arrow"
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionsItem
