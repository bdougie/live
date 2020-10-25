import Link from './Link';
import { ArrowIcon, LikeIcon, StarIcon, HeartIcon, AddUserIcon } from './Icons';
import PostAction from './PostAction';

export default function Post({ img, title, counters, bodyExcerpt, slug }) {
  img =
    'https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80';
  return (
    <div className="flex flex-col h-full overflow-hidden border border-gray-200 rounded-lg">
      <div
        className="h-10 bg-gray-400 bg-center bg-cover pb-16/9"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="flex flex-col justify-between flex-grow p-3 space-y-6">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <div className="flex-grow">
          <p>{bodyExcerpt}</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <PostAction
            count={counters?.like}
            Icon={LikeIcon}
            onClick={() => {
              alert('do something');
            }}
          />
          <PostAction count={counters?.start} Icon={StarIcon} />
          <PostAction count={counters?.heart} Icon={HeartIcon} />
          <PostAction count={counters?.user} Icon={AddUserIcon} />
        </div>
        <div>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center text-sm text-purple-500"
          >
            READ MORE <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
