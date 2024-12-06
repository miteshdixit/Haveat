
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Cardlist from '../components/Cardlist';
import Navbar from '../components/Navbar';
import { CloseModelProvider} from '../components/Context';
import CatogryType from '../Ui/CatogryType';

const images = [
  'bg-1.jpg',
  'br-2.jpg',
  'bg-3.jpg',
];
function Home() {
  return (

    <div>

       <CloseModelProvider>
       <Navbar/>
       </CloseModelProvider>
      <Carousel images={images} />
      <div className='container mt-5'>
      
      <Cardlist/>
      </div>
      <CatogryType/>
      <Footer/>
      
      </div>
  )
}

export default Home;