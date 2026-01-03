import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Accountdetail = ({ editId, onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const apiBase = "http://127.0.0.1:8000/api/accounts";

  // 🔹 Fetch data for edit
  useEffect(() => {
    if (!editId) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`${apiBase}/${editId}`);
        const json = await res.json();

        if (json.status && json.data) {
          reset(json.data); // prefill form
        } else {
          toast.error(json.message || "Account not found");
        }
      } catch (err) {
        console.error(err);
        toast.error("Server error");
      }
    };

    fetchData();
  }, [editId, reset]);

  // 🔹 Submit / Update
  const onSubmit = async (data) => {
    try {
      const url = editId ? `${apiBase}/${editId}` : apiBase;
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.status) {
        toast.success(editId ? "Account updated!" : "Account added!");
        reset();
        if (onSuccess) onSuccess(); // refresh table or navigate
      } else if (result.errors) {
        Object.keys(result.errors).forEach((field) => {
          setError(field, {
            type: "server",
            message: result.errors[field][0],
          });
        });
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {editId ? "Edit Account" : "Add Account"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block font-semibold mb-1">First Name</label>
          <input
            type="text"
            {...register("first_name", { required: "First name is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-semibold mb-1">Last Name</label>
          <input
            type="text"
            {...register("last_name", { required: "Last name is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
        </div>

        {/* Father Name */}
        <div>
          <label className="block font-semibold mb-1">Father Name</label>
          <input
            type="text"
            {...register("father", { required: "Father name is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.father && <p className="text-red-500 text-sm">{errors.father.message}</p>}
        </div>

        {/* CNIC */}
        <div>
          <label className="block font-semibold mb-1">CNIC</label>
          <input
            type="text"
            {...register("cnic", {
              required: "CNIC is required",
              minLength: { value: 14, message: "CNIC must be 14 digits" },
              maxLength: { value: 14, message: "CNIC must be 14 digits" },
            })}
            placeholder="xxxxx-xxxxxxx-x"
            className="w-full border px-3 py-2 rounded"
          />
          {errors.cnic && <p className="text-red-500 text-sm">{errors.cnic.message}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-semibold mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("date_of_birth", { required: "DOB is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.date_of_birth && <p className="text-red-500 text-sm">{errors.date_of_birth.message}</p>}
        </div>

        {/* Occupation */}
        <div>
          <label className="block font-semibold mb-1">Occupation</label>
          <input type="text" {...register("occupation")} className="w-full border px-3 py-2 rounded" />
        </div>

        {/* City */}
        <div>
          <label className="block font-semibold mb-1">City</label>
          <input
            type="text"
            {...register("city", { required: "City is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold mb-1">Address</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            rows="3"
            className="w-full border px-3 py-2 rounded"
          ></textarea>
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        <button
          type="submit"
          className={`w-full py-2.5 rounded font-semibold text-white ${
            editId ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {editId ? "Update Account" : "Add Account"}
        </button>
      </form>
    </div>
  );
};

export default Accountdetail;
