import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ showImageHandler, images }) {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => {
        return (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            showImageHandle={showImageHandler(image.largeImageURL)}
            index={index}
          />
        );
      })}
    </ul>
  );
}
