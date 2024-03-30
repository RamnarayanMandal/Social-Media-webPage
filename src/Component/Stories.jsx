import React from 'react';
import { Carousel } from "@material-tailwind/react";

let stories = [
    {
        img: 'https://images.pexels.com/photos/14447126/pexels-photo-14447126.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        Name: "Ram"
    },
    {
        img: 'https://images.pexels.com/photos/20770938/pexels-photo-20770938/free-photo-of-colorful-buildings-on-the-river-bank-in-florence.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        Name: "payal"
    },
    {
        img: 'https://images.pexels.com/photos/13985096/pexels-photo-13985096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Name: "Raju"
    },
    {
        img: 'https://images.pexels.com/photos/20144168/pexels-photo-20144168/free-photo-of-two-people-sitting-on-a-bench-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        Name: "Ram kumar"
    },
    {
        img: 'https://images.pexels.com/photos/20623968/pexels-photo-20623968/free-photo-of-a-robin-sits-on-top-of-a-bush-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        Name: "Ram narayan"
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg',
        Name: "Ram kumar"
    },
    {
        img: 'https://media.istockphoto.com/id/1284671318/photo/meadows-in-the-snow-peak-mountains-of-himalaya.jpg?s=2048x2048&w=is&k=20&c=zIibFUP3rnibsoKPWtD4y7ChHDaKfbsVNmQtd6ci9R0=',
        Name: "Ram narayan"
    },
    {
        img: 'https://cdn.pixabay.com/photo/2023/03/20/20/35/sunset-7865844_1280.jpg',
        Name: "Ram narayan"
    },
    {
        img: 'https://cdn.pixabay.com/photo/2023/01/08/08/40/road-7704729_1280.jpg',
        Name: "Ram narayan"
    },
    {
        img: 'https://cdn.pixabay.com/photo/2023/09/04/10/12/bird-8232427_1280.jpg',
        Name: "Ram narayan"
    },
];

const Stories = () => {
    
    return (      
        <Carousel transition={{ duration: 2 }} className="flex flex-cols gap-4 px-56 py-10 bg-gray-50 w-full">
            {stories.map((story, index) => (
                <div key={index}>
                    <img className='rounded-xl h-52 w-64' src={story.img} alt="Profile Pic" />
                    <div className='relative'>
                        <p className='absolute bottom-2 left-2 text-white'>{story.Name}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Stories;
