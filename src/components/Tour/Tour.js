import React, {Component} from 'react';
import './Tour.scss';

export default class Tour extends Component{
    state = {
        stateInfo:false
    }
    handleClick = () => {
        this.setState({
            stateInfo:!this.state.stateInfo
        })
    }
    render(){
        const {id,city,img,name,info} = this.props.tour;
        const {removeTour} = this.props;
        return(
            <article className="tour">
                <div className="img-container">
                  <img src={img} alt=""/> 
                  <span className="close-btn" onClick={() => removeTour(id)}>
                      <i className="fa fa-window-close" />
                  </span> 
                  <div className="tour-info">
                      <h3>{city}</h3>
                      <h4>{name}</h4>
                      <h5>
                          info{""}
                          <span onClick={this.handleClick}>
                              <i className="fa fa-caret-down" />
                          </span>
                      </h5>
                      {this.state.stateInfo && <p>{info}</p>}
                  </div>
                </div>
            </article>
        )
    }
}