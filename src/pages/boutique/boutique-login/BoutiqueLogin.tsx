import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../context/FakeAuthContext";
import LoopBanner from "../../../components/alerts/LoopBanner";
import {LoopBanType} from "../../../types/enum/LoopBanType";
import {LoopBanChildren} from "../../../types/enum/LoopBanChildren";
import {Button, Checkbox, Form, Input} from 'antd';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


export default function BoutiqueLogin() {

    const [email, setEmail] = useState("canse@canse.canse");
    const [password, setPassword] = useState("testtesttest");

    const {login, isAuthenticated, error} = useAuth()
    const navigate = useNavigate()

    function handleSubmit(e: any) {
        e.preventDefault()
        if (email && password) login(email, password)
    }

    useEffect(() => {
        if (isAuthenticated) navigate("/app", {replace: true})
    }, [isAuthenticated, navigate]);


    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        mail?: string;
        password?: string;
        remember?: string;
    };

    return (
        <>
            {error !== false && <LoopBanner type={LoopBanType.WAR} children={LoopBanChildren.WRONGPASSORMAIL}/>}
            <Container sx={{height: '200px',marginTop: '20vh'}} maxWidth="sm">

                    <Box sx={{ boxShadow: '10px 5px 5px #c2c2c2',display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '40vh', border: '1px solid #cbcbcb', borderRadius: '15px'}}>
                        <Form
                            name="basic"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 16}}
                            style={{maxWidth: 600}}
                            initialValues={{remember: true}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item<FieldType>
                                label="Email"
                                name="mail"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >

                                <Input onChange={(e) => setEmail(e.target.value)} value={email}/>
                            </Form.Item>

                            <Form.Item<FieldType>
                                label="Password"
                                name="password"
                                rules={[{required: true, message: 'Please input your password!'}]}
                            >
                                <Input.Password onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </Form.Item>

                            <Form.Item<FieldType>
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{offset: 8, span: 16}}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </Box>

            </Container>

        </>
    )
}