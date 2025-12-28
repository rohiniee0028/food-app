import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props); // without super props, this.props will be undefined

        this.state = {
            userInfo: {
                name: 'Dummy',
                location: 'Default',
                contact: '0000000000',
                avatar: 'https://dummyimage.com/600x400/000/fff'
            },
        }
        // console.log('child - constructor');
    }

    async componentDidMount() {
        // best place to make API calls
        // console.log("componentDidMount - Child component");
        const data = await fetch('https://api.github.com/users/rohiniee0028');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }
    render() {
        const { name, location, bio, avatar_url } = this.state.userInfo;

        // console.log('child - render');
        return (
            <div className="user-card">
                <img src={avatar_url} alt="avatar" style={{ width: "150px", borderRadius: "75px" }} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Bio : {bio}</h4>
                {/* <button onClick={() => {
                    this.setState({ count: count + 1 })
                }}>Increment Count</button> */}
            </div>
        )
    }
}

export default UserClass;