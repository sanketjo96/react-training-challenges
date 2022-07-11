import React, { Component } from 'react'
import axios from 'axios';

/**
 * 1. Note usdage of https://jsonplaceholder.typicode.com/
 * 2. Note setState under promise success
 * 3. Error handling
 */
export class GETData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            err: false
        }
    }


    loadData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            const { data } = res
            this.setState((prev) => ({ ...prev, posts: data }))
        }).catch(e => {
            this.setState((prev) => ({ ...prev, err: true }))
            console.log(e)
        })
    }

    render() {
        return (
            <>
                <button onClick={this.loadData}>Load Data</button>
                {
                    this.state.err ? <>API Err</> : (
                        this.state.posts.length 
                        ? (
                            <ol>
                                {this.state.posts.map(post => (
                                    <li key={post.id}>{post.title}</li>
                                ))}
                            </ol>
                        ) 
                        : <>No Data</>)
                }
            </>
        )
    }
}

export default GETData