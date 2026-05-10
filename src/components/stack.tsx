import { STACK } from "@/data/stack";
import Image from "next/image";

export default function Stack() {
	return (
		<section
			id="stack"
			className="scroll-mt-24 py-16 flex flex-col items-center text-center"
		>
			<h2 className="text-5xl mt-10 font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
				What I do
			</h2>

			<div className="mt-8 grid w-full max-w-5xl gap-4 md:grid-cols-2">
				{STACK.map((group) => {
					return (
						<div
							key={group.title}
							className="rounded-xl border border-white/15 bg-[#181A20]/90 p-4 shadow-sm shadow-cyan-400/40"
						>
							<h3 className="mb-3 text-base font-semibold text-white">
								{group.title}
							</h3>

							<div className="flex flex-wrap items-center justify-center gap-4">
								{group.items.map((item) => (
									<div key={item.name} className="flex w-24 flex-col items-center justify-center gap-1 px-1 py-1">
										{item.icon ? (
											<>
										<Image
											src={item.icon}
											alt={`${item.name} icon`}
											width={32}
											height={32}
											className="inline-block"
										/>
												<span className="text-xs text-white/85">{item.name}</span>
												{item.subtitle && (
													<span className="text-xs text-white/40">{item.subtitle}</span>
												)}
											</>
										) : (
											<span className="px-3 py-1 rounded-full border border-cyan-400/50 text-sm text-cyan-300 bg-cyan-400/10">
												{item.name}
											</span>
										)}
									</div>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
