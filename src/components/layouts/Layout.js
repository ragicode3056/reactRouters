import classes from './ui/Layout.module.css';
import Navigation from './Navigation';
export function Layout(props){
    return (
        <div>
            <Navigation/>
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )

}