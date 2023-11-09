import React from 'react';
import Marquee from 'react-fast-marquee';
import { Alert } from 'antd';


/*
* Type: "success" ,"info" ,"warning" ,"error"
*
* */


const LoopBanner =({children, type}:{children:string, type:any}) => (
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

export default LoopBanner;