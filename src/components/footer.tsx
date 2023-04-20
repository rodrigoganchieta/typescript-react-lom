/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

export function Footer(): JSX.Element {
  return (
    <footer>
      <p>
        © 2023 - Luiz Otávio Miranda &{' '}
        <a href="https://github.com/rodrigoganchieta" target="_blank">
          <i className="devicon-github-original" /> RODRIGOGANCHIETA
        </a>
      </p>
    </footer>
  );
}
