import React, {Dispatch, FC, ReactElement, SetStateAction, useEffect, useState} from 'react';
import {IconAlertTriangle, IconCircleCheck, IconCircleX, IconLoader2} from "@tabler/icons";
import {Status} from "../../enums/Status";

interface StatusModalProps {
    status?: Status;
    title?: string | ReactElement;
    text?: string | ReactElement;
    backButton?: ButtonProps;
    cancelButton?: ButtonProps;
    actionButton?: ButtonProps;
    disableClose?: boolean;
    show?: boolean;
    setShow: (show: boolean) => void;
}

interface ButtonProps {
    text?: string;
    callback?: () => void;
}

const StatusModal: FC<StatusModalProps | any> = (props) => {
    const [open, setOpen] = useState(props.show)
    let actionOnClick = () => {
        if (props.actionButton?.callback)
            props.actionButton?.callback();
    }
    let cancelOnClick = () => {
        if (props.cancelButton?.callback)
            props.cancelButton?.callback();
    }
    const closeModal = () => {
        props.setShow(props, false);
    }
    // useEffect(() => {
    //     if (props.show)
    //     props.setShow(false);
    //     else if ()
    // }, [props.show])
    useEffect(() => {
        setOpen(props.show)
    }, [props.show, props.setShow])

    useEffect(() => {
    }, [props])
    return (
        <div className={`modal modal-blur fade ${open ? "d-block hide show" : "d-none"}`} tabIndex={-1}
             aria-modal="true" aria-hidden={`${(!open)}`} role="dialog"
             style={{background: "#000000 !important", display: "block"}}>
            <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button type="button" className={`btn-close ${props.disableClose ? "d-none" : ""}`}
                            data-bs-dismiss="modal" aria-label="Close"
                            onClick={() => {
                                closeModal()
                            }}/>
                    <div
                        className={`modal-status ${props.status === Status.SUCCESS ? "bg-success" : ""}${props.status === Status.ERROR ? "bg-red" : ""}${props.status === Status.WARNING ? "bg-warning" : ""}${props.status === Status.LOADING ? "bg-warning" : ""}`}/>
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
                            props.status === Status.LOADING ?
                                <IconLoader2 className={`icon mb-2 icon-lg text-warning`}/> : ""
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
                                {props.cancelButton ?
                                    <div className="col">
                                        <div
                                            className={`btn w-100 "btn-red"`}
                                            data-bs-dismiss="modal"
                                            onClick={cancelOnClick}>
                                            {props.cancelButton.text}
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

// const SuccessModal: FC<StatusModalProps> = (props) => (<StatusModal {...props} status={Status.SUCCESS}/>)
// const ErrorModal: FC<StatusModalProps> = (props) => (<StatusModal {...props} status={Status.ERROR}/>)
// const WarningModal: FC<StatusModalProps> = (props) => (<StatusModal {...props} status={Status.WARNING}/>)
// const ProgressModal: FC<StatusModalProps> = (props) => (<StatusModal {...props} status={Status.LOADING}/>)

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

class StatusModalConstructor {
    private readonly propsState: [StatusModalProps, Dispatch<SetStateAction<StatusModalProps>>] | any;
    private readonly _view: ReactElement | any;

    constructor(propsState: [StatusModalProps, Dispatch<SetStateAction<StatusModalProps>>]) {
        this.propsState = propsState;
        // console.log(propsState[0])
        this._view = <StatusModal {...this.propsState[0]} />
    }

    init = (title: string, text: string, status: Status) => {
        this.propsState[1]({
            title: title,
            status: status,
            text: text,
            setShow: (prop: StatusModalProps, show1: boolean) => {
                if (show1)
                    this.propsState[1]({
                        ...prop,
                        show: true
                    } as any)
                else
                    this.propsState[1]({
                        ...prop,
                        show: false
                    } as any)
            }
        } as any)

        // console.log(this.propsState[0])
    }

    setValues = (title: string | ReactElement, text: string | ReactElement | undefined, status: Status, disableClose?: boolean, actionButton?: ButtonProps) => {
        let gad = {
            ...this.propsState[0],
            title: title,
            text: text,
            status: status,
            disableClose: disableClose,
            show: true,
            actionButton: actionButton
        } as any | StatusModalProps;
        this.propsState[1](gad)
        return {
            show: () => {
                this.propsState[0].setShow(gad, true)
            },
            delayedHide: (duration: number) => {
                setTimeout(() => {
                    this.propsState[0].setShow(gad, false)
                }, duration);
            }
        }
    }

    get view(): React.ReactElement {
        return this._view;
    }

    get title(): string | ReactElement | undefined {
        return this.propsState[0].title;
    }

    set title(value: string | ReactElement | undefined) {
        this.propsState[1]({
            title: value
        } as any)
    }

    get status(): Status | undefined {
        return this.propsState[0].status;
    }

    set status(value: Status | undefined) {
        this.propsState[1]({
            status: value
        } as any);
    }

    get text(): string | React.ReactElement | undefined {
        return this.propsState[0].text;
    }

    set text(value: string | React.ReactElement | undefined) {
        this.propsState[1]({
            text: value
        } as any)
    }

    get show(): boolean {
        if (this.propsState[0] && this.propsState[0].show)
            return this.propsState[0].show;
        else
            return false;
    }

    set show(value: boolean) {
        this.propsState[1]({...this.propsState[0], show: value} as any)
    }

    delayedShow = (duration: number) => {
        setTimeout(() => {
            this.propsState[1]({...this.propsState[0], show: true} as any)
        }, duration);
    }

    delayedHide = (duration: number) => {
        setTimeout(() => {
            this.propsState[1]({...this.propsState[0], show: false} as any)
        }, duration);
    }
}

export default StatusModal;
export {StatusModalConstructor}
export type {StatusModalProps}
