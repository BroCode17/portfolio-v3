import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { DownloadButtonClient } from './download-btn-client'

interface DownloadButtonProps {
  fileName: string
  label?: string
}

export const DownloadButton: FC<DownloadButtonProps> = ({ fileName, label = 'Download' }) => {
  const fileUrl = `/api/download?file=${encodeURIComponent(fileName)}`

  return (
    <DownloadButtonClient fileUrl={fileUrl} fileName={fileName}>
       <div className="flex items-center">
       <div className="h-3 w-3 rounded-full bg-gray-500/20 -ml-[6px] z-1"></div>
       <div className="h-[1px] w-10 bg-gray-500/20"></div>
        <div className="border border-gray-500/20 py-2 px-4 text-gray-500 hover:text-gray-100 transition-all hover:border-gray-100 font-popping-font flex items-center">
        <Download className="mr-2 h-4 w-4" />
        {label}
      </div>
       </div>
    </DownloadButtonClient>
  )
}

