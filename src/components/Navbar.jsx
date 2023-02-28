import "./Navbar.css";
import { MdLocationOn } from "react-icons/md";
import {FaSearch} from 'react-icons/fa'
import {MdKeyboardVoice} from 'react-icons/md'
import {BsFillBellFill} from 'react-icons/bs'
import {HiShoppingCart} from 'react-icons/hi'
export default function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar-location-icon">
        {" "}
        <MdLocationOn
          style={{
            fontSize: "1.8rem",
            position: "absolute",
            color: "white",
            marginTop: "-1.4rem",
            marginLeft: "-0.3rem",
          }}
        />
      </span>
      <span className="loaction-city">Neeraj pratap singh Gorakhpur, Uttar Pradesh...</span>
      <span className='search'><FaSearch style={{color:'teal',margin:'0.9rem 0.5rem',fontSize:'1.4rem'}}/>
      <span style={{ opacity:'0.4',fontSize:'1.2rem',fontWeight:'500',position:'absolute',margin:'0.8rem 5rem'}}>Search for Products....</span>
      </span>
      <MdKeyboardVoice style={{color:'white',fontSize:'2.3rem',margin:'4.3rem 91rem',position:'absolute'}}/>
      <BsFillBellFill style={{cursor:'pointer',color:'white',margin:'0.5rem 85.5rem',fontSize:'2rem'}} />
      <HiShoppingCart style={{cursor:'pointer',color:'white',margin:'-2.5rem 90rem',position:'absolute',fontSize:'2rem'}}/>
      <span style={{margin:'-2.9rem 86.6rem',textAlign:'center',height:'1.5rem',width:'1.5rem',borderRadius:'50%',backgroundColor:'red',position:'absolute',fontWeight:'700'}}>0</span>
      </div>
  );
}
