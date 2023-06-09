import React, { Component } from 'react'

interface CardProps {
  id: string;
  image?: string;
  title?: string;
  description?: string;
}
class FaveCard extends Component<CardProps> {
  render() {
    
    const {id, title, image, description} = this.props;
    return (
    <div>
        <div className="m-3 card w-46 bg-base-100 shadow-xl" id={id}>
          <figure>
            <img 
            src={image} alt="Movie"
            width={200}
            height={200}
            />
          </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="w-full h-12 bg-emerald-500 rounded-none btn-wide text-white font-semibold">Details</button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default FaveCard;