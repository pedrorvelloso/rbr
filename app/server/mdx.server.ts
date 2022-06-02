import { bundleMDX } from 'mdx-bundler'

export const compileMdx = async (source: string) => {
  const [{ default: remarkGfm }] = await Promise.all([
    await import('remark-gfm'),
  ])

  const result = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [...(options.rehypePlugins ?? [])]

      return options
    },
  })

  const { code, frontmatter } = result

  return { code, frontmatter }
}
