import React from 'react';
import classes from './details.module.css';
import { useLocation } from "react-router-dom";

function Details(props){

    const location = useLocation();
    console.log(location);

    return (
        <div className={classes.detailWrapper}>
            <div className={classes.product_img}>
                
            </div>
            <div>
                <img className={classes.list_img} src={location.state.image} alt={location.state.name} />
                <h1>{location.state.name}</h1>
                <h4>{location.state.short_description}</h4>

                { location.state.bullet_description.map((bullet) => (
                    <p>{bullet}</p>
                ))}
                

                <h5>Price: {location.state.cost}</h5>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

// class Details extends React.Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//         // this.state = {
//         //     data: this.props.location.state,
//         // }
//     }

//     render(){
//         return (
            // <div>
            //     <div className={classes.product_img}>
                    
            //     </div>
            //     <div>
            //         <h1>Car Name</h1>
            //         <h4>Short Desc</h4>
            //         <p>Bullet Desc</p>

            //         <h5>Price: </h5>
            //         <button>Add to Cart</button>
            //     </div>
            // </div>
//         );
//     }
// }

export default Details;