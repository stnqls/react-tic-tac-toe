import React, { Component } from 'react';

class ShowHide extends Component {
changeName(){
  let text = 'text'
  text += this.state.show === true ? 'hide' : 'show';
  return text;
}
showHide(){
  const {show} = this.state;
  this.setState({show: !show})
}

  render(){
    return(
      <section id="content">
        <div className="top-content">
          <div className="container">
            <h1>React</h1>
            <h2>A JavaScrip library for building user interfaces</h2>
          </div>
        </div>
        <div className="container">
          <div>
            <div>
              <h3>Declarative</h3>
              <button onClick={this.showHide}>{this.changeName()}</button>
              {this.state.show &&
                <div>
                  <p>text</p>
                  <p>text</p>
                </div>
              }
            </div>
            <div>
              <h3>Component-Based</h3>
              <button onClick={this.showHide} className="button-primary btn"> {this.changeName()}</button>
              { this.state.show &&
                <div>
                  <p>text</p>
                  <p>text</p>
                </div>
              }
            </div>
            <div>
              <h3>Learn Once, Write Anywhere</h3>
              <button onClick={this.showHide} className="button-primary btn"> {this.changeName()}</button>
              {
                this.state.show &&
                <div>
                  <p>text</p>
                  <p>text</p>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
  
}

export default ShowHide;