import {ReactElement} from "react";

/**
 * @param title title of this column header
 * @param icon left icon of this column header
 * @param sortBy can table be sort by this column
 * */
interface TableColumn<T> {
    title?: string;
    icon?: any;
    sortBy?: boolean;
    muted?: boolean;
    sortFunction?: () => {};
    viewGenerator?: (data: T) => ReactElement | any;
}

interface TableRow {
    id: number;
    checked?: boolean;
    data: {};
}

interface TableProperties<T> {
    title?: string;
    selectable?: boolean;
    disableSelectAll?: boolean;
    searchable?: boolean;
    isLocalSearch?: boolean;
    sortable?: boolean;
    isLocalSort?: boolean;
    columns?: TableColumn<T>[];
    data?: T[];
    totalDataCount?: number;
    rowCountPerPage?: number;
    numOfPages?: number;
    currentPage?: number;

}

export type {
    TableColumn, TableRow, TableProperties
}