const ProfileImage = (props)=> {
    console.log(props.image)
    return(
        <img src={props.image} className="profile" alt="profile"/>
    )
};

export default ProfileImage;