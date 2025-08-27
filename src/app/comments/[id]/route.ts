import { log } from "console";
import { comments } from "../data";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const comment = comments.find(comment => comment.id === id);
    return Response.json(comment ?? { message: 'Comment not found' }, { status: comment ? 200 : 404 });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const updatedComment = await request.json();
    const commentIndex = comments.findIndex(comment => comment.id === id);
    if (commentIndex > -1) {
        comments[commentIndex].text = updatedComment.text;
        log(comments);
        return new Response('Comment updated', { status: 200 });
    } else {
        return new Response('Comment not found', { status: 404 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const commentIndex = comments.findIndex(comment => comment.id === id);
    if (commentIndex > -1) {
        comments.splice(commentIndex, 1);
        log(comments);
        return new Response('Comment deleted', { status: 200 });
    } else {
        return new Response('Comment not found', { status: 404 });
    }
}