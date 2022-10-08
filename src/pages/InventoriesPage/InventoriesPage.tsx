import React, {FC} from 'react';
import './InventoriesPage.css';
import DataTable from "../../components/DataTable/DataTable.lazy";

interface InventoriesPageProps {
}

const InventoriesPage: FC<InventoriesPageProps> = () => (
    <div className="page-wrapper InventoriesPage">
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
            <DataTable/>
        </div>
    </div>
);

export default InventoriesPage;
