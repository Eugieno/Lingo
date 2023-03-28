

export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0c2cfb20b1mshb958ecebd8b7dcep136256jsn2319ea00bacc', 
      'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com'
    }
  };





async function doRequest(param1, param2) {
     
    let res = await fetch(`https://twinword-word-association-quiz.p.rapidapi.com/type1/?level=${param1}&area=${param2}`, options);

    if (res.ok) {

        let text = await res.json();

        return text;
    } else {
        return `HTTP error: ${res.status}`;
    }
}

export default doRequest;



// Shallow API
// async function doRequest() {
     
//     let res = await fetch("https://pokeapi.co/api/v2/pokemon");

//     if (res.ok) {

//         let text = await res.json();

//         return text;
//     } else {
//         return `HTTP error: ${res.status}`;
//     }
// }

// export default doRequest;
