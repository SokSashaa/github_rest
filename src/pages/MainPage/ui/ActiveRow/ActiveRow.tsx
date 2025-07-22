import { FC } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Chip } from '@mui/material';

import { Repository } from '@entities/repository/model/repository';

import css from './activeRow.module.sass'

//Интерфейс пропсов выбранной строки таблицы. Принимает репозиторий(на тот, что кликнули)
interface ActiveRowProps {
    item: Repository;
}

const ActiveRow: FC<ActiveRowProps> = ({ item }) => {
    return (
        <div className={css.activeRow}>
            <h3 className={css.title}>{item.name}</h3>
            <div className={css.subtitle}>
                {item.language && (
                    <Chip
                        className={css.language}
                        label={item.language}
                    />
                )}
                <div className={css.starCount}>
                    <StarIcon className={css.star} />
                    {item.stars}
                </div>
            </div>
            <div className={css.tags}>
                {item.topics?.map((topic) => (
                    <Chip
                        key={topic}
                        label={topic}
                    />
                ))}
            </div>
            <p>{item.license}</p>
        </div>
    );
};

export default ActiveRow;
