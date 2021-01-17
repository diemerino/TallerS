import {ReactNode} from "react";

export interface MaterialDatatableColumn {
    name: string,
    field: string,
    options?: MaterialDatatableColumnOptions
}

export interface MaterialDatatableColumnOptions {
    display?: "true" | "false" | "excluded"
    filter?: boolean
    sort?: boolean
    width?: number,
    headerNoWrap?: boolean,
    download?: boolean
    customHeadRender?: (value: any, tableMeta: any, updateValue: any) => string
    customBodyRender?: (value: any, tableMeta: any, updateValue: any) => string | ReactNode
}

export interface MaterialDatatableOptions {
    page?: number
    count?: number
    serverSide?: boolean
    filterList?: any[]
    rowsSelected?: any[]
    filterType?: string
    textLabels?: object
    pagination?: boolean
    usePaperPlaceholder?: boolean,
    selectableRows?: boolean
    resizableColumns?: boolean
    customToolbar?: () => ReactNode
    customToolbarSelect?: () => ReactNode
    customFooter?: () => ReactNode
    caseSensitive?: boolean
    responsive?: string
    rowsPerPage?: number
    rowsPerPageOptions?: number[]
    rowHover?: boolean
    sortFilterList?: boolean
    sort?: boolean
    filter?: boolean
    search?: boolean
    print?: boolean
    download?: boolean
    downloadOptions?: { filename: string, separator: string }
    viewColumns?: boolean
    onRowsSelect?: (currentRowsSelected: any[], rowsSelected: any[]) => void
    onRowsDelete?: (rowsDeleted: any[]) => void
    onRowClick?: (rowData: string[], rowMeta: { dataIndex: number, rowIndex: number }) => void
    onCellClick?: (colIndex: number, rowIndex: number) => void
    onChangePage?: (currentPage: number) => void
    onChangeRowsPerPage?: (numberOfRows: number) => void
    onSearchChange?: (searchText: string) => void
    onFilterChange?: (changedColumn: string, filterList: any[]) => void
    onColumnSortChange?: (changedColumn: string, direction: string) => void
    onColumnViewChange?: (changedColumn: string, action: string) => void
    onServerRequest?: (action: string, tableState: MuiDatatablesTableState) => void
}

export interface MuiDatatablesTableState {
    page: number
    rowsPerPage: number
    filterList: any[]
}

export type MaterialDatatableColumnDef = string | MaterialDatatableColumn;

export interface MaterialDatatableProps {
    title: string
    columns: MaterialDatatableColumnDef[]
    data: any[]
    options?: MaterialDatatableOptions
}

export const MaterialDatatable: React.ComponentType<MaterialDatatableProps>;

export default MaterialDatatable;
