export const PokemonRequest = (apiCardsUrl = "https://api.tcgdex.net/v2/en/sets/XY") => {
    // const apiCardsUrl = ``;
 
     return fetch(apiCardsUrl)
                     .then((req) => {
 
                            return req.json()
                             .then((req) => {
                                     // console.log("Made a request: ",req)
                                     return req
                             })
                     .catch(( err ) =>{
                         // console.log("Error: ", err)
                         return err
                     })
     })
 }
 