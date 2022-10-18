import React, {FC, ReactElement} from 'react';
import './DashboardElements.css';

interface DashboardCard1Props {
    topic?: string;
    subText?: string;
    icon?: ReactElement;
}

const DashboardCard1: FC<DashboardCard1Props> = (props) => (
    <div className="col-sm-6 col-lg-3">
        <div className="card card-sm">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-auto">
                            <span className="bg-primary text-white avatar">
                                {props.icon ? props.icon : ""}
                            </span>
                    </div>
                    <div className="col">
                        <div className="font-weight-medium">
                            {props.topic}
                        </div>
                        <div className="text-muted">
                            {props.subText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default DashboardCard1;
