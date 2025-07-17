import { FC } from 'react';
import cn from 'classnames';

import { SpinnerDuration, SpinnerSize } from './types';

import css from './Spinner.module.sass';

//Интерфейс пропсов для спиннера. Принимает размер, скорость вращения, className
interface SpinnerProps {
    size?: SpinnerSize;
    duration?: SpinnerDuration;
    className?: string;
}

const Spinner: FC<SpinnerProps> = ({
    size = SpinnerSize.MEDIUM,
    duration = SpinnerDuration.AVERAGE,
    className,
}) => {
    return (
        <div className={cn(css.spinner, css[size], css[duration], className)} />
    );
};

export default Spinner;
