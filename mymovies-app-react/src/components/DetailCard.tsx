import React, { Component } from 'react'

class DetailCard extends Component {
  render() {
    const image = "https://m.media-amazon.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_FMjpg_UX1000_.jpg";
    return (
      <div className="card card-side bg-base-80 shadow-xl">
        <figure>
          <img src={image} 
          width={80}
          height={80}
          alt="Movie"/>
        </figure>
      <div className="card-body">
        <h1><b>Corpse Bride</b></h1>
      <div className="mt-8 grid gap-5 flex flex-row">
        <h2><b>Genre :</b> Animation, Family, Drama, Musical</h2>
        <h2><b>Release Date :</b> 16 September 2005</h2>
        <h2><b>Language :</b> English</h2>
        <h2><b>Runtime :</b> 77 minutes</h2>
        <h2><b>Rating :</b> 8.0/10</h2>
        <h2><b>Overview :</b></h2>
        <p>When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, 
          he rises from the grave assuming he has married her.</p>
        <h2><b>Directors : </b>Tim Burton, Mike Johnson</h2>
        <div className="card-actions justify-end">
          <button className="w-full h-12 bg-rose-600 rounded-md btn-wide text-white font-semibold">Watch Now</button>
        </div>
      </div>
  </div>
</div>
    )
  }
}
export default DetailCard;