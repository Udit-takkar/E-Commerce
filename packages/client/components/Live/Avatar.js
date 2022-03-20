import React from 'react';
// import { getAvatarBg } from './lib/getAvatarBg';

const getInitials = name => {
  if (!name) {
    return undefined;
  }
  return name
    .match(/(^\S\S?|\b\S)?/g)
    ?.join('')
    ?.match(/(^\S|\S$)?/g)
    ?.join('')
    .toUpperCase();
};

const colorsList = [
  '#F44336',
  '#3F51B5',
  '#4CAF50',
  '#FFA000',
  '#795548',
  '#E91E63',
  '#2F80FF',
  '#8BC34A',
  '#F57C00',
  '#4E342E',
  '#9C27B0',
  '#00BCD4',
  '#C0CA33',
  '#F4511E',
  '#616161',
  '#673AB7',
  '#009688',
  '#FBC02D',
  '#BF360C',
  '#455A64',
];

export const getAvatarBg = name => {
  const initials = getInitials(name);
  const indexFactor = 20;
  const colorIndex = ((initials?.codePointAt(0) || 0) % indexFactor) + 1;
  return { initials: initials || '', color: colorsList[colorIndex - 1] };
};

function Avatar({ name, className = '', size = 'sm', customSize = 0 }) {
  const { initials, color } = getAvatarBg(name);
  const sizeClass = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-16 h-16 text-lg',
    lg: 'w-20 h-20 text-3xl',
    xl: 'w-32 h-32 text-5xl',
  };
  let custom = {};
  if (customSize) {
    custom = {
      width: customSize,
      height: customSize,
    };
  }
  return (
    <div
      className={`flex justify-center items-center font-bold object-cover  text-white ${sizeClass[size]} rounded-full ${className}`}
      style={{ backgroundColor: color, ...custom }}
    >
      {initials}
    </div>
  );
}

export default Avatar;
