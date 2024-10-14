// import { useState } from "react"

// function Item ({children,title, click, isActive}) {
//     return (
//         <>
//             <div className="item">
//                 <button onClick={click}>{title}</button>
//                 <br />
//                 {isActive && <p>{children}</p>}
//             </div>
//         </>
//     )
// }

// export default function Tabs () {

//     const [isActive, setIsActive] = useState('item-1')

//     return (
//         <>
//             <div className="wrapper">
//                 <Item isActive = {isActive === 'item-1'} click = {()=>{
//                     setIsActive('item-1')
//                 }} title={'item-1'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis repellat nemo expedita!</Item>
//                 <Item isActive = {isActive === 'item-2'} click = {()=>{
//                     setIsActive('item-2')
//                 }} title={'item-2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim, quo accusantium sint ullam quis.</Item>
//                 <Item isActive = {isActive === 'item-3'} click = {()=>{
//                     setIsActive('item-3')
//                 }} title={'item-3'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, vero.</Item>
//             </div>
//         </>
//     )
// }