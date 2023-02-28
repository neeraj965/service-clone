
import Navbar from './components/Navbar'
import Scrollsection from './components/Scrollsection.jsx';
import Icons from './components/Icons.jsx';
import Popular from './components/Popular.jsx'
import Corporation from './components/Corporation.jsx'
import Corporatelogo from './components/Corporatelogo.jsx'
import Consultancy from './components/Consultancy.jsx'
export default function App(){

    return(
        <div>
        <Navbar/>
        <Scrollsection/>
        <Icons/>
        <Popular/>
        <Corporation/>
        <Corporatelogo/>
        <Consultancy/>
        
        </div>
    )
}