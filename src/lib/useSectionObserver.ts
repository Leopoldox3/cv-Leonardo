import { useEffect, useState } from "react";

export function useSectionObserver(ids: string[]) {
	const [active, setActive] = useState<string>(ids[0]);

	useEffect(() => {
		const observers: IntersectionObserver[] = [];
		ids.forEach(id => {
			const el = document.getElementById(id);
			if (!el) return;
			const obs = new IntersectionObserver(
				([entry]) => entry.isIntersecting && setActive(id),
				{ rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.6] }
			);
			obs.observe(el);
			observers.push(obs);
		});
		return () => observers.forEach(o => o.disconnect());
	}, [ids]);

	return active;
}
