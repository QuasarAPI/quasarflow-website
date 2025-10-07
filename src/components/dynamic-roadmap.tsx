'use client'

import React, { useState, useEffect } from 'react'

interface RoadmapItem {
  id: string
  quarter: string
  year: string
  title: string
  description: string
  items: readonly {
    name: string
    description: string
  }[]
  status: 'completed' | 'inProgress' | 'planned'
  percentComplete: number
  dateRange: string
}

interface RoadmapProps {
  items: readonly RoadmapItem[]
}

const statusConfig = {
  completed: {
    label: 'Completed',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-800 dark:text-green-300',
    dotColor: 'bg-green-500',
    borderColor: 'border-green-200 dark:border-green-800',
    animate: false,
  },
  inProgress: {
    label: 'In Progress',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    textColor: 'text-yellow-800 dark:text-yellow-300',
    dotColor: 'bg-yellow-500',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    animate: true,
  },
  planned: {
    label: 'Planned',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-800 dark:text-purple-300',
    dotColor: 'bg-purple-500',
    borderColor: 'border-purple-200 dark:border-purple-800',
    animate: false,
  },
}

const RoadmapCard = ({
  item,
  isLeft,
  index,
}: {
  item: RoadmapItem
  isLeft: boolean
  index: number
}) => {
  const statusInfo = statusConfig[item.status]
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setIsVisible(true)
      },
      100 + index * 200,
    ) // Staggered animation

    return () => clearTimeout(timeout)
  }, [index])

  return (
    <div
      className={`relative mb-16 opacity-0 transition-all duration-500 lg:mb-24 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10'}`}
    >
      {/* Timeline dot */}
      <div
        className={`absolute top-10 left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white shadow-md lg:block dark:border-slate-900 ${statusInfo.dotColor}`}
      ></div>

      <div className='grid gap-8 lg:grid-cols-2'>
        <div
          className={isLeft ? 'lg:pr-12 lg:text-right' : 'lg:order-2 lg:pl-12'}
        >
          <div className='inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300'>
            <span>
              {item.quarter} {item.year}
            </span>
          </div>
          <h3 className='mt-2 text-2xl font-bold text-slate-900 dark:text-white'>
            {item.title}
          </h3>
          <div className='mt-1 flex items-center justify-start lg:justify-end'>
            <span
              className={`inline-flex items-center rounded-full ${statusInfo.bgColor} px-2.5 py-0.5 text-xs font-medium ${statusInfo.textColor}`}
            >
              <span
                className={`mr-1.5 h-1.5 w-1.5 rounded-full ${statusInfo.dotColor} ${statusInfo.animate ? 'animate-pulse' : ''}`}
              ></span>
              {statusInfo.label}
            </span>
          </div>
        </div>

        <div className={isLeft ? 'lg:pl-12' : 'lg:order-1 lg:pr-12'}>
          <div
            className={`group relative overflow-hidden rounded-xl border ${statusInfo.borderColor} bg-white/90 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800/90`}
          >
            <div className='absolute -top-20 -right-20 h-40 w-40 rounded-full bg-indigo-50 opacity-20 transition-all duration-500 group-hover:scale-150 dark:bg-indigo-900/20'></div>
            <ul className='relative z-10 space-y-4'>
              {item.items.map((feature, idx) => (
                <li key={idx} className='flex items-start'>
                  <div className='flex-shrink-0 rounded-full bg-indigo-100 p-1.5 dark:bg-indigo-900/30'>
                    {item.status === 'completed' ? (
                      <svg
                        className='h-5 w-5 text-indigo-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className='h-5 w-5 text-indigo-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <circle cx='12' cy='12' r='6' strokeWidth='2'></circle>
                        {item.status === 'inProgress' && (
                          <circle
                            cx='12'
                            cy='12'
                            r='2'
                            fill='currentColor'
                          ></circle>
                        )}
                      </svg>
                    )}
                  </div>
                  <div className='ml-3'>
                    <p className='font-medium text-slate-900 dark:text-white'>
                      {feature.name}
                    </p>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className='mt-6 border-t border-slate-200 pt-4 dark:border-slate-700'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-slate-500 dark:text-slate-400'>
                  {item.dateRange}
                </span>
                {item.status !== 'planned' && (
                  <div className='flex items-center'>
                    <div className='flex h-3 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700'>
                      <div
                        className={`h-full rounded-full ${
                          item.status === 'completed'
                            ? 'bg-green-500'
                            : 'bg-yellow-500'
                        }`}
                        style={{ width: `${item.percentComplete}%` }}
                      ></div>
                    </div>
                    <span className='ml-2 text-sm font-medium text-slate-700 dark:text-slate-300'>
                      {item.percentComplete}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DynamicRoadmap: React.FC<RoadmapProps> = ({ items }) => {
  return (
    <div className='relative'>
      {/* Timeline Center Line */}
      <div className='absolute top-0 left-1/2 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 opacity-50 lg:block'></div>

      <div className='space-y-8'>
        {items.map((item, index) => (
          <RoadmapCard
            key={item.id}
            item={item}
            isLeft={index % 2 === 0}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default DynamicRoadmap
