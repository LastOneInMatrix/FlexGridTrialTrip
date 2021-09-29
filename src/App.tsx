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
                <header className={style.flexItem + ' ' + style.item1}>Header</header>
                <main>
                    <aside className={style.flexItem + ' ' + style.item2}>Aside</aside>
                    <main className={style.flexItem + ' ' + style.item3}>Main</main>
                    <aside className={style.flexItem + ' ' + style.item4}>Aside</aside>
                </main>

                <footer className={style.flexItem + ' ' + style.item5}>Footer</footer>


                {/*<div className={style.flexItem + ' ' + style.item6}>6</div>*/}
                {/*<div className={style.flexItem + ' ' + style.item7}>7</div>*/}
                {/*<div className={style.flexItem + ' ' + style.item8}>8</div>*/}
            </div>
    </div>
  );
}

export default App;
