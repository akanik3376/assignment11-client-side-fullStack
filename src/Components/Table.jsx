/* eslint-disable react/prop-types */

const Table = ({ job }) => {
    const { email, job_title, deadline } = job || {}
    // console.log(job)
    return (
        <div className="container mx-auto my-12 overflow-x-auto bg-teal-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Job title</th>
                        <th>gmail</th>
                        <th>date line</th>
                        <th>Status</th>
                        <th>Confirmations</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>

                        <td>

                            <p className="text-sm opacity-50">{job_title}</p>

                        </td>
                        <td> <p className="font-bold">{email}</p></td>
                        <td>{deadline}</td>
                        {/* <td>{price}</td>
                        <td>{status}</td> */}
                        {/* <td><button className="">confirm</button></td> */}
                    </tr>
                    {/* row 2 */}

                </tbody>

            </table>
        </div>
    );
};

export default Table;