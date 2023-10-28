import React from 'react';

const PlayersSelected = (props) => {
    return (
        <div>
            <div className="shadow mt-5 card card-player">
                <div className="card-body ">
                    <h3 className="card-title">Selected Players</h3>
                    <p className="card-text">Total Players:{props.cart.length}</p>
                    {props.cart.map(player=> 
                        <div className="card-body ">
                            <h5>{props.cart.indexOf(player)+1}. Name:{player.name}</h5>
                            <p>Salary{player.salary}</p>
                        </div>
                        )}
                    <h5>Budget: {props.cart.reduce((sum, player) => sum + Number(player.salary.slice(1, player.salary.length)), 0)}</h5>
                </div>
            </div>
        </div>
    );
};

export default PlayersSelected;