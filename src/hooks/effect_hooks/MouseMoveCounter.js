import React, {useState, useEffect} from "react";

function MouseMoveCounter() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [moves, setMoves] = useState(0);
    const [cross, setCross] = useState(0);

    const handleMouseMove = (event) => {
        setX(event.clientX);
        setY(event.clientY);
    };

    useEffect(() => {
        if(x === y){
            setCross(x);
        }
    }, [x, y]);

    useEffect(() => {
        setMoves((moves) => moves + 1);
    }, [x, y]);


    useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);


    return (
        <div>
            <p>Mouse coordinates: ({x};{y})</p>
            <p>Moves: {moves}</p>
            <p>Postion of cross of two points: {cross} {cross}</p>
        </div>
    );


}

export default MouseMoveCounter;