import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET({ params }) {
	// `params.title` comes from [title].js
	const post = await prisma.post.findUnique({ where: { title: params.title } });
	await prisma.$disconnect();

	if (post) {
		return { status: 200, body: { success: true, post } };
	} else {
		return { status: 404, body: { success: false, error: "Post not found" } };
	}
}
