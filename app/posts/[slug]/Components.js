import Image from 'next/image'
// import { PrintMarkdown } from '../../PrintMarkdown'

export const PostArticle = ({ title, image, content, isLoading }) => (
  <article className="md:col-span-3 lg:col-span-4 flex flex-col gap-4 md:max-w-prose md:mx-auto">
    {isLoading ? null : (
      <>
        <h1 className="h1">{title}</h1>
        {image && (
          <div style={{ position: 'relative' }} className="h-64 w-full relative">
            <Image
              src={image}
              alt=""
              priority
              fill
              sizes="400px, (min-width: 440px) 600px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        <div className="prose lg:prose-lg prose-cyan">
          { /* <PrintMarkdown markdown={content} /> */ }
          <p>{content}</p>
        </div>
      </>
    )}
  </article>
)