import fetch from 'isomorphic-fetch';

const BACKEND_URL = 'https://blogisek-api-awfccdylhd.now.sh';

const headers = {
  'Content-Type': 'application/json',
};

export const getArticlesList = () =>
  fetch(`${BACKEND_URL}/list`, {
    method: 'GET',
    headers,
    mode: 'cors',
  }).then(response => response.json());

export const getArticle = ({ id }) =>
  fetch(`${BACKEND_URL}/article/${id}`, {
    method: 'GET',
    headers,
    mode: 'cors',
  }).then(response => response.json());
