import { navConstants } from '@/utils/constants'
import React from 'react'
import SideButton from './SideButton'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavControl = () => {
    const [selectedButton, setSelectedButton] = React.useState('')
    const path = usePathname()

    React.useEffect(() => {
        const selected = navConstants.find((item) => item.href === path)
        if (selected) {
          setSelectedButton(selected?.title)
        }
      }, [])

    const selectHandler = (selected: string): void => {
        if (selected !== selectedButton) {
          setSelectedButton(selected)
        }
      }
    return (
        <div className='my-0 mx-auto self-center'>
            <ul className='flex gap-2'>
                {navConstants.map(({ title, element, href }) => (
                    <Link key={title} href={href}>
                    <SideButton key={title} title={title} selected={selectedButton} onSetButton={() => selectHandler(title)}>
                        {element}
                    </SideButton>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default NavControl