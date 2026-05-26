import PageLayout from '../Components/PageLayout'

export default function M01c02() {
  return (
    <PageLayout
      title="What is Computer Vision?"
      description="Module 01: Chapter 02"
      toc={[
        { id: 'install', label: 'Install' },
        { id: 'run', label: 'Run Dev Server' },
      ]}
    >
      <section id="install" className="doc-block">
        <h2>Install</h2>

        {/* <pre>
          <code>npm install</code>
        </pre> */}
      </section>

      <section id="run" className="doc-block">
        <h2>Run Dev Server</h2>

        <pre>
          <code>npm run dev</code>
        </pre>
      </section>
    </PageLayout>
  )
}