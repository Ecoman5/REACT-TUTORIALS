import Second from "./Second";
import "./first.css";

const First = () => {
 return (
  <div className="first">
   <h1>This is our First component</h1>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
   <Second/>
  </div>
 );
};
export  default First 