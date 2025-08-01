import { Component } from 'react'
import './search-panel.css'

class SearchPanel extends Component {
  constructor(props){
    super(props)
    this.state = { term : '' }
  }

  listenTermHandler = (e)=> {
    const term = e.target.value
    this.setState({term})
    this.props.updateTermHandler(term.toLowerCase())
  }
  
  render(){
    return (
      <input 
        type="text"
        className="form-control search-input" 
        placeholder="Kinolarni qidirish"
        onChange={this.listenTermHandler}
        value={this.state.term}
      />
    )
  }
}

export default SearchPanel