import { useEffect, useState } from "react";

const BidRequests = () => {
    const [bidRequests, setBidRequests] = useState([]);
    useEffect(() => {
        // Fetch bid requests data from the backend API
        fetch('api/bid-requests')
            .then((response) => response.json())
            .then((data) => setBidRequests(data));
    }, []);

    const handleAcceptBid = (bidId) => {
        // Send a request to accept the bid with the given bidId
        // Update the bid status in the UI
    };

    const handleRejectBid = (bidId) => {
        // Send a request to reject the bid with the given bidId
        // Update the bid status in the UI
    };

    return (
        <div>
            <h1>Bid Requests</h1>
            <table>
                <thead>
                    <tr>
                        <th>Bidder Name</th>
                        <th>Bid Amount</th>
                        <th>Bid Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bidRequests.map((bid) => (
                        <tr key={bid.id}>
                            <td>{bid.bidderName}</td>
                            <td>{bid.bidAmount}</td>
                            <td>{bid.bidStatus}</td>
                            <td>
                                <button onClick={() => handleAcceptBid(bid.id)}>Accept</button>
                                <button onClick={() => handleRejectBid(bid.id)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BidRequests;