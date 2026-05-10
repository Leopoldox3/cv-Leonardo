"use client";

import { useLanguage } from "@/components/language-provider";

export default function LanguageToggle() {
	const { language, toggleLanguage } = useLanguage();

	return (
		<button
			type="button"
			onClick={toggleLanguage}
			className="group relative inline-flex h-10 w-24 items-center rounded-full border border-white/25 bg-white/5 p-1 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
			aria-label={language === "en" ? "Switch site language to Spanish" : "Cambiar idioma del sitio a inglés"}
		>
			<span
				className={`absolute top-1 h-8 w-[2.75rem] rounded-full bg-gradient-to-r from-cyan-400 to-green-400 shadow-[0_0_18px_rgba(45,212,191,0.45)] transition-transform duration-300 ${
					language === "en" ? "translate-x-0" : "translate-x-[2.75rem]"
				}`}
			/>
			<span className="relative z-10 flex w-full justify-between px-2 text-[11px] tracking-wide">
				<span className={language === "en" ? "text-black" : "text-white/80"}>EN</span>
				<span className={language === "es" ? "text-black" : "text-white/80"}>ES</span>
			</span>
		</button>
	);
}
