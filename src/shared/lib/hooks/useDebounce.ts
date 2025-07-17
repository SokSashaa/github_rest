import { useEffect, useState } from 'react';

/**
 * Хук useDebounce для отложенного обновления значения с задержкой.
 * Полезен для оптимизации производительности, например, при частых изменениях ввода
 *
 * @template T - Тип переданного значения
 * @param {T} value - Значение, которое нужно "отложить"
 * @param {number} [delay=500] - Задержка в миллисекундах перед обновлением (по умолчанию 500мс)
 * @returns {T} - Отложенное значение (обновится только после завершения задержки)
 *
 *
 **/
export const useDebounce = <T>(value: T, delay = 500) => {
    const [valueDebounce, setValueDebounce] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setValueDebounce(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return valueDebounce;
};
