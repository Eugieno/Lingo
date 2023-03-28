// import 'bulma/css/bulma.min.css';
// import { useEffect, useState } from 'react';



// function HighScoreBoard({scoreList}) {
//     // const [highScoreList, setHighScoreList] = useState(()=> JSON.parse(localStorage.getItem("topScores")))

    
//     console.log(JSON.parse(localStorage.getItem("topScores")));
//     let fromLocal = JSON.parse(localStorage.getItem("topScores"))


//     const sortedData = fromLocal.sort((a, b) => b[1] - a[1])

   
            

//     // useEffect(() => {
//     //     let fromLocal = JSON.parse(localStorage.getItem("topScore")) || []
    
        
//     //     fromLocal.map(item => {
//     //         item.sort(function(a,b){return b[1] - a[1]})
//     //     })
//     //     setHighScoreList(fromLocal);

//     // },[])


//   return (
//     <div>
//     <h2>Leaderboard</h2>
//     <table className='table is-bordered is-striped is-hoverable is-fullwidth'>
//     <thead>
//         <tr>
//             <th>PLAYER NAME</th>
//             <th>SCORES</th>
//         </tr> 
//     </thead>
     
//     <tbody>
//         {sortedData.map(user => 
//         <tr className="">
//             <td data-id="name">{user[0]}</td>
//             <td data-id="score">{user[1]*10}%</td>
//         </tr>
//         )}
//     </tbody>   
//     </table>
//     </div>
//   );
// }

// export default HighScoreBoard;
