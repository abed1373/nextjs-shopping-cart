'use client'

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'

export default function productRate({rate,count}){
    return (
        <div className='flex'>
            <Rating style={{maxWidth:100}} value={rate} readOnly/> {count}{' '}
            reviews
        </div>
    )
}