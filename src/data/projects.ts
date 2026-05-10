export type Project = {
	name: string;
	description: string;
	image?: string;  // ruta en /public
	link?: string;
	repo?: string;
	imageSize?: { width: number; height: number };
};

export const PROJECTS: Project[] = [
	{
		name: "Panda",
		description: "Panda is an electronic wallet app from GMoney S.A., Peru, that makes managing money simple and secure. With features for reloading funds, withdrawing cash, transferring money to others, paying services, and checking balances at any time, it offers convenience tailored to the Peruvian digital finance landscape.",
		image: "/projects/panda.webp",
		imageSize: { width: 800, height: 600 },
	},
	{
		name: "Kaixo",
		description: "Talk to the world is an instant messaging platform that automatically translates messages into each user’s selected language. You just install the app, choose your language, and chat without worrying about translation. It supports group conversations, media files, and saves chat history in each user's language. Designed to simplify both casual and business conversations, Kaixo removes language obstacles, fostering smoother communication worldwide..",
		image: "/projects/kaixo.png",
		imageSize: { width: 800, height: 600 },
	},
	{
		name: "AI Support Bot",
		description: "I built an AI support bot for documentation with React and Supabase, using pgvector for semantic retrieval. It was deployed on AWS Amplify and powered by a robust system prompt and Cohere to improve embedding-based context translation and answer quality.",
		image: "/projects/ai-support-bot.webp",
		repo: "https://github.com/Leopoldox3",
		imageSize: { width: 800, height: 600 },
	},
	{
		name: "Gestor de Tareas",
		description: "This Task Management App helps users stay organized and boost productivity by providing a simple way to create, track, and complete tasks. Users can easily add new tasks, mark them as completed, or edit and delete them as needed. Tasks are displayed in a clean, categorized list (All, Completed, Pending), making it easy to filter and focus on priorities.",
		image: "/projects/task_app.png",
		repo: "https://github.com/Leopoldox3",
	},

];
