import Layout from './Layout'

export default function PageLayout({
  title,
  description,
  children,
  toc,
}) {
  return (
    <Layout toc={toc}>
      <div className="page-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="page-content">{children}</div>
    </Layout>
  )
}