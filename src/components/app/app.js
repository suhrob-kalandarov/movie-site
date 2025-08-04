import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './app.css'
import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import MovieList from '../movie-list/movie-list';
import MovieAddForm from '../movie-add-form/movie-add-form';


const App = () => {
    
    const [data, setData] = useState(arrData)

    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('all')

    const onDelete = id => {
        setData(data.filter(c => c.id !== id))
    }

    const addForm = item => {
        const newItem = { id: uuidv4(), name: item.name, viewers: item.viewers, favourite: false, like: false}
        setData([...data, newItem])
    }

    const onToggleProp = (id, prop) => {
        setData(data.map(item => {
            if(item.id === id) {
                return { ...item, [prop]: !item[prop] }
            }
            return item
        }))
    }

    const searchHandler = (arr, term) => {
        if(term === 0) return arr
        return arr.filter(item=> item.name.toLowerCase().indexOf(term) > -1)
    }

    const filterHandler = (arr, filter) => {
        switch (filter) {
            case 'popular':
                return arr.filter(c => c.like)
            case 'mostViewers':
                 return arr.filter(c => c.viewers >= 800)
            default: return arr
        }
    }

    const updateTermHandler = term => {
        setTerm(term)
    }

    const updateFilterHandler = filter => {
        setFilter(filter)
    }

    return (
        <div className='app font-monospace'>
            <div className='content'>
                <AppInfo allMoviesCount={data.length} favouriteMoviesCount={data.filter(c => c.favourite).length} />
                <div className='search-panel'>
                    <SearchPanel updateTermHandler = {updateTermHandler}/>
                    <AppFilter filter={filter} updateFilterHandler = {updateFilterHandler}/>
                </div>
                <MovieList data={filterHandler(searchHandler(data, term), filter)} onDelete={onDelete} onToggleProp={onToggleProp} />
                <MovieAddForm addForm={addForm}/>
             </div>
        </div>
    )
}

export default App; 

const arrData = [
    { id: 1, name: 'Empire of Osman', viewers: 890, favourite: false },
    { id: 2, name: 'Ertugrul', viewers: 506, favourite: false },
    { id: 3, name: 'Oman', viewers: 989, favourite: true }
]