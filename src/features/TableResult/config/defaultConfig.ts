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
        field: 'forks_count',
        headerName: 'Число форков',
        resizable: false,
        flex: 0.2,
    },
    {
        field: 'stargazers_count',
        headerName: 'Число звёзд',
        resizable: false,
        flex: 0.2,
    },
    {
        field: 'updated_at',
        headerName: 'Дата обновления',
        resizable: false,
        flex: 0.2,
    },
];
