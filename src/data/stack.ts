type StackItem = {
	name: string;
	icon?: string;
	subtitle?: string;
};

type StackGroup = {
	title: string;
	items: StackItem[];
};

export const STACK: StackGroup[] = [
	{
		title: "Mobile",
		items: [
			{ name: "Flutter", icon: "/icons/flutter.png" },
			{ name: "Dart", icon: "/icons/dart.svg" },
			{ name: "Kotlin", icon: "/icons/kotlin.png" },
			{ name: "Swift", icon: "/icons/swift.png" },
		],
	},
	{
		title: "Web",
		items: [
			{ name: "TypeScript", icon: "/icons/typescript.png" },
			{ name: "React", icon: "/icons/react.png" },
			{ name: "Tailwind", icon: "/icons/tailwind.png" },
		],
	},
	{
		title: "Cloud",
		items: [
			{ name: "AWS", icon: "/icons/aws.png" },
		],
	},
	{
		title: "Backend",
		items: [
			{ name: "Node.js", icon: "/icons/nodejs.svg" },
			{ name: "Python", icon: "/icons/python.svg" },
			{ name: "PHP", icon: "/icons/php.svg" },
		],
	},
];
