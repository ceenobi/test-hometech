import { Link } from "react-router-dom";

export default function Welcome () {
    return (
      <div className='bg-paper text-center d-flex justify-content-center align-items-center '>
        <div className='d-flex flex-column justify-content-between align-items-center'>
          <h1>Welcome to HomeTech</h1>
          <p>
            We protect your credentials from any form of shoulder surfing
            attacks
          </p>
          <div>
            <Link to='/register'>
              <button className='btnA mb-4'>Register</button>
            </Link>
            <Link to='/signin'>
              <button className='btnB'>Sign in</button>
            </Link>
          </div>
          <div className='d-flex justify-content-between'>
            <p className="text-start fw-bold">Privacy and Policy</p>
            <p className="text-end fw-bold">FAQ</p>
          </div>
        </div>
      </div>
    )
}