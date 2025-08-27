import { log } from "console"
import { comments } from "./data"
import { NextRequest } from "next/server"


export async function GET(request: NextRequest) {
    const keyword = request.nextUrl.searchParams.get('find')
    return Response.json(comments.filter(comment => comment.text.toLowerCase().includes(keyword?.toLowerCase() ?? '')))
}
export async function POST(request: Request) {
    const comment = await request.json()
    comments.push({
        id: (comments.length + 1).toString(),
        text: comment.text
    })
    console.log(comments)
    return new Response('Comment added', { status: 201 })

}