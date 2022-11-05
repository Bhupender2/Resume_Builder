import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { IsAddedToCart, IsPurchased } from "../redux/action/selectTemp_action";
import skin1 from "../images/skin1.svg";
import skin2 from "../images/skin2.svg";
import skin3 from "../images/skin3.svg";
import skin4 from "../images/skin4.svg";
import skin5 from "../images/skin5.svg";
import skin6 from "../images/skin6.svg";
import skin7 from "../images/skin7.svg";
import skin8 from "../images/skin8.svg";

const Cart = () => {

    let dispatch = useDispatch();
    let temp = useSelector(state => state.Template);
    temp = temp.filter(val => val.IsCart === true);
    let history = useHistory();
    let tp=[skin1,skin2,skin3,skin4,skin5,skin6,skin7,skin8];

    return <>
        <h1 className="text-5xl font-bold text-purple-300 ml-4 cursor-default" onClick={() => history.push("/templates")}>Cart
    <span className="material-icons-outlined ml-2 text-gray-300 font-bold hover:text-purple-300 text-4xl" >shopping_bag</span></h1>
        <div className="min-h-full w-full flex flex-col">
            <div className="h-auto w-full bg-gray-100 p-10 flex flex-wrap justify-evenly" >
                {
                    temp.map(val => {
                        return <div className="h-56 w-96 flex justify-evenly items-center shadowIO rounded-sm">
                            <img src={tp[val.idx]} alt="img" className="h-48 w-5/12 border-2 border-solid border-purple-300 rounded-md cover"></img>
                            <div className="h-48 w-6/12 rounded-sm flex flex-col justify-center my-2">
                                <div><span className="font-bold pr-2">Template:</span>RB{val.idx}</div>
                                <div><span className="font-bold">Order ID:</span>{Date.now()}</div>
                                <div><span className="font-bold pr-2">Quantity:</span>1</div>
                                <div><span className="font-bold pr-2">Price:</span>$5</div>
                            </div>
                        </div>
                    })
                }
            </div>
            <hr />
            <div className="h-10 w-full flex justify-end items-center pr-10 tracking-wide font-semibold">
                Total Amount = ${5 * temp.length}
            </div>
            <hr />
            <div className="h-12 w-full flex justify-end items-center pr-10 ">
                <button className="h-10 w-24  rounded-lg outline-none border-none bg-green-500 text-white font-extrabold" onClick={() => {
                    temp.map(val => {
                        dispatch(IsPurchased({ idx: val.idx, purchase: true }));
                        dispatch(IsAddedToCart({ idx: val.idx, IsCart: false }));
                        history.push("/templates");
                    })
                }}>Pay Now</button>
            </div>
        </div>
    </>
}
export default Cart;