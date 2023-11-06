/* eslint-disable react/prop-types */

const Table = ({ job }) => {
    const { email } = job || {}

    return (
        <div className="container mx-auto my-12 overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>

                        <td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold">{email}</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>

                    </tr>
                    {/* row 2 */}

                </tbody>

            </table>
        </div>
    );
};

export default Table;