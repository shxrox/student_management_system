export const deleteStudent = async (id) => {
    const response = await fetch(`http://your-api-url/students/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete student");
    }
    return response.json();
  };
  