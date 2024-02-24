import { Link } from 'react-router-dom'

/*Interface*/
import { INetwork } from '../models/user.interface'

/*styles*/
import '../styles/trebol.css'

const Trebol = ({ net }: { net: INetwork }) => {

  return (
    <div className='w-full max-w-[22rem]'>
      {net &&
        <Link to={net.url} target='_blank' className='w-full h-full' >
          <div id='trebol' className=''>
            <div className='img'>
              <img src={`/assets/icons/icon${net.icon}.png`} alt="" />
            </div>
            <div className='title'>
              {net.name}
            </div>
          </div>
        </Link>
      }
    </div>
  )
}

export default Trebol