import React, { useEffect, useRef, useState } from 'react'
import canvasImages from './canvasimage';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const canvas = ({ details }) => {
    const { startIndex, numImages, duration, size, top, left, zIndex } = details;
    const [index, setindex] = useState({ value: startIndex });
    const canvasRef = useRef(null);


    useGSAP(() => {
        gsap.to(index, {
            value: startIndex + numImages - 1,
            duration: duration,
            repeat: -1,
            ease: 'linear',
            onUpdate: () => {
                setindex({ value: Math.round(index.value) });
            },
        });

        gsap.from(canvasRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power1.inOut"
        })
    });

    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const img = new Image();
        img.src = canvasImages[index.value];
        console.log(img.src);

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
        }

        // if required we used
        // img.onload = () => {
        //     canvas.width = canvas.offsetWidth * scale;
        //     canvas.height = canvas.offsetHeight * scale;
        //     canvas.style.width = canvas.offsetWidth + "px";
        //     canvas.style.height = canvas.offsetHeight + "px";
        //     context.drawImage(img, 0, 0, canvas.offsetHeight, canvas.offsetWidth);
        // }
    });


    return (
        <canvas ref={canvasRef}
            data-scroll
            data-scroll-speed={Math.random().toFixed(1)}
            className='absolute'
            style={{
                width: `${size * 1.8}px`,
                height: `${size * 1.8}px`,
                top: `${top}%`,
                left: `${left}%`,
                zIndex: `${zIndex}`
            }}
            id='canvas'></canvas>
    )
}

export default canvas


