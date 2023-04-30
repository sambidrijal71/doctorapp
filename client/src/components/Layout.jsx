import React from 'react';
import '../styles/LayoutStyle.css';
import { adminMenu, userMenu } from '../data/menuData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Badge, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/features/userSlice';
const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success('Logeed out Successfully. 😊');
    dispatch(setUser(null));
  };
  const sideBarMenu = user?.isAdmin === true ? adminMenu : userMenu;
  return (
    <>
      <div className='main'>
        <div className='layout'>
          <div className='sidebar'>
            <div className='logo'>
              <h6>DOC APP</h6>
              <hr />
            </div>
            <div className='menu'>
              {sideBarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div key={menu.name}>
                    <div className={`menu-item ${isActive && 'active'}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </div>
                );
              })}
              <div className={`menu-item `} onClick={handleLogout}>
                <i className='fa-solid fa-right-from-bracket'></i>
                <Link to='/login'>Logout</Link>
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='header'>
              <div className='header-content' style={{ cursor: 'pointer' }}>
                <Badge
                  count={5}
                  onClick={() => {
                    navigate('/notification');
                  }}
                >
                  <i className='fa-solid fa-bell'></i>
                </Badge>

                <Link to='/profile'>{user?.name}</Link>
              </div>
            </div>
            <div className='body'>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
