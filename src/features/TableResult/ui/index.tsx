import { FC } from 'react';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';

import { Repository } from '@entities/repository/model/repository';

import { COLUMNS_TABLE } from '../config/defaultConfig';

const PAGE_SIZE = 5;

const PAGE_SIZE_OPTIONS = [5, 10, 15];

//Интерфейс пропсов для нашей таблицы.
// Принимает массив репозиториев и функцию для работы по клику на строку таблицы
interface TableResultProps {
    items: Repository[];
    onClickRow: (value: Repository) => void;
}

const TableResult: FC<TableResultProps> = ({ items, onClickRow }) => {

    //Функция клика по строке таблицы
    const handleClickRow = (value: GridRowParams) => {
        onClickRow(value.row);
    };

    return (
        <DataGrid
            rows={items}
            columns={COLUMNS_TABLE}
            disableColumnMenu={true}
            pageSizeOptions={PAGE_SIZE_OPTIONS}
            style={{ border: 'none' }}
            initialState={{
                pagination: { paginationModel: { pageSize: PAGE_SIZE } },
            }}
            onRowClick={handleClickRow}
        />
    );
};

export default TableResult;
