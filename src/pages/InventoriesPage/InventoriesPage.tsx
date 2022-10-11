import React, {FC} from 'react';
import './InventoriesPage.css';
import DataTable from "../../components/DataTable/DataTable.lazy";
import {TableColumn} from "../../components/DataTable/DataTableObjects";
import {IconTable} from "@tabler/icons";
import {Inventory} from "../../model/Inventory";
import logo from '../../logo.svg';

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

    return (
        <div className="page-wrapper InventoriesPage page_main">
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Inventories
                            </h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className={"page-body container-xl"}>
                <DataTable title={"All Inventories"} columns={tableColumns} data={data} selectable searchable
                           totalDataCount={100} currentPage={1} rowCountPerPage={10}/>
            </div>
        </div>
    )
};

export default InventoriesPage;
