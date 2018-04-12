import React, {Component} from 'react';
import Label from "../../components/LabelComponent";
import TextArea from "../../components/TextAreaComponent";

export default class MiniBio extends Component {
    constructor(props) {
        super(props);

        this.className = props.className;
    }

    render() {
        return (
            <section className='mini-bio-section'>
                <section className="bio-container">
                    <TextArea

                    />
                    {/*<Label*/}
                        {/*className='profile-title'*/}
                        {/*type='5'*/}
                        {/*label='somewhere somewhere somewhere'*/}
                    {/*/>*/}
                    <Label
                        className='profile-title'
                        type='5'
                        label="Birthday: some-date"
                    />
                    <Label
                        className='profile-title'
                        type='5'
                        label='Hometown: somewhere usa'
                    />
                    <Label
                        className='profile-title'
                        type='5'
                        label='Gender: other'
                    />
                </section>
            </section>
        );
    }
}
