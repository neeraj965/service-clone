 import './Scrollsection.css'

 export default function Scrollsection(){

    return(
        <div slider>
        <div className='scrollsection'>
        <div className='scrollimage'>
        <img src="https://img.freepik.com/free-photo/young-asian-woman-shopping-grocery-from-supermarket-cart_74190-10845.jpg?size=626&ext=jpg&ga=GA1.2.1913307347.1667763609" alt="" style={{height:'16rem',width:'33rem'}} />
        </div>
       
        
        <div className='scrollimage'>
        <img src="https://cdn.pixabay.com/photo/2015/05/15/10/01/advertise-768067__340.jpg" alt="" style={{position:'absolute',height:'16rem',width:'33rem',margin:'-16.2rem  33rem'}} />
        </div>


        <div className='scrollimage'>
        <img src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{height:'16rem',width:'27.5rem',margin:'-16.2rem 66rem',position:'absolute'}} />
        </div>

       </div>
       
       
        </div>
    )
 }

