import React, { Component } from 'react';

class Task extends Component{
    render(){
        var first = this.props.first;
        return (
            <div className="row">
                <ul className="task-box">
                    <li className={"col-sm-1 " + (first ? 'first' : null)}>{this.props.task.number}</li>
                    <li className={"col-sm-4 " + (first ? 'first' : null)} >{this.props.task.task}</li>
                    <li className={"col-sm-4 " + (first ? 'first' : null)} >{this.props.task.bonus}</li>
                    <li className={"col-sm-2 " + (first ? 'first' : null)} >{this.props.task.whoHoldsEvidence}</li>
                    <li className={"col-sm-1 " + (first ? 'first' : null)} >{this.props.task.score}</li>
                </ul>
            </div>
        );
    }
}

Task.defaultProps = {
    first: false,
    task: {
        number: '#',
        task: "Task",
        bonus: "Bonus",
        whoHoldsEvidence: "Who has the evidence?",
        score: "Score",
    }
}

export default Task;
