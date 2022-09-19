import logoconvert from '../img/Icon.png';
import "../App.css"

export default function Header() {

    return <div className='header'>
        <img src={logoconvert}></img>
        <strong>unit convert</strong>
        <hr></hr>
    </div>
}