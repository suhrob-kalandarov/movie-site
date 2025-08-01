import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './app.css'
import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import MovieList from '../movie-list/movie-list';
import MovieAddForm from '../movie-add-form/movie-add-form';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: 1, name: 'Empire of Osman', viewers: 890, favourite: false, like: false},
                { id: 2, name: 'Ertugrul', viewers: 506, favourite: false, like: false },
                { id: 3, name: 'Oman', viewers: 989, favourite: false, like: false }
            ],
            term:'',
            filter: 'all'
        }
    }
    
    onDelete = id => {
        this.setState(({data}) => ({
            data: data.filter(c=> c.id !==id)
        }))
    }

    addForm = (item) => {
        const newItem = { id: uuidv4(), name: item.name, viewers: item.viewers, favourite: false, like: false}
        this.setState(({ data }) => ({
            data: [...data, newItem]
        }));
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    searchHnadler = (arr, term) => {
        if(term === 0) return arr
        return arr.filter(item=> item.name.toLowerCase().indexOf(term) > -1)
    }

    filterHandler = (arr, filter) => {
        switch (filter) {
            case 'popular':
                return arr.filter(c => c.like)
            case 'mostViewers':
                 return arr.filter(c => c.viewers >= 800)
            default: return arr
        }
    }

    updateTermHandler = term => this.setState({term})

    updateFilterHandler = filter => this.setState({filter})
    
    render(){
        const {data, term, filter} = this.state
        const allMoviesCount = data.length
        const favouriteMoviesCount = data.filter(c => c.favourite).length
        const visibleData = this.filterHandler(this.searchHnadler(data, term), filter)

        return (
            <div className='app font-monospace'>
                <div className='content'>
                    <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount} />
                    <div className='search-panel'>
                        <SearchPanel updateTermHandler = {this.updateTermHandler}/>
                        <AppFilter filter={filter} updateFilterHandler = {this.updateFilterHandler}/>
                    </div>
                    <MovieList data={visibleData} onDelete={this.onDelete} onToggleProp={this.onToggleProp} />
                    <MovieAddForm addForm={this.addForm}/>
                 </div>
            </div>
        ); 
    }
};

export default App; 



// const App = () => {
    
// const data = [
//     { id: 1, name: 'Empire of Osman', viewers: 890, favourite: false },
//     { id: 2, name: 'Ertugrul', viewers: 506, favourite: false },
//     { id: 3, name: 'Oman', viewers: 989, favourite: true }
// ]

// const onDelete = id => {

// }

//     return (
//         <div className='app font-monospace'>
//             <div className='content'>
//                 <AppInfo />
//                 <div className='search-panel'>
//                     <SearchPanel />
//                     <AppFilter/>
//                 </div>
//                 <MovieList data={data} onDelete={onDelete} />
//                 <MovieAddForm />
//             </div>
//         </div>
//     ); 
// };

// export default App; 