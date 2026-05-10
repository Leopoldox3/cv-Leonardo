import Rocket from "./rocket";
import Image from "next/image";

export default function CtaBanner() {
	return (
		<section id="contact" className="relative overflow-hidden py-20 sm:py-24">
			<div className="mx-auto flex flex-col max-w-6xl px-4 sm:px-6 lg:px-8 items-center">
				<Rocket />

				<h2 className="text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white text-center">
					<span className="bg-black/55 px-3 pb-1 rounded-md">Have a</span>{" "}
					<span className="bg-black/55 px-3 pb-1 rounded-md">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
							project
						</span>{" "}
						in mind?
					</span>
					<br />
					<span className="relative mt-3 inline-block bg-black/55 px-3 pb-1 rounded-md">
						{"let's talk!"}
						<span className="absolute -bottom-1 left-2 right-2 h-1 rounded bg-gradient-to-r from-cyan-400 to-emerald-400" />
					</span>
				</h2>
				<div className="mt-8 flex flex-wrap items-center gap-4 justify-center">
					<div className="ml-2 inline-flex items-center gap-3 rounded-lg bg-black/70 px-4 py-2 text-sm text-white/90 shadow">
						<span className="font-semibold">leonardopalacios.dev</span>
						<span className="h-4 w-px bg-white/30" />
						<a href="#top" className="underline decoration-emerald-400 underline-offset-4">
							back to top
						</a>
					</div>
				</div>

				<div className="pointer-events-auto absolute bottom-6 right-6 flex gap-3">
					<a href="https://github.com/Leopoldox3" target="_blank" rel="noreferrer"
						className="grid h-12 w-12 place-items-center rounded-xl bg-white text-black shadow" aria-label="GitHub">
						<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
							<path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.77-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.28 1.23a11.4 11.4 0 0 1 5.97 0c2.28-1.55 3.28-1.23 3.28-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.47 5.94.44.38.82 1.12.82 2.26v3.35c0 .32.21.7.83.58A12 12 0 0 0 12 .5z" />
						</svg>
					</a>
					<a href="https://www.linkedin.com/in/leonardopal/" target="_blank" rel="noreferrer"
						className="grid h-12 w-12 place-items-center rounded-xl bg-white text-black shadow" aria-label="LinkedIn">
						<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
							<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.3c0-2-.03-4.6-2.8-4.6-2.8 0-3.23 2.2-3.23 4.5V24h-4V8z" />
						</svg>
					</a>
					<a href="mailto:leopoldox3.lpa@gmail.com"
						className="grid h-12 w-12 place-items-center rounded-xl bg-white text-black shadow" aria-label="Gmail">
						<Image src="/icons/gmail.svg" alt="Gmail" width={24} height={24} className="h-6 w-6" />
					</a>
				</div>
			</div>
		</section>
	);
}
