import { Collapse } from 'antd';
import React from 'react'

const Caterory = () => {

    const items = [
        {
            key: '1',
            label: 'This is panel header 1',
            children: <p>eee</p>,
        },
    ]
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className="h-[100px]">
            <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
        </div>
    );
}

export default Caterory