import './movie-list-item.css'
import { Component } from 'react'

class MovieListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {favourite: false, like: true}
    }

    onFavourite = () => {
        this.setState(({favourite}) =>({
            favourite: !favourite
        }))
    }

    onLike = () => {
        this.setState(({like}) =>({
            like: !like
        }))
    }

    render() {
        const {name, viewers, favourite, like, onDelete, onToggleFavourite, onToggleLike} = this.props

        return (
            <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}> 
            <span onClick={onToggleLike} className='list-group-item-label'>{name}</span>
            <input type='number' className='list-group-item-input' defaultValue={viewers}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" className='btn-cookie btn-sm' onClick={onToggleFavourite}>
                    <i className="fas fa-heart"></i>
                </button>
                <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star" onClick={onToggleLike}></i>
                </div>
            </li>
        )
    }
}

export default MovieListItem