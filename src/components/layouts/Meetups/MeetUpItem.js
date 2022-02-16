import classes from './MettupList.module.css';
import { Card } from '../ui/Card';
export  function MeetupItem(props){
    return (
        <li  className={classes.list}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div className={classes.content}>
                    <h1>{props.title}</h1>
                    <address>{props.address}</address>
                    <p> {props.description}</p>
                </div>
                <div className= {classes.actions}>
                    <button>To Favourites</button>
                </div>
           </Card>
        </li>
    )
}