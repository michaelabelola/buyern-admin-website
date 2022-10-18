import React, {FC} from 'react';

const PageBody: FC<any> = (props) => {
    return (

        <div className="page-body">
            <div className="container-xl">
                {props.children}
            </div>
        </div>
    );
};

export default PageBody;