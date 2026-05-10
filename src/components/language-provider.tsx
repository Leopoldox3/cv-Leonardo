"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "en" | "es";

type LanguageContextValue = {
	language: Language;
	toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>("en");

	useEffect(() => {
		const saved = window.localStorage.getItem("site-language");
		if (saved === "en" || saved === "es") {
			setLanguage(saved);
		}
	}, []);

	const toggleLanguage = () => {
		setLanguage((prev) => {
			const next = prev === "en" ? "es" : "en";
			window.localStorage.setItem("site-language", next);
			return next;
		});
	};

	const value = useMemo(() => ({ language, toggleLanguage }), [language]);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used inside LanguageProvider");
	}
	return context;
}
