import React from 'react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('next/head', () => {
  const ReactDOMServer = require('react-dom/server');
  return {
    __esModule: true,
    default: ({
      children,
    }: {
      children: Array<React.ReactElement> | React.ReactElement | null;
    }) => {
      if (children) {
        global.document.head.insertAdjacentHTML(
          'afterbegin',
          ReactDOMServer.renderToString(children) || '',
        );
      }
      return null;
    },
  };
});

// export function getMeta(metaName: string) {
//   const metas = document.getElementsByTagName('meta');
//   for (let i = 0; i < metas.length; i += 1) {
//     if (metas[i].getAttribute('name') === metaName) {
//       return metas[i].getAttribute('content');
//     }
//   }
//   return '';
// }
