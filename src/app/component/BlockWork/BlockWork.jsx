import React from 'react';
import experience from './../../../sours/experience.png';

function BlockWork({ ...props }) {
  console.log('render')
  return (
    <>
      <div className={`--mbw__card-description --cd`}>
        <div className={`--cd__block-description`}>
          <h2>web-agency edward mccain</h2>
          <ul>
            <li>Разработка сайтов под ключ</li>
            <li>Должность Front-end developer</li>
            <li>Разработка Front-end части по ТЗ. Сопровождение</li>
            <li>Работал удаленно</li>
            <li></li>
          </ul>
          <div className={`--cd__link-them`}>
            <a href="https://www.instagram.com/edmccain.wa"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
            <a href="https://twitter.com/em__wa"><i class="fa fa-twitter-square" aria-hidden="true"></i> </a>
            <a href="https://www.facebook.com/edmccain.wa"><i class="fa fa-facebook-square" aria-hidden="true"></i> </a>
            <a href="https://edwardmccain.ru/"><i class="fa fa-share-alt-square" aria-hidden="true"></i> </a>
            <a href="https://vk.com/ed_mccain_wa"><i class="fa fa-vk" aria-hidden="true"></i> </a>
          </div>
        </div>
        <div className={`--cd__decor-column`}>
          <img src={experience} alt="decor-img" />
        </div>
      </div>
      <div className={`--mbw__card-description --cd`}>
        <div className={`--cd__block-description`}>
          <h2>OOO HELPYOU MOSKOW</h2>
          <ul>
            <li>Не профильный опыт связанный с отделкой жилых помещений </li>
            <li>Ответственный на обьектах компании</li>
            <li>Заключение договоров и замер обьектов</li>
            <li>Организация работы, составление ТЗ, контроль качества</li>
          </ul>
        </div>
        <div className={`--cd__link-them`}>
          <a href="https://google.com"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
          <a href="https://google.com"><i class="fa fa-twitter-square" aria-hidden="true"></i> </a>
          <a href="https://google.com"><i class="fa fa-facebook-square" aria-hidden="true"></i> </a>
          <a href="https://google.com"><i class="fa fa-share-alt-square" aria-hidden="true"></i> </a>
          <a href="https://google.com"><i class="fa fa-vk" aria-hidden="true"></i></a>
        </div>
        <div className={`--cd__decor-column`}>
          <img src={experience} alt="decor-img" />
        </div>
      </div>
    </>
  )
}




export default BlockWork;