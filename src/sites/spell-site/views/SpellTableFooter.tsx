import { Divider, TablePagination } from '@mui/material';
import React, {useState} from 'react';

import '../styles/SpellTableFooter.scss'
import useSearchCriteria from '../hooks/useSearchCriteria/useSearchCriteria';

const ROW_OPTIONS = [5, 10, 20, 50];

const SpellTableFooter = () => {

    const [currentPage, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const {setPaginationData, paginationData, currentSpellCount} = useSearchCriteria();

    const handleChangePage = async(
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        await setPaginationData({
            start: newPage*rowsPerPage,
            length: rowsPerPage
        })
        setPage(newPage);
    }

    const handleChangeRowsPerPage = async(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const newRowsPerPage = parseInt(event.target.value, 10);
        setRowsPerPage(newRowsPerPage);
        await setPaginationData({
            start: 0,
            length: newRowsPerPage
        })
        setPage(0);
    }

    return (
        <div className="r-SpellTableFooter">
            <div className="r-SpellTableFooter-Box">
                <TablePagination 
                    component={Divider}
                    count={currentSpellCount}
                    page={currentPage}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={ROW_OPTIONS}
                />
            </div>
        </div>
    )
}

export default SpellTableFooter;