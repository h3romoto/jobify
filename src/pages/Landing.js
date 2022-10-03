import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
          Cray small batch lo-fi flannel unicorn, craft beer jianbing next level 
          actually hot chicken freegan vice vexillologist tbh taiyaki. 
          Swag tonx kogi copper mug, before they sold out tofu hell of. 
          Single-origin coffee readymade ugh selfies. Gastropub hashtag 
          asymmetrical cold-pressed, cornhole man bun woke palo santo.
          </p>

          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='main-img' />
      </div>
    </Wrapper>
  )
}


export default Landing