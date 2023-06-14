import React, { Component } from 'react'
import { withRouter } from '../withRouter';


interface CardProps {
  id: string;
  image?: string;
  title?: string;
  description?: string;
  navigate?: any;
}
class Card extends Component<CardProps> {
  render() {
    const {id, title, image, description,navigate} = this.props;
    return (
    <div>
        <div className="m-3 card w-72 bg-base-100 shadow-xl" id={id}>
          <figure>
            <img 
            src={image} alt="Movie"
            width={290}
            height={200}
            />
          </figure>
          <button className="w-full h-12 bg-emerald-500 rounded-none btn-wide text-white font-semibold" onClick={() => navigate('/DetailMovie')}>Details</button>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="w-full h-12 bg-rose-600 rounded-md btn-wide text-white font-semibold">Add to Favourite</button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default withRouter(Card);