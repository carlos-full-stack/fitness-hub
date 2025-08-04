import Header from './components/header';
import Body from './components/body/'

function App() {

  return (
    <div className='w-full h-full bg-gray-100 py-10'>
      <div className='flex flex-col h-full w-[350px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[1200px] xxl:w-[1500px] mx-auto'>
        <Header />
        <Body />
      </div>
    </div>
  )
}

export default App
