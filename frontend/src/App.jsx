import Header from './components/header';
import Body from './components/body/'
import Footer from './components/footer';

function App() {

  return (
    <div className='flex flex-col h-full my-5 md:my-8 lg:my-12 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[1200px] xxl:w-[1500px] mx-auto'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
