import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

import '../../assets/styles/navbar.scss';

const SubMenu = Menu.SubMenu;

class Sidebar extends React.Component {
    state = {
        top: 10,
    }

    render() {
        return (
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item key="1">
                    <NavLink to='/'>
                        <Icon type='home' />
                        <span>
                            Home
                        </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to='projects'>
                        <Icon type='project' />
                        <span>Projects</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to='work'>
                        <Icon type='coffee' />
                        <span>Work and Education</span>
                    </NavLink>
                </Menu.Item>
                <SubMenu key="sub2" title={<span><Icon type="file-text" /><span>Files</span></span>}>
                    <Menu.Item key="4">
                        <a href='/pdf/mrtalley_resume_v1.pdf' target='_blank' rel="noopener noreferrer">
                            <Icon type="file-word" />
                            <span>
                                Resume
                            </span>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <a href='/pdf/mrtalley_gen_ed_essay.pdf' target='_blank' rel="noopener noreferrer">
                            <Icon type="file-word" />
                            <span>
                                Gen Ed Reflection
                            </span>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <a href='/pdf/mrtalley_ethics_essay.pdf' target='_blank' rel="noopener noreferrer">
                            <Icon type="file-word" />
                            <span>
                                Ethics Essay
                            </span>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <a href='/pdf/mrtalley_cumulative_reflection.pdf' target='_blank' rel="noopener noreferrer">
                            <Icon type="file-word" />
                            <span>
                                Cumulative Reflection
                            </span>
                        </a>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="link" /><span>External Links</span></span>}>
                    <Menu.Item key="8">
                        <a href='https://github.com/mrtalley' target='_blank' rel="noopener noreferrer">
                            <Icon type='github' />
                            <span>GitHub</span>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <a href='https://linkedin.com/in/maxtalley' target='_blank' rel="noopener noreferrer">
                            <Icon type='linkedin' />
                            <span>LinkedIn</span>
                        </a>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default Sidebar;
