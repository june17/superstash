import React from 'react';

function DashContentAccount(props) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex items-center">
                <img
                    className="h-12 w-12 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/account-icon.svg?alt=media&token=143f1bce-a047-44b9-9e79-a428accd397f"
                    alt=""
                />
                <p className="text-lg px-2">Accounts</p>
            </div>
            <div className="px-4 pb-4 sm:px-6">
                <h3 className="text-2xl">₹35,700.00</h3>
                <p className="text-gray-400">Federal Bank ****4361</p>
            </div>
        </div>
    );
}

export default DashContentAccount;