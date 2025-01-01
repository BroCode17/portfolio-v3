'use client'
import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

interface DownloadButtonClientProps {
  fileUrl: string
  fileName: string
  children: ReactNode
}

export const DownloadButtonClient: FC<DownloadButtonClientProps> = ({ fileUrl, fileName, children }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(fileUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  return (
    <div className={cn(`mt-4 border-gray-500/20 space-y-3`,'')}onClick={handleDownload} role="button" tabIndex={0}>
      {children}
    </div>
  )
}

