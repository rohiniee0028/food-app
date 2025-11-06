import React from 'react';

const Shimmar = () => {
    return (
        <div className="shimmar-body">
            <div className="shimmar-top-controls">
                <button className='shimmar-filter'></button>
                <div className="shimmar-search">
                    <input type="search" placeholder="" className="shimmar-search_input" />
                </div>
            </div>
            <div className='shimmar-container'>
                <div className='shimmar-cards'></div>
                <div className='shimmar-cards'></div>
                <div className='shimmar-cards'></div>
                <div className='shimmar-cards'></div>
                <div className='shimmar-cards'></div>
                <div className='shimmar-cards'></div>
                <div className='shimmar-cards'></div>
                <div className='shimmar-cards'></div>
                <div className='shimmar-cards'></div>
            </div>
        </div>
    );
}

export default Shimmar;
