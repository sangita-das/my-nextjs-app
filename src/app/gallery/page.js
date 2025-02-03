import Image from 'next/image';
import React from 'react';
import nextImg from '../../assets/images/nextjsimage.png'
import Navbar from '@/components/Navbar';

const GalleryPage = () => {
    return (
        <div className="text-center">
        <Navbar></Navbar>
            <h1>Gallery Page ! Regular image tag</h1>
            <img src="https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png" alt="" className='mx-auto' width={500} height={500} />
            
            <h1>Nextjs image component</h1>
            <Image src="https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png" alt='next image' width={500} height={500} className='mx-auto' />


            <h1>Local image </h1>
            <Image src={nextImg} alt='next image' width={500} height={500} className='mx-auto' />
        </div>
    );
};

export default GalleryPage;