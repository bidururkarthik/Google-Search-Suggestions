// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {description, deleteinformation, database} = props
  const {id, suggestion} = description

  const deleteclick = () => {
    deleteinformation(suggestion)
  }

  return (
    <li className="relateddescriptioncontainer">
      <p className="relateddescription">{suggestion}</p>
      <button type="button" className="button" onClick={deleteclick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
