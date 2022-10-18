import React, {FC, useEffect, useState} from 'react';
import styles from './DataTable.module.css';
import {IconChevronUp} from "@tabler/icons";
import {TableColumn, TableProperties} from "./DataTableObjects";
import Pagination from "./Pagination/Pagination.lazy";
import {useSessionStorage} from "usehooks-ts";

interface DataTableProps<T> extends TableProperties<T> {
}

const DataTable: FC<DataTableProps<any>> = (props) => {
        const [pageSize, setPageSize] = useSessionStorage("rowCount", 10);
        const [currentPage, setCurrentPage] = useState(1);
        // const [pageSize] = useState(10);
        const [totalDataCount, setTotalDataCount] = useState(props.totalDataCount);
        const [data, setData] = useState([] as any[]);
        // let [tableProperties, setTableProperties] = useState({} as DataTableState<any>);
        useEffect(() => {
            setData(props.data ? props.data : [] as any)
        }, [props.data])

        useEffect(() => {
            if (!props.fetchData) return;
            let newData = props.fetchData(pageSize, currentPage);
            setData(newData.data);
            setTotalDataCount(newData.totalDataCount ? newData.totalDataCount : 0);
        }, [pageSize, currentPage, data, props])

        return (
            <div className="DataTable">
                <div className="col-12">
                    <div className="card" style={{background:"transparent !important"}}>
                        {
                            props.title ?
                                <div className="card-header">
                                    <h3 className="card-title">{props.title}</h3>
                                </div>
                                : ""
                        }
                        {/*<div className={"card-header gap-2"}>*/}
                        {/*    {data && data.length > 0 ? props.actionButtons ? props.actionButtons(data.filter((value, index, array) => {*/}
                        {/*                if (value.valIsChecked) return true;*/}
                        {/*            }))*/}
                        {/*            : ""*/}
                        {/*        : ""}*/}
                        {/*</div>*/}
                        <div className="card-body border-bottom py-3">
                            <div className="d-flex">
                                {
                                    props.columns && props.columns.length >= 10 ?

                                        <div className="text-muted">
                                            Show
                                            <div className="mx-2 d-inline-block">
                                                <input type="number" className="form-control form-control-sm"
                                                       defaultValue={8}
                                                       size={3}
                                                       min={10} max={100}
                                                       aria-label={`${props.title} count`}/>
                                            </div>
                                            entries
                                        </div>
                                        : ""
                                }
                                {props.searchable ?
                                    <DataTableSearch columns={props.columns}/>
                                    : ""}
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table card-table table-vcenter text-nowrap datatable">
                                <thead>
                                <tr>
                                    {
                                        !props.selectable || props.disableSelectAll ?
                                            "" :
                                            <th className="w-1">
                                                <input className="form-check-input m-0 align-middle" type="checkbox"
                                                       aria-label="Select all invoices"/>
                                            </th>
                                    }
                                    {props.columns?.map((column, index) => {
                                        return <th key={index}>{column.title} {column.sortBy ? <IconChevronUp/> : ""}</th>
                                    })}
                                </tr>
                                </thead>
                                <tbody>

                                {data ? data?.slice(0, pageSize)?.map((data: any, index) => {

                                    return (<tr key={index}
                                                className={`cursor-pointer ${styles.row} ${data.valIsChecked ? styles.checked : ""}`}>

                                        {props.selectable ?
                                            <td key={index}><input className="form-check-input m-0 align-middle"
                                                                   type="checkbox"
                                                                   defaultChecked={data.valIsChecked ? data.valIsChecked : false}
                                                                   onChange={(ev) => {
                                                                   }}
                                                                   aria-label="Select"/></td>
                                            : ""
                                        }
                                        {/*other cells*/}
                                        {props.columns?.map((value2, index2) => {
                                            return <td
                                                key={index2}>{value2.viewGenerator ? value2.viewGenerator(data) : ""}</td>;
                                        })
                                        }
                                    </tr>)
                                }) : ""
                                }
                                </tbody>
                            </table>
                        </div>
                        <Pagination pageSizeSetter={setPageSize} currentPageSetter={setCurrentPage}
                                    currentPage={currentPage} totalDataCount={totalDataCount ? totalDataCount : 0}
                                    pageSize={pageSize}/>
                    </div>
                </div>
            </div>
        )
    }
;

const DataTableSearch: FC<{ columns?: TableColumn<any>[] }> = (props) => {

    const [searchBy, setSearchBy] = useState(-1);
    return <div className="ms-auto">
        <div className="ms-2 d-inline-block">
            <input type="text" className="form-control form-control-sm"
                   placeholder={`Search`}
                   aria-label="Search invoice"/>
        </div>

        <span className="dropdown">
            <button className="btn btn-sm dropdown-toggle align-text-top border-0 text-uppercase"
                    data-bs-boundary="viewport"
                    data-bs-toggle="dropdown">
                {props.columns ?
                    searchBy === -1 ? "All"
                        :
                        props.columns[searchBy].title
                    :
                    ""}
            </button>
            <div className="dropdown-menu dropdown-menu-end">
               <div className="dropdown-item text-uppercase" onClick={() => {
                   setSearchBy(-1);
               }}>All</div>
                {
                    props.columns?.map(((value, index) => {
                        return (<div key={index} className="dropdown-item text-uppercase" onClick={() => {
                            setSearchBy(index);
                        }}>
                            {value.title}
                        </div>)
                    }))
                }
            </div>
        </span>
    </div>
}

export default DataTable;
export type {DataTableProps};