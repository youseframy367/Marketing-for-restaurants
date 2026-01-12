import Header from "../partes/header"
import Baner from "./paner"
import OurBlog from "./OurBlog"
import HowBOOKwork from "./HowdoesBOOKITwork"
import RestaurantManagers from "./RestaurantManagersExperiences"
import Footer from "../partes/footer"
import SlideToBaner from "./sliderToBaner"
import TopRated from "./TopRated"
import MostBoked from "./MostBooked"
export default function Home (){
    return(
        <div style={{
            width:"100%"
        }}>
<Header/>
<Baner/>
<div style={{
    width:"100%"
}}>
< SlideToBaner/>
</div>
<TopRated/>
<MostBoked/>
    <OurBlog/>
    <HowBOOKwork/>
    <RestaurantManagers/>
        </div>
    )
}