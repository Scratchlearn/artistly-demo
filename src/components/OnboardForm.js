
'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  profileImage: yup
    .mixed()
    .test("fileSize", "File too large (max 5MB)", (value) => {
      if (!value?.length) return true; // Optional field
      return value[0].size <= 5 * 1024 * 1024;
    })
    .test("fileType", "Unsupported file type", (value) => {
      if (!value?.length) return true;
      return ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type);
    })
});

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      profileImage: data.profileImage?.[0]?.name || "No file uploaded"
    };

    console.log("🎯 Submitted Artist Data:", formattedData);
    reset();
  };

  return (
    <main className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
     <h1 className="text-2xl font-bold mb-6 text-center">Artist Onboarding Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input {...register("name")} placeholder="Name" className="w-full border p-2 rounded" />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        <textarea {...register("bio")} placeholder="Bio" className="w-full border p-2 rounded" />
        <p className="text-red-500 text-sm">{errors.bio?.message}</p>

        <div>
          <label className="block font-medium">Category</label>
          <div className="flex gap-4 flex-wrap">
            {["Singer", "Dancer", "DJ", "Speaker"].map((cat) => (
              <label key={cat} className="flex items-center gap-1">
                <input type="checkbox" value={cat} {...register("category")} />
                {cat}
              </label>
            ))}
          </div>
          <p className="text-red-500 text-sm">{errors.category?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Languages Spoken</label>
          <div className="flex gap-4 flex-wrap">
            {["Hindi", "English", "Tamil", "Punjabi"].map((lang) => (
              <label key={lang} className="flex items-center gap-1">
                <input type="checkbox" value={lang} {...register("languages")} />
                {lang}
              </label>
            ))}
          </div>
          <p className="text-red-500 text-sm">{errors.languages?.message}</p>
        </div>

        <select {...register("feeRange")} className="w-full border p-2 rounded">
          <option value="">Select Fee Range</option>
          <option value="₹10k–20k">₹10k–20k</option>
          <option value="₹20k–30k">₹20k–30k</option>
          <option value="₹30k–50k">₹30k–50k</option>
        </select>
        <p className="text-red-500 text-sm">{errors.feeRange?.message}</p>

        <input {...register("location")} placeholder="Location" className="w-full border p-2 rounded" />
        <p className="text-red-500 text-sm">{errors.location?.message}</p>

        {/* ✅ Profile Image Upload */}
        <div>
          <label className="block font-medium mb-1">Profile Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            {...register("profileImage")}
            className="w-full border p-2 rounded"
          />
          <p className="text-sm text-gray-600 mt-1">
            {watch("profileImage")?.[0]?.name}
          </p>
          <p className="text-red-500 text-sm">{errors.profileImage?.message}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Submit Artist
        </button>
      </form>
    </main>
  );
}
