import Sidebar from './Sidebar'
import { Menu, PanelRight } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

export default function Layout({ children, toc }) {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)

  return (
    <>
      {/* MOBILE TOP BAR */}

      <div className="mobile-topbar">
        <button
          className="mobile-menu-btn"
          onClick={() => {
            setLeftOpen((prev) => !prev)
            setRightOpen(false)
          }}
        >
          <Menu size={18} />
        </button>

        <button
  className="mobile-menu-btn"
  onClick={() => {
    setRightOpen((prev) => !prev)
    setLeftOpen(false)
  }}
>
          <PanelRight size={18} />
        </button>
      </div>

      {/* OVERLAY */}

      {(leftOpen || rightOpen) && (
        <div
          className="mobile-overlay"
          onClick={() => {
            setLeftOpen(false)
            setRightOpen(false)
          }}
        />
      )}

      <div className="layout">
        {/* DESKTOP SIDEBAR */}

        <div className="desktop-only">
          <Sidebar />
        </div>

        {/* MOBILE SIDEBAR */}

        <div
          className={clsx(
            'mobile-sidebar',
            leftOpen && 'mobile-sidebar-open'
          )}
        >
          <Sidebar />
        </div>

        {/* CONTENT */}

        <main className="content">{children}</main>

        {/* DESKTOP TOC */}

        <aside className="toc desktop-only">
          <p className="toc-heading">Table of Content</p>

          {toc?.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="toc-link"
            >
              {item.label}
            </a>
          ))}
        </aside>

        {/* MOBILE TOC */}

        <aside
          className={clsx(
            'mobile-toc',
            rightOpen && 'mobile-toc-open'
          )}
        >
          <p className="toc-heading">Table of Content</p>

          {toc?.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="toc-link"
              onClick={() => setRightOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </aside>
      </div>
    </>
  )
}