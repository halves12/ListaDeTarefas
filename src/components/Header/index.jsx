import rocketIcon from '../../assets/rocket.svg';
import './styles.scss';

export function Header(){
    return (
        <header className="header">
            <img src={rocketIcon} alt="Ícone de foguete" />
            <div>
                <span>to</span>
                <span>do</span>
            </div>
      </header>
    )
}