import { useState } from 'react'

import data from './data.json'
import DayBar from './Day-bar'

export default function Chart() {
	const [expenses, setExpense] = useState(data)
	const date = new Date()
	const [currDay, setCurrDay] = useState(date.getDay() - 1)

	return (
		<div className='box'>
			<h1>Spending - Last 7 days</h1>
			<div className='chart'>
				{expenses.map(exp => {
					return <DayBar key={Math.random()} values={exp} today={currDay} />
				})}
			</div>

			<div className='month'>
				<div className='this-month'>
					<p className='tot'>total this month</p>
					<p className='tot-num'>$478.33</p>
				</div>
				<div className='last-month'>
					<p className='tot-percent'>+2.4%</p>
					<p className='tot'>from last month</p>
				</div>
			</div>
		</div>
	)
}
