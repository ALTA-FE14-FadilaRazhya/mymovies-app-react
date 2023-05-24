import { Component } from 'react';
import Navbar from './components/Navbar';
import FaveCard from './components/FaveCard';
import { fave } from "../src/dummy/fave.json"

class ListFavourite extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
          {fave ?
           fave.map((item, index) => {
             return (
               <FaveCard 
                 key={index}
                 id="fave"
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
export default ListFavourite;