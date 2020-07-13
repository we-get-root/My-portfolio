import React from 'react';
import learn from './../../../sours/learn.png';

function BlockEducation({ ...props }) {
  return (
    <>
      <div className={`--mbe__card-description --cd`}>
        <div className={`--cd__block-description`}>
          <h2>STATE UNIVERSITY CITY DUBNA</h2>
          <ul>
            <li>Государственный университет города Дубна</li>
            <li>Информатика и вычислительные технологии</li>
            <li>Неоконченное высшее</li>
            <li>факультет информатики</li>
          </ul>
          <div className={`--cd__link-them`}>
            <a href="https://plus.google.com/100637205508667411572"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
            <a href="https://twitter.com/unidubna_news"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/unidubnanews"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://www.uni-dubna.ru/"><i class="fa fa-share-alt-square" aria-hidden="true"></i></a>
            <a href="https://vk.com/unidubna_official"><i class="fa fa-vk" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className={`--cd__decor-column`}>
          <img src={learn} alt="decor-img" />
        </div>
      </div>
      <div className={`--mbe__card-description --cd`}>
        <div className={`--cd__block-description`}>
          <h2>SCHOOL 21 PROJECT SBERBANK</h2>
          <ul>
            <li>Школа программирования сбербанка</li>
            <li>Направление Web-Developer</li>
            <li>Не закончено</li>
          </ul>
          <div className={`--cd__link-them`}>
            <a href="https://www.instagram.com/21coding"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://twitter.com/21coding"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/21coding"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://21-school.ru/"><i class="fa fa-share-alt-square" aria-hidden="true"></i></a>
            <a href="https://vk.com/coding21"><i class="fa fa-vk" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className={`--cd__decor-column`}>
          <img src={learn} alt="decor-img" />
        </div>
      </div>
    </>
  )
}






export default BlockEducation;