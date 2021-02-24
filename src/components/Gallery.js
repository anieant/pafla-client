import React from 'react';
import styles from '../styles/gallery.module.css'


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
                {left.map(el => <GalleryItem image={el.image} size={el.size}/>)}
            </div>
            <div className={styles.gallery_column}>
                {right.map(el => <GalleryItem image={el.image} size={el.size}/>)}
            </div>
        </div>

    )
};
export default Gallery;
