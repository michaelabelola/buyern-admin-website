import React, {FC} from 'react';
import './UserFinancePage.css';
import PageHeader from "../PageHeader/PageHeader";
import PageBody from "../PageBody";
import TabView from "../TabView/TabView.lazy";
import DataTable from "../DataTable/DataTable.lazy";
import {TableColumn} from "../DataTable/DataTableObjects";
import {IconCashBanknote, IconCircleNumber1, IconLock, IconTransferIn, IconTransferOut} from "@tabler/icons";

interface UserFinancePageProps {
}

const UserFinancePage: FC<UserFinancePageProps> = () => {

    const tableColumns: TableColumn<{ id: string; }>[] = [
        {title: "Id", icon: <IconCircleNumber1/>, viewGenerator: data => <span>{data.id}</span>},
        {
            title: "Status",
            icon: <IconCircleNumber1/>,
            viewGenerator: data => <span className={"text-success"}>{"delivered"}</span>
        },
        {title: "Amount", icon: <IconCircleNumber1/>, viewGenerator: data => <span>{"$200,000.00"}</span>},
        {
            title: "Type",
            icon: <IconCircleNumber1/>,
            viewGenerator: data => <span className={"text-success"}>{"CR"}</span>
        },
        {
            title: "Time Initialized",
            icon: <IconCircleNumber1/>,
            viewGenerator: data => <span>{new Date().toLocaleDateString()}</span>
        },
        {
            title: "Time Completed",
            icon: <IconCircleNumber1/>,
            viewGenerator: data =>
                <span>{new Date().toLocaleDateString() + "-" + new Date().toLocaleTimeString()}</span>
        },
        {title: "recipient", icon: <IconCircleNumber1/>, viewGenerator: data => <span>{"Abel Michael"}</span>},
        {title: "sender", icon: <IconCircleNumber1/>, viewGenerator: data => <span>{"Michael A."}</span>}
    ]
    const transactionData = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
    ]
    return (
        <div className="page-wrapper page_main UserFinancePage">
            <PageHeader title={"Finance"} smallText={"Account"}/>
            <PageBody>
                <div className="row row-deck row-cards">
                    <div className="col-sm-7 col-md-6 col-lg-5 col-xl-5 col-xxl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="subheader">Account</div>
                                    <div className="ms-auto lh-1">
                                    </div>
                                </div>
                                <div className="h1 mb-3 text-nowrap overflow-hidden" title={"$ 1,200,000,000.99"}>$
                                    1,200,000,000.99
                                </div>
                                <div className="d-flex mb-2">
                                    <div className="ms-auto">
                                    <span className="text-green d-inline-flex align-items-center lh-1">
                                        $10.00 Starch
                                    </span>
                                    </div>
                                </div>
                                <div className="progress progress-sm">
                                    <div className="progress-bar bg-success" style={{width: "100%"}} role="progressbar"
                                         aria-label="75% Complete">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 col-md-6 col-lg-7 col-xl-7 col-xxl-9">
                        <div className="card">
                            <div className="card-body d-flex justify-content-start align-items-center gap-2 bg-transparent">
                                <button className={"btn btn-success"}> <IconTransferOut/> Withdraw</button>
                                <button className={"btn btn-warning"}><IconCashBanknote/> Transfer</button>
                                <button className={"btn btn-secondary position-relative"} disabled><IconTransferIn/> Deposit <IconLock className={"ms-1 w-3 position-absolute top-0 end-0"}/></button>
                                <button className={"btn btn-primary"}>Deposit</button>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12"}>
                        <TabView elements={[
                            {
                                id: "all",
                                title: "Transactions",
                                content: <DataTable searchable selectable={false} data={transactionData}
                                                    columns={tableColumns}/>
                            },
                            {
                                id: "credit",
                                title: "Credit Transactions",
                                content: <DataTable title={"Credit Transactions"}/>
                            },
                            {
                                id: "debit",
                                title: "Debit Transactions",
                                content: <DataTable title={"Debit Transactions"}/>
                            }
                        ]}/>

                    </div>
                </div>
            </PageBody>
        </div>
    )
};

export default UserFinancePage;
