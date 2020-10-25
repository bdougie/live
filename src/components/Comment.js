import React from 'react';
import Link from './Link';
import TimeAgo from 'timeago-react';
import PostAction from './PostAction';
import { StarIcon, LikeIcon } from './Icons';

function Comment({ author, date, comment, counters }) {
  return (
    <div className="py-2 text-gray-500">
      <div className="flex items-center space-x-1">
        <img
          className="inline-block w-6 h-6 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <Link href={author.profile} className="text-purple-500">
          {author.name}
        </Link>
        <span>commented</span>
        <TimeAgo datetime={date} locale="es_EN" />
      </div>
      <div className="my-3">{comment}</div>
      <div>
        <div className="flex space-x-4">
          <PostAction
            count={counters?.like}
            Icon={LikeIcon}
            onClick={() => {
              alert('do something');
            }}
          />
          <PostAction count={counters?.start} Icon={StarIcon} />
        </div>
      </div>
    </div>
  );
}

export default Comment;
