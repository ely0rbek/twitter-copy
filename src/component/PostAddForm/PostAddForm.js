import { createRef } from 'react'
import './PostAddForm.css'
import React from 'react'
export default class PostAddForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputRef:'',
            onAdd:props.onAdd
        }
    }
    zaybal=()=>{
        this.setState({inputRef:''})
        if(!this.state.inputRef){
            alert(`Siz bo'sh post kiritmoqchisiz!`)
            return false;
        }
        else {
            return this.props.onAdd(this.state.inputRef)
            
        }
    }
    render(){
        return (
                    <div className="bottom-panel d-flex">
                        <input
                            type="text"
                            placeholder="What are you thinking about?"
                            className="form-control new-post-label"
                            onChange={(e)=> this.setState({inputRef:e.target.value})}
                            value={this.state.inputRef}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-secondary"
                            onClick={this.zaybal}
                        >Add posts</button>
                    </div>
                )
    }
}