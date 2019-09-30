import React from "react";
import {Link} from "react-router-dom";

const Greeting = () => {
    return (
        <div>
            <h1>Приветствую тебя, Игрок!</h1>
            <div>
                <p>
                    <Link to={{
                        pathname: "/game",
                        state: {
                            playersQty: 1
                        }
                    }}>Играть одному</Link>
                </p>
                <p>
                    <Link to={{
                        pathname: "/game",
                        state: {
                            playersQty: 2
                        }
                    }}>Играть вдвоем</Link>
                </p>
            </div>
        </div>
    )
};

export default Greeting;