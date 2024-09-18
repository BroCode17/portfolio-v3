'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

interface CodeSnippetProps {
  code: string
  language: string
  title?: string
}

export default function CodeSnippet({ code, language, title = 'Code Snippet' }: CodeSnippetProps) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    Prism.highlightAll()
  }, [code, language])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Card className="w-full mx-auto bg-transparent rounded-none  border-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        <Button
          variant="outline"
          size="sm"
          className="h-8 w-8 p-0  custom-border rounded-none "
          onClick={copyToClipboard}
          aria-label={isCopied ? "Copied" : "Copy code"}
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4 " color='#6b7280' />
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <pre className="p-4 rounded overflow-x-auto code">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </CardContent>
    </Card>
  )
}