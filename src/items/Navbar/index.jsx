import React from 'react'
import Card from '../Card'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Card classname={'gap-4'}>
        <div>
            <Link to={'/'}>Home</Link>
        </div>
    </Card>
  )
}

export default Navbar