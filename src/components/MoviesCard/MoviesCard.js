import React from 'react';
import './MoviesCard.css';
import imageCard from '../../images/image-card.jpg';


const MoviesCard = () => {
  return (
    <div className='movies-card'>
      <img className='movies-card__img' alt ='изображение фильма' src={imageCard} />
      <div className='movies-card__content'>
        <div className='movies-card__content-text'>
          <h3 className='movies-card__content-text-title'>Бег это свобода</h3>
          <p className='movies-card__content-text-duration'>1ч 44м</p>
        </div>
        <input type='checkbox' className='movies-card__content-btn-like' />
      </div>
    </div>
  )
}

export default MoviesCard;