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
        </div>
        <div className={`--cd__decor-column`}>
          <img src={learn} alt="decor-img"/>
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
        </div>
        <div className={`--cd__decor-column`}>
          <img src={learn} alt="decor-img"/>
        </div>
      </div>
    </>
  )
}

export default BlockEducation;