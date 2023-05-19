import {Component} from 'react'
import SuggestionsItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onInputValue = event => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    })
  }

  onArrowSelect = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const newSuggestionsList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-image"
          alt="google logo"
        />
        <div className="search-container">
          <div className="search-area-container">
            <img
              className="search"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              onChange={this.onInputValue}
              placeholder="Search Google"
              type="search"
              className="search-input"
              value={searchInput}
            />
          </div>
          <ul className="suggestion-list-container">
            {newSuggestionsList.map(eachItem => (
              <SuggestionsItem
                onArrowSelect={this.onArrowSelect}
                eachItem={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
