export default function About() {
	return (
		<section id="about" className="scroll-mt-24 py-16 flex flex-col items-center text-center">
			<h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-5xl font-extrabold text-transparent">About me</h2>
			<div className="bg-[#10111a] px-4 py-2 rounded-lg font-mono text-lg text-white mb-6 inline-block shadow">
				Leonardo Palacios, 31 | Current role: <span className="font-bold">Software Developer</span>
			</div>
			<div className="space-y-6 max-w-2xl">
				<p className="text-lg font-mono text-white sm:text-xl">
					I&apos;m a Peruvian <span className="rounded bg-[#4de1c6] px-2 py-1 text-black">software engineer</span>
					 based in Lima, focused on building scalable products with strong technical foundations.
				</p>
				<p className="text-lg font-mono text-white sm:text-xl">
					Over 4+ years, I&apos;ve delivered mobile, web, backend, and AI-powered solutions while working
					 closely with product teams that value <span className="rounded bg-[#4de1c6] px-2 py-1 text-black">collaboration</span> and <span className="rounded bg-[#4de1c6] px-2 py-1 text-black">continuous growth</span>.
				</p>
			</div>
			<div className="mt-10">
				<div className="flex justify-center mt-2">
					<span className="text-[#4de1c6] text-3xl bounce-down">↓</span>
				</div>
				<a
					href="/cv.pdf"
					download="Leonardo_Palacios_CV.pdf"
					className="font-mono text-2xl text-white underline decoration-[#4de1c6] underline-offset-4 transition-colors hover:text-[#4de1c6]"
				>
					Download my resume
				</a>
			</div>
		</section>
	);
}
