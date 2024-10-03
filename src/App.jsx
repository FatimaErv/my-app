
import './App.css'
import MyComponent from './MyComponent';
import Item from './Item';
import Petinfo from './props/Petinfo';
import Service from './props/Service';
import Product from './props/Product';

function App() {

  
  return (
    <>
      {/* <div>{title}</div>
      <MyComponent></MyComponent> */}
      {/* <Item title="Akjol" age={15} city="Naryn"></Item>
      <Item title="Kutman" age={16} city="Batken"></Item> */}

      {/* <Petinfo name="Ariet" age={13} img="https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/07/11/14/monsters.jpg"/>
      <Petinfo name="Fati" age={18} img="https://i.pinimg.com/originals/44/32/b2/4432b2718d982bb9c8349a955ab92d6b.jpg"/> */}

      {/* <Service name="Masha" image="https://i.pinimg.com/originals/44/32/b2/4432b2718d982bb9c8349a955ab92d6b.jpg" price={4555} completed={true} />
      <Service name="Bootcamp-5" image="https://cdn.culture.ru/images/3dd51f75-5065-5f2d-b98b-7e12cd72e95c"  price={100} completed={false}/> */}

      

      <Product image="https://narynlib.kg/media/books/images/2024/02/19/%D0%A1%D1%8B%D0%BD%D0%B3%D0%B0%D0%BD_%D0%BA%D1%8B%D0%BB%D1%8B%D1%87_-_%D0%A2%D3%A9%D0%BB%D3%A9%D0%B3%D3%A9%D0%BD_%D0%9A%D0%B0%D1%81%D1%8B%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2.jpg" name="Сынган кылыч" price="500$" skidka={-10}/>
      <Product image="https://avatars.mds.yandex.net/i?id=6d55b5acc84c4ba137383cab6c893137_sr-9067973-images-thumbs&n=13" name="Адам б.келет" price="50$" skidka={-17}/>
      <Product image="https://avatars.mds.yandex.net/i?id=f3695471c2debd3f31fe0030f88d8e77_l-12937823-images-thumbs&n=13" name="Кылычc.самурай" price="400$" skidka={-21}/>
      <Product image="https://avatars.mds.yandex.net/i?id=886cad63e256aa002f8f2cdd6ce3c52706b0980159dce0a4-12168744-images-thumbs&n=13" name="Келкел" price="500$" skidka={-10}/>
      <Product image="https://st-1.akipress.org/st_all/bilim/9/5ee2aa84433bb197fcaae397b506e0ac740cbef2.jpg" name="Манас" price="500$" skidka={-20}/>
      <Product image="https://avatars.mds.yandex.net/i?id=ab1438b39a7d5e7dd82942488072a804_sr-9030085-images-thumbs&n=13" name="Семетей" price="500$" skidka={-10}/>
      <Product image="https://avatars.mds.yandex.net/i?id=26ff15c2088772c0570702a16c399f07_sr-5585005-images-thumbs&n=13" name="Сейтек" price="500$" skidka={-10}/>
      <Product image="https://fsd.multiurok.ru/html/2020/03/24/s_5e7a4924ae1bf/1393824_14.png" name="Кыямат" price="500$" skidka={-19}/>
      <Product image="https://avatars.mds.yandex.net/i?id=875740e56f2e36310d3d32195aaefafb_l-5008667-images-thumbs&n=13" name="Эрте k.турналар" price="500$" skidka={-9}/>
      <Product image="https://sun9-62.userapi.com/impf/c837328/v837328492/525a6/HaMIo92Mng8.jpg?size=960x540&quality=96&sign=c98e88423987e633557d920e2f76d8a9&c_uniq_tag=0b3vMchAhAkfxnXMZFStLoAHfCzQiEy42Ykot0nNTP8&type=album" name="Адам адеби" price="500$" skidka={-10}/>
      <Product image="https://avatars.mds.yandex.net/i?id=6d55b5acc84c4ba137383cab6c893137_sr-9067973-images-thumbs&n=13" name="Адам б.келет" price="50$" skidka={-17}/>
      <Product image="https://avatars.mds.yandex.net/i?id=f3695471c2debd3f31fe0030f88d8e77_l-12937823-images-thumbs&n=13" name="Кылычc.самурай" price="400$" skidka={-13}/>
      
    </>


  );
}
export default App
