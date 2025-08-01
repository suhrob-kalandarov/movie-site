import './app.css'
import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import MovieList from '../movie-list/movie-list';
import MovieAddForm from '../movie-add-form/movie-add-form';

const App = () => {
    
const data = [
    { id: 1, name: 'Empire of Osman', viewers: 890, favourite: false },
    { id: 2, name: 'Ertugrul', viewers: 506, favourite: false },
    { id: 3, name: 'Oman', viewers: 989, favourite: true }
]

    return (
        <div className='app font-monospace'>
            <div className='content'>
                <AppInfo />
                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter/>
                </div>
                <MovieList data={data} />
                <MovieAddForm />
            </div>
        </div>
    ); 
};

export default App; 