import React from 'react';
import ReactDom from 'react-dom';

import App from "./App";
import './index.less'

class Index extends React.Component {
    render () {
        // console.log('全局环境的参数 <CONFIG>', CONFIG);
        return <App />
    }
}
ReactDom.render(<Index />, document.getElementById("app"))