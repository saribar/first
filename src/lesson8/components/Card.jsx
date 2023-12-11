import react from "react";
import { discover } from "../Store/CardSlice";
import { useDispatch } from "react-redux";
const Card = (props) => {
    const{id,name,status}={...props}
    const dispatch=useDispatch()
    return (
        <>
        <div
           onClick={()=>{dispatch(discover(props))}}
             id={id} style={{ height: '90px', width: '10%', border: '2px  solid ',backgroundColor:"aqua" }} ></div>
            {
                status?
                {name}
                :null

            }
            {/* ,borderColor:status? props.name :black */}
        </>
    )
}
export default Card;