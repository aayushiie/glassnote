import Layout from './Layout'
import EditPageButton from './EditPageButton'

export default function PageLayout({
  title,
  description,
  children,
  toc,
  githubPath,
}) {
  return (
    <Layout toc={toc}>
      <div className="page-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="page-content">
        {children}
      </div>

      {githubPath && (
        <EditPageButton githubPath={githubPath} />
      )}
    </Layout>
  )
}