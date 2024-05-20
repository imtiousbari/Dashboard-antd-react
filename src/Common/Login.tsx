import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Button, message } from "antd";
import loginimg from "../Images/loginimg.jpg";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Static username and password
    const validUsername = "admin";
    const validPassword = "123456";

    if (username === validUsername && password === validPassword) {
      // Successful login
      message.success("Logged in successfully");
      // You can redirect the user to another page here
    } else {
      // Failed login
      message.error("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#001628",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", 
      }}
    >

<Row justify="center">
    <Col xs={24} sm={20} md={16} lg={12} xl={10} xxl={12}>
      <Card style={{ borderRadius: 20, background: '#50887c' }}>
        {/* Your card content here */}
        <Row>
          <Col span={12}>
            <div
              style={{ display: "flex", margin: 20, flexDirection: "column", paddingTop: '50px'}}
            >
              <h1 style={{color: 'white'}}>Welcome Back!</h1>
              <Form onFinish={handleLogin}>
                <div style={{ marginBottom: 16 }}>
                  <Form.Item
                    name="username"
                    labelAlign="left"
                    style={{ marginBottom: 0 }}
                    rules={[
                      {
                        required: true,
                        message:  <span style={{ color: 'white' }}>*Please input your password!</span>,
                      },
                    ]}
                  >
                    <Input
                      prefix={
                        <UserOutlined style={{ color: "#011528" }} />
                      }
                      style={{paddingTop: 10, paddingBottom: 10, background: '#f4fffd'}}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="login-input"
                      placeholder="Username"
                      
                    />
                  </Form.Item>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <Form.Item
                    name="password"
                    labelAlign="left"
                    style={{ marginBottom: 0 }}
                    rules={[
                      {
                        required: true,
                        message: <span style={{ color: 'white' }}>*Please input your password!</span>,
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={
                        <LockOutlined style={{ color: "#011528" }} />
                      }
                      style={{paddingTop: 10, paddingBottom: 10,  background: '#f4fffd'}}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="login-input"
                    />
                    
                  </Form.Item>
                  <p style={{color: 'white', margin: 0, textAlign: 'right'}}>
                    Forgot password?
                  </p>
                </div>

                <Form.Item style={{ marginBottom: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%", height: 40, backgroundColor: '#ec9754' }}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col span={12} style={{ paddingLeft: 10, margin: 0 }}>
            <img
              src={loginimg}
              alt="placeholder"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0px 20px 20px 00px",
              }}
            />
          </Col>
        </Row>

      </Card>
    </Col>
  </Row>
      {/* <Card style={{ width: "50%", borderRadius: 20, background: '#50887c' }}>
        <Row>
          <Col span={12}>
            <div
              style={{ display: "flex", margin: 20, flexDirection: "column", paddingTop:50 }}
            >
              <h1 style={{color: 'white'}}>Welcome Back!</h1>
              <Form onFinish={handleLogin}>
                <div style={{ marginBottom: 16 }}>
                  <Form.Item
                    name="username"
                    labelAlign="left"
                    style={{ marginBottom: 0 }}
                    rules={[
                      {
                        required: true,
                        message:  <span style={{ color: 'white' }}>*Please input your password!</span>,
                      },
                    ]}
                  >
                    <Input
                      prefix={
                        <UserOutlined style={{ color: "#011528" }} />
                      }
                      style={{paddingTop: 10, paddingBottom: 10, background: '#f4fffd'}}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="login-input"
                      placeholder="Username"
                      
                    />
                  </Form.Item>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <Form.Item
                    name="password"
                    labelAlign="left"
                    style={{ marginBottom: 0 }}
                    rules={[
                      {
                        required: true,
                        message: <span style={{ color: 'white' }}>*Please input your password!</span>,
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={
                        <LockOutlined style={{ color: "#011528" }} />
                      }
                      style={{paddingTop: 10, paddingBottom: 10,  background: '#f4fffd'}}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="login-input"
                    />
                    
                  </Form.Item>
                  <p style={{color: 'white', margin: 0, textAlign: 'right'}}>
                    Forgot password?
                  </p>
                </div>

                <Form.Item style={{ marginBottom: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%", height: 40, backgroundColor: '#ec9754' }}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col span={12} style={{ paddingLeft: 10, margin: 0 }}>
            <img
              src={loginimg}
              alt="placeholder"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0px 20px 20px 00px",
              }}
            />
          </Col>
        </Row>
      </Card> */}
    </div>
  );
};

export default LoginPage;
