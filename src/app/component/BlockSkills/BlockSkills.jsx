import React from 'react';
import './style.scss';


function BlockSkills({ ...props }) {


  return (
    <section className={`wrapper-section-skills --wss`}>
      <div className={`--wss__general-title`} >
        <h2>HELLO THIS YOU CAN LEARN MY SKILLS</h2>
        <p>start scroll through the page for more information</p>
      </div>

      <div className={`--wss__block-html --html`}>
        <div className={`--html__col-one`}>
          <p>написание валидного HTML</p>
        </div>
        <div className={`--html__col-three`}>
          <p>современные стандарты HTML5</p>
        </div>
        <div className={`--html__col-two`}>
          <h3>HTML</h3>
        </div>
        <div className={`--html__col-one`}>
          <p>написание семантики</p>
        </div>
        <div className={`--html__col-three`}>
          <p>построение каркасов и шаблонов</p>
        </div>
        <span></span>

      </div>
      <div className={`--wss__block-html --html`}>

        <div className={`--html__col-one`}>
          <p>написание CSS макетов</p>
        </div>
        <div className={`--html__col-three`}>
          <p>современные стандарты CSS3</p>
        </div>
        <div className={`--html__col-one`}>
          <p>Архитектура BEM</p>
        </div>
        <div className={`--html__col-two--css`}>
          <h3>CSS</h3>
        </div>
        <div className={`--html__col-three`}>
          <p>CSS floating GRID, FLEX-BOX</p>
        </div>
        <div className={`--html__col-one`}>
          <p>обработка media query</p>
        </div>
        <div className={`--html__col-three`}>
          <p>CSS Pre-processors SASS</p>
        </div>
        <span></span>

      </div>
      <div className={`--wss__block-html --html`}>
        <div className={`--html__col-one`}>
          <p>современные стандарты ES6</p>
        </div>
        <div className={`--html__col-three`}>
          <p>дополнительные фишки native object</p>
        </div>
        <div className={`--html__col-one`}>
          <p>обработка ошибок try/catches </p>
        </div>
        <div className={`--html__col-three`}>
          <p>асинхронный код async/await</p>
        </div>
        <div className={`--html__col-one`}>
          <p>сетевые запросы Fetch</p>
        </div>
        <div className={`--html__col-three`}>
          <p>понимание замыкание, рекурсия</p>
        </div>
        <div className={`--html__col-two-js`}>
          <h3>JavaScript</h3>
        </div>
        <div className={`--html__col-one`}>
          <p>модульность кода</p>
        </div>
        <div className={`--html__col-three`}>
          <p>контекст this привязка call/apply</p>
        </div>
        <div className={`--html__col-one`}>
          <p>прототипное наследование __proto__ get/setPrototypeOf</p>
        </div>
        <div className={`--html__col-three`}>
          <p>promise цепочки promise</p>
        </div>
        <span></span>
      </div>

      <div className={`--wss__block-html --html`}>
        <div className={`--html__col-one`}>
          <p>Методы жизненного цикла</p>
        </div>
        <div className={`--html__col-three`}>
          <p>функциональный классовые компоненты</p>
        </div>
        <div className={`--html__col-one`}>
          <p>переиспользоваемость кода</p>
        </div>
        <div className={`--html__col-three`}>
          <p>REST API</p>
        </div>
        <div className={`--html__col-one`}>
          <p>files manages</p>
        </div>
        <div className={`--html__col-three`}>
          <p>умение оптимизировать компоненты</p>
        </div>
        <div className={`--html__col-two-js`}>
          <h3>ReactJS</h3>
        </div>
        <div className={`--html__col-one`}>
          <p>осознанное использование JSX</p>
        </div>
        <div className={`--html__col-three`}>
          <p>ленивая загрузка компонент</p>
        </div>
        <div className={`--html__col-one`}>
          <p>передача контекста</p>
        </div>
        <div className={`--html__col-three`}>
          <p>немного понимаю как React работает изнутри</p>
        </div>
        <span></span>

      </div>
      <div className={`--wss__block-html --html`}>
        <div className={`--html__col-one`}>
          <p>SASS-Script</p>
        </div>
        <div className={`--html__col-three`}>
          <p>модульность каскада</p>
        </div>
        <div className={`--html__col-two--scss`}>
          <h3>SASS</h3>
        </div>
        <div className={`--html__col-one`}>
          <p>создание mixin во избежание дублирования</p>
        </div>
        <div className={`--html__col-three`}>
          <p>привязка контекста к родительскому селектору</p>
        </div>
        <span></span>
      </div>
      <div className={`--wss__block-html --html`}>
        <div className={`--html__col-one`}>
          <p>UI ANT-Design</p>
        </div>
        <div className={`--html__col-three`}>
          <p>axios</p>
        </div>
        <div className={`--html__col-one`}>
          <p>Apollo/GraphQL (поверхностно)</p>
        </div>
        <div className={`--html__col-three`}>
          <p>React Router DOM</p>
        </div>

        <div className={`--html__col-two-js`}>
          <h3>library</h3>
        </div>

        <div className={`--html__col-one`}>
          <p>ReactJS</p>
        </div>
        <div className={`--html__col-three`}>
          <p>Formik</p>
        </div>
        <div className={`--html__col-one`}>
          <p>Redux-Thunk</p>
        </div>
        <div className={`--html__col-three`}>
          <p>ReduxJS</p>
        </div>
        <div className={`--html__additional-description`}> 
          <p>Cписок этих библиотек мал, но это тот инструментарий который покрывает 80% моих нужд на проекте. Приводить полный список я не вижу смысла. Если в этом списке нет того, что требуется вам, я готов освоить и подтянуть то что вам нужно.</p>
        </div>
        <span></span>
      </div>
      <div className={`--wss__block-html --html`}>
        <div className={`--html__col-one`}>
          <p>figma</p>
        </div>
        <div className={`--html__col-three`}>
          <p>Adobe-Photoshop</p>
        </div>
        <div className={`--html__col-two--scss`}>
          <h3>program</h3>
        </div>
        <div className={`--html__col-one`}>
          <p>postman</p>
        </div>
        <div className={`--html__col-three`}>
          <p>Avacode</p>
        </div>
        <span></span>
      </div>
      <div className={`--wss__block-html --html`}>
        <div className={`--html__col-one`}>
          <p>настройка Task Runer Gulp</p>
        </div>
        <div className={`--html__col-three`}>
          <p>настройка конфигов Webpack</p>
        </div>
        <div className={`--html__col-two--scss`}>
          <h3>additionally</h3>
        </div>
        <div className={`--html__col-one`}>
          <p>Работа с Back-end на NodeJS</p>
        </div>
        <div className={`--html__col-three`}>
          <p>Подключение баз данных MySQL and MongoDB</p>
        </div>
        <span></span>
      </div>

    </section>
  )
}

export default BlockSkills;



