import React from 'react';
import styled from 'styled-components';

const MaxWidth = styled.svg`
  max-width: 590px;
  margin-right: 1rem;
`;

function Sine() {
  return (
    <MaxWidth
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 590 166'
      baseProfile='full'
      version='1.1'
    >
      <defs>
        <marker
          id='Arrow'
          markerHeight='4.5'
          markerUnits='strokeWidth'
          markerWidth='6'
          orient='auto'
          refX='2.52'
          refY='2.25'
        >
          <path d='M2.52 2.25L0 4.5l6-2.25L0 0z'></path>
        </marker>
        <path
          id='xgridline'
          stroke='#000'
          strokeLinecap='square'
          strokeWidth='0.5'
          d='M0 55L0 -55'
          opacity='0.4'
        ></path>
        <path
          id='ygridline'
          stroke='#000'
          strokeLinecap='square'
          strokeWidth='0.5'
          d='M-261.799 0L261.799 0'
          opacity='0.4'
        ></path>
        <path
          id='xtick'
          stroke='#000'
          strokeLinecap='square'
          strokeWidth='1'
          d='M0 5L0 -5'
          opacity='1'
        ></path>
        <path
          id='ytick'
          stroke='#000'
          strokeLinecap='square'
          strokeWidth='1'
          d='M-5 0L5 0'
          opacity='1'
        ></path>
        <path
          id='s'
          d='M208 194c22-4 104-20 104-92 0-51-35-91-113-91-84 0-120 57-139 142-3 13-4 17-14 17-13 0-13-7-13-25V13c0-17 0-24 11-24 5 0 6 1 25 20 2 2 2 4 20 23 44-42 89-43 110-43 115 0 161 67 161 139 0 53-30 83-42 95-33 32-72 40-114 48-56 11-123 24-123 82 0 35 26 76 112 76 110 0 115-90 117-121 1-9 10-9 12-9 13 0 13 5 13 24v101c0 17 0 24-11 24-5 0-7 0-20-12-3-4-13-13-17-16-38 28-79 28-94 28-122 0-160-67-160-123 0-35 16-63 43-85 32-26 60-32 132-46z'
        ></path>
        <path
          id='i'
          d='M177 442L37 431v-31c65 0 74-6 74-55V76c0-45-11-45-78-45V0c32 1 86 3 110 3 35 0 70-2 104-3v31c-66 0-70 5-70 44zm4 174c0 32-25 53-53 53-31 0-53-27-53-53 0-27 22-53 53-53 28 0 53 21 53 53z'
        ></path>
        <path
          id='n'
          d='M110 344V76c0-45-11-45-78-45V0c35 1 86 3 113 3 26 0 78-2 112-3v31c-67 0-78 0-78 45v184c0 104 71 160 135 160 63 0 74-54 74-111V76c0-45-11-45-78-45V0c35 1 86 3 113 3 26 0 78-2 112-3v31c-52 0-77 0-78 30v191c0 86 0 117-31 153-14 17-47 37-105 37-73 0-120-43-148-105v105L32 431v-31c70 0 78-7 78-56z'
        ></path>
        <path
          id='parleft'
          d='M331-240c0 3 0 5-17 22C189-92 157 97 157 250c0 174 38 348 161 473 13 12 13 14 13 17 0 7-4 10-10 10-10 0-100-68-159-195-51-110-63-221-63-305 0-78 11-199 66-312 60-123 146-188 156-188 6 0 10 3 10 10z'
        ></path>
        <path
          id='parright'
          d='M289 250c0 78-11 199-66 312C163 685 77 750 67 750c-6 0-10-4-10-10 0-3 0-5 19-23 98-99 155-258 155-467 0-171-37-347-161-473-13-12-13-14-13-17 0-6 4-10 10-10 10 0 100 68 159 195 51 110 63 221 63 305z'
        ></path>
        <path
          id='x'
          d='M334 302c6 26 29 118 99 118 5 0 29 0 50-13-28-5-48-30-48-54 0-16 11-35 38-35 22 0 54 18 54 58 0 52-59 66-93 66-58 0-93-53-105-76-25 66-79 76-108 76-104 0-161-129-161-154 0-10 10-10 12-10 8 0 11 2 13 11 34 106 100 131 134 131 19 0 54-9 54-67 0-31-17-98-54-238-16-62-51-104-95-104-6 0-29 0-50 13 25 5 47 26 47 54 0 27-22 35-37 35-30 0-55-26-55-58 0-46 50-66 94-66 66 0 102 70 105 76 12-37 48-76 108-76 103 0 160 129 160 154 0 10-9 10-12 10-9 0-11-4-13-11C438 35 370 11 338 11c-39 0-55 32-55 66 0 22 6 44 17 88z'
        ></path>
        <path
          id='pi'
          d='M265 373h113c-33-148-42-191-42-258 0-15 0-42 8-76 10-44 21-50 36-50 20 0 41 18 41 38 0 6 0 8-6 22-29 72-29 137-29 165 0 53 7 107 18 159h114c13 0 49 0 49 34 0 24-21 24-40 24H192c-22 0-60 0-104-47-35-39-61-85-61-90 0-1 0-10 12-10 8 0 10 4 16 12 49 77 107 77 127 77h57c-32-121-86-242-128-333-8-15-8-17-8-24 0-19 16-27 29-27 30 0 38 28 50 65 14 46 14 48 27 98z'
        ></path>
        <path
          id='minus'
          d='M661 230c14 0 33 0 33 20s-19 20-33 20H193.8c-14 0-33 0-33-20s19-20 33-20z'
        ></path>
        <path
          id='one'
          d='M294 640c0 24 0 26-23 26-62-64-150-64-182-64v-31c20 0 79 0 131 26V79c0-36-3-48-93-48H95V0c35 3 122 3 162 3s127 0 162-3v31h-32c-90 0-93 11-93 48z'
        ></path>
        <path
          id='two'
          d='M449 174h-25c-5-30-12-74-22-89-7-8-73-8-95-8H127l106 103c156 138 216 192 216 292 0 114-90 194-212 194-113 0-187-92-187-181 0-56 50-56 53-56 17 0 52 12 52 53 0 26-18 52-53 52-8 0-10 0-13-1 23 65 77 102 135 102 91 0 134-81 134-163 0-80-50-159-105-221L61 37C50 26 50 24 50 0h371z'
        ></path>
        <path
          id='three'
          d='M290 352c82 27 140 97 140 176 0 82-88 138-184 138-101 0-177-60-177-136 0-33 22-52 51-52 31 0 51 22 51 51 0 50-47 50-62 50 31 49 97 62 133 62 41 0 96-22 96-112 0-12-2-70-28-114-30-48-64-51-89-52-8-1-32-3-39-3-8-1-15-2-15-12 0-11 7-11 24-11h44c82 0 119-68 119-166C354 35 285 6 241 6 198 6 123 23 88 82c35-5 66 17 66 55 0 36-27 56-56 56-24 0-56-14-56-58 0-91 93-157 202-157 122 0 213 91 213 193 0 82-63 160-167 181z'
        ></path>
      </defs>
      <path fill='#fff' d='M0 0H590V166H0z'></path>
      <g transform='translate(293.5 90.5)'>
        <use x='-251.327' xlinkHref='#xgridline'></use>
        <use x='-188.496' xlinkHref='#xgridline'></use>
        <use x='-125.664' xlinkHref='#xgridline'></use>
        <use x='-62.832' xlinkHref='#xgridline'></use>
        <use x='62.832' xlinkHref='#xgridline'></use>
        <use x='125.664' xlinkHref='#xgridline'></use>
        <use x='188.496' xlinkHref='#xgridline'></use>
        <use x='251.327' xlinkHref='#xgridline'></use>
        <use y='40' xlinkHref='#ygridline'></use>
        <use y='-40' xlinkHref='#ygridline'></use>
        <use x='-251.327' xlinkHref='#xtick'></use>
        <use x='-188.496' xlinkHref='#xtick'></use>
        <use x='-125.664' xlinkHref='#xtick'></use>
        <use x='-62.832' xlinkHref='#xtick'></use>
        <use x='62.832' xlinkHref='#xtick'></use>
        <use x='125.664' xlinkHref='#xtick'></use>
        <use x='188.496' xlinkHref='#xtick'></use>
        <use x='251.327' xlinkHref='#xtick'></use>
        <use y='40' xlinkHref='#ytick'></use>
        <use y='-40' xlinkHref='#ytick'></use>
        <path
          stroke='#000'
          strokeLinecap='square'
          strokeWidth='2'
          markerEnd='url(#Arrow)'
          d='M-282.5 0L282.5 0'
        ></path>
        <path
          stroke='#000'
          strokeLinecap='square'
          strokeWidth='2'
          markerEnd='url(#Arrow)'
          d='M0 70.5L0 -70.5'
        ></path>
        <use
          x='-285.75'
          transform='matrix(.02 0 0 -.02 288 16)'
          xlinkHref='#x'
        ></use>
        <g transform='matrix(.02 0 0 -.02 -6 -70)'>
          <use x='-2577.1' xlinkHref='#s'></use>
          <use x='-2182.7' xlinkHref='#i'></use>
          <use x='-1904.9' xlinkHref='#n'></use>
          <use x='-1349.3' xlinkHref='#parleft'></use>
          <use x='-960.4' xlinkHref='#x'></use>
          <use x='-388.9' xlinkHref='#parright'></use>
        </g>
        <g transform='translate(0 25)'>
          <g transform='matrix(.02 0 0 -.02 -251.327 0)'>
            <use x='-1200' xlinkHref='#minus'></use>
            <use x='-500' xlinkHref='#two'></use>
            <use xlinkHref='#pi'></use>
          </g>
          <g transform='matrix(.02 0 0 -.02 -188.496 0)'>
            <use x='-1300' xlinkHref='#minus'></use>
            <path
              stroke='#000'
              strokeLinecap='square'
              strokeWidth='40'
              d='M-500 280h400'
            ></path>
            <use
              x='-673.3'
              transform='matrix(.69315 0 0 .69315 0 400)'
              xlinkHref='#three'
            ></use>
            <use
              x='-673.3'
              transform='matrix(.69315 0 0 .69315 0 -300)'
              xlinkHref='#two'
            ></use>
            <use xlinkHref='#pi'></use>
          </g>
          <g transform='matrix(.02 0 0 -.02 -125.664 0)'>
            <use x='-985' xlinkHref='#minus'></use>
            <use x='-285' xlinkHref='#pi'></use>
          </g>
          <g transform='matrix(.02 0 0 -.02 -62.832 0)'>
            <use x='-1300' xlinkHref='#minus'></use>
            <path
              stroke='#000'
              strokeLinecap='square'
              strokeWidth='40'
              d='M-505 280h400'
            ></path>
            <use
              x='-673.3'
              transform='matrix(.69315 0 0 .69315 0 400)'
              xlinkHref='#one'
            ></use>
            <use
              x='-673.3'
              transform='matrix(.69315 0 0 .69315 0 -300)'
              xlinkHref='#two'
            ></use>
            <use xlinkHref='#pi'></use>
          </g>
          <g transform='matrix(.02 0 0 -.02 62.832 0)'>
            <path
              stroke='#000'
              strokeLinecap='square'
              strokeWidth='40'
              d='M-500 280h400'
            ></path>
            <use
              x='-673.3'
              transform='matrix(.69315 0 0 .69315 0 400)'
              xlinkHref='#one'
            ></use>
            <use
              x='-673.3'
              transform='matrix(.69315 0 0 .69315 0 -300)'
              xlinkHref='#two'
            ></use>
            <use xlinkHref='#pi'></use>
          </g>
          <use
            x='-285'
            transform='matrix(.02 0 0 -.02 125.664 0)'
            xlinkHref='#pi'
          ></use>
          <g transform='matrix(.02 0 0 -.02 188.496 0)'>
            <path
              stroke='#000'
              strokeLinecap='square'
              strokeWidth='40'
              d='M-500 280h400'
            ></path>
            <use
              x='-673.3'
              transform='matrix(.69315 0 0 .69315 0 400)'
              xlinkHref='#three'
            ></use>
            <use
              x='-673.3'
              transform='matrix(.69315 0 0 .69315 0 -300)'
              xlinkHref='#two'
            ></use>
            <use xlinkHref='#pi'></use>
          </g>
          <g transform='matrix(.02 0 0 -.02 251.327 0)'>
            <use x='-500' xlinkHref='#two'></use>
            <use xlinkHref='#pi'></use>
          </g>
        </g>
        <g transform='translate(-8 7)'>
          <use
            x='-500'
            transform='matrix(.02 0 0 -.02 0 -40)'
            xlinkHref='#one'
          ></use>
          <g transform='matrix(.02 0 0 -.02 0 40)'>
            <use x='-1200' xlinkHref='#minus'></use>
            <use x='-500' xlinkHref='#one'></use>
          </g>
        </g>
        <g transform='scale(40 -40)'>
          <path
            fill='none'
            stroke='red'
            strokeLinecap='butt'
            strokeWidth='0.1'
            d='M-6.545-.259l.262.259c.202.202.403.404.609.572.166.137.334.25.506.326.151.066.302.102.456.102.154 0 .304-.036.455-.102.172-.076.34-.19.506-.326.206-.168.408-.37.61-.572.201-.202.403-.404.609-.572.166-.137.333-.25.506-.326.15-.066.301-.102.455-.102.154 0 .305.036.456.102.172.076.34.19.506.326.205.168.407.37.609.572.202.202.404.404.61.572.165.137.333.25.505.326.151.066.302.102.456.102.154 0 .304-.036.455-.102.173-.076.34-.19.506-.326.206-.168.408-.37.61-.572.201-.202.403-.404.609-.572.166-.137.334-.25.506-.326.15-.066.301-.102.455-.102.154 0 .305.036.456.102.172.076.34.19.506.326.206.168.407.37.61.572.086.087.174.174.261.259'
          ></path>
        </g>
      </g>
    </MaxWidth>
  );
}

export default Sine;
