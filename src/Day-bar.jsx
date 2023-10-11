export default function DayBar({ values, today }) {
	const height = parseInt(Number(values.amount) * 2.5)
	const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
	return (
		<div className='day-bar'>
			<div className='amount'>${values.amount}</div>
			<div
				className='amount-bar'
				style={{
					height: `${height}px`,
					width: '40px',
					backgroundColor: `${
						week[today] === values.day
							? 'hsl(186, 34%, 60%)'
							: 'hsl(10, 79%, 65%)'
					}`,
				}}
			></div>
			<p className='day'>{values.day}</p>
		</div>
	)
}
