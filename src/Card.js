import React from 'react'


const Card =({name, email, id}) => {
    return (
        <div className = 'bg-light-green br3 tc dib pa3 ma3 bw2 grow shadow-5 '>
        <div>
            <img src ={ `http://robohash.org/${id}200x200`} alt=''/>
        </div>

      <div>
          <h2>{name}</h2>
          <p>{email}</p>
      </div>
</div>
    );
}

export default Card
