import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function ProjectLayout(props){

        // state for the active border to every Link
        const [activeLink, setActiveLink] = useState('Wordpress');
      
        const handleClick = (link) => {
          setActiveLink(link);
        };

    return(
        <>
            <div className='p-4 mt-5 md:p-8 lg:p-8 xl:p-20 xl:pt-8 xl:pb-8 xl:text-center'>
                <h2 className={`text-2xl text-center pb-4 font-bold md:text-3xl lg:text-4xl xl:text-5xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>The projects that I am involved in.</h2>
                <p className='text-txt text-center md:text-lg'>The apps listed below showcase my expertise in Web development services.</p>
            </div>
            
            <div className='p-4 pt-0 md:pt-0 md:p-8 xl:p-20 xl:pt-0 xl:pb-4 max-w-7xl m-auto'>
                <div className='flex gap-3 flex-wrap'>
                    <Link 
                        className={`p-4 pt-2 pb-2 rounded border-2 text-gray-200 ${activeLink === 'Wordpress' ? 'border-btnB bg-primary' : 'bg-primary'}`} 
                        onClick={() => handleClick('Wordpress')} to="wordpress">Wordpress
                    </Link>
                    <Link 
                        className={`p-4 pt-2 pb-2 rounded border-2  text-gray-200 ${activeLink === 'Html' ? 'border-btnB bg-primary' : 'bg-primary'}`} 
                        onClick={() => handleClick('Html')} to="html">Html & CSS
                    </Link>
                    <Link 
                        className={`p-4 pt-2 pb-2 rounded border-2  text-gray-200 ${activeLink === 'Javascript' ? 'border-btnB bg-primary' : 'bg-primary'}`} 
                        onClick={() => handleClick('Javascript')} to="javascript">Javascript
                    </Link>
                    <Link 
                        className={`p-4 pt-2 pb-2 rounded border-2  text-gray-200 ${activeLink === 'Mern' ? 'border-btnB bg-primary' : 'bg-primary'}`} 
                        onClick={() => handleClick('Mern')} to="mern">React, & Tailwind
                    </Link>
                </div>
            </div>
            <main>
                <Outlet />
            </main>
        </>
    );
}