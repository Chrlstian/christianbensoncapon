import React from 'react';

// import { Link } from 'react-router-dom';
import ExperienceCard from '../../components/ExperienceCard';

// data/ wordpress data
import wordpressData from '../../data/wordpressData';

export default function Wordpress(props){
    const renderWordPressData = wordpressData.map(item => {
        return <ExperienceCard key={item.id} item={item} lightMode={props.lightMode}/>
    })
    return(
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-8 md:pt-0 lg:p-8 lg:pt-0 xl:p-20 xl:pt-0 xl:gap-8 gap-4 p-4 max-w-7xl m-auto'>
                {renderWordPressData}
            </div>
        </>
    
    );
}