import React from 'react'
import '../Styles/AboutMe.css'

const AboutMe = () => {
    return (
        <div className='AboutMe h-[100vh] mt-10 p-8 items-center text-center'>
            <div className='CV rounded-lg '>
                <h1 className='text-2xl font-bold '>CV</h1>
                <img className='mt-4  object-cover  ' src={require('../Assets/images/cv.png')} alt='cv' width={'100%'} height={'100%'} />
            </div>

        </div>
    )
}

export default AboutMe;