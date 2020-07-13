import React from 'react';
import experience from './../../../sours/experience.png';

function BlockWork({ ...props }) {
  return (
    <>
      <div className={`--mbw__card-description --cd`}>
        <div className={`--cd__block-description`}>
          <h2>studio 17 web-design and developer</h2>
          <ul>
            <li>Разработка сайтов под ключ</li>
            <li>Должность младший разработчик</li>
            <li>Разработка Front-end части по ТЗ</li>
            <li>Сборка и подготовка проекта</li>
          </ul>
        </div>
        <div className={`--cd__decor-column`}>
          <img src={experience} alt="decor-img" />
        </div>
      </div>
      <div className={`--mbw__card-description --cd`}>
        <div className={`--cd__block-description`}>
          <h2>web-agency edward mccain</h2>
          <ul>
            <li>Разработка сайтов под ключ</li>
            <li>Должность Front-end developer</li>
            <li>Разработка Front-end части по ТЗ. Сопровождение</li>
            <li>Работал удаленно</li>
          </ul>
        </div>
        <div className={`--cd__decor-column`}>
          <img src={experience} alt="decor-img" />
        </div>
      </div>
      <div className={`--mbw__card-description --cd`}>
        <div className={`--cd__block-description`}>
          <h2>Smart </h2>
          <ul>
            <li>Не профильный опыт связанный с отделкой жилых помещений </li>
            <li>Ответственный на обьектах компании</li>
            <li>Организация работы, составление ТЗ, контроль качества</li>
            <li>Заключение договоров и замер обьектов</li>
          </ul>
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
        <div className={`--cd__decor-column`}>
          <img src={experience} alt="decor-img" />
        </div>
      </div>
    </>
  )
}

export default BlockWork;