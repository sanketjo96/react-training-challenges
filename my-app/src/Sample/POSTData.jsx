import React, { Component } from 'react'
import axios from 'axios';


export class POSTData extends Component {
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

    updateData = (postToUpdate) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
              id: postToUpdate.id,
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
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
                                    <li key={post.id}>
                                        {post.title}
                                        <button onClick={() => this.updateData(post)}>Update Data</button>
                                    </li>

                                ))}
                            </ol>
                        ) 
                        : <>No Data</>)
                }
            </>
        )
    }
}

export default POSTData