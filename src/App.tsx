import React from 'react';
import styles from './App.module.less';

const App = () => {
    return (
        <div className={`${styles.content}`}>
            欢迎使用 noobcli 模板 <code style={{ color: 'red', fontSize: 16 }}>npx noobcli -c demo</code>
        </div>
    );
};

export default App;
