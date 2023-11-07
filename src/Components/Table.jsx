/* eslint-disable react/prop-types */

const Table = ({ job }) => {
    const { email, job_title, deadline } = job || {}
    // console.log(job)
    return (
        <tr >
            {/* <th>
                <button onClick={() => handelCancel(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th> */}

            <td>
                {email}
            </td>
            <td>{job_title}</td>
            <td>{deadline}</td>
            {/* <td>${donation_money}</td>
            <td>{pickup_location}</td> */}

            {/* <th>
                {
                    status === 'approve' ? <span className="font-bold text-primary">approved</span> :
                        <button onClick={() => handelStatusChange(_id)} className="btn btn-ghost text-red-500 btn-xs">Pending</button>}
            </th> */}
        </tr>
    );
};

export default Table;