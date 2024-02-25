import { useState } from 'react';
import Userdata from '../user_data.json';

const Search = () => {

  const [searchitem, setsearchitem] = useState('');

  return (
    <div className="flex-column w-100 d-flex align-items-center  text-center justify-content-center">
      <div className='input-group alert align-items-center justify-content-center'>
        <div className="form-outline" data-mdb-input-init>
            <input type="search" placeholder="Search..." className="form-control" onChange={e => {setsearchitem(e.target.value)}}/>
        </div>
        <button type="button" className="btn btn-primary">
            &omicron;
        </button>

      </div>
      {Userdata.filter((val, key) => {
        if(searchitem === ""){
          return true; // Eğer arama terimi boşsa, tüm kullanıcıları göster
        } else if (val.user_name.toLowerCase().includes(searchitem.toLowerCase())){
          return true; // Kullanıcı adı arama terimi içeriyorsa, kullanıcıyı göster
        }
        return false; // Eğer yukarıdaki koşullar sağlanmıyorsa, kullanıcıyı filtrele
      }).map((val, key) => (
        <div className='user w-25 list-group' key={key}> 
          <li className='list-group-item'>{val.user_name} </li>
        </div>
      ))}
    </div>
  )
}

export default Search
