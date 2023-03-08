import React from 'react'
import './Model.css'
const Model = (props) => {
    const onClose=()=>{
        console.log(props.val="inactive");
        props.val="inactive";
    }
    if(props?.element?.thumbnails){
        console.log(props.element);
        
  return (
    <div className={props.val}>  
    <div className='topCover'>
      <div className="topmodeldiv">
        <h3>{props.element.name}</h3>
        <p>{props.element.subHeading}</p>
      </div>
      <h4 onClick={onClose} className='closebtn'>X</h4>
      </div>
      <div className='imgcover'>
      <div className='imgmodeldiv'>
        <img src={props.element.img} alt="" />
      </div>
      <div className='thumbnailsDivImg'>
       <img src={props?.element?.thumbnails[1]} alt="" />
       <img src={props?.element?.thumbnails[2]} alt="" />
       <img src={props?.element?.thumbnails[3]} alt="" />
       <img src={props?.element?.thumbnails[4]} alt="" />
       <img src={props?.element?.thumbnails[5]} alt="" />
       <img src={props?.element?.thumbnails[0]} alt="" />
      </div>
      </div>
      <div className='rightmodeltopdiv'>
      </div>
      <div className='thumbnalsdiv'></div>
      <div className='coverPara'>
      <div className='ingredientsdiv'><p>Ingredients:{props.element.ingredients}</p></div>
      <div className="detailsdiv"><p>details:{props.element.details}</p></div>
      </div>
      <div><p>Calories: {props.element.calories}</p> </div>
      <div><p>Popularity: {props.element.popularity}</p></div>
      <div><p>Vegetarian: {props.element.veg}</p></div>
      <div><p>Origin: {props.element.origin}</p></div>
    </div>
  )
    }
}

export default Model
