import React, {Component} from 'react';
import './tour.scss'
import {FaTimesCircle, FaCaretSquareDown} from "react-icons/all";

class Tour extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const {id, city, img, name, info} = this.props.tour
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="tour"/>
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <FaTimesCircle/>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5><span onClick={this.handleInfo}>
                        info<FaCaretSquareDown/>
                    </span></h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        );
    }
}

export default Tour;