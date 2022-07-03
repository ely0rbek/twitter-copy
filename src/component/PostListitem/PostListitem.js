import React from 'react';
import './PostListitem.css'
export default class PostListitem extends React.Component {
    render() {
        const {label,removepost,onToggleImportant,onToggleLiked,important,like}=this.props
        // const {important,like}=this.state
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return (
            <li className={classNames} >
                <span className="app-list-item-label" onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star  btn-sm" type="button" onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm" type="button" onClick={removepost}>
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </li>
        )
    }
}

