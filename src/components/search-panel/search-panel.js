import { useState } from 'react'
import './search-panel.css'

const SearchPanel = ({updateTermHandler}) => {
  const [term, setTerm] = useState('')

  const listenTermHandler = (e)=> {
    const term = e.target.value.toLowerCase()
    setTerm(term)
    updateTermHandler(term.toLowerCase())
  }

  return <input 
          type="text"
          className="form-control search-input" 
          placeholder="Kinolarni qidirish"
          onChange={listenTermHandler}
          value={term}
        />
}

export default SearchPanel