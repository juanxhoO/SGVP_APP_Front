import { useState } from 'react';

const useDeleteEntity = (endpoint) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteEntity = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${endpoint}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete entity');
      }
      setIsDeleted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, isDeleted, deleteEntity };
};

export default useDeleteEntity;
