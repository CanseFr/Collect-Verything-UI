import React from 'react';
import { Alert, Space } from 'antd';


export const AlertFix = ({children}: { children:string }) =>{
    return(
        <>
            <Alert message={children} type="error" showIcon />

        </>
    )
}