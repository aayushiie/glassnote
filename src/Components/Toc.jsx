import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function Toc({ sections }) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        threshold: 0.4,
      }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <aside className="toc">
      <p className="toc-title">Table of Content</p>

      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={clsx('toc-link', active === section.id && 'active')}
        >
          {section.title}
        </a>
      ))}
    </aside>
  )
}