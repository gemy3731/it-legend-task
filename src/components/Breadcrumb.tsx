import Link from 'next/link'
import React from 'react'

interface BreadcrumbProps {
    breadcrumbItems: {name: string, href: string,icon?: string}[]
}
const Breadcrumb = ({breadcrumbItems}:BreadcrumbProps) => {
  return (
    <div className='breadcrumb'>
        {breadcrumbItems.map((item, index) => (
            <Link href={item.href} key={index}>
                {item.icon && <item.icon/>}
                <span>{item.name}</span>
            </Link>
        ))}
    </div>
  )
}

export default Breadcrumb