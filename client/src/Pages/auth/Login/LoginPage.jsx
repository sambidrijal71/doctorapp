import React from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../../../redux/features/alertSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post('/user/login', values);
      if (res.data.success) {
        dispatch(hideLoading());
        message.success(res.data.message);
        navigate('/');
        localStorage.setItem('token', res.data.token);
      } else {
        dispatch(hideLoading());
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error(
        'Something went wrong while logging in a user, please try again.'
      );
    }
  };
  return (
    <div className='form-head'>
      <Form layout='vertical' onFinish={onFinish} className='form-element'>
        <h3 className='text-center pb-5'>Login Form</h3>
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
          <Input placeholder='Sam@bid.com' />
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
          <Input placeholder='password' type='password' />
        </Form.Item>
        <div className='d-flex flex-column'>
          <Link className='link-style' to='/register'>
            👉 Not a user?, register here!! 👈
          </Link>
          <button className='btn btn-secondary'>Login Now</button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
