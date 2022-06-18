import React, { useState } from 'react'
import axios from 'axios'

function Trad() {
  
  const [texte, setTexte] = useState("");
  const [Traduction, setTraduction] = useState([]);
  const token = "";
  const test = [1, 2, 3, 4];

  function traduction(event) {
    event.preventDefault();
    axios.get(`https://api-free.deepl.com/v2/translate?auth_key=${token}&text=${texte}&target_lang=EN`)
    .then(
      data => {
        setTraduction(data.data.translations);
        console.log(Traduction);
      }
    )
    .catch(
      err => {
        console.error(err);
      }
    )

  }

  return (
    <div>
        <h1>
            Bienvenue dans la page de trad
        </h1>
        <br/>
        <form onSubmit={traduction}>
          <input type="text" onChange={e => setTexte(e.target.value)} />
          <input type="submit" />
        </form>
        {Traduction.map(t => (
          <h1 key={t}> {t.text} </h1>
        ))}
    </div>
  )
}

export default Trad