

export enum SORT_ORDER {
    ASC = "ASC",
    DESC = "DESC"
}

export type PaginationData = {
    start: number,
    length: number
}

export type SortData = {
    order: SORT_ORDER,
    sortField: string
}