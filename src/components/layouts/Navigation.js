import { Link } from 'react-router-dom';
import navigation from './Navigation.module.css'
export default function Navigation() {
    return (
        <header className={navigation.header}>
            <div className={navigation.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>  All meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>
                            New meetup
                        </Link>
                    </li>
                    <li>
                        <Link to='/favourites'>Favourites</Link>
                        {/* <a href='./pages/Favorites.js'>Fav</a> */}

                    </li>
                </ul>
            </nav>
        </header>
    )
}