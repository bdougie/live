import imageUrl from '../imageUrl';

const Feature = ({link, title, description}) => {
  return (
    <div>
      <a href={link}>
        <img
          alt={title}
          className="z-20 m-auto h-32 md:h-24"
          src={`/${title.toLowerCase()}.png`}
        />
      </a>
      <div
        style={{minHeight: 215}}
        className="-mt-14 bg-white rounded-lg p-6">
        <div>
          <a href={link}>
            <h5 className="text-center text-purple-600 pt-8 text-lg font-bold leading-6">
              {title}
            </h5>
          </a>
          <p className="text-gray-600 p-4 mt-2 text-base font-light leading-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
