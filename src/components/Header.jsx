import logo from '../assets/netflixlogo.png'
const Header = () => {
    return (
        <div className='bg-gradient-to-b from-black'>
            <img className='absolute w-[350px] mt-[-50px] ml-[-50px]' src={logo} alt='netflix-logo' />
        </div>
    )
}

export default Header