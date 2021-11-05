//using keys and showing that keys must only be unique among siblings
import React from "react";
import "./../App.css";

//Example of input data
// const posts = [
//     {id: 1, title: "Football", content: "Smth about football..."},
//     {id: 2, title: "Basketball", content: "Smth about basketball..."},
//     {id: 3, title: "Tennis", content: "Smth about tennis..."},
// ];


function Blog(props){
    const posts = props.posts;

    const sidebar = (
        <ul>
            {props.posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
    );

    const content = posts.map((post) => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <hr class="hr-dashed"/>
        </div>
    );

    return (<div>
        {sidebar}
        <hr />
        {content}
    </div>);
}

export default Blog;