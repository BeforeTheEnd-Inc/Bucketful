import React, {Component} from "react";

export default class CheckBox extends Component {
    constructor(label) {
        super(label);
        this.state = {isChecked: false};

        this.handleIsChecked = this.handleIsChecked.bind(this);
    }

    static props = {
        label: ''
    };

    render() {
       return (
           <div>
               <label
                   className="bucket-checkbox-label"
                   label="label"
               >
                   <input
                       className="checkbox"
                       type="checkBox"
                       checked={this.isChecked}
                       onChange={this.handleIsChecked}
                   />
                   {this.props.label}
               </label>
           </div>
       );
    }

    handleIsChecked(e) {
        this.setState({isChecked: e.target.value});
    };
}