import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
	return (
		<div className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
				<div className='flex flex-col justify-center'>
					<p className='text-[#00df9a] font-bold '>DATA ANALYSIS</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Managing Data Remotely</h1>
					<p className='font-bold-[32%]'>
						Here at REFLY we believe in the best
						consumer end support for data management and analysis.
						We strive to be the best in our class against our competitors.
					</p>
					<a  className='mx-auto' href='https://www.youtube.com/watch?v=6eMy_ue-6Nw' target='_blank' rel='noreferrer'><button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button></a>
				</div>
			</div>
		</div>
	);
};

export default Analytics;