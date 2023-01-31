import css from './InfoProfile.module.css'

export const InfoProfile = (props) =>{
    return(
    <div className={css.Profile}>
        <div className={css.logo}>
            <div className={css.imgCover}>
                <img src={process.env.PUBLIC_URL+`/img/${props.profileInfo.logo}`} alt={props.profileInfo.name}/>
            </div>
        </div>
        <div className={css.info}>
            <div className={css.mainInfo}>
                <h2>{props.profileInfo.name}</h2>
                <p>{props.profileInfo.status}</p>
            </div>
            <div className={css.otherInfo}>
                <ul>
                    <li>Birthday: {props.profileInfo.birthday}</li>
                    <li>City: {props.profileInfo.country}, {props.profileInfo.city}</li>
                    <li>Profession: {props.profileInfo.profession}</li>
                </ul>
            </div>
        </div>
    </div>
    )
}
