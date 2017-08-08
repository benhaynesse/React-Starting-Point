import React from 'react';
import Drawer from 'material-ui/Drawer';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
const MenuDraw = (props) => (
    <Drawer
        containerStyle={{ 'transition': 'all cubic-bezier(0.23, 1, 0.32, 1)', 'transitionDuration': props.duration || '1s' }}
        docked={false}
        width={props.width || 200}
        open={props.open}        
        onRequestChange={props.onRequestChange}
    >

        <FloatingActionButton mini style={{ 'float': 'right' }} onTouchTap={props.onRequestChange}>
            {props.closeIcon}
        </FloatingActionButton>

    </Drawer>
)

export default MenuDraw;