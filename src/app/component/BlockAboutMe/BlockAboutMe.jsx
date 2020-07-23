import React from 'react';

function BlockAboutMe({ currentBlockAboutMe, ...props }) {
  return (
    <>
      <div ref={currentBlockAboutMe} className={`--mba__header-block-about --hba`}>
        <div className={`--hba__wrapper-my-photo`}></div>
        <div className={`--hba__wrapper-description`}>
          <h2>dmitry tretyakov</h2>
          <ul>
            <li>Родился 15 марта 1998г. (22 года)</li>
            <li>Проживаю в Москва</li>
            <li>Желаемая должность Front-end developer</li>
            <li>Готов работать удаленно</li>
          </ul>
        </div>
      </div>

      <div className={`--mba__row-text-description`}>
        <h2>ABOUT ME</h2>
        <p>Вкратце о себе: начинал самостоятельное изучения веб-разработки 5 лет назад в ВУЗе. Уже тогда метил в профессию Web-development. Утроился на первую тематическую работу в конце 2018 года. Это был средняя компанию по разработке и сопровождении сайтов разной сложности, начиная от простых лендингов заканчивая интернет магазинами. Люблю посещать различные открытые метапы по IT, узнавать что то новое, делится и получать опыт. Не боюсь и не ленюсь решать сложные задачи, знаю как подойти к вопросу и в каком направлении копать, но это уже скорее личные качества о которых вы можете прочесть ниже.</p>
      </div>
      <div className={`--mba__row-text-description`}>
        <h2>PERSONAL QUALITY</h2>
        <p>Коммуникабелен. Стрессоустойчив. Общителен. Быстро разбираюсь в чем то новом. Не люблю стоять на месте в развитии. Умею слушать и прислушиваться. Проныра перфекционист во всем, люблю когда и внутри и снаружи все хорошо. Очень спокоен. Технический склад ума. Умею мыслить масштабно, и большие задачи разделать на много маленьких. Самоорганизован. Не говорю, а делаю, но если нужно могу и поговорить) Позитивен, и люблю печеньки!</p>
      </div>
      <div className={`--mba__row-text-description`}>
        <h2>WHAT IS THIS PAGE?</h2>
        <p>Эта страница, покажет и расскажет что я умею. Данное приложение собрано на чистом React + Redux. Дизайн сделан по типу газетного чтива, чистая информация и ничего лишнего. На этой странице всегда актуальная и свежая информация обо мне. Так что если у вас есть ко мне предложение, переходите в раздел контактов, там вы найдете информацию как со мной связаться. А пока спасибо за внимание!</p>
      </div>
      <div className={`--mba__row-text-description`}>
        <h2>JUST LOREM FOR VISIBLE SCROLL</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, soluta suscipit ratione dolores esse voluptate ea illo aut quo sint odit voluptatibus eum accusantium itaque, ullam culpa, unde pariatur doloribus.Labore nihil ullam, sequi impedit consequatur, expedita accusamus perferendis sapiente commodi repellat error? Odio, sapiente tempore? Aspernatur quos labore delectus accusamus quis, illum omnis rerum quisquam pariatur fuga quia vitae?</p>
      </div>
    </>
  )
}

export default BlockAboutMe;