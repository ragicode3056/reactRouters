import classes from './card.module.css'
export function Card(props){
    return(
        <div className={classes.card}>{props.children} </div>
    )
}