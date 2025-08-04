import './app-filter.css'

const AppFilter = ({filter, updateFilterHandler}) => {
    const btnsArr = [
        { name: 'all', label: 'Barcha kinolar'},
        { name: 'popular', label: 'Mashhur kinolar'},
        { name: 'mostViewers', label: "Eng ko'p ko'rilgan kinolar"}
    ]

    return <div className="btn-group">
        {btnsArr.map(btn => (
             <button 
             type="button" 
             key={btn.name} 
             className= {`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
             onClick={() => updateFilterHandler(btn.name)}
             >
                {btn.label}
            </button>
        ))}
    </div>;
}

export default AppFilter; 