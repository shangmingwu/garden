import { QuartzComponentConstructor } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer() {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer>
        <hr />
        <p>This site is a part of <a href="https://ring.simonwu.dev">Cozyring</a>.
        <br/><a href="https://ring.simonwu.dev/prev/sw">Previous</a> - <a href="https://ring.simonwu.dev/random/sw">Random</a> - <a href="https://ring.simonwu.dev/next/sw">Next</a></p>
        <p>
          © Simon Wu {year}. Created with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>.
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
