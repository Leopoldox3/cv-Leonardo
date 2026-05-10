"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useSectionObserver } from "@/lib/useSectionObserver";

const NAV_LINKS = [
	{ href: "#about", id: "about", label: "About" },
	{ href: "#experience", id: "experience", label: "Experience" },
	{ href: "#stack", id: "stack", label: "Stack" },
	{ href: "#projects", id: "projects", label: "Projects" },
	{ href: "#contact", id: "contact", label: "Contact" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const ids = useMemo(() => NAV_LINKS.map((link) => link.id), []);
	const active = useSectionObserver(ids);

	return (
		<header className="relative sticky top-0 z-50 w-full bg-grid-soft">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				<Link href="/" className="font-semibold text-white">Leonardo.dev</Link>

				<nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm md:flex">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={active === link.id ? "text-white" : "text-white hover:text-white/80"}
							aria-current={active === link.id ? "location" : undefined}
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="md:hidden">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" aria-label="Open menu">
								<Menu />
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<nav aria-label="Mobile navigation" className="mt-10 grid gap-4">
								{NAV_LINKS.map((link) => (
									<a
										key={link.href}
										href={link.href}
										onClick={() => setOpen(false)}
										className="text-lg text-white"
										aria-current={active === link.id ? "location" : undefined}
									>
										{link.label}
									</a>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
