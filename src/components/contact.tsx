"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
	return (
		<div className="max-w-2xl mx-auto mt-16 p-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur">
			<h2 className="text-2xl font-bold mb-6 text-center text-white">
				¿Tienes un proyecto en mente?
			</h2>

			<form className="space-y-4">
				<label htmlFor="contact-name" className="sr-only">
					Tu nombre
				</label>
				<Input
					id="contact-name"
					autoComplete="name"
					placeholder="Tu nombre"
					className="bg-black/60 text-white placeholder:text-white/40 border-white/10 
                     focus-visible:ring-emerald-400 focus-visible:ring-offset-0"
				/>
				<label htmlFor="contact-email" className="sr-only">
					Tu email
				</label>
				<Input
					id="contact-email"
					type="email"
					autoComplete="email"
					placeholder="Tu email"
					className="bg-black/60 text-white placeholder:text-white/40 border-white/10 
                     focus-visible:ring-emerald-400 focus-visible:ring-offset-0"
				/>
				<label htmlFor="contact-message" className="sr-only">
					Cuentame tu idea
				</label>
				<Textarea
					id="contact-message"
					placeholder="Cuéntame tu idea"
					className="bg-black/60 text-white placeholder:text-white/40 border-white/10 
                     focus-visible:ring-emerald-400 focus-visible:ring-offset-0 min-h-[160px]"
				/>

				<Button
					type="submit"
					className="w-full mt-3 rounded-xl bg-white text-black hover:bg-white/90"
				>
					Enviar
				</Button>
			</form>
		</div>
	);
}
