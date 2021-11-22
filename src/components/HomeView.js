import BestOf from "./BestOf";
import Footer from "./Footer";
import Deal from "./Deal";


const HomeView = () => {
    return (
        
      <div className=" container-fluid p-0">
        
       <div className="home"> 
      <div className="circle"> <h1 > <span id="first">The</span> <br/> <span id="second"> Beef </span> </h1> </div>
        </div>
       
          <BestOf/>
            <Deal/>
            
        <Footer/>
      </div>

)
}
export default HomeView