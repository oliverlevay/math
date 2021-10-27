import React from 'react';
import styled from 'styled-components';

const MaxWidth = styled.svg`
  max-height: 400px;
  margin-right: 1rem;
`;

function Tan() {
  return (
    <MaxWidth
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='-255 -200 495 415'
    >
      <defs>
        <pattern id='grid' width='30' height='20' patternUnits='userSpaceOnUse'>
          <path fill='none' stroke='#999' d='M0 0h30v20'></path>
        </pattern>
      </defs>
      <path fill='url(#grid)' stroke='#000' d='M-240 -200H240V200H-240z'></path>
      <g fill='none' stroke='red' strokeWidth='2'>
        <g id='set'>
          <path
            stroke='#00f'
            strokeDasharray='3,3'
            strokeWidth='1'
            d='M-60-200v400M60-200v400'
          ></path>
          <path d='M-56 200q3-111 5-121 3-22 6-31t6-15q2-5 5-9l6-6q3-3 6-5 2-2 5-3.6 3-1.7 6-3.3Q-8.4 4.5-5.6 3L0 0l5.6-3Q8.4-4.5 11-6.1q3-1.6 6-3.3 3-1.6 5-3.6 3-2 6-5l6-6q3-4 5-9 3-6 6-15t6-31q2-10 5-121'></path>
        </g>
        <use x='120' xlinkHref='#set'></use>
        <use x='-120' xlinkHref='#set'></use>
        <path d='M-240 0l5.6-3q2.8-1.5 5.4-3.1 3-1.6 6-3.3 3-1.6 5-3.6 3-2 6-5l6-6q3-4 5-9 3-6 6-15t6-31q2-10 5-121M184 200q3-111 5-121 3-22 6-31t6-15q2-5 5-9l6-6q3-3 6-5 2-2 5-3.6 3-1.7 6-3.3 2.6-1.6 5.4-3.1l5.6-3'></path>
      </g>
      <g fontFamily='Times' fontSize='12' textAnchor='middle'>
        <text y='213'>
          <tspan x='0'>0</tspan>
          <tspan x='60'>π/2</tspan>
          <tspan x='120'>π</tspan>
          <tspan x='180'>3π/2</tspan>
          <tspan x='233'>2π</tspan>
          <tspan x='-60'>−π/2</tspan>
          <tspan x='-120'>−π</tspan>
          <tspan x='-180'>−3π/2</tspan>
          <tspan x='-240'>−2π</tspan>
        </text>
        <text x='-248' y='3'>
          0
        </text>
        <text x='-248' y='43'>
          −2
        </text>
        <text x='-248' y='83'>
          −4
        </text>
        <text x='-248' y='123'>
          −6
        </text>
        <text x='-248' y='163'>
          −8
        </text>
        <text x='-248' y='-37'>
          2
        </text>
        <text x='-248' y='-77'>
          4
        </text>
        <text x='-248' y='-117'>
          6
        </text>
        <text x='-248' y='-157'>
          8
        </text>
      </g>
    </MaxWidth>
  );
}

export default Tan;
