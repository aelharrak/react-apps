import React from 'react'
import birthdayImage from '../assets/picture.jpg'

class AgeState extends React.Component {
    

    timeSince(date) {
        let today = new Date().getTime();
        let otherDate = new Date(date).getTime();
        let diffrence = Math.abs(today - otherDate);
        let days = Math.floor(diffrence / (1000 * 3600 * 24));
        let years = Math.floor(days / 365);
        days-= years * 365;
        let months = Math.floor(days / 31);
        days-= months *31;

        return ` ${years} years, ${months} months, and ${days} days`
    }

    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>{this.timeSince(this.props.date)}</h4>
                <img src={birthdayImage} alt="birthdayImage" className="birthdayImage" />
            </div>
        );
    }
}

export default AgeState;
