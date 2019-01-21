import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LoadGlobals, MeasureWindow, MeasureScroll, LoadCollections } from 'payload/components';

import '../scss/app.scss';

const App = props => {
  return (
    <Provider store={props.store}>
      <React.Fragment>
        <LoadGlobals config={props.config} collections={props.collections} />
        <Router>
          <React.Fragment>
            <LoadCollections collections={props.collections} />
            <MeasureScroll />
            <MeasureWindow />
            {props.children}
          </React.Fragment>
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
