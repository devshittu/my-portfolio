// src/pages/admin/projects/index.tsx
import React, { ReactElement, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProjectFormModal } from '@/components/widgets/project-cards';
import { getProjects, createProject, updateProject, deleteProject } from '@/firebase/projects';
import { ProjectItem as ProjectType } from '@/types/project';
import { NotificationModal } from '@/components/ui/notification-modal';
import { ConfirmationModal } from '@/components/ui/confirmation-modal';
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiGithub,
  FiExternalLink,
  FiLoader,
  FiAlertCircle,
  FiPackage,
  FiTag,
} from 'react-icons/fi';
import { PublicLayout } from '@/layouts/public-layout';
import Image from 'next/image';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface NotificationState {
  isOpen: boolean;
  type: NotificationType;
  title: string;
  message: string;
}

interface ConfirmationState {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
}

const ProjectsPage = () => {
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectType | null>(null);

  // Notification modal state
  const [notification, setNotification] = useState<NotificationState>({
    isOpen: false,
    type: 'info',
    title: '',
    message: '',
  });

  // Confirmation modal state
  const [confirmation, setConfirmation] = useState<ConfirmationState>({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  });

  // Helper to show notifications
  const showNotification = (type: NotificationType, title: string, message: string) => {
    setNotification({ isOpen: true, type, title, message });
  };

  // Helper to show confirmation
  const showConfirmation = (title: string, message: string, onConfirm: () => void) => {
    setConfirmation({ isOpen: true, title, message, onConfirm });
  };

  // Fetch all projects
  const {
    data: projects,
    isLoading,
    isError,
    error,
  } = useQuery<ProjectType[], Error>({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  // Mutation for creating a project
  const createProjectMutation = useMutation({
    mutationFn: (newProject: Omit<ProjectType, 'id'>) => createProject(newProject),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      showNotification('success', 'Project Created', 'Your project has been created successfully!');
    },
    onError: (err: any) => {
      showNotification('error', 'Creation Failed', err.message || 'Failed to create project');
    },
  });

  // Mutation for updating a project
  const updateProjectMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Omit<ProjectType, 'id'>> }) =>
      updateProject(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      showNotification('success', 'Project Updated', 'Your project has been updated successfully!');
    },
    onError: (err: any) => {
      showNotification('error', 'Update Failed', err.message || 'Failed to update project');
    },
  });

  // Mutation for deleting a project
  const deleteProjectMutation = useMutation({
    mutationFn: (id: string) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      showNotification('success', 'Project Deleted', 'Your project has been deleted successfully!');
    },
    onError: (err: any) => {
      showNotification('error', 'Deletion Failed', err.message || 'Failed to delete project');
    },
  });

  const handleAddProject = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEditProject = (project: ProjectType) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDeleteProject = (id: string) => {
    showConfirmation(
      'Delete Project',
      'Are you sure you want to delete this project? This action cannot be undone.',
      () => {
        deleteProjectMutation.mutate(id);
      },
    );
  };

  const handleFormSubmit = (project: Omit<ProjectType, 'id'> | ProjectType) => {
    if ('id' in project && project.id) {
      updateProjectMutation.mutate({
        id: project.id,
        data: {
          title: project.title,
          description: project.description,
          githubUrl: project.githubUrl,
          thumbnail: project.thumbnail,
          category: project.category,
          tags: project.tags,
          liveUrl: project.liveUrl,
        },
      });
    } else {
      createProjectMutation.mutate(project);
    }
    setIsModalOpen(false);
  };

  // Loading shimmer component
  const ProjectCardShimmer = () => (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden animate-pulse">
      <div className="h-48 bg-slate-200 dark:bg-slate-700"></div>
      <div className="p-6">
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 mb-4"></div>
        <div className="flex gap-2 mt-4">
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200">
        <div className="container mx-auto px-4 py-20 md:py-24 md:max-w-6xl">
          <div className="flex items-center justify-center mb-12">
            <FiLoader className="w-8 h-8 animate-spin text-cyan-500" />
            <span className="ml-3 text-xl">Loading projects...</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardShimmer key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200">
        <div className="container mx-auto px-4 py-20 md:max-w-6xl">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <FiAlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Error Loading Projects</h2>
              <p className="text-red-400">{error?.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200">
      <div className="container mx-auto px-4 py-20 md:py-24 md:max-w-6xl">
        {/* Header Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                Projects <span className="text-cyan-800 dark:text-cyan-400">Management</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
                Create, edit, and manage your portfolio projects
              </p>
            </div>
            <button
              onClick={handleAddProject}
              className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <FiPlus className="w-5 h-5 mr-2" />
              Add New Project
            </button>
          </div>
        </section>

        {/* Projects Grid */}
        {projects && projects.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Thumbnail */}
                <div className="relative h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <FiPackage className="w-16 h-16 text-slate-400 dark:text-slate-500" />
                  )}
                  {/* Category Badge */}
                  {project.category && (
                    <div className="absolute top-3 right-3 bg-cyan-600 dark:bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <FiTag className="w-3 h-3" />
                      {project.category}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-2 mb-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm font-medium"
                      >
                        <FiGithub className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm font-medium"
                      >
                        <FiExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </a>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button
                      onClick={() => handleEditProject(project)}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-medium rounded-lg transition-colors duration-200"
                    >
                      <FiEdit2 className="w-4 h-4 mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={() => project.id && handleDeleteProject(project.id)}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 font-medium rounded-lg transition-colors duration-200"
                    >
                      <FiTrash2 className="w-4 h-4 mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="text-center py-20">
            <FiPackage className="w-24 h-24 text-slate-300 dark:text-slate-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">No Projects Yet</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Get started by creating your first project
            </p>
            <button
              onClick={handleAddProject}
              className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
            >
              <FiPlus className="w-5 h-5 mr-2" />
              Add Your First Project
            </button>
          </section>
        )}
      </div>

      {/* Project Form Modal */}
      <ProjectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingProject}
      />

      {/* Notification Modal */}
      <NotificationModal
        isOpen={notification.isOpen}
        onClose={() => setNotification({ ...notification, isOpen: false })}
        type={notification.type}
        title={notification.title}
        message={notification.message}
      />

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={confirmation.isOpen}
        onClose={() => setConfirmation({ ...confirmation, isOpen: false })}
        onConfirm={confirmation.onConfirm}
        title={confirmation.title}
        message={confirmation.message}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  );
};

ProjectsPage.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default ProjectsPage;

// src/pages/admin/projects/index.tsx
