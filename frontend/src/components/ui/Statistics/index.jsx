import React from 'react'
import StatisticsItem from './StatisticsItem';

export default function Statistics() {

    const statistics = {
        workouts: 100,
        years: 10,
        goals: 12
    }

    return (
        <ul className='inline-flex gap-10'>
            {Object.entries(statistics).map(([text, number]) => (
                <li key={text}>
                    <StatisticsItem text={text} number={number} />
                </li>
            ))}
        </ul>
    )
}
