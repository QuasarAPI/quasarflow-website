'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language: string
  title?: string
  showLineNumbers?: boolean
  maxHeight?: string
}

export default function CodeBlock({
  code,
  language,
  title,
  showLineNumbers = true,
  maxHeight = '400px',
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className='relative rounded-lg bg-slate-900 shadow-2xl'>
      {/* Header */}
      <div className='flex items-center justify-between border-b border-slate-700 px-4 py-3'>
        <div className='flex items-center space-x-2'>
          <div className='flex space-x-2'>
            <div className='h-3 w-3 rounded-full bg-red-500'></div>
            <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
            <div className='h-3 w-3 rounded-full bg-green-500'></div>
          </div>
          {title && (
            <span className='ml-4 text-sm text-slate-400'>{title}</span>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className='flex items-center space-x-2 rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-300 transition-colors hover:bg-slate-700 hover:text-white'
        >
          <svg
            className='h-4 w-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {copied ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
              />
            )}
          </svg>
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Content */}
      <div style={{ maxHeight }} className='overflow-auto'>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          lineNumberStyle={{
            color: '#64748b',
            marginRight: '1rem',
            userSelect: 'none',
          }}
          codeTagProps={{
            style: {
              fontFamily:
                'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
