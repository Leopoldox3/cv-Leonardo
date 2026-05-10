"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export default function Hero() {
	const { language } = useLanguage();

	return (
		<section className="py-16">
			<div className="mx-auto max-w-6xl px-4">
				<div>
					<div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-1 ring-border sm:h-48 sm:w-48 lg:ml-auto">
						<Image src="/projects/LEO.png" alt="Leonardo" fill className="object-cover" priority />
					</div>
					<h1 className="mt-10 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
						{language === "en" ? "Hello, I'm " : "Hola, soy "}
						<span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
							Leonardo
						</span>
					</h1>

					<p className="mt-6 text-xl font-mono text-white">
						Software Developer • Mobile, Web, Backend & AI • Lima, Perú
					</p>
					<p className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg">
						{language === "en"
							? "I build reliable software products end-to-end, from user-facing apps to backend systems and documentation-aware AI assistants."
							: "Construyo productos de software robustos de punta a punta, desde apps para usuarios hasta sistemas backend y asistentes de IA para documentación."}
					</p>

					<div className="mt-6 flex gap-3">
						<a href="#contact">
							<Button
								className="
								relative overflow-hidden
								text-white font-semibold
								rounded-lg px-6 py-3
								bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400
								[background-size:300%_300%]
								animate-gradient-x"
							>
								{language === "en" ? "Let's talk" : "Hablemos"}
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
