import React from 'react'
import StatisticsItem from './StatisticsItem';

export default function Statistics() {

    const statistics = {
        workouts: 100,
        years: 10,
        goals: 12
    }

    return (
        <ul className='inline-flex gap-6 md:gap-8'>
            {Object.entries(statistics).map(([text, number]) => (
                <li key={text}>
                    <StatisticsItem text={text} number={number} />
                </li>
            ))}
        </ul>
    )
}
