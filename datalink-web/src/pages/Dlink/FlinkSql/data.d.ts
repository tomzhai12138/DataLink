export type FlinkSqlTableListItem = {
            id: number,
            name: string,
            alias: string,
            type: string,
            index: number,
            statement: string,
            note: string,
            enabled: boolean,
            createUser: number,
            createTime: Date,
            updateUser: number,
            updateTime: Date,
            taskId: number,
};

export type TableListPagination = {
    total: number;
    pageSize: number;
    current: number;
};

export type TableListData = {
    list: TableListItem[];
    pagination: Partial<TableListPagination>;
};

export type TableListParams = {
    status?: string;
    name?: string;
    desc?: string;
    key?: number;
    pageSize?: number;
    currentPage?: number;
    filter?: Record<string, any[]>;
    sorter?: Record<string, any>;
};
