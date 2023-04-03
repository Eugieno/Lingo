import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';




function HighScoreBoard({scoreList, theme}) {

    console.log(JSON.parse(localStorage.getItem("topScores")));
    let fromLocal = JSON.parse(localStorage.getItem("topScores"))
    const sortedData = fromLocal.sort((a, b) => b[1] - a[1])

    const clearLocalSto = () => {
        localStorage.removeItem("topScores")
    }

  return (
    <div>
    <h2 style={theme === "light"?{ color:"black" }: {color:"white"}}>Leaderboard</h2>
    {/* Clear local storage button */}
    <Link to="/">
         <button onClick={clearLocalSto} class="button is-danger  is-responsive" style={{position: "fixed",top: 250,right: 0, padding:5, margin:5, color:"white"}}>Clear Leaderboard</button>
    </Link>
   

    <table className='table is-bordered is-striped is-hoverable is-fullwidth'>
    <thead>
        <tr>
            <th>PLAYER NAME</th>
            <th>SCORES</th>
        </tr> 
    </thead>
     
    <tbody>
        {sortedData.map(user => 
        <tr key={user[0]} className="">
            <td data-id="name">{user[0]}</td>
            <td data-id="score">{user[1]*10} %</td>
        </tr>
        )}
    </tbody>   
    </table>
    </div>
  );
}

export default HighScoreBoard;
