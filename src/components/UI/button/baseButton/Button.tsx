import React, {ReactChild} from 'react';
import s from './Button.module.scss';

interface IProps {
    children?: ReactChild
    props?: any
}

const Button: React.FC<IProps> = ({children, ...props}) => {
    return (
        <button {...props} className={s.Button}>
            {children}
        </button>
    )
};

export default Button;
