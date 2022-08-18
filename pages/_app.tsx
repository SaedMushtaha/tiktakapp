import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  
  useEffect(() => {
    setIsSSR(false);
  }, []);

  if(isSSR) return null;
  return (
  <div>
    <NavBar/>
    <div className='flex gap-6 md:gap-20'>
      <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
        <SideBar/>
        </div> 
        <div className='mt-4 flex flex-col gap10 overflow0auto h-[88vh] video flex-1'>
           <Component {...pageProps} />
        </div>
    </div>
    <Footer/>
  </div>
 )
  
  
}

export default MyApp
