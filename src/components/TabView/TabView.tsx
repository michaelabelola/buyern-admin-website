import React, {FC, ReactElement, useState} from 'react';
import './TabView.css';

interface TabElement {
    id: string;
    content?: ReactElement;
    title?: string | ReactElement;
    onEnter?: () => void;
}

interface TabViewProps {
    onSwitch?: (tabId: string) => void;
    elements?: TabElement[];
    selectedId?: string;
}

const TabView: FC<TabViewProps> = (props) => {
    const [activeTab, setActiveTab] = useState(props.selectedId ? props.selectedId : (props.elements ? props.elements[0].id : "0"));
    // useEffect(()=>{
    //     console.log(activeTab)
    // }, [])

    return (
        <div className="TabView w-full">
            <ul className="nav nav-tabs nav-tabs-alt border-0" data-bs-toggle="tabs" role="tablist">
                {
                    props.elements?.map((element, index) => {
                        return <TabHeader key={index} id={element.id} title={element.title} setActiveTab={setActiveTab}
                                          selected={activeTab === element.id}/>
                    })
                }
            </ul>
            <div className="card-body mt-2">
                <div className="tab-content">

                    {
                        props.elements?.map((element, index) => {
                            return <TabContent key={index} id={element.id}
                                               selected={activeTab === element.id}>{element.content}</TabContent>
                        })
                    }
                </div>
            </div>
        </div>)
};

interface TabHeaderProps {
    id: string | number;
    title?: string | ReactElement;
    selected?: boolean;
    setActiveTab: Function;
}

const TabHeader: FC<TabHeaderProps> = (props) => {
    return (
        <li className="nav-item" role="presentation">
            <a href={`#${props.id}`} onClick={() => {
                props.setActiveTab(props.id)
            }} className={`nav-link ${props.selected ? "active" : ""}`} data-bs-toggle="tab"
               aria-selected={props.selected ? props.selected : false} role="tab"
               tabIndex={-1}>{props.title}</a>
        </li>

    )
}

interface TabContentProps {
    // "tabs-home-12"
    id: string;
    selected?: boolean;
    children?: any;
}

const TabContent: FC<TabContentProps> = (props) => {
    return (
        <div className={`tab-pane ${props.selected ? "active show" : ""}`} id={props.id} role="tabpanel">
            {props.children}
        </div>
    )
}
export type {TabViewProps};
export default TabView;
