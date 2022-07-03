import AppHeader from "../AppHeader/AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import SearchPanel from "../SearchPanel/SearchPanel";
import './App.css'
import React, { Component } from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [
                { label: 'React bu Javascript kutubxonasi', important: false,like:false, id: 1 },
                { label: 'VueJS javascript frameworki', important: false, like:false,id: 2 },
                { label: 'Front end dasturchi quroli bu Javascript ', important: false,like:false, id: 3 },
            ],
            term:'',
            filter:'all'
        };
        this.maxId = 4;
        this.onToggleLiked=this.onToggleLiked.bind(this)
        this.onToggleImportant=this.onToggleImportant.bind(this)
    }
    removepost = (id) => {
        this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
    };
    addItem = (body) => {
        let newObj = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ posts }) => {
            const newArr = [...posts, newObj];
            return {
                posts: newArr
            }
        })
    }
    onToggleImportant(id){
        this.setState( ({ posts }) => {
            const index=posts.findIndex(elem => elem.id===id);
            const oldItem=posts[index];
            const newItem={...oldItem,important: !oldItem.important}
            const newArr=[...posts.slice(0,index),newItem,...posts.slice(index+1)];
            return{
                posts:newArr
            }
        })
    }
    onToggleLiked(id){
        this.setState( ({ posts }) => {
            const index=posts.findIndex(elem => elem.id===id);
            const oldItem=posts[index];
            const newItem={...oldItem,like: !oldItem.like}
            const newArr=[...posts.slice(0,index),newItem,...posts.slice(index+1)];
            return{
                posts:newArr
            }
        })
    }
    onLiked=()=>{
        this.setState({ posts: this.state.posts.filter((post) => post.like) });
    }
    onAll=()=>{
        this.setState( ({posts})=>{
            const newArr=[...posts];
            return{
                posts:newArr
            }
        })
    }
    searchPost=(items,term)=>{
        if(term.length===0){
            return items
        }
        return items.filter(item=>{
            return item.label.indexOf(term) > -1
        })
    }
    onUpdateSearch=(term)=>{
        this.setState({term})
    }
    filterPost=(items,filter)=>{
        if(filter=='like'){
            return items.filter(item=>item.like)
        }
        else{
            return items;
        }
    }
    onFilterSelect=(filter)=>{
        this.setState({filter})
    }
    render() {
        const { posts,term,filter} = this.state;
        const liked=posts.filter(item=> item.like).length;
        const allPosts=posts.length;
        // const visiblePost=this.searchPost(posts,term)
        const visiblePost=this.filterPost(this.searchPost(posts,term),filter)
        return (
            <div className="app">
                <AppHeader liked={liked} allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList
                    posts={visiblePost}
                    removepost={id => this.removepost(id)}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem} />
            </div>
        );
    }
}
// onLiked={this.onLiked} onAll={this.onAll}