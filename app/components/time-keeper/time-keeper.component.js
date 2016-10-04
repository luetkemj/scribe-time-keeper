import React, { PropTypes } from 'react';

import style from './time-keeper.component.scss';

export default function TimeKeeper({ day, time, sky, rotation }) {
  const counterRotation = rotation * -1;
  const rotate = {
    transform: `rotate(${rotation}deg)`,
  };
  const counterRotate = {
    transform: `rotate(${counterRotation}deg)`,
  };
  const skyColor = style[sky];

  function leadingZero(number) {
    let newNumber;
    if (number < 10) {
      newNumber = `0${number}`;
    } else {
      newNumber = number;
    }

    return newNumber;
  }

  function increment6s() {
    console.log('inc6');
  }

  function increment5m() {
    console.log('inc5');
  }

  function increment10m() {
    console.log('inc10');
  }

  function increment1h() {
    console.log('inc1');
  }

  function increment8h() {
    console.log('inc8');
  }

  const hours = leadingZero(time.hours);
  const minutes = leadingZero(time.minutes);
  const seconds = leadingZero(time.seconds);

  return (
    <div className={style.timeKeeper}>
      <div className={style.dayCount}>DAY {day}</div>

      <div className={style.sundial}>
        <div className={`${style.sky} ${skyColor}`}>
          <div className={style.stars} />
          <div className={style.sunMoon} style={rotate}>
            <div className={style.sun} style={counterRotate} />
            <div className={style.moon} style={counterRotate} />
          </div>
          <div className={style.cloudA} />
          <div className={style.cloudB} />
        </div>
      </div>

      <div className={style.time}>
        {hours}
        <span className={style.colon}>:</span>
        {minutes}
        <span className={style.colon}>:</span>
        {seconds}
      </div>

      <div className={style.controls}>
        <button className={style.button} onClick={increment6s}>
          <span className={style.duration}>6</span>
          <span className={style.unit}>s</span>
        </button>
        <button className={style.button} onClick={increment5m}>
          <span className={style.duration}>5</span>
          <span className={style.unit}>m</span>
        </button>
        <button className={style.button} onClick={increment10m}>
          <span className={style.duration}>10</span>
          <span className={style.unit}>m</span>
        </button>
        <button className={style.button} onClick={increment1h}>
          <span className={style.duration}>1</span>
          <span className={style.unit}>h</span>
        </button>
        <button className={style.button} onClick={increment8h}>
          <span className={style.duration}>8</span>
          <span className={style.unit}>h</span>
        </button>
      </div>
    </div>
  );
}

TimeKeeper.propTypes = {
  day: PropTypes.number.isRequired,
  time: PropTypes.object.isRequired,
  sky: PropTypes.string.isRequired,
  rotation: PropTypes.number.isRequired,
};
