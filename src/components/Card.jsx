import React from 'react';
import '../style/Card.scss';

function Card() {
    return (
        <a className='card-popular' href="">
            <img src="../src/assets/img/ImagemFundo.png" alt="Imagem do local mais popular para sair" />
            <div>
                <p>Unalome</p>
            </div>
        </a>
    );
}

export default Card;








// import React from 'react';
// import '../style/Card.scss';

// function Card({ textName, imgLugar }) {
//     return (
//         <a className='card-popular' href="">
//             <img src={imgLugar} alt="Imagem do local mais popular para sair" />
//             <div>
//                 <p>{textName}</p>
//             </div>
//         </a>
//     );
// }

// export default Card;