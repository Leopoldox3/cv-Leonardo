"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";

const projectDescriptionsEs: Record<string, string> = {
	Panda:
		"Panda es una billetera electronica de GMoney S.A. en Peru que simplifica la gestion del dinero de forma segura. Permite recargar saldo, retirar efectivo, transferir a otros usuarios, pagar servicios y revisar balances en cualquier momento.",
	Kaixo:
		"Talk to the world es una plataforma de mensajeria instantanea que traduce automaticamente los mensajes al idioma elegido por cada usuario. Facilita conversaciones grupales, envio de archivos y guardado del historial en el idioma de cada persona.",
	"AI Support Bot":
		"Construi un bot de soporte con IA para documentacion usando React y Supabase, con pgvector para recuperacion semantica. Lo desplegue en AWS Amplify y lo potencie con Cohere para mejorar la traduccion de contexto y la calidad de respuestas.",
	"Gestor de Tareas":
		"Esta app de gestion de tareas ayuda a organizarse y mejorar la productividad al crear, editar, completar y eliminar tareas. Incluye vistas por categorias como Todas, Completadas y Pendientes para enfocarse en prioridades.",
};

export default function ProjectsCarousel() {
	const { language } = useLanguage();

	const autoScrollRef = useRef(
		AutoScroll({
			speed: 0.8,
			stopOnInteraction: true,
			stopOnMouseEnter: true,
		})
	);

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: "center",
			containScroll: "trimSnaps",
			dragFree: false,
			skipSnaps: false,
		},
		[autoScrollRef.current]
	);

	const [selected, setSelected] = useState(0);

	useEffect(() => {
		if (!emblaApi) return;

		const plugin = emblaApi.plugins().autoScroll;
		const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
		const onPointerDown = () => plugin?.stop();
		const onPointerUp = () => plugin?.play();
		const onSettle = () => plugin?.play();

		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
		plugin?.play();
		emblaApi.on("pointerDown", onPointerDown);
		emblaApi.on("pointerUp", onPointerUp);
		emblaApi.on("settle", onSettle);

		return () => {
			emblaApi.off("select", onSelect);
			emblaApi.off("reInit", onSelect);
			emblaApi.off("pointerDown", onPointerDown);
			emblaApi.off("pointerUp", onPointerUp);
			emblaApi.off("settle", onSettle);
		};
	}, [emblaApi]);

	return (
		<section id="projects" className="scroll-mt-24 py-16 flex flex-col items-center text-center">
			<h2 className="mb-10 text-center text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
				{language === "en" ? "Projects" : "Proyectos"}
			</h2>
			<div className="mb-10 max-w-2xl">
				<p className="text-lg font-mono text-white sm:text-xl">
					{language === "en"
						? "I build production-ready software products with focus on maintainability, clean architecture, and fast iteration. These projects reflect real execution across product, engineering, and delivery."
						: "Construyo productos de software listos para produccion, con enfoque en mantenibilidad, arquitectura limpia e iteracion rapida. Estos proyectos reflejan ejecucion real en producto, ingenieria y entrega."}
				</p>
			</div>

			<div className="relative">
				<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-48 bg-gradient-to-r from-[#0b0f1a] via-[#0b0f1a]/90 to-transparent" />
				<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-48 bg-gradient-to-l from-[#0b0f1a] via-[#0b0f1a]/90 to-transparent" />

				<div ref={emblaRef} className="overflow-hidden px-4 sm:px-6 lg:px-8">
					<div
						className="
              flex gap-8 lg:gap-12 py-2
              before:content-[''] before:flex-none before:w-8  lg:before:w-12
              after:content-['']  after:flex-none  after:w-8   lg:after:w-12
            "
					>
						{PROJECTS.map((p, idx) => {
							const isActive = selected === idx;

							return (
								<article
									key={p.name}
									className={[
										"relative shrink-0 box-border min-w-0",
										"flex-[0_0_70%] md:flex-[0_0_46%] lg:flex-[0_0_34%]",
										"animate-card-in transition-all duration-300 will-change-transform hover:-translate-y-1",
										isActive ? "opacity-100" : "opacity-60",
										'[&[aria-hidden="true"]]:opacity-40 [&[aria-hidden="true"]]:pointer-events-none',
									].join(" ")}
									style={{ animationDelay: `${idx * 120}ms` }}
								>
									<div
										className={[
											"w-full rounded-3xl p-[1.5px] box-border",
											isActive
												? "bg-gradient-to-r from-cyan-400/60 via-blue-500/50 to-emerald-400/60 shadow-[0_12px_45px_rgba(0,0,0,.5)]"
												: "bg-white/8",
										].join(" ")}
									>
										<div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0f141b]">
											{p.image && (
												<div className="relative w-full h-85">
													<Image
														src={p.image}
														alt={p.name}
														fill
														sizes="(min-width:1024px) 34vw, (min-width:768px) 46vw, 70vw"
														className="object-cover"
														priority={idx === 0}
													/>
													<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f141b] via-transparent to-transparent opacity-80" />
												</div>
											)}

											<div className="relative z-0 px-6 pb-8 pt-6 lg:px-8">
												<h3 className="text-3xl font-extrabold tracking-tight text-white">{p.name}</h3>
												<p className="mt-3 text-[15px] leading-7 text-white/75">
													{language === "en" ? p.description : (projectDescriptionsEs[p.name] ?? p.description)}
												</p>
												<div className="mt-5 flex flex-wrap gap-2">
													{p.link ? (
														<a
															href={p.link}
															target="_blank"
															rel="noreferrer"
															className="rounded-md border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
														>
															{language === "en" ? "Live project" : "Proyecto en vivo"}
														</a>
													) : null}
													{p.repo ? (
														<a
															href={p.repo}
															target="_blank"
															rel="noreferrer"
															className="rounded-md border border-white/25 bg-white/5 px-3 py-1 text-xs font-medium text-white/90"
														>
															{language === "en" ? "Repository" : "Repositorio"}
														</a>
													) : null}
												</div>
											</div>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
