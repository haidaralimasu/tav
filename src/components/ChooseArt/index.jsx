import './ChooseArt.css';
import React from 'react';

function ChooseArt({artList, selectedArt, setSelectedArt}) {
  
  return (
    <div className="ChooseArt">
        <div className="ChooseArt__title">Choose one TAV art to be <br />burnt for compensation</div>
        <div className="ChooseArt__row">
            {artList.map((item, index)=>(
                <>
                {selectedArt===index?
                    <div className="ChooseArt__ArtColumn ChooseArt__selectedColumn">
                        <div className="ChooseArt__button ChooseArt__selectedButton">Burn</div>
                        <img src={item.image} alt={`TAV ${item.id}`} className="ChooseArt__image"/>
                        <em className="ChooseArt__id ChooseArt__selectedId">TAV #{item.id}</em>
                    </div>
                    :(<div className="ChooseArt__ArtColumn" onClick={()=>setSelectedArt(index)}>
                        <div className="ChooseArt__button">Burn</div>
                        <img src={item.image} alt={`TAV ${item.id}`} className="ChooseArt__image"/>
                        <em className="ChooseArt__id">TAV #{item.id}</em>
                    </div>)
                }
                </>
            ))}
        </div>
    </div>
  );
}

export default ChooseArt;
