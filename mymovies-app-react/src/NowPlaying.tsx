import { Component } from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import { list } from "../src/dummy/list.json"

class NowPlaying extends Component {
  render() {
    return (
        <div>
        <Navbar />
         <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
          {list ?
           list.map((item, index) => {
             return (
               <Card 
                 key={index}
                 id="list"
                 image={item.image}
                 title={item.title}
                 description={item.description}
               />
             );
           }) : undefined}
         </div>
       </div>
    )
  }
}
export default NowPlaying;