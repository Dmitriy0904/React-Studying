import React from "react";
import "./../../App.css"


function FancyBorder(props){
    return (
        <div className={"fancy-border fancy-border-" + props.color}>
            {props.children}
        </div>
    );
}


function Dialog(props){
    return <FancyBorder color="blue">
        <h3>{props.title}</h3>
        <p>{props.message}</p>
    </FancyBorder>
}


function WelcomeDialog(){
    return <Dialog 
        title="Welcome"
        message="Hello...."
    />
}


function IntroductionDialog(){
    return <Dialog 
        title="Introduction"
        message="This is some introduction...."
    />
}


function QuestionDialog(){
    return <Dialog 
        title="Question"
        message="This is some question..."
    />
}


function App(){
    return (
        <div>
            <WelcomeDialog />
            <IntroductionDialog />
            <QuestionDialog />
        </div>
    );
}

export default App;