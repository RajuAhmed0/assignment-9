import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='mt-[65px]'>
            <div className="flex justify-center items-center min-h-screen p-4 border-3 ">
                <div className=" p-6 shadow-xl w-full max-w-md text-gray-800 relative">
                    <div className="flex flex-col items-center mb-7">
                        <img
                            src={user?.photoURL}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border-2 border-orange-500"
                        />
                        <h2 className='text-xl font-semibold text-orange-600 mt-4'>Name : {user?.displayName}</h2>
                        <h2 className='text-xl font-semibold text-orange-600 mt-4'>Name : {user?.email}</h2>
                    </div>

                    <Link to={"/edit"}> <button className="w-full mt-6 bg-orange-600 text-white p-3 hover:rounded-3xl  hover:bg-black transition">Edit</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;