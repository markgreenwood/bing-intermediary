const got = require('got');
const config = require('config');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      const homePage = `
      <h1>Intermediary to the Machine That Goes Bing</h1>
      <h3>I can talk to the Machine That Goes Bing. Click <a href="/talktothemachine">here</a> to hear a message from the Machine.</h3>
      `;
      return reply(homePage);
    }
  },
  {
    method: 'GET',
    path: '/talktothemachine',
    handler: (request, reply) => {
      const url = `${config.bingmachine.Address}:${config.bingmachine.Port}/bing`;
      got(url)
        .then((response) => {
          const talkPage = `
          <h1>A message from The Machine That Goes Bing</h1>
          <div style="border: solid black 1px">${response.body}</div>
          `;

          return reply(talkPage);
        });
    }
  }
]