/* eslint-disable react/prop-types */

const BidReq = ({ job, HandelAccept, HandelReject }) => {
    const { email, price, bidDeadline, _id, } = job || {}
    return (
        <tr >


            <td>
                {email}
            </td>
            <td>{price}</td>
            <td>{bidDeadline}</td>
            <td><button className="font-bold text-green-600" onClick={() => HandelAccept(_id)}>Accept</button></td>
            <td><button className="font-bold text-red-600" onClick={() => HandelReject(_id)}>Reject</button></td>
            {/* <td>{status}</td> */}

            <th>

            </th>
        </tr>
    );
};

export default BidReq;