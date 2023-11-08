// import React from 'react';
import HelmetProvider from './HelmetProvider';



const AllLink = () => {
    return (
        <div>


            <HelmetProvider title="job-tex | AllLink">
                <ul>
                    <li><a href="/details/:id">Link 1</a></li>
                    <li><a href="/addJob">Link 2</a></li>
                    <li><a href="/myBids">Link 3</a></li>
                    <li><a href="/update/:id">Link 3</a></li>
                    <li><a href="/bidRequest">Link 3</a></li>
                    <li><a href="/login">Link 3</a></li>
                    <li><a href="/register">Link 3</a></li>
                </ul>
            </HelmetProvider>

        </div>
    );
};

export default AllLink;