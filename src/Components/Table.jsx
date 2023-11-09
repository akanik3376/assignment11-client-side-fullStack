/* eslint-disable react/prop-types */


const Table = ({ job }) => {
    const { email, job_title, deadline, _id, status } = job || {}
    console.log(_id)




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
            {/* <td>{status}</td> */}

            <th>
                {

                    status ? <button className={status ? "btn btn-ghost text-green-500 btn-xs" : "btn btn-ghost  btn-xs text-red-600"}>
                        {status}</button> :
                        <button className={"btn btn-ghost text-yellow-600 btn-xs"}>
                            Pending..</button>}
            </th>
        </tr>
    );
};

export default Table;