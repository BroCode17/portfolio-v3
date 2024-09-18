"use client"

import React, { useEffect, useRef, useState } from 'react'

export default function Component() {
  const [isFixed, setIsFixed] = useState(false)
  const leftContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (leftContainerRef.current) {
        const rect = leftContainerRef.current.getBoundingClientRect()
        setIsFixed(rect.top <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen pt-5">
      {/* Left container */}
      <div className="w-64 mr-4">
        <div
          ref={leftContainerRef}
          className={`w-64 bg-gray-100 h-[200px] overflow-y-auto ${
            isFixed ? 'fixed top-0' : 'absolute'
          }`}
          style={{ top: isFixed ? '0' : '20px' }}
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
            <nav>
              <ul className="space-y-2">
                {[...Array(10)].map((_, i) => (
                  <li key={i}>
                    <a href={`#section-${i + 1}`} className="block py-2 px-4 rounded hover:bg-gray-200">
                      Section {i + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Right scrollable container */}
      <div className="flex-1">
        <main className="p-8">
          <h1 className="text-3xl font-bold mb-6">Main Content</h1>
          {[...Array(20)].map((_, i) => (
            <section key={i} id={`section-${i + 1}`} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
              <p className="mb-4">
                This is the content for section {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc
                euismod nunc.
              </p>
              <p>
                Phasellus euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
                nunc euismod nunc. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae
                tincidunt nisl nunc euismod nunc.
              </p>
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}