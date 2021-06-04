import Photo1 from '../images/photo1.JPG';
import Photo2 from '../images/photo2.jpg';
import Photo3 from '../images/photo3.JPG';
import Photo4 from '../images/photo4.jpeg';
import Photo5 from '../images/photo5.JPG';
import Photo6 from '../images/photo6.JPG';
import Photo7 from '../images/photo7.jpg';
import Photo8 from '../images/photo8.jpg';
import Photo9 from '../images/photo9.jpeg';
import Photo10 from '../images/photo10.jpeg';
import Photo11 from '../images/photo11.jpg';
import Photo12 from '../images/photo12.jpg';
import Photo13 from '../images/photo13.jpeg';
import Photo14 from '../images/photo14.jpg';
import Photo15 from '../images/photo15.jpeg';
import Photo16 from '../images/photo16.jpeg';

import '../styles/App.scss';

const App = () => (
  <div className='App'>
    <h1 className='header'>З днем народження, Святослав!</h1>
    <section className='section medium'>
      <p className='text yellow'>
        В день твого народження хочемо побажати, щоб ти завжди мав міцне-міцне
        здоров'я і гарний настрій. А разом з ними і купу сил до нових пригод.
      </p>
      <img src={Photo1} className='image' />
    </section>
    <section className='section light'>
      <img src={Photo2} className='image' />
      <p className='text dark'>
        А пригоди твої щоб ніколи не закінчувалися. Як тільки завершиться одна
        пригода, то одразу щоб знаходилась наступна.
      </p>
    </section>
    <section className='section dark'>
      <p className='text light'>
        І як б важко по дорозі не було, то пам'ятай, що колись вона приведе до
        мети. Навіть якщо ти по пояс в хабазах, то не втрачай оптимізму, як Макс
        на цьому фото.
      </p>
      <img src={Photo3} className='image' />
    </section>
    <section className='section medium'>
      <img src={Photo4} className='image' />
      <p className='text yellow'>
        Пам'ятай, що після кожної подоланої вершини наступить мить, коли можна
        буде зі спокійною душею трішки почілити.
      </p>
    </section>
    <section className='section light'>
      <p className='text dark'>Або так почілити :)</p>
      <img src={Photo5} className='image' />
    </section>
    <section className='section dark'>
      <img src={Photo6} className='image' />
      <p className='text light'>
        Не бійся нових викликів. Берись за них з такою ж відвагою, як стрибав з
        Харакірі.
      </p>
    </section>
    <section className='section medium'>
      <p className='text yellow'>І лови кайф, як ті хвилі на морі :)</p>
      <img src={Photo7} className='image' />
    </section>
    <section className='section light'>
      <img src={Photo8} className='image' />
      <p className='text dark'>
        Будь завжди таким крутим татом, який викидає свою дитину фоткатись на
        звисаючу над прірвою каменюку.
      </p>
    </section>
    <section className='section dark'>
      <p className='text light'>
        І знай, що ми цінуємо все, що ти робиш для нас.
      </p>
      <img src={Photo9} className='image' />
    </section>
    <section className='section medium'>
      <img src={Photo10} className='image' />
      <p className='text yellow'>
        Щоб залишався таким же люблячим чоловіком. А ще найкращим другом для
        Дженки.
      </p>
    </section>
    <section className='section light'>
      <p className='text dark'>
        І став файним тестем. Може навіть зможеш привити Павлові любов до лиж.
      </p>
      <img src={Photo11} className='image' />
    </section>
    <section className='section dark'>
      <img src={Photo12} className='image' />
      <p className='text light'>
        І вкінці кінців щоб завжди був просто братаном :)
      </p>
    </section>
    <section className='section medium'>
      <p className='text yellow'>
        Нехай тебе оточують тільки найкращі і найвірніші друзі. Щоб залишався
        душею компанії, куди б не пішов.
      </p>
      <img src={Photo13} className='image' />
    </section>
    <section className='section light'>
      <img src={Photo14} className='image' />
      <p className='text dark'>
        Щоб завжди пам'ятав про свою олдскульну банду і всі пригоди, пройдені
        разом. А також збирав всіх назустріч новим звершенням.
      </p>
    </section>
    <section className='section dark'>
      <p className='text light'>
        І щоб не забував за молоду братву :)
      </p>
      <img src={Photo15} className='image' />
    </section>
    <section className='section medium'>
      <img src={Photo16} className='image' />
      <p className='text yellow'>
        Нехай тебе попереду чекає лише найкраще! 
      </p>
    </section>
    <h2 className='footer'>З любов'ю, від твоєї братви</h2>
  </div>
);

export default App;
