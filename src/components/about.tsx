"use client";

import { useLanguage } from "@/components/language-provider";

export default function About() {
	const { language } = useLanguage();
	const cvHref = "/cv.pdf";
	const cvName = "Leonardo_Palacios_CV.pdf";

	return (
		<section id="about" className="scroll-mt-24 py-16 flex flex-col items-center text-center">
			<h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-5xl font-extrabold text-transparent">
				{language === "en" ? "About me" : "Sobre mí"}
			</h2>
			<div className="bg-[#10111a] px-4 py-2 rounded-lg font-mono text-lg text-white mb-6 inline-block shadow">
				Leonardo Palacios, 31 | {language === "en" ? "Current role" : "Rol actual"}: <span className="font-bold">Software Developer</span>
			</div>
			<div className="space-y-6 max-w-2xl">
				<p className="text-lg font-mono text-white sm:text-xl">
					{language === "en" ? "I\'m a Peruvian " : "Soy un "}
					<span className="rounded bg-[#4de1c6] px-2 py-1 text-black">
						{language === "en" ? "software engineer" : "ingeniero de software peruano"}
					</span>
					 {language === "en" ? "based in Lima, focused on building scalable products with strong technical foundations." : "radicado en Lima, enfocado en crear productos escalables con bases tecnicas solidas."}
				</p>
				<p className="text-lg font-mono text-white sm:text-xl">
					{language === "en"
						? "Over 4+ years, I've delivered mobile, web, backend, and AI-powered solutions while working closely with product teams that value "
						: "En mas de 4 años, he entregado soluciones mobile, web, backend y con IA, trabajando de cerca con equipos de producto que valoran la "}
					<span className="rounded bg-[#4de1c6] px-2 py-1 text-black">
						{language === "en" ? "collaboration" : "colaboracion"}
					</span>{" "}
					{language === "en" ? "and " : "y el "}
					<span className="rounded bg-[#4de1c6] px-2 py-1 text-black">
						{language === "en" ? "continuous growth" : "crecimiento continuo"}
					</span>
					.
				</p>
			</div>
			<div className="mt-10">
				<div className="flex justify-center mt-2">
					<span className="text-[#4de1c6] text-3xl bounce-down">↓</span>
				</div>
				<a
					href={cvHref}
					download={cvName}
					className="font-mono text-2xl text-white underline decoration-[#4de1c6] underline-offset-4 transition-colors hover:text-[#4de1c6]"
				>
					{language === "en" ? "Download my resume" : "Descargar mi CV"}
				</a>
			</div>
		</section>
	);
}
