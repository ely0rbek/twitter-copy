import './PostStatusFilter.css'
import React from 'react'
export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props)
        this.button = [
            { name: 'all', label: 'All' },
            { name: 'like', label: 'Like' },
        ]
    }
    render() {
        const buttons = this.button.map(({ name, label }) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button"
                    key={name}
                    className={`btn ${clazz}`}
                    onClick={()=>this.props.onFilterSelect(name)}
                >
                    {label}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}