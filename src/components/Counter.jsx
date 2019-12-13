import React, { Component } from 'react'

 class Counter extends Component {
    render() {
        return (
            <div className="container">
                <span className={`badge badge-${this.renderClasses()}`}>{this.props.counter.value}</span>
                <button className="btn btn-secondary m-2" onClick={()=>this.props.onIncrement(this.props.counter)}>+</button>
                <button className="btn btn-secondary m-2" onClick={()=>this.props.onDecrement(this.props.counter)} disabled={this.renderDisabled()} >-</button>
                <button className="btn btn-danger m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>X</button>
            </div>
        )
    }

renderClasses=()=>{
    let cssClass='';
    this.props.counter.value===0?cssClass+='warning':cssClass+='primary';
    return cssClass;
}

renderDisabled=()=>{

    return this.props.counter.value<=0?true:false
}

}

export default Counter;
