import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/Popper';
import Menu from '~/components/Menu';

function HeadlessTippy({ children, MENU_ITEMS = [] }) {
    const [menu, setMenu] = useState([{ data: MENU_ITEMS }]);
    const currentMenu = menu[menu.length - 1];
    const handleClick = (item) => {
        if (!!item.children) {
            setMenu((prev) => [...prev, item.children]);
        } else {
            console.log(item);
        }
    };

    const handleBack = () => {
        setMenu((prev) => prev.splice(prev.length - 1, 1));
    };

    const handleResetMenu = () => {
        setMenu([{ data: MENU_ITEMS }]);
    };

    return (
        <Tippy
            onHide={handleResetMenu}
            interactive
            placement="bottom-end"
            offset={[16, 0]}
            render={(attrs) => (
                <PopperWrapper tabIndex={-1} {...attrs}>
                    <Menu ITEMS={currentMenu} handleClick={handleClick} handleBack={handleBack} />
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default HeadlessTippy;
