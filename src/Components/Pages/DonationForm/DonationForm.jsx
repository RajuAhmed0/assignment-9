import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import Select from "react-select";

const DonationForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [selectedItem, setSelectedItem] = useState(null);

    const itemOptions = [
        { value: "blanket", label: "Blanket" },
        { value: "jacket", label: "Jacket" },
        { value: "sweater", label: "Sweater" },
    ];

    const onSubmit = (data) => {
        toast.success("Thank you! We will reach your destination soon.");
        reset();
        setSelectedItem(null);
    };


    /* select modify */
    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: '#f0f0f0',
            borderColor: '#ccc',
            borderRadius: '8px',
            padding: '5px',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#f97316' : state.isFocused ? '#ffedd5' : '#fff',
            color: state.isSelected ? '#fff' : '#000',
        }),
    };

    return (
        <div className="max-w-lg mx-auto p-6 mt-[65px] ">
            <div className="border rounded-lg shadow-lg p-4 bg-orange-50">
                <h2 className="md:text-xl font-bold mb-4">Donation Campaign Details</h2>
                <p>Show all relevant details about the donation campaign here.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <label className="block font-semibold">Quantity</label>
                <input
                    {...register("quantity", { required: true })}
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="Quantity of items"
                />

                <label className="block font-semibold">Item Type</label>
                <Select
                    options={itemOptions}
                    value={selectedItem}
                    onChange={setSelectedItem}
                    className="w-full"
                    styles={customStyles}
                />

                <label className="block font-semibold">Pickup Location</label>
                <input
                    {...register("location", { required: true })}
                    className="w-full p-2 border rounded-md"
                    placeholder="Pickup location"
                />

                <label className="block font-semibold">Additional Notes</label>
                <textarea
                    {...register("notes")}
                    className="w-full p-2 border rounded-md"
                    placeholder="Additional notes (optional)"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-black"
                >
                    Donate
                </button>
            </form>

            <ToastContainer position="top-right" /> {/* Set the position to top-right */}
        </div>
    );
};

export default DonationForm;
