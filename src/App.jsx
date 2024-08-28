import { useState } from 'react'
import './app.css'
import Products from './ProductsApi'


function App () {
  return (
    <>
      <Products/>
    </>
  )
}

export default App

// function Score () {

//   const [player, setPlayer] = useState({
//     score: 10
//   })

//   const handleClick = () => {
//     setPlayer({
//       ...player,
//       score: ++player.score
//     })
//   }

//   return (
//     <>
//       {player.score} {''}
//       <button onClick={handleClick}>
//         +1
//       </button>
//     </>
//   )
// }


// function Obj() {


//   const [userdata, setUserdata] = useImmer({
//     name: 'null',
//     email: 'null',
//     message: 'null',
//   })

//   return (
//     <>
//       <form>
//         <input type="text" name='name' value={userdata.name} onChange={(e) => {
//           setUserdata((draft) => {
//             draft.name = e.target.value
//           })
//         }}  />
//         <br />
//         <input type="text" name='email' value={userdata.email} onChange={(e) => {
//           setUserdata((draft) => {
//             draft.email = e.target.value
//           })
//         }} />
//         <br />
//         <input type="text" name='message' value={userdata.message} onChange={(e) => {
//           setUserdata((draft) => {
//             draft.message = e.target.value
//           })
//         }} />
//       </form>
//       <div>
//         {userdata.name}
//         <br />
//         {userdata.email}
//         <br />
//         {userdata.message}
//       </div>
//     </>
//   )
// }

// function Obj () {

//   const [userdata, setUserdata] = useState({
//     name: 'null',
//     email: 'null',
//     message: 'null',
//     dop: {
//       message2: 'null',
//     },
//   })

//   const handleChange = (e) => {
//     setUserdata({
//       ...userdata, [e.target.name]: e.target.value,
//       dop: {...userdata.dop, [e.target.name]: e.target.value}
//     })
//   }

//   return (
//     <>
//       <form>
//         <input name='name' type="text" value={userdata.name} onChange={handleChange} />
//         <input name='email' type="email" value={userdata.email} onChange={handleChange} />
//         <input name='message' type="text" value={userdata.message} onChange={handleChange} />
//         <input name='message2' type="text" value={userdata.dop.message2} onChange={handleChange} />
//       </form>
//       <div>
//         {userdata.name}
//         <br />
//         {userdata.email}
//         <br />
//         {userdata.message}
//         <br />
//         {userdata.dop.message2}
//       </div>
//     </>
//   )
// }

// function Obj () {

//   const [userdata, setUserdata] = useState({
//     name: 'null',
//     email: 'null',
//     message: 'null',
//   })

//   return (
//     <>
//       <form>
//         <input type="text" value={userdata.name} onChange={(e) => {
//           setUserdata({
//             ...userdata, name: e.target.value
//           })
//         }} />
//         <input type="email" value={userdata.email} onChange={(e) => {
//           setUserdata({
//             ...userdata, email: e.target.value
//           })
//         }} />
//         <input type="text" value={userdata.message} onChange={(e) => {
//           setUserdata({
//             ...userdata, message: e.target.value
//           })
//         }} />
//       </form>
//       <div>
//         {userdata.name}
//         <br />
//         {userdata.email}
//         <br />
//         {userdata.message}
//       </div>
//     </>
//   )
// }





// function ButtonMessage ({message, children}) {

//   const handleClick = (e) => {
//     e.stopPropagation()
//     alert(message)
//   }

//   return (
//     <>
//       <button onClick={handleClick} >
//         {children}
//       </button>
//     </>
//   )
// }


// function App () {
//   return (
//       <>
//         <Wrapper onClick = {() => {
//           alert('you click on div wrapper')
//         }}>
//           <ButtonMessage
//           message = {'PROG PROG PROG'}>
//             Click me!
//           </ButtonMessage>
//           <ButtonMessage
//           message = {'PROG PROG PROG PROG PROG PROG'}>
//             Click me too!
//           </ButtonMessage>
//         </Wrapper>
//       </>
//   )
// }

// export default App


// let reservationDb = [
//   {
//     id: 1,
//     name: 'Jack',
//     email: 'jack123@gmail.com',
//     title: 'Title 1',
//     textP: 'TextP-1',
//   },
//   {
//     id: 2,
//     name: 'Pete',
//     email: 'pete123@gmail.com',
//     title: 'Title 2',
//     textP: 'TextP-2',
//   },
//   {
//     id: 3,
//     name: 'Michael',
//     email: 'michael123@gmail.com',
//     title: 'Title 3',
//     textP: 'TextP-3',
//   },
// ]

// function ReservationDB ({client, key}) {

//   return (
//     <>
//       <h2 key={key}>ID: {client.id} </h2>
//       <h1>Name: {client.name} </h1>
//       <h2>Email: {client.email} </h2>
//       <h2>{client.title}</h2>
//       <p>{client.textP}</p>
//     </>
//   )
// }


// function Wrapper ({children, onClick}) {
//   return (
//     <div onClick={onClick} className="wrapper">
//         {children}
//     </div>
//   )
// }

// function User (props) {

//   let username = props.username
//   let age = props.age

//   return (
//     <>
//       <h1>Username: {username}</h1>
//       <h2>Userage: {age}</h2>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <Wrapper>
//         {
//           reservationDb.map((client) => {
//             return (
//               <ReservationDB 
//               client = {client}
//               key = {client.id}
//               />
//             )
//           })
//         }
//       </Wrapper>
//     </>
//   );
// }

// export default App;
