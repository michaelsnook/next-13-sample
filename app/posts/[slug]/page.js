import createClient from '../../../utils/supabase-server'
import { fetchPostList } from '../../../utils/fetchers'
import { PostArticle } from './Components'

export default async function Page({ params }) {
  const { slug } = params
  const supabase = createClient()
  const data = await fetchPostList(supabase)
  const post = data.find(d => d.slug = slug)
  return <PostArticle { ...post } />
}