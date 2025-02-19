function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">
                           Welcome {props.name}
                           </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue
                        </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt );
    
}
UserGreeting.proptypes = {
    isLoggedIn: Proptypes.bool,
    username: Proptypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting
