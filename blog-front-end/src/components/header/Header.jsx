import "./header.css";

export default function Header() {
   return (
      <div className="header">
         <div className="headerTitles">
            <span className="headerTitleSm">WELCOME TO</span>
            <span className="headerTitleLg">BlogiFy</span>
         </div>
         <img
            className="headerImg"
            src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
         />
      </div>
   );
}
