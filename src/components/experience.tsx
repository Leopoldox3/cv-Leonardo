"use client";

import { useLanguage } from "@/components/language-provider";

const EXPERIENCE = {
	en: [
	{
		role: "Lead Mobile Developer",
		period: "2023 - Present",
		highlights: [
			"Led delivery of mobile initiatives from architecture to release with cross-functional teams.",
			"Improved product quality by enforcing scalable patterns, testing flows, and cleaner CI pipelines.",
		],
	},
	{
		role: "Software Developer",
		period: "2021 - 2023",
		highlights: [
			"Built full-stack features across mobile, web, and backend services for production environments.",
			"Implemented integrations and performance optimizations that improved release confidence.",
		],
	},
	],
	es: [
		{
			role: "Lead Mobile Developer",
			period: "2023 - Actualidad",
			highlights: [
				"Lidere la entrega de iniciativas mobile desde arquitectura hasta release con equipos multidisciplinarios.",
				"Mejore la calidad del producto aplicando patrones escalables, flujos de pruebas y pipelines CI mas limpios.",
			],
		},
		{
			role: "Software Developer",
			period: "2021 - 2023",
			highlights: [
				"Desarrolle funcionalidades full-stack en mobile, web y backend para entornos productivos.",
				"Implemente integraciones y optimizaciones de rendimiento que mejoraron la confianza en cada release.",
			],
		},
	],
} as const;

export default function Experience() {
	const { language } = useLanguage();
	const data = EXPERIENCE[language];

	return (
		<section id="experience" className="scroll-mt-24 py-12">
			<h2 className="mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:text-5xl">
				{language === "en" ? "Experience" : "Experiencia"}
			</h2>
			<div className="mx-auto grid max-w-4xl gap-4">
				{data.map((item) => (
					<article key={item.role} className="rounded-xl border border-white/15 bg-[#121827] p-5">
						<div className="mb-3 flex items-center justify-between gap-3">
							<h3 className="text-lg font-semibold text-white">{item.role}</h3>
							<span className="text-sm text-cyan-300">{item.period}</span>
						</div>
						<ul className="space-y-2 text-sm text-white/80 sm:text-base">
							{item.highlights.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
}
