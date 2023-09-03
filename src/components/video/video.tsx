import { VideoType } from "../../types/videoType"
import styles from './video.module.scss'

type Props = {
    video: VideoType;
}

export default function Video({video}: Props) {
    const {author, date, previewImage, title} = video;

    return(
        <div className={styles.video}>
            <div>
                <h3>{title}</h3>
                <p>{author}</p>
            </div>
            <img src={previewImage} width={82} height={46} alt="Превью видео" />
            <p>{date}</p>
        </div>
    )
}