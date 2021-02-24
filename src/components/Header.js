import React, {useState} from 'react';
import {Row, Col, Button,Drawer} from 'antd';
import {
    CloseOutlined,
MenuOutlined
} from '@ant-design/icons';
import styles from '../styles/header.module.css'
import {IMAGE_URL, INSURANCE, LOANS, SIGN_UP} from '../helpers/constants';
import {Link, NavLink} from 'react-router-dom';


const MenuList = ({itemClick,...rest}) => {
    return (
        <ul {...rest} >
            <li className={styles.menu_item} onClick={itemClick ? itemClick : void(0)}>
                <NavLink  to={INSURANCE}>Insurance</NavLink>
            </li>
            <li className={styles.menu_item} onClick={itemClick ? itemClick : void(0)}>
                <NavLink to={LOANS}>Loans</NavLink>
            </li>
            <li className={styles.menu_item} onClick={itemClick ? itemClick : void(0)}>
                <NavLink to={LOANS}>Help</NavLink>
            </li>
            <li className={styles.menu_item} onClick={itemClick ? itemClick : void(0)}>
                <NavLink to={LOANS}>About us</NavLink>
            </li>
        </ul>
    )
}
const Header = () => {
    const [visible,setVisible] = useState(false);
    const onClose = () =>
    {
        setVisible(false);
    }
    return (
        <header className={styles.header}>
            <Row>
                <Col xs={{span: 22}} md={{span: 22}} style={{margin: '0 auto'}} className={styles.header_wrapper}>
                    <div className={styles.header_logo}>
                        <Link to="/">
                        <img src={`${IMAGE_URL}logo.png`} alt=""/>
                        </Link>
                    </div>
                    <MenuList className={`${styles.menu_desktop} ${styles.menu_list}`}/>
                    <div className={styles.header_btn}><Button className="btn_default"><Link to={SIGN_UP}>Become a member</Link></Button>
                    </div>
                    <div className={styles.menu_modal}>
                        <MenuOutlined onClick={() => setVisible(true)} className={styles.menu_icon}/>
                        <Drawer
                            title={<CloseOutlined onClick={() => setVisible(false)}/>}
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={visible}

                        >
                            <MenuList className={`${styles.menu_mobile} ${styles.menu_list} mobile-menu`} itemClick={() => setVisible(false)}/>
                        </Drawer>

                    </div>
                </Col>
            </Row>
        </header>
    );
};

export default Header;
