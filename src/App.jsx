import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';

function App() {
  return (
    <>
      <div className='relative min-h-screen'>
        <div>
          <Header />
        </div>
        <div>
          <Body />
        </div>
        <div className='absolute bottom-0 w-full'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
