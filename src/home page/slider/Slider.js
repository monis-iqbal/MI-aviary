import React, { useEffect } from 'react'
import Logo_navbar from "../../images/Logo_navbar.png"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import "./Slider.css"
import { useState } from 'react'

const Slider = () => {
    const [selectedImage, setSelectedImage] = useState(0)

    const [allimages, setAllimages] = useState([Logo_navbar, img2 , img3])

    useEffect(()=>{
        setInterval(() => {
            setSelectedImage(selectedImage => selectedImage < 2 ?   selectedImage + 1 : 0)
        }, 2500);
    }, [])
    return (
        <div id="Slider_div">
            <button
                onClick={() => {
                    if (selectedImage > 0)
                        setSelectedImage(selectedImage - 1)
                }}
                className='prev_btn onHover'><span className='button_mid'>&#8249;</span></button>
            <img src={allimages[selectedImage]} id="slider_img" />
            <button
                onClick={() => {
                    if (selectedImage < allimages.length - 1)
                        setSelectedImage(selectedImage + 1)
                }}
                className='next_btn onHover' ><span className='button_mid'>&#8250;</span></button>
        </div>
    )
}

export default Slider