// src/components/widgets/project-cards/ProjectFormModal.tsx
import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ProjectItem } from '@/types/project';
import {
  FiX,
  FiGithub,
  FiExternalLink,
  FiImage,
  FiTag,
  FiFolder,
  FiFileText,
  FiAlignLeft,
} from 'react-icons/fi';

type ProjectFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: Omit<ProjectItem, 'id'> | ProjectItem) => void;
  initialData?: ProjectItem | null;
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
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        githubUrl: initialData.githubUrl || '',
        thumbnail: initialData.thumbnail || '',
        category: initialData.category || '',
        tags: initialData.tags || [],
        liveUrl: initialData.liveUrl || '',
      });
    } else {
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
    setErrors({});
  }, [initialData, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      onClose();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 text-left align-middle shadow-xl transition-all border border-slate-200 dark:border-slate-700">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 px-6 py-4">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-slate-900 dark:text-slate-100"
                  >
                    {initialData ? 'Edit Project' : 'Add New Project'}
                  </Dialog.Title>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    onClick={onClose}
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 py-6">
                  <div className="space-y-5">
                    {/* Title */}
                    <div>
                      <label
                        htmlFor="title"
                        className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        <FiFileText className="w-4 h-4 mr-2" />
                        Project Title <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="My Awesome Project"
                        className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      />
                      {errors.title && (
                        <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center">
                          <span className="inline-block w-1 h-1 rounded-full bg-red-500 mr-2"></span>
                          {errors.title}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        <FiAlignLeft className="w-4 h-4 mr-2" />
                        Description <span className="text-red-500 ml-1">*</span>
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your project in detail..."
                        className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors resize-none"
                      />
                      {errors.description && (
                        <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center">
                          <span className="inline-block w-1 h-1 rounded-full bg-red-500 mr-2"></span>
                          {errors.description}
                        </p>
                      )}
                    </div>

                    {/* GitHub URL */}
                    <div>
                      <label
                        htmlFor="githubUrl"
                        className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        <FiGithub className="w-4 h-4 mr-2" />
                        GitHub URL <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="githubUrl"
                        id="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleChange}
                        placeholder="https://github.com/username/repo"
                        className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      />
                      {errors.githubUrl && (
                        <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center">
                          <span className="inline-block w-1 h-1 rounded-full bg-red-500 mr-2"></span>
                          {errors.githubUrl}
                        </p>
                      )}
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Live URL */}
                      <div>
                        <label
                          htmlFor="liveUrl"
                          className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                        >
                          <FiExternalLink className="w-4 h-4 mr-2" />
                          Live Preview URL
                        </label>
                        <input
                          type="text"
                          name="liveUrl"
                          id="liveUrl"
                          value={formData.liveUrl}
                          onChange={handleChange}
                          placeholder="https://myproject.com"
                          className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                        />
                        {errors.liveUrl && (
                          <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center">
                            <span className="inline-block w-1 h-1 rounded-full bg-red-500 mr-2"></span>
                            {errors.liveUrl}
                          </p>
                        )}
                      </div>

                      {/* Category */}
                      <div>
                        <label
                          htmlFor="category"
                          className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                        >
                          <FiFolder className="w-4 h-4 mr-2" />
                          Category
                        </label>
                        <input
                          type="text"
                          name="category"
                          id="category"
                          value={formData.category}
                          onChange={handleChange}
                          placeholder="Web App, Mobile, etc."
                          className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Thumbnail URL */}
                    <div>
                      <label
                        htmlFor="thumbnail"
                        className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        <FiImage className="w-4 h-4 mr-2" />
                        Thumbnail URL
                      </label>
                      <input
                        type="text"
                        name="thumbnail"
                        id="thumbnail"
                        value={String(formData.thumbnail || '')}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      />
                      {errors.thumbnail && (
                        <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center">
                          <span className="inline-block w-1 h-1 rounded-full bg-red-500 mr-2"></span>
                          {errors.thumbnail}
                        </p>
                      )}
                    </div>

                    {/* Tags */}
                    <div>
                      <label
                        htmlFor="tags"
                        className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        <FiTag className="w-4 h-4 mr-2" />
                        Tags
                      </label>
                      <input
                        type="text"
                        name="tags"
                        id="tags"
                        value={formData.tags?.join(', ') || ''}
                        onChange={handleTagsChange}
                        placeholder="React, TypeScript, Node.js"
                        className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      />
                      <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                        Separate tags with commas
                      </p>
                    </div>
                  </div>

                  {/* Footer Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center items-center rounded-lg bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors"
                    >
                      {initialData ? 'Update Project' : 'Create Project'}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

// src/components/ProjectFormModal.tsx
