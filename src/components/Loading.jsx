import React from 'react'

function Loading() {
    return (
        <div className="load-page__loading">
            <span className="loader"><span className="loader-inner"></span></span>
            <div className="load-page__loading-title">Loading...</div>
        </div>
    );
}

export default Loading;
