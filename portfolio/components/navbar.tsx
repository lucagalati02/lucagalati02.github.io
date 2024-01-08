import React from 'react'
import {Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = [
		"Education",
		"Projects",
		"Skills",
		"Contact"
	]

  return (
	<Nav onMenuOpenChange={setIsMenuOpen}>
		<NavbarContent className="sm:hidden" justify="start">
			<NavbarMenuToggle
			aria-label={isMenuOpen ? "Close menu" : "Open menu"}
			className="sm:hidden"
			/>
      	</NavbarContent>

		<NavbarContent className="hidden sm:flex gap-4" justify="start">
			<NavbarBrand>
				<Link href='/'>
					<img src="/logo.svg" alt="logo" width='40rem'/>
				</Link>
			</NavbarBrand>
		</NavbarContent>
		<NavbarContent className="sm:hidden gap-4" justify="center">
			<NavbarBrand>
				<Link href='/'>
					<img src="/logo.svg" alt="logo" width='40rem'/>
				</Link>
			</NavbarBrand>
		</NavbarContent>

		<NavbarContent className="hidden sm:flex gap-4" justify="center">
			<NavbarItem>
				<Link href='/Education' style={{color: '#8cbeb6e7'}} className='font-extrabold'>Education</Link>
			</NavbarItem>
			<NavbarItem>
				<Link href='/Projects' style={{color: '#8cbeb6e7'}} className='font-extrabold'>Projects</Link>
			</NavbarItem>
			<NavbarItem>
				<Link href='/Skills' style={{color: '#8cbeb6e7'}} className='font-extrabold'>Skills</Link>
			</NavbarItem>
			<NavbarItem>
				<Link href='/Contact' style={{color: '#8cbeb6e7'}} className='font-extrabold'>Contact</Link>
			</NavbarItem>
		</NavbarContent>

		<NavbarContent justify='end'>
			<NavbarItem>
				<Button isIconOnly radius='full'>
					<img src="linkedin.svg" width='40rem' />
				</Button>
			</NavbarItem>
			<NavbarItem>
				<Button isIconOnly radius='full'>
					<img src="github.svg" width='40rem' />
				</Button>
			</NavbarItem>
		</NavbarContent>
		<NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
				className="w-full font-extrabold"
				href={`/${item}`}
				size="lg"
				style={{color: '#8cbeb6e7'}}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
	</Nav>
  )
}

export default Navbar