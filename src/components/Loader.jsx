import { loader } from "../assets"

const Loader = () => 
 (
    <div className="loader" style={{
        display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', height:'100vh'
    }}>
        <img src={loader} alt="" />
        <span>Hello World :) ...</span>
    </div>
  )


export default Loader