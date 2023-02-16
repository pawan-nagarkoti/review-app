import React, { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [review, setReview] = useState(data);
    const [counter, setCounter] = useState(0)
    const { name, job, image, text } = review[counter];
    const prevPerson = () => {
        if (counter === 0) {
            setCounter(review.length - 1)
        } else {
            setCounter(counter - 1)
        }
    }
    const nextPerson = () => {
        if (counter === review.length - 1) {
            setCounter(0)
        } else {
            setCounter(counter + 1)
        }
    }

    const randomPerson = () => {
        const randomNumber = Math.floor(Math.random() * review.length - 1);
        let convertPositiveNumber = Math.abs(randomNumber);
        if (convertPositiveNumber === counter) {
            convertPositiveNumber = counter + 1;
        }
        setCounter(convertPositiveNumber)
    }

    return (
        <>
            <article className='review'>
                <div className='img-container'>
                    <img src={image} alt={name} className='person-img' />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info'>{text}</p>
                <div className='button-container'>
                    <button className='prev-btn' onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className='next-btn' onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className='random-btn' onClick={randomPerson}>
                    surprise me
                </button>
            </article>
        </>
    )
}

export default Review