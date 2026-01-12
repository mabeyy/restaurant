'use client'

import { useEffect, useState } from 'react'
import { CalendarClockIcon, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import MenuDropdown from '@/components/menu-dropdown'
import MenuNavigation from '@/components/menu-navigation'
import type { NavigationSection } from '@/components/menu-navigation'
import { cn } from '@/lib/utils'
import BistroLogo from '@/assets/svg/bistro-logo'

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-17.5 w-full border-b transition-all duration-300',
        {
          'bg-background shadow-md': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='#' className='flex items-center gap-3'>
          <BistroLogo />
          <span className='text-primary text-[20px] font-semibold'>DIBS</span>
        </a>

        {/* Navigation */}
        <MenuNavigation
          navigationData={navigationData}
          className='max-lg:hidden [&_[data-slot="navigation-menu-list"]]:gap-1'
        />

        {/* Actions */}
        <div className='flex gap-4'>
          {/* Desktop Reserve Button */}
          <Button asChild size='lg' variant='default' className='rounded-full max-sm:hidden'>
            <a href="#menu">Reserve</a>
          </Button>

          {/* Mobile Buttons */}
          <div className='flex gap-3'>
            {/* Mobile Reserve with Tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild size='lg' variant='default' className='rounded-full sm:hidden'>
                  <a href="#menu">
                    <CalendarClockIcon />
                    <span className='sr-only'>Reserve</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Reserve</TooltipContent>
            </Tooltip>

            {/* Menu Dropdown for small screens */}
            <MenuDropdown
              align='end'
              navigationData={navigationData}
              trigger={
                <Button variant='outline' size='icon' className='rounded-full lg:hidden'>
                  <MenuIcon />
                  <span className='sr-only'>Menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
