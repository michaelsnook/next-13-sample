import createClient from '../../utils/supabase-server'
import { fetchPostList } from '../../utils/fetchers'
import PostList from './Components'

export default async function Page() {
  const supabase = createClient()
  const data = await fetchPostList(supabase)

  return <PostList posts={data.slice(0,10)} />
}
