
function ProfilePicture() {
 
    const imageUrl = './src/assets/monkey.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return (<img onClick={(e) => handleClick(e)} src={imageUrl} className="profile-pic" alt="Profile" ></img>);
}

export default ProfilePicture;
