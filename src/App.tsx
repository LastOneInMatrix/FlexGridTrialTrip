import React from 'react';
import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
          <div>Home</div>
          <div>Search</div>
          <div>Logout</div>
      </header>
            <div className={style.flexContainer}>
                <div className={style.flexItem + ' ' + style.item1}>1</div>
                <div className={style.flexItem + ' ' + style.item2}>2</div>
                <div className={style.flexItem + ' ' + style.item3}>3</div>
                {/*<div className={style.flexItem + ' ' + style.item4}>4</div>*/}
                {/*<div className={style.flexItem + ' ' + style.item5}>5</div>*/}
                {/*<div className={style.flexItem + ' ' + style.item6}>6</div>*/}
                {/*<div className={style.flexItem + ' ' + style.item7}>7</div>*/}
                {/*<div className={style.flexItem + ' ' + style.item8}>8</div>*/}
            </div>
    </div>
  );
}

export default App;
