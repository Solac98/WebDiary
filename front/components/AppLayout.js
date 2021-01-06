import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Link from 'next/link';
import { Menu, Input, Row, Col} from 'antd';
import styled from 'styled-components';

import Login from '../pages/login';

const CustomDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://images.unsplash.com/photo-1508253640504-9096edc75163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80);
  background-size: cover;
`;

const AppLayout = ({ children }) => {
    return (
        <CustomDiv>
            <div style={{width: '95%', margin: '0px auto'}}>
                <Menu style={{marginTop: '10px'}} mode="horizontal">
                    <Menu.Item>
                        <Link href='/'><a>SolarSeeds</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        < Link href='/'><a>My Diary</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href='/allcalendar'><a>Calendar</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href='/profile'><a>Profile</a></Link>
                    </Menu.Item>
                </Menu>
                {/* gutter는 컨텐츠 사이 갭 마진이라 생각하자.*/}
                <Row gutter={8}> {/*가로 한 칸 최대가 24 ex) xs={24} md={6}는 xs는 100%, md는 25%    xs 모바일 */}
                    <Col  xs={24} md={24}>
                       { children }
                    </Col>
                </Row>
            </div>
        </CustomDiv>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;