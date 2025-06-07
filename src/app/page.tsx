'use client';
import { useEffect, useState } from 'react';

export default function Home() {
	const [dotCount, setDotCount] = useState(0);
	const phiDelay = 618; // ms = 1000ms / 1.618
	
	useEffect(() => {
		const interval = setInterval(() => {
			setDotCount((prev) => (prev + 1) % 4); // cycle: 0->1->2->3->0
		}, phiDelay);

		return () => clearInterval(interval);
	}, []);

	const animatedDots = [0, 1, 2].map((i) => (
		<span
			key={i}
			className={`inline-block transition-opacity duration-200 ${
				dotCount > i ? 'opacity-100' : 'opacity-0'
			}`}
		>
			.	
		</span>
	));

//	const dots = '.'.repeat(dotCount);

	return (
		<main className="min-h-screen flex items-center justify-center bg-black text-[#00FF41] font-mono px-4">
			<h1 className="text-lg sm:text-xl  md:text-2xl lg:text-3xl flex items-baseline space-x-1">
				<span>under construction</span>
				<span className="inline-flex">{animatedDots}</span>	
			</h1>
		</main>

	);
}
