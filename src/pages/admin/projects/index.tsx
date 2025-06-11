// src/pages/admin/projects/index.tsx
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProjectFormModal } from '@/components/widgets/project-cards'; // Keep ProjectFormModal here
import { getProjects, createProject, updateProject, deleteProject } from '@/firebase/projects';
import { ProjectItem as ProjectType } from '@/types/project'; // Alias for clarity

const ProjectsPage = () => {
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectType | null>(null);

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
      queryClient.invalidateQueries({ queryKey: ['projects'] }); // Invalidate and refetch projects
      alert('Project created successfully!');
    },
    onError: (err: any) => {
      alert(`Error creating project: ${err.message}`);
    },
  });

  // Mutation for updating a project
  const updateProjectMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Omit<ProjectType, 'id'>> }) =>
      updateProject(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] }); // Invalidate and refetch projects
      alert('Project updated successfully!');
    },
    onError: (err: any) => {
      alert(`Error updating project: ${err.message}`);
    },
  });

  // Mutation for deleting a project
  const deleteProjectMutation = useMutation({
    mutationFn: (id: string) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] }); // Invalidate and refetch projects
      alert('Project deleted successfully!');
    },
    onError: (err: any) => {
      alert(`Error deleting project: ${err.message}`);
    },
  });

  const handleAddProject = () => {
    setEditingProject(null); // Clear any previous editing data
    setIsModalOpen(true);
  };

  const handleEditProject = (project: ProjectType) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDeleteProject = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      await deleteProjectMutation.mutate(id);
    }
  };

  const handleFormSubmit = (project: Omit<ProjectType, 'id'> | ProjectType) => {
    if ('id' in project && project.id) {
      // It's an existing project, update it
      // Fix: Ensure 'id' is a string before passing to mutate
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
      // It's a new project, create it
      createProjectMutation.mutate(project);
    }
    setIsModalOpen(false); // Close modal after submission
  };

  if (isLoading) return <div className="text-center py-10">Loading projects...</div>;
  if (isError) return <div className="text-center py-10 text-red-500">Error: {error?.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Projects Management</h1>
      <button
        onClick={handleAddProject}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add New Project
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">GitHub URL</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project) => (
              <tr key={project.id}>
                <td className="py-2 px-4 border-b">{project.title}</td>
                <td className="py-2 px-4 border-b">{project.category}</td>
                <td className="py-2 px-4 border-b">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEditProject(project)}
                    className="mr-2 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => project.id && handleDeleteProject(project.id)} // Ensure ID exists before deleting
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProjectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingProject}
      />
    </div>
  );
};

export default ProjectsPage;
