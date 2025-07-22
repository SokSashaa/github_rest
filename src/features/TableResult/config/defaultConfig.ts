import {GridColDef} from '@mui/x-data-grid';

export const COLUMNS_TABLE: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Название', // по-хорошему лучше использовать библиотеку по типу i18n для перевода, но это не по ТЗ
        sortable: false,
        flex: 0.2,
    },
    {
        field: 'language',
        headerName: 'Язык',
        sortable: false,
        resizable: false,
        flex: 0.2,
    },
    {
        field: 'forks',
        headerName: 'Число форков',
        resizable: false,
        flex: 0.2,
    },
    {
        field: 'stars',
        headerName: 'Число звёзд',
        resizable: false,
        flex: 0.2,
    },
    {
        field: 'updated',
        headerName: 'Дата обновления',
        resizable: false,
        flex: 0.2,
    },
];
