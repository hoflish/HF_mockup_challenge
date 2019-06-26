import React from "react";
import PropTypes from "prop-types";

const Avatar = ({photoUrl}) => {
    return (
        <figure className="image is-32x32">
          <img className="is-rounded" src={photoUrl}/>
        </figure>
    )
} 

Avatar.propTypes = {
    photoUrl: PropTypes.string
}

Avatar.defaultProps = {
    photoUrl: require("../../images/avatar-placeholder.png")
}

export default Avatar