import React from 'react';
import "./PlayersList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Toaster } from 'react-hot-toast';
const PlayersList = (props) => {
    const {image, name, salary} = props.player;
    return (
        <div>
            <div className="shadow m-3 card card-player">
                <img src={image} className="player-image card-img-top" alt="" />
                
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Salary: {salary}</p>
                    <a onClick={()=>props.playerHandler(props.player)} className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /> Add Player</a>
                </div>
                <Toaster />
            </div>
        </div>
            
        
    );
};

export default PlayersList;