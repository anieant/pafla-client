import React from 'react';
import styles from '../styles/gallery.module.css'
import {Zoom} from 'react-reveal';


const GalleryItem = ({image, size}) => {
    const image_size = `img_${size}`;
    return (
        <div className={`${styles.image_wrapper}`}>
            <img src={image} alt="" className={`${styles[image_size]}`}/>
        </div>
    );
};
const Gallery = ({left, right}) => {
    return (
        <div className={styles.gallery}>
            <div className={styles.gallery_column}>
                {left.map(el => <Zoom left><GalleryItem image={el.image} size={el.size}/></Zoom>)}
            </div>
            <div className={styles.gallery_column}>
                {right.map(el =><Zoom right> <GalleryItem image={el.image} size={el.size}/></Zoom>)}
            </div>
        </div>

    )
};
export default Gallery;
