import React, {FC, useEffect, useState} from 'react';
import {IconChevronLeft, IconChevronRight} from "@tabler/icons";

interface PaginationProps {
    //total count of all available data on the server. ie all data on all pages together
    totalDataCount: number;
    //number of rows on a page
    pageSize: number;
}

const Pagination: FC<PaginationProps> = (props) => {
    const calcShi = () => {
        if (currentPage === numOfPages) {
            let remainingData = props.totalDataCount % props.pageSize;
            if (remainingData > 0) return remainingData;
        }
        return props.pageSize;
    }
    let [numOfPages] = useState(Math.floor(props.totalDataCount / props.pageSize) + (props.totalDataCount % props.pageSize > 0 ? 1 : 0));
    let [currentPage, setCurrentPage] = useState(1);
    let [paginationView, setPaginationView] = useState([] as JSX.Element[]);
    useEffect(() => {
        generatePaginationView()
    }, [currentPage])

    const paginationItemOnClick = (pageId: number) => {
        setCurrentPage(pageId);
    }
    const prevOnClick = () => {
        if (currentPage !== 1) paginationItemOnClick(currentPage - 1)
    }
    const nextOnClick = () => {
        if (currentPage !== numOfPages) paginationItemOnClick(currentPage + 1)
    }
    const generatePaginationView = () => {
        let v: JSX.Element[] = [];
        for (let i = 1; i < numOfPages + 1; i++) {
            v.push(<PaginationItem key={i} id={i} activePageId={currentPage} onClick={paginationItemOnClick}/>)
        }
        setPaginationView(v);
    }
    return <div className="card-footer d-flex align-items-center">
        <p className="m-0 text-muted">Showing <span>{(props.pageSize * (currentPage - 1)) + 1}</span> to <span>{props.pageSize * (currentPage - 1) + calcShi()}</span> of <span>{props.totalDataCount}</span> entries
        </p>
        <ul className="pagination m-0 ms-auto">

            <li className={`page-item ${currentPage === 1 ? " disabled" : ""}`}>
                <span className="page-link d-flex align-items-center" tabIndex={-1} aria-disabled="true"
                      onClick={prevOnClick}>
                    <IconChevronLeft/>
                    prev
                </span>
            </li>
            {paginationView}

            <li className={`page-item ${currentPage === numOfPages ? " disabled" : ""}`}>
                <span className="page-link d-flex align-items-center" onClick={nextOnClick}>
                    next
                    <IconChevronRight/>
                </span>
            </li>
        </ul>
    </div>
}

const PaginationItem: FC<{ id: number, activePageId: number, onClick: Function }> = (props) => {
    // const [active, setActive] = useState(false);
    // const [id, setId] = useState(0);

    const onClick = () => {
        if (props.activePageId !== props.id) {
            props.onClick(props.id);
        }
    }
    return <li className={`page-item ${props.activePageId === props.id ? "active" : ""}`}>
        <span className="page-link"
              onClick={() => {
                  onClick();
              }}>{props.id}</span>
    </li>
}
export default Pagination;
export type {PaginationProps};