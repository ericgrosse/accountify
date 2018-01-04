import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('components/App', () => {
    const NextApp = require('components/App').default
    ReactDOM.render(
    <NextApp />,
    document.getElementById('root')
    )
  })
}