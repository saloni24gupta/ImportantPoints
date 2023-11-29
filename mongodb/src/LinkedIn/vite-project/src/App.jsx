// // import Login from "./components/Login"
// // import { BrowserRouter, Routes, Route } from "react-router-dom"
// // import Home from "./components/Home"
// // import Header from "./components/Header"
// // function App() {

import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import userimg from './components/like.png';

// //   return (
// //     <>

// //       <div className="App">
// //         <BrowserRouter>
// //           <Routes>
// //             <Route path="/" element={<Login />} ></Route>
// //             <Route path="/home" element={<Home />} ></Route>
         
// //           </Routes>
// //         </BrowserRouter>

// //       </div>
// //     </>
// //   )
// // }

// // export default App


// import { useState } from "react";
// // import "./styles.css";

// const content = [
//   [
//     "React is extremely popular",
//     "It makes building complex, interactive UIs a breeze",
//     "It's powerful & flexible",
//     "It has a very active and versatile ecosystem"
//   ],
//   [
//     "Components, JSX & Props",
//     "State",
//     "Hooks (e.g., useEffect())",
//     "Dynamic rendering"
//   ],
//   [
//     "Official web page (react.dev)",
//     "Next.js (Fullstack framework)",
//     "React Native (build native mobile apps with React)"
//   ],
// [  
//   "Vanilla JavaScript requires imperative programming",
//   "Imperative Programming: You define all the steps needed to achieve a result",
//   "React on the other hand embraces declarative programming",
//   "With React, you define the goal and React figures out how to get there"
// ]
// ];

// export default function App() {
//   // const [activeContentIndex, setActiveContentIndex] = useState(0);

//   return (
//     <div>

      
//       {/* <header>
//         <img src="react-logo-xs.png" alt="React logo" />
//         <div>
//           <h1>React.js</h1>
//           <p>i.e., using the React library for rendering the UI</p>
//         </div>
//       </header>

//       <div id="tabs">
//         <menu>
//           <button
//             className={activeContentIndex === 0 ? "active" : ""}
//             onClick={() => setActiveContentIndex(0)}
//           >
//             Why React?
//           </button>
//           <button
//             className={activeContentIndex === 1 ? "active" : ""}
//             onClick={() => setActiveContentIndex(1)}
//           >
//             Core Features
//           </button>
//           <button
//             className={activeContentIndex === 2 ? "active" : ""}
//             onClick={() => setActiveContentIndex(2)}
//           >
//             Related Resources
//           </button>
//           <button
//             className={activeContentIndex === 3 ? "active" : ""}
//             onClick={() => setActiveContentIndex(3)}
//           >
//             ReactJS vs JS
//           </button>
//         </menu>
//         <div id="tab-content">
//           <ul>
//             {content[activeContentIndex].map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div> */}
//     </div>
//   );
// }
import {useState} from 'react'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const image = ['./assets/search-icon.svg', './assets/searchh.png', './assets/send.png', './assets/ser.png', './assets/share.png', './assets/shared-image.png', './assets/user.svg', './assets/video-icon.jpg'];

function genRandomInt(max) {
  const value = Math.floor(Math.random() * (max + 7));
  console.log(value);
  console.log(`this is value of`, Math.random());
  return value
 
}

function Header() {
  return (
    <header>
      <img src={image[genRandomInt(2)]} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please select a button')
  function HandleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }
  return (
    <div>
       <search>
  <h2>Examples</h2>
  <menu>
    <TabButton onClick={() => HandleSelect('hello')}>hello</TabButton>
  <TabButton onSelect={() => HandleSelect('components')}>components</TabButton>
  <TabButton onSelect={() => HandleSelect('JSX')}>JSX</TabButton>
  <TabButton onSelect={() => HandleSelect('Props')}>Props</TabButton>
  <TabButton onSelect={() => HandleSelect('Stage')}>State</TabButton>
  </menu>
  {selectedTopic}
 </search>


 <Header />

 <div>
  <CoreConcept title="component" description="Hello world" img={userimg}/>
  <CoreConcept title="component" description="Hello world" img={userimg}/>
  <CoreConcept title="component" description="Hello world" img={userimg}/>
  <CoreConcept title="component" description="Hello world" img={userimg}/>
  <CoreConcept title="component" description="Hello world" img={userimg}/>

 </div>

      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;