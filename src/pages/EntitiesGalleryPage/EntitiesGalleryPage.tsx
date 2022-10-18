import React, {FC} from 'react';
import './EntitiesGalleryPage.css';
import logo from '../../logo.svg';
import {Entity} from "../../model/Entity";
import PageHeader from "../../components/PageHeader/PageHeader.lazy";
import {Link} from "react-router-dom";

interface EntitiesGalleryPageProps {
}

const EntitiesGalleryPage: FC<EntitiesGalleryPageProps> = () => (
    <div className="page-wrapper EntitiesGalleryPage page_main">
        <PageHeader title={"Entities"} smallText={"Account"}/>
        <div className={"container-fluid row w-full d-flex flex-row gap-2 justify-content-start px-5 gap-4"}
             style={{gridTemplateColumns: "auto auto auto"}}>
            <GalleryItem id={2} name={"Buyern Eateries"} dateEstablished={new Date()} entityId={"entityId1"} isLive/>
            <GalleryItem id={3} name={"Buyern Deliveries"} dateEstablished={new Date()} entityId={"entityId1"} isLive/>
        </div>
    </div>
);
const GalleryItem: FC<Entity> = (props) => {
    return (
            <div className="card w-auto position-relative border-1 border-success cursor-pointer">
        <Link to={"/entity/entityUid/inventory"}>

                    <span className="col-auto position-absolute end-0 top-0 m-2"><span
                        className="status-dot status-dot-animated bg-success d-block"/>
                    </span>
                <div className="card-body">
                    <p><img src={logo} alt={"logo"}/></p>
                    <h3 className={"text-success"}>
                        {props.name}
                    </h3>
                    <p className="text-muted">{`Est: ${props.dateEstablished?.toDateString()}`}</p>
                </div>
        </Link>
            </div>
    )
}
export default EntitiesGalleryPage;
