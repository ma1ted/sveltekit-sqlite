import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const headers = { "access-control-allow-origin": "*" };

export async function POST({ request }) {
	// Should contain the title and content of the post a user wants to create.
	const newPostDetails = await request.json();

	if (!newPostDetails.title || !newPostDetails.content) {
		return {
			status: 400,
			headers,
			body: { success: false, error: "Title and content are required" }
		};
	}

	if (await prisma.post.findUnique({ where: { title: newPostDetails.title } })) {
		return {
			status: 403,
			headers,
			body: { success: false, error: "Post already exists" }
		};
	}

	const newPost = await prisma.post.create({
		data: {
			title: newPostDetails.title,
			content: newPostDetails.content
		}
	});

	return {
		status: 200,
		headers,
		body: { newPost }
	};
}
