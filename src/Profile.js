import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="Profile">
        {this.props.name} works at {this.props.company} as a {this.props.title}
      </li>
    );
  }
}

export default Profile;
