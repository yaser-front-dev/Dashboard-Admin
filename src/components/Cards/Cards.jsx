import React from 'react';
import Card from './Card/Card';
import { useState } from 'react';

export default function Cards() {
    const [cardData, setCardData] = useState([
        { title: "Revanue", price: 2.415, num: -11.4 },
        { title: "Sales", price: 4.415, num: -1.4 },
        { title: "Cost", price: 2.225, num: +2.4 },
    ])
    return (
        <>
            <div className="flex justify-between items-center w-full gap-10">
                {cardData.map(card => (
                    <Card {...card} />
                ))}
            </div>
        </>
    )
}
