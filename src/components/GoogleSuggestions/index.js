// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {descriptionInput: '', deleteinformation: ''}

  Enteruserdescription = event => {
    const {descriptionInput} = this.state

    this.setState(each => ({
      descriptionInput: event.target.value,
    }))
  }

  onDelete = suggestion => {
    this.setState({descriptionInput: suggestion})
  }

  render() {
    const {descriptionInput} = this.state
    const {suggestionsList} = this.props
    const fiterrelateddata = suggestionsList.filter(eachsuggetion =>
      eachsuggetion.suggestion
        .toLowerCase()
        .includes(descriptionInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googleImage"
          />

          <div className="searchcontainer">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="searchicon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="searchInput"
                onChange={this.Enteruserdescription}
                value={descriptionInput}
              />
            </div>

            <ul>
              {fiterrelateddata.map(each => (
                <SuggestionItem
                  description={each}
                  key={each.id}
                  deleteinformation={this.onDelete}
                  database={suggestionsList}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
