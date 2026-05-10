export default function Footer() {
	return (
		<footer className="border-t bg-dots-dark">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex items-center justify-center">
				<p>© {new Date().getFullYear()} Leonardo Palacios</p>
			</div>
		</footer>
	);
}
