import { loader } from "../assets"

const Loader = ({count}) => 
 (
    <div className="loader" style={{
        display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'
    }}>
        <img src={loader} alt="" />
        <span>Hello World :) ...</span>
    </div>
  )


export default Loader