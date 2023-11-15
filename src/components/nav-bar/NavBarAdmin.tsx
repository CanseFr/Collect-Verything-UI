import React, {useState} from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Avatar from "@mui/material/Avatar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PersonIcon from '@mui/icons-material/Person';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}



export const NavBarAdmin = () =>{

    const [sizeDashBoard, setSizeDashBoard] = useState(256)

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    const handleDashBoard = () => {
        sizeDashBoard === 256 ? setSizeDashBoard(0) : setSizeDashBoard(256)
    }
    const items: MenuProps['items'] = [
        getItem(<Avatar onClick={handleDashBoard} alt="Click & Verything" src="assets/logo.png"/> ,
            'grp', null, [
                getItem(  'Dashboard', '1',<DashboardIcon/>),
                getItem(  'Clients', '2',<SupervisedUserCircleIcon/>),
                getItem(  'Profil', '3',<PersonIcon/>),
                getItem(  'Utilisateurs', '4',<ShowChartIcon/>),
                getItem('Facturation', '5',<PointOfSaleIcon/> ),
            ], 'group'),
    ];


    return (
        <>
        <Menu
            onClick={onClick}
            style={{ width: sizeDashBoard, height: '100vh' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
        </>
    );
}
