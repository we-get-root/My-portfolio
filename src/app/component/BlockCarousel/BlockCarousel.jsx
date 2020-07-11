import React, { useState } from 'react';


function BlockCarousel({ imageCarousel, ...props }) {
  const [currentPositionItem, setCurrentPositionItem] = useState(0)
  return (
    <>
      <div className={`--mdp__wrapper-carousel-item --wci`} style={{ left: `-${currentPositionItem}%` }}>
        {imageCarousel.map((array, index) => (
          <div key={index} className={`--wci__page-carousel --pc`} >
            {array.map((value, index) => (
              <div key={index} className={`--pc__frame-card --fc`}>
                <div className={`--fc__main-card`}>
                  <img src={value} alt="work img" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={`--mdp__block-button-carousel`}>
        <button data-button-carousel="one" type="button" onClick={() => setCurrentPositionItem(0)} />
        <button data-button-carousel="two" type="button" onClick={() => setCurrentPositionItem(100)} />
        <button data-button-carousel="thr" type="button" onClick={() => setCurrentPositionItem(200)} />
      </div>
    </>
  )
}

export default BlockCarousel;