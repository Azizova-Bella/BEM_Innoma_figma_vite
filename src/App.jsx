import React from "react";
import "./App.css";
import find from "./assets/find.png";
import rosket from "./assets/rocket 1 (1).png";
import fatimaPhoto from "./assets/fatima.png";
import img1 from "./assets/3 (1).png";
import img2 from "./assets/Vector (5).png";
import img3 from "./assets/Vector (6).png";
import video from "./assets/Group 840 (1).png";
import icon from "./assets/icon.png";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import icons from "./assets/Vector (7).png";
import man from "./assets/Group 841.png";
import imgs from "./assets/Group 1049.png";
import person1 from "./assets/Ellipse 544.png";
import person2 from "./assets/Ellipse 545.png";
import person3 from "./assets/Ellipse 546.png";
import person4 from "./assets/Ellipse 548.png";
import partners__title from "./assets/Group 1010.png";
import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import whatsapp from "./assets/phone.png";
import tg from "./assets/teleg.png";
import flag from "./assets/flag.png";

function App() {
  return (
    <div className="banner">
      <div className="landing">
        <div className="landing__overlay">
          <header className="landing__header">
            <div className="landing__logo">
              INNOMA.<span className="landing__logo--highlight">VC</span>
            </div>
            <nav className="landing__nav">
              <a href="#" className="landing__link">
                Кто мы?
              </a>
              <a href="#" className="landing__link">
                Услуги
              </a>
              <a href="#" className="landing__link">
                Акселератор
              </a>
              <a href="#" className="landing__link">
                Новости
              </a>
              <button className="landing__login-btn">Войти</button>
            </nav>
          </header>

          <main className="landing__content">
            <h1 className="landing__title">
              ЗАПУСТИТЕ <br />
              <span className="landing__title--highlight-green">
                ТЕХНОЛОГИЧЕСКИЙ IT-БИЗНЕС
              </span>
              <br />
              НА{" "}
              <span className="landing__title--highlight">
                МЕЖДУНАРОДНЫХ РЫНКАХ
              </span>
            </h1>
            <p className="landing__subtitle">
              Открыт набор заявок на акселератор
            </p>
            <button className="landing__cta-btn">Подать заявку</button>
          </main>
        </div>
      </div>
      <section className="services">
        <h2 className="services__title">Наши услуги</h2>
        <div className="services__list">
          <div className="services__item">
            <div className="services__text">
              <h3 className="services__subtitle">Аналитические исследования</h3>
              <p className="services__description">
                Онлайн программа аскелерации IT бизнеса позволит вашей команде
                открыть новые горизонты и возможности для бизнеса на глобальных
                рынках. В результате программы вы получите возможность
                презентовать свой проект для международных инвесторов и
                локальных партнеров
              </p>
              <button className="services__button">Узнать подробнее</button>
            </div>
            <img
              src={find}
              alt="Аналитика"
              className="services__image--first"
            />
          </div>

          <div className="services__item services__item--reverse">
            <div className="services__text">
              <h3 className="services__subtitle">
                Онлайн акселератор для IT бизнеса
              </h3>
              <p className="services__description">
                Одним из наших ключевых направлений является анализ
                технологических трендов на международных рынках. Мы проводим
                анализ на основе публичных исследований McKinsey, BCG, PWC,
                Deloitte, Accenture, BCG, EY, Crunchbase, Dealroom, F6S,
                PitchBook а также агрегируем и анализируем данные из открытых
                международных источников патенты, медиа, научные публикации
              </p>
              <button className="services__button">Узнать подробнее</button>
            </div>
            <img src={rosket} alt="Акселератор" className="services__image" />
          </div>
        </div>
      </section>
      <section className="who">
        <h2 className="who__title">Для кого мы?</h2>
        <div className="who__cards">
          <div className="who__card">
            <div className="who__number" style={{ color: "#1178B280" }}>
              01
            </div>
            <h3 className="who__card-title">IT проекты на стадии идеи</h3>
            <p className="who__card-text">
              Для стартапов, которые планируют привлечение международных
              инвестиций, протестировать спрос и запустить продукт
            </p>
          </div>
          <div className="who__card">
            <div className="who__number" style={{ color: "#1178B280" }}>
              02
            </div>
            <h3 className="who__card-title">Инновационный бизнес</h3>
            <p className="who__card-text">
              Для уже работающего технологического бизнеса, позволим найти новые
              международные рынки сбыта, масштабировать бизнес
            </p>
          </div>
          <div className="who__card">
            <div className="who__number" style={{ color: "#1178B280" }}>
              03
            </div>
            <h3 className="who__card-title">Корпорации</h3>
            <p className="who__card-text">
              Для уже работающего технологического бизнеса, позволим найти новые
              международные рынки сбыта, масштабировать бизнес
            </p>
          </div>
        </div>

        <div className="who__banner">
          <div className="who__banner-overlay">
            <h2 className="who__banner-title">
              НАУЧИТЕСЬ ИССЛЕДОВАТЬ ИНОСТРАННЫЕ РЫНКИ
              <br />И ОТКРОЙТЕ НОВЫЕ ВОЗМОЖНОСТИ ДЛЯ СВОЕГО БИЗНЕСА
            </h2>
            <p className="who__banner-subtitle">
              Наша команда поможет вам изучить рынки Ближнего Востока, Азии,
              Латинской Америки и Африки
            </p>
            <button className="who__banner-btn">Получить консультацию</button>
          </div>
        </div>
      </section>

      <div className="market">
        <h2 className="market__title">С какими рынками мы работаем?</h2>
        <div className="market__tabs">
          <button className="market__tab market__tab_active">
            Ближний восток
          </button>
          <button className="market__tab">Азия</button>
          <button className="market__tab">Латинская Америка</button>
          <button className="market__tab">Африка</button>
        </div>
        <div className="market__content">
          <h3 className="market__subtitle">
            ЧЕМ ИНТЕРЕСЕН <span className="market__highlight">РЫНОК MENA:</span>
          </h3>
          <br />
          <p className="market__description">
            ОАЭ, Саудовская Аравия, Израиль, Оман, Бахрейн, Катар, Тунис, Йемен,
            Египет, Алжир
          </p>
          <br />
          <button className="market__button">Выйти на рынок</button>
          <div className="market__stats">
            <div className="market__cards">
              <div className="market__card">
                <strong>›5,5 Млрд</strong>
                <span>Инвестиции pre-seed, seed</span>
              </div>
              <div className="market__card">
                <strong>›300</strong>
                <span>Акселераторов, инкубаторов</span>
              </div>
              <div className="market__card">
                <strong>73</strong>
                <span>Венчурных фонда</span>
              </div>
              <div className="market__card market__report">
                <button className="market__report-button">
                  Скачать отчет по рынку MENA
                </button>
              </div>
            </div>
          </div>
          <div className="market__manager">
            <img
              src={fatimaPhoto}
              alt="Фатима"
              className="market__manager-photo"
            />
            <span className="market__manager-name">Фатима</span>
            <br />
            <span className="market__manager-role">Менеджер по MENA</span>
          </div>
        </div>
      </div>
      <div className="accelerator">
        <div className="accelerator__content">
          <h2 className="accelerator__title">Об акселераторе IT бизнеса</h2>
          <p className="accelerator__description">
            Программа акселератора рассчитана на 8 недель интенсивного онлайн
            курса с вебинарами приглашенных экспертов по международным рынкам,
            разборами ваших идей и проектов
          </p>
          <div className="accelerator__cards">
            <div className="accelerator__card--first">
              <img
                src={img1}
                alt="Image 1"
                className="accelerator__image--first"
              />
              <p className="accelerator__card-text">Месяца обучения</p>
            </div>
            <div className="accelerator__card">
              <img src={img2} alt="Image 2" className="accelerator__image" />
              <p className="accelerator__card-text">Приглашенные эксперты</p>
            </div>
            <div className="accelerator__card">
              <img src={img3} alt="Image 3" className="accelerator__image" />
              <p className="accelerator__card-text">Персональный менеджер</p>
            </div>
          </div>
        </div>
      </div>
      <div className="app__img">
        <img className="app__img--img" src={video} alt="Play Video" />
      </div>
      <div className="program">
        <div className="program__content">
          <h2 className="program__title">Программа акселератора</h2>
          <div className="program__modules">
            <div className="program__module--main">
              <h3 className="program__module-title">
                Модуль 1 Тенденции и тренды современного мира
              </h3>
              <ul className="program__topics">
                <li className="program__topic">
                  Тема 1. Куда движутся IT рынки? Аналитика. Сравнение, разбор
                  отчетов консалтинговых компаний.
                </li>
                <li className="program__topic">
                  Тема 2. Рынки Европы, Азии, Латинской Америки.
                </li>
                <li className="program__topic">
                  Тема 3. Что такое внутренние и внешние инновации? Как искать
                  инновационные идеи?
                </li>
              </ul>
            </div>
            <div className="program__module">
              <h3 className="program__module-title">
                Модуль 2 Стартап подход к созданию международного IT продукта
              </h3>
              <img src={icon} alt="Icon" className="program__icon--1" />
            </div>
            <div className="program__module">
              <h3 className="program__module-title">
                Модуль 3 Бизнес моделирование и поиск Product Market Fit
              </h3>
              <img src={icon} alt="Icon" className="program__icon--2" />
            </div>
            <div className="program__module">
              <h3 className="program__module-title">
                Модуль 4 Определение рынка, поиск и исследование Целевой
                аудитории
              </h3>
              <img src={icon} alt="Icon" className="program__icon--3" />
            </div>
            <div className="program__module">
              <h3 className="program__module-title">
                Модуль 5 Что такое MVP и почему это важно
              </h3>
              <img src={icon} alt="Icon" className="program__icon--4" />
            </div>
            <div className="program__module">
              <h3 className="program__module-title">
                Модуль 6 Unit экономика и финансовое моделирование
              </h3>
              <img src={icon} alt="Icon" className="program__icon--5" />
            </div>
            <div className="program__module">
              <h3 className="program__module-title">
                Модуль 7 Что такое дорожная карта продукта?
              </h3>
              <img src={icon} alt="Icon" className="program__icon--6" />
            </div>
            <div className="program__module">
              <h3 className="program__module-title">
                Модуль 8 Документы для международных инвесторов
              </h3>
              <img src={icon} alt="Icon" className="program__icon--6" />
            </div>
            <div className="program__module">
              <h3 className="program__module-title">
                Модуль 9 Открытие юридического лица. Возможности для стартапов
              </h3>
              <img src={icon} alt="Icon" className="program__icon--8" />
            </div>
          </div>
          <button className="program__button">Получить полную программу</button>
        </div>
      </div>
      <div className="investor">
        <div className="investor__content">
          <h2 className="investor__title">
            Попадите на радары инвесторов и партнеров
          </h2>
          <p className="investor__description">
            В результате прохождения обучения мы создадим проекты вашей компании
            на все международные инвестиционные площадки.
          </p>
          <button className="investor__button">Записаться в акселератор</button>
          <div className="investor__logos">
            <img src={logo1} alt="PitchBook" className="investor__logo" />
            <img src={logo2} alt="PitchBook" className="investor__logo" />
            <img src={logo3} alt="PitchBook" className="investor__logo" />
            <img src={logo4} alt="PitchBook" className="investor__logo" />
            <img src={logo1} alt="PitchBook" className="investor__logo" />
            <img src={logo2} alt="PitchBook" className="investor__logo" />
          </div>
        </div>
      </div>
      <section className="who">
        <h2 className="who__title">Для кого мы?</h2>
        <div className="who__cards">
          <div className="who__card">
            <div className="who__number" style={{ color: "#1178B280" }}>
              01
            </div>
            <h3 className="who__card-title">IT проекты на стадии идеи</h3>
            <p className="who__card-text">
              Для стартапов, которые планируют привлечение международных
              инвестиций, протестировать спрос и запустить продукт
            </p>
          </div>
          <div className="who__card">
            <div className="who__number" style={{ color: "#1178B280" }}>
              02
            </div>
            <h3 className="who__card-title">Инновационный бизнес</h3>
            <p className="who__card-text">
              Для уже работающего технологического бизнеса, позволим найти новые
              международные рынки сбыта, масштабировать бизнес
            </p>
          </div>
          <div className="who__card">
            <div className="who__number" style={{ color: "#1178B280" }}>
              03
            </div>
            <h3 className="who__card-title">Корпорации</h3>
            <p className="who__card-text">
              Для уже работающего технологического бизнеса, позволим найти новые
              международные рынки сбыта, масштабировать бизнес
            </p>
          </div>
          <div className="who__card">
            <div className="who__number" style={{ color: "#1178B280" }}>
              01
            </div>
            <h3 className="who__card-title">IT проекты на стадии идеи</h3>
            <p className="who__card-text">
              Для стартапов, которые планируют привлечение международных
              инвестиций, протестировать спрос и запустить продукт
            </p>
          </div>
          <div className="who__card">
            <div className="who__number" style={{ color: "#1178B280" }}>
              02
            </div>
            <h3 className="who__card-title">Инновационный бизнес</h3>
            <p className="who__card-text">
              Для уже работающего технологического бизнеса, позволим найти новые
              международные рынки сбыта, масштабировать бизнес
            </p>
          </div>
          <div className="who__card">
            <div className="who__number" style={{ color: "#1178B280" }}>
              03
            </div>
            <h3 className="who__card-title">Корпорации</h3>
            <p className="who__card-text">
              Для уже работающего технологического бизнеса, позволим найти новые
              международные рынки сбыта, масштабировать бизнес
            </p>
          </div>
        </div>
      </section>

      <div className="pricing">
        <div className="pricing__content">
          <h2 className="pricing__title" style={{ color: "#1178B280" }}>
            Стоимость
          </h2>
        </div>
        <div className="pricing__cards">
          <div className="pricing__card">
            <img
              src={icons}
              alt="Анализ международных рынков"
              className="pricing__card-image"
            />
            <h3 className="pricing__card-title">Анализ международных рынков</h3>
            <p className="pricing__card-description">Что входит в отчет?</p>
            <ul className="pricing__card-list">
              <li className="pricing__card-list-item">1. Анализ конкурентов</li>
              <li className="pricing__card-list-item">2. Анализ инвесторов</li>
              <li className="pricing__card-list-item">
                3. Размеры рынка (TAM, SAM, SOM)
              </li>
              <li className="pricing__card-list-item">4. Анализ СМИ</li>
              <li className="pricing__card-list-item">
                5. Анализ запросов в сети интернет
              </li>
            </ul>
            <button className="pricing__card-button">Оставить заявку</button>
          </div>

          <div className="pricing__card">
            <img
              src={icons}
              alt="Упаковка стартапа под локальные рынки"
              className="pricing__card-image"
            />
            <h3 className="pricing__card-title">
              Упаковка стартапа под локальные рынки
            </h3>
            <p className="pricing__card-description">Что входит в услугу?</p>
            <ul className="pricing__card-list">
              <li className="pricing__card-list-item">
                1. Анализ локальных рынков
              </li>
              <li className="pricing__card-list-item">2. Бизнес план</li>
              <li className="pricing__card-list-item">3. Питч презентация</li>
              <li className="pricing__card-list-item">4. Финансовый план</li>
              <li className="pricing__card-list-item">
                5. Расчет unit экономики
              </li>
              <li className="pricing__card-list-item">
                6. Проведение каст дева
              </li>
            </ul>
            <button className="pricing__card-button">Оставить заявку</button>
          </div>

          <div className="pricing__card">
            <img
              src={icons}
              alt="Акселератор вашего бизнеса"
              className="pricing__card-image"
            />
            <h3 className="pricing__card-title">Акселератор вашего бизнеса</h3>
            <p className="pricing__card-description">
              Что входит в акселератор?
            </p>
            <ul className="pricing__card-list">
              <li className="pricing__card-list-item">
                1.Онлайн доступ к курсам
              </li>
              <li className="pricing__card-list-item">
                2.Документы для бизнеса
              </li>
              <li className="pricing__card-list-item">3.Питч презентация</li>
              <li className="pricing__card-list-item">4.Дело день</li>
              <li className="pricing__card-list-item">
                5.Проваливание по результатам
              </li>
            </ul>
            <button className="pricing__card-button">Оставить заявку</button>
          </div>
        </div>
      </div>

      <section className="intro">
        <div className="intro__content">
          <div className="intro__profile">
            <div className="intro__profile-image">
              <img src={man} alt="man" />
            </div>
          </div>
          <div className="intro__text">
            <p className="intro__text-greeting">Всем привет!</p>
            <p className="intro__text-description">
              Меня зовут Роман. Последние 6 лет я являюсь частью инновационной
              экосистемы СНГ, прошел путь от проектного менеджера до
              руководителя продукта по автоматизированному скаутингу и скринингу
              стартапов. За 6 лет работы я увидел множество ошибок и отсутствие
              ориентации акселерационных программ под запросы стартапов. Все
              акселераторы выполнялись ради акселератора и выполнения КПЭ.
            </p>
            <p className="intro__text-author">Роман Гайн</p>
            <p className="intro__text-position">Основатель INNOMA.VC</p>
          </div>
        </div>

        <div className="intro__gallery">
          <div className="intro__gallery-item">
            <img src={imgs} alt="imgs" className="intro__imgs" />
          </div>
        </div>
      </section>

      {/*  */}

      <section className="experts-partners">
        <div className="experts">
          <h2 className="experts__title">Эксперты и трекеры программы</h2>
          <div className="experts__list">
            <div className="experts__item">
              <img src={person2} alt="Юрий Ким" className="experts__photo" />
              <p className="experts__name">Юрий Ким</p>
              <p className="experts__desc">
                Проведение исследования целевой аудитории позволит сформировать
                Product-market fit
              </p>
            </div>
            <div className="experts__item">
              <img src={person3} alt="Эшли Абрамс" className="experts__photo" />
              <p className="experts__name">Эшли Абрамс</p>
              <p className="experts__desc">
                Проведение исследования целевой аудитории позволит сформировать
                Product-market fit
              </p>
            </div>
            <div className="experts__item">
              <img src={person4} alt="Фатими Юсуф" className="experts__photo" />
              <p className="experts__name">Фатими Юсуф</p>
              <p className="experts__desc">
                Проведение исследования целевой аудитории позволит сформировать
                Product-market fit
              </p>
            </div>
            <div className="experts__item">
              <img
                src={person1}
                alt="Майкл Донован"
                className="experts__photo"
              />
              <p className="experts__name">Майкл Донован</p>
              <p className="experts__desc">
                Проведение исследования целевой аудитории позволит сформировать
                Product-market fit
              </p>
            </div>
          </div>
        </div>

        <div className="partners">
          <h2 className="partners__title">Наши партнёры</h2>
          <div className="partners__logos">
            <img
              src={partners__title}
              alt="Crunchbase"
              className="partners__logo"
            />
          </div>
        </div>
      </section>
      <div className="hero-and-events">
        <section className="hero">
          <div className="hero__container">
            <h1 className="hero__title">
              Мы создаем международное сообщество экспертов и партнеров
            </h1>
            <p className="hero__subtitle">
              Если ты или ваш бизнес может быть полезен при выходе на
              международные рынки, предлагаем вместе стать частью глобального
              сообщества и расширить наши возможности.
            </p>
            <button className="hero__cta-button">Стать партнером</button>
          </div>
        </section>

        <section className="events">
          <h2 className="events__title" style={{color:"#1178B2"}}>Мероприятия и события</h2>
          <div className="events__list">
            <div className="events__card">
              <img
                src={three}
                alt="Новый отчет по MENA"
                className="events__image"
              />
              <div className="events__content">
                <h3 className="events__card-title">Новый отчет по MENA</h3>
                <p className="events__card-text">
                  По особенностям рынка Ближнего Востока (дополнение: 100+
                  страниц).
                </p>
                <p className="events__card-date">23/12/2022</p>
              </div>
            </div>

            <div className="events__card">
              <img
                src={one}
                alt="Вебинар"
                className="events__image"
              />
              <div className="events__content">
                <h3 className="events__card-title">Вебинар</h3>
                <p className="events__card-text">
                Аналитический отчет по рынкам 
Ближнего Востока (инвесторы, 
объем раундов, ТОП сферы)
                </p>
                <p className="events__card-date">23/12/2022</p>
              </div>
            </div>

            <div className="events__card">
              <img
                src={two}
                alt="METAVENTURES BANGKOK"
                className="events__image"
              />
              <div className="events__content">
                <h3 className="events__card-title">Вебинар по особенностям 
                рынков Ближнего Востока</h3>
                <p className="events__card-text">
                Поговорим с экспертами рынков 
                в формате дискуссии
                </p>
                <p className="events__card-date">23/12/2022</p>
              </div>
            </div>
          </div>
        </section>
        <div className="contact">
  <div className="contact__wrapper">
    <div className="contact__info">
      <h2 className="contact__title">Остались вопросы?</h2>
      <p className="contact__subtitle">
        Оставьте заявку и наша команда свяжется с вами
      </p>
      <div className="contact__socials">
        <a href="https://t.me" className="contact__social contact__social--telegram">
          <img src={tg} alt="Telegram" />
          Telegram
        </a>
        <a href="https://wa.me" className="contact__social contact__social--whatsapp">
          <img src={whatsapp} alt="WhatsApp" />
          WhatsApp
        </a>
      </div>
    </div>

    <form className="contact__form">
      <input type="text" className="contact__input" placeholder="Имя" />
      <input type="email" className="contact__input" placeholder="Почта" />
      <div className="contact__input contact__input--phone">
        <span className="contact__phone-code">+971</span>
        <img src={flag} alt="UAE Flag" className="contact__flag" />
      </div>
      <button type="submit" className="contact__button">Оставить заявку</button>
    </form>
  </div>
</div>

<footer className="footer">
  <div className="footer__content">
    <div className="footer__left">
      <h3 className="footer__logo">INNOMA.<span className="footer__highlight">VC</span></h3>
      <p className="footer__copyright">Все права защищены</p>
    </div>
    <nav className="footer__nav">
      <a href="#" className="footer__link">Кто мы?</a>
      <a href="#" className="footer__link">Услуги</a>
      <a href="#" className="footer__link">Акселератор</a>
      <a href="#" className="footer__link">Новости</a>
    </nav>
    <div className="footer__contact">
      <p className="footer__address">Dubai, Single Business Tower<br />1061, Business Bay</p>
      <a href="mailto:sales@innoma.vc" className="footer__email">sales@innoma.vc</a>
    </div>
  </div>
</footer>
      </div>

    </div>
  );
}

export default App;
