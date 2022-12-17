export async function fetchPostList(supabase) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.log(error)
    throw error.message
  }
  return data
}
