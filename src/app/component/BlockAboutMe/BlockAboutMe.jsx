import React from 'react';

function BlockAboutMe({ currentBlockAboutMe, ...props }) {
  return (
    <>
      <div ref={currentBlockAboutMe} className={`--mbd__header-block-about --hba`}>
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

      <div className={`--mbd__row-text-description`}>
        <h2>ABOUT ME</h2>
        <p>Вкратце о себе: начинал самостоятельное изучения веб-разработки 5 лет назад в ВУЗе. До этого момента это было больше как хобби, которым я занимался в свободно время от основной работы. Разрабатывал небольшие сайты для знакомых, иногда брал заказы на фриланс биржах. Сейчас я понимаю, что в моих знаниях есть пробелы, которые тяжело восполнить на домашних проектах. Хочу разрабатывать приложения в команде, развиваться и расти профессионально.</p>
      </div>
      <div className={`--mbd__row-text-description`}>
        <h2>PERSONAL QUALITY</h2>
        <p>Коммуникабелен. Стрессоустойчив. Общителен. Быстро разбираюсь в чем то новом. Не люблю стоять на месте в развитии. Умею слушать и прислушиваться. Проныра перфекционист во всем, люблю когда и внутри и снаружи все хорошо. Очень спокоен. Технический склад ума. Умею мыслить масштабно, и большие задачи разделать на много маленьких. Самоорганизован. Не говорю, а делаю, но если нужно могу и поговорить) Позитивен, и люблю печеньки!</p>
      </div>
      <div className={`--mbd__row-text-description`}>
        <h2>WHAT IS THIS PAGE?</h2>
        <p>Эта страница, покажет и расскажет что я умею. Листайте вниз, или кликайте на меню сверху, что бы продолжить ознакомление. Спасибо за внимание!</p>
      </div>
      <div className={`--mbd__row-text-description`}>
        <h2>JUST LOREM FOR VISIBLE SCROLL</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, soluta suscipit ratione dolores esse voluptate ea illo aut quo sint odit voluptatibus eum accusantium itaque, ullam culpa, unde pariatur doloribus.Labore nihil ullam, sequi impedit consequatur, expedita accusamus perferendis sapiente commodi repellat error? Odio, sapiente tempore? Aspernatur quos labore delectus accusamus quis, illum omnis rerum quisquam pariatur fuga quia vitae?</p>
      </div>
    </>
  )
}

export default BlockAboutMe;