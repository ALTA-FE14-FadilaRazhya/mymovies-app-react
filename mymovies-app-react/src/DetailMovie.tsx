import { Component } from 'react'
import Navbar from './components/Navbar'
import DetailCard from './components/DetailCard'
import { withRouter } from './withRouter';

export default class DetailMovie extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
            <DetailCard />
        </div>
      </div>
    )
  }
}

