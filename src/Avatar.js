import React from 'react';
import './Avatar.css'
import 'tachyons';
import { Checkmark } from 'react-checkmark'


  
const Avatar = () => {
    return <div>

        <div className="alltext">
        <div className="line"></div>
        <div className="gigi">
        <h1 className="gi1">GIGI</h1>
        <h1 className="gi2">HADID</h1>
        <i class="fas fa-check"></i>
        <Checkmark className="check" />
        
        </div>
        <div className="text">


            <span className="mx">Fashion model,and television</span>
            <span className="mx">Personality who greated the </span>
            <span className="mx">pages of magzines such as Elle</span>
            <span className="mx">and Vogue the covers of Galore</span>
            <span className="mx">and Schon!</span>


            <hr className="hr"></hr>
        </div>
        </div>

        <div className="alldown">
        
        <div className="mainfrems">
        <div className="frems">
        <span className="photoshoot">PHOTO-SHOOT</span>
        <span className="pastwork">PAST-WORK</span>
        <div className="photogroup">
           
                <div className="groupone">
                <img className="p1" src={process.env.PUBLIC_URL + "/p1.jpg"}></img>
                <img className="p2" src={process.env.PUBLIC_URL + "/p2.jpg"}></img>
                <img className="p3" src={process.env.PUBLIC_URL + "/p3.jpg"}></img>
                <img className="p4" src={process.env.PUBLIC_URL + "/p4.jpg"}></img>
                </div>

                <div className="grouptwo">
                <img className="p1" src={process.env.PUBLIC_URL + "/p1.jpg"}></img>
                <img className="p2" src={process.env.PUBLIC_URL + "/p2.jpg"}></img>
                <img className="p3" src={process.env.PUBLIC_URL + "/p3.jpg"}></img>
                <img className="p4" src={process.env.PUBLIC_URL + "/p4.jpg"}></img>
                </div>
            </div>
        </div>
        </div>

       
        
        <div className="image">
        <img className="model" src={process.env.PUBLIC_URL + "/background.png"}></img>
        </div>
        </div>

        <span className="information">Height- 1.79m | Weight- 54kg | Age- 25 | Hair-color- Blonde | Eye-blue-green</span>



    </div>
}

export default Avatar;