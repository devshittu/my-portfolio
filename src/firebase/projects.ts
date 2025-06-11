// src/firebase/projects.ts
import { db } from '@/libs/firebase';
import { logger } from '@/libs/logger'; // Import logger
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  limit,
  startAfter,
  DocumentSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { ProjectItem } from '@/types/project';

const projectsCollectionRef = collection(db, 'projects');

// Create a new project (Re-added createdAt field for proper ordering)
export const createProject = async (projectData: Omit<ProjectItem, 'id'>): Promise<string> => {
  logger.debug('[createProject] Attempting to add new project:', projectData.title);
  try {
    const docRef = await addDoc(projectsCollectionRef, {
      ...projectData,
      createdAt: new Date(), // <-- CRITICAL FIX: Ensure this is added!
    });
    logger.info('[createProject] Project added successfully with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    logger.error('[createProject] Error adding project:', error);
    throw error;
  }
};

// Get all projects (for the admin page's initial load, no pagination here)
export const getProjects = async (): Promise<ProjectItem[]> => {
  logger.debug('[getProjects] Fetching all projects...');
  try {
    const q = query(projectsCollectionRef, orderBy('title', 'asc'));
    const data = await getDocs(q);
    const projects = data.docs.map((doc) => ({
      ...(doc.data() as ProjectItem),
      id: doc.id,
    }));
    logger.debug('[getProjects] Fetched', projects.length, 'projects.');
    return projects;
  } catch (error) {
    logger.error('[getProjects] Error fetching all projects:', error);
    throw error;
  }
};

// Modified getProjects for pagination (for public and preview pages)
export const getProjectsPaginated = async (
  numLimit: number,
  lastDocId: string | null = null,
): Promise<{ projects: ProjectItem[]; lastVisibleId: string | null }> => {
  logger.debug(
    `[getProjectsPaginated] Fetching projects with limit: ${numLimit}, lastDocId: ${lastDocId}`,
  );
  try {
    let q = query(
      projectsCollectionRef,
      orderBy('createdAt', 'desc'), // Ensure 'createdAt' field exists in your documents for this to work
    );

    if (lastDocId) {
      logger.debug(`[getProjectsPaginated] Fetching last document snapshot for ID: ${lastDocId}`);
      const lastDocSnapshot = await getDoc(doc(db, 'projects', lastDocId));
      if (lastDocSnapshot.exists()) {
        logger.debug('[getProjectsPaginated] Applying startAfter with last document.');
        q = query(q, startAfter(lastDocSnapshot));
      } else {
        logger.warn(
          `[getProjectsPaginated] lastDocId ${lastDocId} not found, ignoring startAfter.`,
        );
        // If lastDocId doesn't exist, we should probably not proceed with pagination
        // or handle this gracefully (e.g., fetch from beginning)
        // For now, it will just fetch the first `numLimit` projects
      }
    }

    logger.debug(`[getProjectsPaginated] Applying limit: ${numLimit}`);
    q = query(q, limit(numLimit));

    logger.debug('[getProjectsPaginated] Executing getDocs query...');
    const documentSnapshots = await getDocs(q);
    logger.debug(
      `[getProjectsPaginated] Query returned ${documentSnapshots.docs.length} documents.`,
    );

    const projects = documentSnapshots.docs.map((doc) => ({
      ...(doc.data() as ProjectItem),
      id: doc.id,
    }));
    logger.debug(
      '[getProjectsPaginated] Processed projects:',
      projects.map((p) => p.id),
    );

    const lastVisibleId =
      documentSnapshots.docs.length > 0 && documentSnapshots.docs.length === numLimit
        ? documentSnapshots.docs[documentSnapshots.docs.length - 1]?.id
        : null;

    logger.debug('[getProjectsPaginated] Returning projects and lastVisibleId:', lastVisibleId);
    return { projects, lastVisibleId };
  } catch (error) {
    logger.error('[getProjectsPaginated] Error fetching projects with pagination:', error);
    throw error;
  }
};

// Get a single project by ID
export const getProjectById = async (id: string): Promise<ProjectItem | null> => {
  logger.debug('[getProjectById] Fetching project with ID:', id);
  try {
    const projectDocRef = doc(db, 'projects', id);
    const docSnap = await getDoc(projectDocRef);
    if (docSnap.exists()) {
      logger.debug('[getProjectById] Project found:', docSnap.id);
      return { ...(docSnap.data() as ProjectItem), id: docSnap.id };
    } else {
      logger.warn('[getProjectById] No such document with ID:', id);
      return null;
    }
  } catch (error) {
    logger.error('[getProjectById] Error fetching project by ID:', error);
    throw error;
  }
};

// Update a project
export const updateProject = async (
  id: string,
  projectData: Partial<Omit<ProjectItem, 'id'>>,
): Promise<void> => {
  logger.debug('[updateProject] Attempting to update project with ID:', id, 'Data:', projectData);
  try {
    const projectDocRef = doc(db, 'projects', id);
    await updateDoc(projectDocRef, projectData);
    logger.info('[updateProject] Project updated successfully for ID:', id);
  } catch (error) {
    logger.error('[updateProject] Error updating project:', error);
    throw error;
  }
};

// Delete a project
export const deleteProject = async (id: string): Promise<void> => {
  logger.debug('[deleteProject] Attempting to delete project with ID:', id);
  try {
    const projectDocRef = doc(db, 'projects', id);
    await deleteDoc(projectDocRef);
    logger.info('[deleteProject] Project deleted successfully for ID:', id);
  } catch (error) {
    logger.error('[deleteProject] Error deleting project:', error);
    throw error;
  }
};
// src/firebase/projects.ts
