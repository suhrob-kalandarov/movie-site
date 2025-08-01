import { Component } from 'react'
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
                { id: 1, name: 'Empire of Osman', viewers: 890, favourite: false },
                { id: 2, name: 'Ertugrul', viewers: 506, favourite: false },
                { id: 3, name: 'Oman', viewers: 989, favourite: true }
            ]
        }
    }
    
    onDelete = id => {
        this.setState(({data}) => ({
            data: data.filter(c=> c.id !==id)
        }))
    }

    addForm = (item) => {
        this.setState(({ data }) => ({
            data: [...data, item]
        }));
    }

    render(){
        const {data} = this.state

        return (
            <div className='app font-monospace'>
                <div className='content'>
                    <AppInfo />
                    <div className='search-panel'>
                        <SearchPanel />
                        <AppFilter/>
                    </div>
                    <MovieList data={data} onDelete={this.onDelete} />
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