import React from 'react';
import Marquee from 'react-fast-marquee';
import { Alert } from 'antd';

/*
* Type: "success" ,"info" ,"warning" ,"error"
*
* */

const App = ({children, type}) => (
    <Alert
        banner
        type={type}
        message={
            <Marquee pauseOnHover gradient={false}>
                {children}
            </Marquee>
        }
    />
);
export default App;
