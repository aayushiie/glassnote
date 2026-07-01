const REPO =
  "https://github.com/aayushiie/computer-vision-course/blob/main/src/posts"

export default function EditPageButton({ githubPath }) {
  return (
    <div className="edit-page">
      <a
        href={`${REPO}/${githubPath}`}
        target="_blank"
        rel="noreferrer"
      >
        Edit this post on GitHub
      </a>
    </div>
  )
}