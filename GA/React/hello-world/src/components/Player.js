function Player(props) {
    return (
        <div className={props.whichPlayer}>
          <div className="playerStat">
            <h2 >Player {props.whichPlayer} </h2>
            <h3>Wins: </h3>
          </div>
        </div>
    );
}
  
export default Player;

