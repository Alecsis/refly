import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
	return (
		<div className='w-full py-[10rem] px-4 bg-white'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
				<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
					<img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
					<h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
					<p className='text-center text-4xl font-bold'>$99</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
						<p className='py-2 border-b mx-8'>1 Granted User</p>
						<p className='py-2 border-b mx-8'>Fast 25 GBPS</p>
					</div>
					<a className='mx-auto' href='https://www.youtube.com/watch?v=KH_XIt-hm2Y' target='_blank' rel='noreferrer'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button></a>
				</div>
				<div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
					<img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
					<h2 className='text-2xl font-bold text-center py-8'>Duel Users</h2>
					<p className='text-center text-4xl font-bold text-red-500'>$149</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8'>2 TB Storage</p>
						<p className='py-2 border-b mx-8'>2 Granted Users</p>
						<p className='py-2 border-b mx-8'>Speedy 260 GBPS</p>
					</div>
					<a className='mx-auto' href='https://www.youtube.com/watch?v=gd-7Ye_vX1k' target='_blank' rel='noreferrer'><button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button></a>
				</div>
				<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
					<img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
					<h2 className='text-2xl font-bold text-center py-8'>Triple Users</h2>
					<p className='text-center text-4xl font-bold'>$349</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
						<p className='py-2 border-b mx-8'>3 Granted Users</p>
						<p className='py-2 border-b mx-8'>Super fast 900 GBPS</p>
					</div>
					<a className='mx-auto' href='https://www.youtube.com/watch?v=KH_XIt-hm2Y' target='_blank' rel='noreferrer'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button></a>
				</div>
			</div>
		</div>
	);
};

export default Cards;