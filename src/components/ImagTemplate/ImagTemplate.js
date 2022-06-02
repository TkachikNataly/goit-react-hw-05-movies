import './ImagTemplate.module.css';

export default function ImagTemplate({ tags, path, className }) {
    return (
        <img
            alt={tags}
            src={
                path
                    ? `https://image.tmdb.org/t/p/w300${path}`
                    : 'https://image.shutterstock.com/image-vector/no-image-available-photo-coming-600w-2059817444.jpg'
            }
            className={className}
        />
    );
}