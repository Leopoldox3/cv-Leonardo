import Image from "next/image";

const brands = [
	{ src: "/brands/americatv.svg", name: "America TV" },
	{ src: "/brands/grupo-la-republica.svg", name: "Grupo La Republica" },
];

export default function Brands() {
	return (
		<section className="py-8">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
					{brands.map((brand) => (
						<Image
							key={brand.src}
							src={brand.src}
							alt={brand.name}
							width={160}
							height={40}
							className="h-8 w-auto sm:h-10"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
