import './header.css'
import { FiSearch } from "react-icons/fi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { IoIosArrowDown, IoMdPin } from "react-icons/io";
const Header = () => {
    return (    
        <div className='max-width header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/800px-Zomato_Logo.svg.png?20220328090416" alt="Zomato-logo" className="header-logo" />
            <div className='header-right'>    
                <div className='header-location-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-icon-name'>
                            {/* <i className="fi fi-rr-marker absolute-center location-icon"></i> */}
                            <i className='absolute-center location-icon'><IoMdPin/></i>
                            <div>Mumbai</div>
                        </div>
                        {/* <i className="fi fi-rr-caret-down absolute-center"></i> */}
                        <i className='absolute-center'><AiOutlineCaretDown/></i>
                    </div>
                    <div className='location-search-separator'></div>
                    <div className='header-searchBar'>
                        {/* <i className="fi fi-rr-search absolute-center search-icon" ></i> */}
                        <i className='absolute-center search-icon'><FiSearch/></i>
                        <input type="text" placeholder='Search for restaurant, cuisine or a dish' className='search-input' />
                    </div>
                </div>
                <div className='profile-wrapper'>  
                    <img src="https://b.zmtcdn.com/data/user_profile_pictures/d9d/30495eabc70cecdf9a6138197835cd9d.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="Profile" className='header-profile-image' />
                    <span className='header-username'>Kakashi</span>
                    {/* <i className="fi fi-rr-angle-small-down absolute-center profile-option-icon"></i> */}
                    <i className='absolute-center profile-option-icon'><IoIosArrowDown/></i>
                </div>
       </div>
        </div>
    );
}
 
export default Header;

