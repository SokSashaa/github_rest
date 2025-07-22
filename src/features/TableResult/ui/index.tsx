import { FC } from 'react';
import {
    DataGrid,
    GridCallbackDetails,
    GridPaginationModel,
    GridRowParams,
    GridSortModel,
} from '@mui/x-data-grid';

import { Repository } from '@entities/repository/model/repository';

import { COLUMNS_TABLE } from '../config/defaultConfig';

const PAGE_SIZE_OPTIONS = [5, 10, 15];

//Интерфейс пропсов для нашей таблицы.
// Принимает массив репозиториев,функцию для работы по клику на строку таблицы,
// модели пагинации и сортировки и их изменение
interface TableResultProps {
    items: Repository[];
    onClickRow: (value: Repository) => void;
    rowCount: number;
    paginationModel: GridPaginationModel;
    sortModel: GridSortModel;
    onSortModelChange: (
        model: GridSortModel,
        details: GridCallbackDetails,
    ) => void;
    onPaginationModelChange: (
        model: GridPaginationModel,
        details: GridCallbackDetails,
    ) => void;
}

const TableResult: FC<TableResultProps> = ({
    items,
    onClickRow,
    rowCount,
    paginationModel,
    sortModel,
    onPaginationModelChange: handlePaginationModelChange,
    onSortModelChange: handleSortModelChange,
}) => {
    //Функция клика по строке таблицы
    const handleClickRow = (value: GridRowParams) => {
        onClickRow(value.row);
    };

    return (
        <DataGrid
            rows={items}
            columns={COLUMNS_TABLE}
            rowCount={rowCount}
            disableColumnMenu={true}
            pageSizeOptions={PAGE_SIZE_OPTIONS}
            style={{ border: 'none'}}
            sortingMode="server"
            paginationMode="server"
            paginationModel={paginationModel}
            sortModel={sortModel}
            onRowClick={handleClickRow}
            onPaginationModelChange={handlePaginationModelChange}
            onSortModelChange={handleSortModelChange}
        />
    );
};

export default TableResult;
