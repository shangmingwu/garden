import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData }: QuartzComponentProps) {
  const title = fileData.frontmatter?.title

  // do not render title for index pages
  if (fileData.slug === "index") {
    return null
  }

  if (title) {
    return <h1 class="article-title">{title}</h1>
  } else {
    return null
  }
}
ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
