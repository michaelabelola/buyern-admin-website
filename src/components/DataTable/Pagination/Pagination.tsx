import React, {FC, useState} from 'react';
import {IconChevronLeft, IconChevronRight} from "@tabler/icons";

interface PaginationProps {
    //total count of all available data on the server. ie all data on all pages together
    totalDataCount: number;
    //number of rows on a page
    pageSize: number;
    pageSizeSetter: (value: number) => void;
    currentPage: number;
    currentPageSetter: (value: number) => void;
    // rowCountSetter:(newCount:number) => void
}

const Pagination: FC<PaginationProps> = (props) => {

    const calcShi = (): number => {
        if (props.currentPage === numOfPages) {
            let remainingData = props.totalDataCount % props.pageSize;
            if (remainingData > 0) return remainingData * 1;
        }
        return props.pageSize * 1;
    }
    let [numOfPages] = useState(Math.floor(props.totalDataCount / props.pageSize) + (props.totalDataCount % props.pageSize > 0 ? 1 : 0));

    const paginationItemOnClick = (pageId: number) => {
        props.currentPageSetter(pageId);
    }
    const prevOnClick = () => {
        if (props.currentPage !== 1) paginationItemOnClick(props.currentPage - 1)
    }
    const nextOnClick = () => {
        if (props.currentPage !== numOfPages) paginationItemOnClick(props.currentPage + 1)
    }
    const generatePaginationView = () => {
        let v: JSX.Element[] = [];
        for (let i = 1; i < Math.floor(props.totalDataCount / props.pageSize) + (props.totalDataCount % props.pageSize > 0 ? 1 : 0) + 1; i++) {
            v.push(<PaginationItem key={i} id={i} activePageId={props.currentPage} onClick={paginationItemOnClick}/>)
        }
        console.log()
        return v;
        // setPaginationView(v);
    }
    // useEffect(() => {
    //     generatePaginationView();
    // }, [props.totalDataCount, props.pageSize, currentPage])

    return <div className="card-footer d-flex align-items-center">
        <div className={"d-flex"}>
            <div className="mb-3 d-flex">
                <select className="form-select tom selected ts-hidden-accessible border-0 ps-0 pe-4 py-0"
                        placeholder="Select a date"
                        id="select-tags" tabIndex={-1} defaultValue={props.pageSize} onChange={(ev) => {
                    props.pageSizeSetter(ev.currentTarget.value as any as number)
                }}>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                    <option value={70}>70</option>
                    <option value={80}>80</option>
                    <option value={90}>90</option>
                    <option value={100}>100</option>
                </select>
            </div>


            <p className="m-0 text-muted">Showing <span>{(props.pageSize * (props.currentPage - 1)) + 1}</span> to <span>{props.pageSize * (props.currentPage - 1) + calcShi()}</span> of <span>{props.totalDataCount}</span> entries
            </p></div>
        <ul className="pagination m-0 ms-auto">

            <li className={`page-item ${props.currentPage === 1 ? " disabled" : ""}`}>
                <span className="page-link d-flex align-items-center" tabIndex={-1} aria-disabled="true"
                      onClick={prevOnClick}>
                    <IconChevronLeft/>
                    prev
                </span>
            </li>
            {/*{paginationView}*/}
            {generatePaginationView()}

            <li className={`page-item ${props.currentPage === numOfPages ? " disabled" : ""}`}>
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