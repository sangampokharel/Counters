import React, { Component } from 'react'
import Counter from './Counter';
class Counters extends Component {
    


    renderList=()=>{
        return this.props.counters.map(counter=> <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} disabled={this.props.disabled} onDecrement={this.props.onDecrement} counter={counter}/>)
    }
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }

    // renderCount=()=>{
    //     this.state.counters===0&&<p>Sorry no any counter...</p>
    // }


}

export default Counters;
