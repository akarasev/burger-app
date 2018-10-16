import React from 'react';

import styles from './NaviagationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact>BurgerBuilder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;