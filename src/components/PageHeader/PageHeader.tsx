import React, {FC, ReactElement} from 'react';
import './PageHeader.css';

interface PageHeaderProps {
    smallText?: string;
    title?: string;
    actionList?: ReactElement[];
}

const PageHeader: FC<PageHeaderProps> = (props) => (
    <div className="PageHeader page-header px-3">
        <div className="row align-items-center">
            <div className="col">
                <div className="page-pretitle text-start">
                    {props.smallText}
                </div>
                <h2 className="page-title">
                    {props.title}
                </h2>
            </div>
            <div className="col-auto ms-auto">
                <div className="btn-list">
                    {props.actionList}
                    {/*<a href="#" className="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal"*/}
                    {/*   data-bs-target="#modal-report">*/}
                    {/*    <!-- Download SVG icon from http://tabler-icons.io/i/plus -->*/}
                    {/*    <!-- SVG icon code -->*/}
                    {/*    Create new report*/}
                    {/*</a>*/}
                </div>
            </div>
            <div>

                <hr/>
            </div>
        </div>
    </div>
);

export default PageHeader;
export type {
    PageHeaderProps
}
