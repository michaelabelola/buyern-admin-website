import React, {FC} from 'react';
import './InventoriesPage.css';
import DataTable from "../../components/DataTable/DataTable.lazy";
import {TableColumn} from "../../components/DataTable/DataTableObjects";
import {IconTable} from "@tabler/icons";
import {Inventory} from "../../model/Inventory";
import logo from '../../logo.svg';
import PageHeader from "../../components/PageHeader/PageHeader.lazy";

interface InventoriesPageProps {
}

const InventoriesPage: FC<InventoriesPageProps> = () => {

    const tableColumns: TableColumn<Inventory>[] = [
        {
            icon: IconTable,
            title: "uid",
            muted: true,
            sortBy: false,
            viewGenerator: (data) => {
                return <span>{data.uid}</span>
            }
        },
        {
            title: "Name",
            viewGenerator: (data) => {
                return <span>{data.name}</span>
            }
        },
        {
            title: "Qty",
            viewGenerator: (data) => {
                return <span>{data.qty}</span>
            }
        },
        {
            title: "Price",
            viewGenerator: (data) => {
                return <span>{`$ ${data.price}`}</span>
            }
        },
        {
            title: "About",
            viewGenerator: (data) => {
                return <span>{data.about}</span>
            }
        }
    ]

    let data: Inventory[] = [
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        }, {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        }, {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        }, {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        }, {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        }, {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
        {
            id: 1,
            qty: 2,
            price: 20000.21,
            name: "Denim Jacket",
            about: "About Denim Jacket",
            addedBy: "Abel Michael",
            entityId: "dfhkskurfuir",
            image: logo,
            uid: "itemUid",
            timeAdded: Date.now().toLocaleString()
        },
    ];

    let dataFetcher = (pageSize: number, currentPage: number) => {
        return {
            data: data,
            totalDataCount: 37
        };
    }
    return (
        <div className="page-wrapper InventoriesPage page_main">
            <PageHeader title={"Inventory"} smallText={"Buyern"}/>

            <div className={"page-body container-xl"}>
                <DataTable columns={tableColumns} selectable searchable fetchData={dataFetcher} currentPage={1} actionButtons={(data: Inventory[])=>[
                    <button className={"btn btn-outline-danger"} onClick={()=>{
                        console.log(data)}}>Delete</button>,
                    <button className={"btn btn-amber"}>Archive</button>,
                    <button className={"btn btn-outline-success"}>Copy</button>
                ]}/>
            </div>
        </div>
    )
};

export default InventoriesPage;
