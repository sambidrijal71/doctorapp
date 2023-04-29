import React from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await axios.post('/user/register', values);
      if (res.data.success) {
        message.success(res.data.message);
        navigate('/login');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error(
        'Something went wrong while registering a user, please try again.'
      );
    }
  };
  return (
    <div className='form-head'>
      <Form layout='vertical' onFinish={onFinish} className='form-element'>
        <h3 className='text-center pb-5'>Registration Form</h3>
        <Form.Item
          style={{ color: 'white' }}
          className='label-style'
          label={
            <label style={{ color: 'white', fontSize: '16px' }}>
              Enter your Name.
            </label>
          }
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input placeholder='Sambid' />
        </Form.Item>

        <Form.Item
          label={
            <label style={{ color: 'white', fontSize: '16px' }}>
              Enter your Email.
            </label>
          }
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input placeholder='sam@bid.com' />
        </Form.Item>

        <Form.Item
          label={
            <label style={{ color: 'white', fontSize: '16px' }}>
              Enter your Password.
            </label>
          }
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input placeholder='password' />
        </Form.Item>
        <div className='d-flex flex-column'>
          <Link className='link-style' to='/login'>
            👉 Already a user?, login here!! 👈
          </Link>
          <button className='btn btn-secondary'>Register Now</button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
