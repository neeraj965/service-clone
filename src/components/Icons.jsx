import './Icons.css'
import {MdPhoneAndroid} from 'react-icons/md'
import {MdOutlineMonitor} from 'react-icons/md'
import {HiCurrencyRupee} from 'react-icons/hi'
import {CiBullhorn} from 'react-icons/ci'
import {ImNewspaper} from 'react-icons/im'
import {BiMessage} from 'react-icons/bi'
import {GiOfficeChair} from 'react-icons/gi'
import {VscFeedback} from 'react-icons/vsc'
import {ImFire} from 'react-icons/im'
import {HiLightBulb} from 'react-icons/hi'
import {MdOutlineWaterDrop} from 'react-icons/md'
import {AiFillRightCircle} from 'react-icons/ai'

export default function Icons(){

    return(

        <div className='icons-section'>
        <MdPhoneAndroid style={{cursor:'pointer',margin:'1.3rem 3rem',position:'absolute',fontSize:'4rem',color:'teal'}} />
        <span style={{position:'absolute',margin:'5rem 1.4rem',color:'teal'}}>Prepaid Mobile <br/><span style={{position:'absolute',margin:'0.1rem 1rem'}}>Recharge</span> </span>


        <MdOutlineMonitor style={{cursor:'pointer',margin:'1.3rem 28rem',fontSize:'4rem',color:'teal'}}/>
        <span style={{margin:"4rem -33rem",color:'teal'}}>DTH Recharge</span>

<HiCurrencyRupee style={{cursor:'pointer', margin:'1.3rem 56rem',position:'absolute',fontSize:'4rem',color:'teal'}}/>
<span style={{position:'absolute',margin:'5.5rem 57rem',fontSize:'',color:'teal'}}>Loans</span>


<CiBullhorn style={{cursor:'pointer',margin:'1.3rem 84rem', position:'absolute',fontSize:'4rem',color:'teal'}}/>
<span style={{color:'teal',margin:'5.5rem 84rem',position:'absolute'}}>Promotion</span>








<ImNewspaper style={{cursor:'pointer',position:'absolute',fontSize:'4rem',margin:'12rem 3rem',color:'teal'}}/>
<span style={{ color:'teal',position:'absolute',margin:'16rem 4rem'}}>News</span>



<BiMessage style={{cursor:'pointer', position:'absolute',color:'teal',margin:'12rem 28rem',fontSize:'4rem'}}/>
<span style={{position:'absolute',margin:'16rem 29rem',color:'teal'}}>Blog</span>
<span style={{fontWeight:'600',color:'teal',margin:'13rem 29rem',position:'absolute'}}>Blog</span>



<GiOfficeChair style={{cursor:'pointer',position:'absolute',margin:'12rem 56rem',fontSize:'4rem',color:'teal'}}/>
<span style={{position:'absolute',margin:'16rem 57rem',color:'teal'}}>Jobs</span>
     

<VscFeedback style={{color:'teal',margin:'12rem 84rem',position:'absolute',fontSize:'4rem'}}/>
<span style={{position:'absolute',color:'teal',margin:'16rem 83rem'}}>Anonymous <br/><span style={{margin:'0rem 0.8rem'}}>Feedback</span></span>








<ImFire style={{cursor:'pointer',position:'absolute',margin:'24rem 2rem',fontSize:'4rem',color:'teal'}}/>
<span style={{position:'absolute',margin:'29rem 1.3rem',color:'teal'}}>Gas Booking</span>



<HiLightBulb style={{cursor:'pointer',position:'absolute',margin:'23.6rem 28rem',fontSize:'5rem',color:'teal'}}/>
<span style={{position:'absolute',margin:'29rem 28rem',color:'teal'}}>Electricty Bill</span>



<MdOutlineWaterDrop style={{cursor:'pointer',margin:'24rem 56rem',position:'absolute',color:'teal',fontSize:'5rem'}}/>
<span style={{position:'absolute',margin:'29rem 56.5rem',color:'teal'}}>WaterBill</span>



<AiFillRightCircle style={{cursor:'pointer',position:'absolute',margin:'24rem 84rem',fontSize:'4rem',color:'teal'}}/>

<span style={{position:'absolute',color:'teal',margin:'28rem 85rem'}}>See More</span>

</div>





    )
}