import { ChevronDown } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { sidebarItems } from '../data/sidebar'

export default function Sidebar() {
  const [open, setOpen] = useState(() => {
    const saved = localStorage.getItem('sidebar-open')

    return saved
      ? JSON.parse(saved)
      : {
          'Lectures': true,
          Guides: true,
        }
  })

  useEffect(() => {
    localStorage.setItem('sidebar-open', JSON.stringify(open))
  }, [open])

  return (
    <aside className="sidebar">
      <div className="logo"><NavLink to={"/"}>glassnote</NavLink></div>

      <div className="sidebar-sections">
        {sidebarItems.map((section) => (
          <div key={section.title} className="sidebar-group">
            <button
              className="accordion-btn"
              onClick={() =>
                setOpen((prev) => ({
                  ...prev,
                  [section.title]: !prev[section.title],
                }))
              }
            >
              {section.title}

              <ChevronDown
                size={14}
                className={clsx(
                  'accordion-icon',
                  open[section.title] && 'rotate'
                )}
              />
            </button>

            <div
              className={clsx(
                'accordion-content',
                open[section.title] && 'show'
              )}
            >
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    clsx('sidebar-link', isActive && 'active-link')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}