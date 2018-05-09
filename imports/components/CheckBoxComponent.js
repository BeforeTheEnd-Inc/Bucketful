import React, {Component} from 'react';

export default class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.className = props.className;
        this.label = props.label;
        this.isChecked = props.isChecked;

        this.handleIsChecked = this.handleIsChecked.bind(this);
    }

    render() {
       return (
           <div>
               <label
                   className="bucket-checkbox-label"
                   label="label"
               >
                   <input
                       className={this.className}
                       type="checkBox"
                       checked={this.isChecked}
                       onChange={this.handleIsChecked}
                   />
                   {this.label}
               </label>
           </div>
       );
    }

    handleIsChecked(e) {
        this.setState({isChecked: e.target.value});
    };
}