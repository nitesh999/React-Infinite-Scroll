import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getPhotos } from '../core/apiCore';

const UserList = () => {
    // initialize list of posts
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(0);
    const loader = useRef(null);

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, []);

    useEffect(() => {
        getPhotos(page, successHandler, errorHandler);
    }, [page])

    const handleObserver = entities => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }

    const successHandler = response => {
        setPhotos([...photos, ...response.data])
        setLoading(false)
    }
    const errorHandler = response => {
    }

    const loadingTextCSS = { display: loading ? "block" : "none" };
    const keyExtractor = useCallback((data) => data.id, []);

    const divStyle = {
        color: 'blue',
        height: '100px',
        padding: '5px 10px',
        background: '#eee',
        marginTop: '15px',
        display: 'flex',
    };

    const loadingCSS = {
        height: "100px",
        margin: "30px"
    };

    return (
        <div className="container">
            <div style={{ minHeight: "800px" }}>
                {photos.map((data, index) => {
                    return (<div key={keyExtractor} className="post" style={divStyle}>
                        <img src={data.url} height="100px" width="200px" />
                        <input type='text' value={data.title} />
                    </div>)
                })
                }
            </div>
            <div
                ref={loader}
                style={{ loadingCSS, color: "#000000" }}
            >
                <span style={{ loadingTextCSS, color: "#000000" }}>Loading...</span>
            </div>
        </div>
    );

}

export default UserList;