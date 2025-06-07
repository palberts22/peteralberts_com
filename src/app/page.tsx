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
		<main className="h-screen flex items-center justify-center bg-black text-[#00FF41] font-mono">
			<h1 className="text-4xl mb-4 flex items-center">
				under construction
				<span className="w-2[2ch] ml-1">{animatedDots}</span>	
			</h1>
		</main>

	);
}
