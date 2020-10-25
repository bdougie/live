import React from 'react';

function PostAction({ Icon, count, onClick }) {
  return (
    <button
      className="flex p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
      onClick={onClick}
    >
      <Icon className="w-6 h-6" />
      <span>{count ?? 0}</span>
    </button>
  );
}

export default PostAction;
