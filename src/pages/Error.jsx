import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section>
        <div className='error-center'>
        <h2>404</h2>
        <h3>Opps, This Page Is Not Found !!!</h3>
        <Link to={'/'} className='btn btn-primary'>Go Back To Home</Link>

        </div>
    </section>
  )
}
