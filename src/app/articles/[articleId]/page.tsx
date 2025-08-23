import Link from 'next/link'
import React from 'react'

export default async function NewsArticle({ params, searchParams }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang: string }> }) {
    const { articleId } = await params
    const { lang = 'en' } = await searchParams
    return (
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>english</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>french</Link>
                <Link href={`/articles/${articleId}?lang=es`}>spanish</Link>
            </div>
        </div>
    )
}
