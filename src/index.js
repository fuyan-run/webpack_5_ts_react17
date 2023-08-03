import React from 'react';
import App from "./App";
import './index.less'

class Index extends React.Component {
    render () {
        const { outRouter } = this.props;
        console.log("传递进来参数", this.props);
        // console.log('全局环境的参数 <CONFIG>', CONFIG);
        return <App outRouter={outRouter} />
    }
}
export default Index;