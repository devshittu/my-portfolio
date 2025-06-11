// src/components/ProjectFormModal.tsx
// import React, { useState, useEffect } from 'react';
// import { ProjectItem } from '@/types/project'; // Adjust path if necessary

// type ProjectFormModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (project: Omit<ProjectItem, 'id'> | ProjectItem) => void;
//   initialData?: ProjectItem | null; // For editing existing projects
// };

// export const ProjectFormModal = ({
//   isOpen,
//   onClose,
//   onSubmit,
//   initialData,
// }: ProjectFormModalProps) => {
//   const [formData, setFormData] = useState<Omit<ProjectItem, 'id'>>({
//     title: '',
//     description: '',
//     githubUrl: '',
//     thumbnail: '',
//     category: '',
//     tags: [],
//     liveUrl: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   useEffect(() => {
//     // Populate form if initialData is provided (for editing)
//     if (initialData) {
//       setFormData({
//         title: initialData.title || '',
//         description: initialData.description || '',
//         githubUrl: initialData.githubUrl || '',
//         thumbnail: initialData.thumbnail || '',
//         category: initialData.category || '',
//         tags: initialData.tags || [],
//         liveUrl: initialData.liveUrl || '',
//       });
//     } else {
//       // Reset form for new project
//       setFormData({
//         title: '',
//         description: '',
//         githubUrl: '',
//         thumbnail: '',
//         category: '',
//         tags: [],
//         liveUrl: '',
//       });
//     }
//     setErrors({}); // Clear errors on modal open/data change
//   }, [initialData, isOpen]); // Reset when initialData or isOpen changes

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     // Clear specific error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prev) => ({
//       ...prev,
//       tags: value
//         .split(',')
//         .map((tag) => tag.trim())
//         .filter((tag) => tag !== ''),
//     }));
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
//     if (!formData.title.trim()) newErrors.title = 'Title is required.';
//     if (!formData.description.trim()) newErrors.description = 'Description is required.';
//     if (!formData.githubUrl.trim()) newErrors.githubUrl = 'GitHub URL is required.';
//     else if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(formData.githubUrl)) {
//       newErrors.githubUrl = 'Invalid URL format.';
//     }
//     if (formData.thumbnail && !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(formData.thumbnail)) {
//       newErrors.thumbnail = 'Invalid URL format.';
//     }
//     if (formData.liveUrl && !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(formData.liveUrl)) {
//       newErrors.liveUrl = 'Invalid URL format.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm()) {
//       if (initialData?.id) {
//         onSubmit({ ...formData, id: initialData.id } as ProjectItem);
//       } else {
//         onSubmit(formData);
//       }
//       onClose(); // Close modal after successful submission
//     }
//   };

//   if (!isOpen) return null; // Don't render anything if the modal is not open

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
//       <div className="relative w-full max-w-md rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl">
//         <h3 className="text-lg font-medium leading-6 text-white mb-4">
//           {initialData ? 'Edit Project' : 'Add New Project'}
//         </h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium text-gray-300">
//               Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               id="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
//             />
//             {errors.title && <p className="mt-1 text-sm text-red-400">{errors.title}</p>}
//           </div>

//           <div>
//             <label htmlFor="description" className="block text-sm font-medium text-gray-300">
//               Description
//             </label>
//             <textarea
//               name="description"
//               id="description"
//               rows={4}
//               value={formData.description}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
//             ></textarea>
//             {errors.description && (
//               <p className="mt-1 text-sm text-red-400">{errors.description}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-300">
//               GitHub URL
//             </label>
//             <input
//               type="text"
//               name="githubUrl"
//               id="githubUrl"
//               value={formData.githubUrl}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
//             />
//             {errors.githubUrl && <p className="mt-1 text-sm text-red-400">{errors.githubUrl}</p>}
//           </div>

//           <div>
//             <label htmlFor="liveUrl" className="block text-sm font-medium text-gray-300">
//               Live Preview URL (Optional)
//             </label>
//             <input
//               type="text"
//               name="liveUrl"
//               id="liveUrl"
//               value={formData.liveUrl}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
//             />
//             {errors.liveUrl && <p className="mt-1 text-sm text-red-400">{errors.liveUrl}</p>}
//           </div>

//           <div>
//             <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-300">
//               Thumbnail URL (Optional)
//             </label>
//             <input
//               type="text"
//               name="thumbnail"
//               id="thumbnail"
//               value={formData.thumbnail || ''}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
//             />
//             {errors.thumbnail && <p className="mt-1 text-sm text-red-400">{errors.thumbnail}</p>}
//           </div>

//           <div>
//             <label htmlFor="category" className="block text-sm font-medium text-gray-300">
//               Category (Optional)
//             </label>
//             <input
//               type="text"
//               name="category"
//               id="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
//             />
//           </div>

//           <div>
//             <label htmlFor="tags" className="block text-sm font-medium text-gray-300">
//               Tags (comma-separated, Optional)
//             </label>
//             <input
//               type="text"
//               name="tags"
//               id="tags"
//               value={formData.tags?.join(', ') || ''} // Display as comma-separated string
//               onChange={handleTagsChange}
//               className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
//             />
//           </div>

//           <div className="mt-6 flex justify-end gap-3">
//             <button
//               type="button"
//               className="inline-flex justify-center rounded-md border border-transparent bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="inline-flex justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//             >
//               {initialData ? 'Update Project' : 'Add Project'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// src/components/ProjectFormModal.tsx
import React, { useState, useEffect } from 'react';
import { ProjectItem } from '@/types/project'; // Adjust path if necessary

type ProjectFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: Omit<ProjectItem, 'id'> | ProjectItem) => void;
  initialData?: ProjectItem | null; // For editing existing projects
};

export const ProjectFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: ProjectFormModalProps) => {
  const [formData, setFormData] = useState<Omit<ProjectItem, 'id'>>({
    title: '',
    description: '',
    githubUrl: '',
    thumbnail: '',
    category: '',
    tags: [],
    liveUrl: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Populate form if initialData is provided (for editing)
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        githubUrl: initialData.githubUrl || '',
        // Fix: Ensure thumbnail is a string for the form data
        thumbnail: initialData.thumbnail || '',
        category: initialData.category || '',
        tags: initialData.tags || [],
        liveUrl: initialData.liveUrl || '',
      });
    } else {
      // Reset form for new project
      setFormData({
        title: '',
        description: '',
        githubUrl: '',
        thumbnail: '',
        category: '',
        tags: [],
        liveUrl: '',
      });
    }
    setErrors({}); // Clear errors on modal open/data change
  }, [initialData, isOpen]); // Reset when initialData or isOpen changes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      tags: value
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ''),
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required.';
    if (!formData.description.trim()) newErrors.description = 'Description is required.';
    if (!formData.githubUrl.trim()) newErrors.githubUrl = 'GitHub URL is required.';
    else if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(formData.githubUrl)) {
      newErrors.githubUrl = 'Invalid URL format.';
    }
    // Fix: Ensure thumbnail is a string before testing with regex
    if (
      formData.thumbnail &&
      !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(String(formData.thumbnail))
    ) {
      newErrors.thumbnail = 'Invalid URL format.';
    }
    if (formData.liveUrl && !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(formData.liveUrl)) {
      newErrors.liveUrl = 'Invalid URL format.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (initialData?.id) {
        onSubmit({ ...formData, id: initialData.id } as ProjectItem);
      } else {
        onSubmit(formData);
      }
      onClose(); // Close modal after successful submission
    }
  };

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl">
        <h3 className="text-lg font-medium leading-6 text-white mb-4">
          {initialData ? 'Edit Project' : 'Add New Project'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
            />
            {errors.title && <p className="mt-1 text-sm text-red-400">{errors.title}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-red-400">{errors.description}</p>
            )}
          </div>

          <div>
            <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-300">
              GitHub URL
            </label>
            <input
              type="text"
              name="githubUrl"
              id="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
            />
            {errors.githubUrl && <p className="mt-1 text-sm text-red-400">{errors.githubUrl}</p>}
          </div>

          <div>
            <label htmlFor="liveUrl" className="block text-sm font-medium text-gray-300">
              Live Preview URL (Optional)
            </label>
            <input
              type="text"
              name="liveUrl"
              id="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
            />
            {errors.liveUrl && <p className="mt-1 text-sm text-red-400">{errors.liveUrl}</p>}
          </div>

          <div>
            <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-300">
              Thumbnail URL (Optional)
            </label>
            <input
              type="text"
              name="thumbnail"
              id="thumbnail"
              // Fix: Explicitly cast formData.thumbnail to string for the value prop
              value={String(formData.thumbnail || '')}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
            />
            {errors.thumbnail && <p className="mt-1 text-sm text-red-400">{errors.thumbnail}</p>}
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300">
              Category (Optional)
            </label>
            <input
              type="text"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-300">
              Tags (comma-separated, Optional)
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              value={formData.tags?.join(', ') || ''} // Display as comma-separated string
              onChange={handleTagsChange}
              className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2"
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {initialData ? 'Update Project' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
