import React, {FC, ReactElement} from 'react';
import {IconAlertTriangle, IconCircleCheck, IconCircleX} from "@tabler/icons";
import {Status} from "../../enums/Status";

interface StatusModalProps {
    status?: Status;
    title?: string | ReactElement;
    text?: string | ReactElement;
    backButton?: ButtonProps;
    actionButton?: ButtonProps;
    modalId: ModalId;
}

interface ButtonProps {
    text?: string;
    callback?: () => void;
}

const StatusModal: FC<StatusModalProps> = (props) => {

    let actionOnClick = () => {
        if (props.actionButton?.callback)
            props.actionButton?.callback();
    }
    return (
        <div className="modal modal-blur fade hide" id={props.modalId.id} tabIndex={-1} aria-modal="true"
             role="dialog" style={{background: "#000000 !important"}}>
            <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    <div
                        className={`modal-status ${props.status === Status.SUCCESS ? "bg-success" : ""}${props.status === Status.ERROR ? "bg-red" : ""}${props.status === Status.WARNING ? "bg-warning" : ""}`}/>
                    <div className="modal-body text-center py-4">
                        {
                            props.status === Status.SUCCESS ?
                                <IconCircleCheck className={`icon mb-2 icon-lg text-green`}/> : ""
                        }
                        {
                            props.status === Status.WARNING ?
                                <IconAlertTriangle className={`icon mb-2 icon-lg text-warning`}/> : ""
                        }
                        {
                            props.status === Status.ERROR ?
                                <IconCircleX className={`icon mb-2 icon-lg text-red`}/> : ""
                        }
                        {
                            props.status === Status.DEFAULT || props.status === undefined ?
                                <div className={`flex justify-content-center w-full icon mb-1 icon-lg`}>❤️</div> : ""
                        }
                        {props.title ?
                            <h3 className={`${props.status === Status.SUCCESS ? "text-green" : ""}${props.status === Status.ERROR ? "text-red" : ""}${props.status === Status.WARNING ? "text-warning" : ""}`}>{props.title}</h3> : ""}
                        {props.text ? <div className="text-muted">{props.text}</div> : ""}


                    </div>
                    <div className="modal-footer">
                        <div className="w-100">
                            <div className="row">
                                {/*<div className="col"><a href="#" className="btn w-100" data-bs-dismiss="modal">*/}
                                {/*    back*/}
                                {/*</a></div>*/}
                                {props.actionButton ?
                                    <div className="col">
                                        <div
                                            className={`btn w-100 ${props.status === Status.SUCCESS ? "btn-success" : ""}${props.status === Status.ERROR ? "btn-red" : ""}${props.status === Status.WARNING ? "btn-warning" : ""}`}
                                            data-bs-dismiss="modal"
                                            onClick={actionOnClick}>
                                            {props.actionButton.text}
                                        </div>
                                    </div>
                                    : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

const SuccessModal: FC<StatusModalProps> = (props) => (<StatusModal {...props} status={Status.SUCCESS}/>)
const ErrorModal: FC<StatusModalProps> = (props) => (<StatusModal {...props} status={Status.ERROR}/>)
const WarningModal: FC<StatusModalProps> = (props) => (<StatusModal {...props} status={Status.WARNING}/>)

class ModalId {
    id: string;
    //id for the button that opens the modal
    private _openerId: string;

    constructor(id: string) {
        this.id = id;
        this._openerId = `#${this.id}`;
    }

    get openerId(): string {
        return this._openerId;
    }
}

export default StatusModal;
export {SuccessModal, ErrorModal, WarningModal, ModalId}
export type {StatusModalProps}
