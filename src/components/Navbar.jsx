import React, { useEffect, useState } from "react"
import "./css/Navbar.css"

const Navbar = () => {
	const [show, handleShow] = useState()

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 300) {
				handleShow(true)
			} else handleShow(false)
		})
		return () => {
			window.removeEventListener("scroll", () => {
				return
			})
		}
	}, [])

	return (
		<div className={`navbar ${show && "black-navbar"}`}>
			<img
				className='netflix-logo'
				src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
				alt='netflix logo'
			/>
			<img
				className='netflix-avatar'
				src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
				alt='netflix logo'
			/>
		</div>
	)
}

export default Navbar
