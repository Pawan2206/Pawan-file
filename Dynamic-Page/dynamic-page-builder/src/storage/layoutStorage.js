import { writeFile, readFile } from 'fs/promises'; // Using Node.js for file operations

// Function to save layout data to db.json
export const saveLayoutToJSON = async (layout) => {
  const data = JSON.stringify({ layout }, null, 2);
  try {
    await writeFile('./db.json', data, 'utf-8');  // Adjust the path based on your setup
  } catch (error) {
    console.error('Error saving layout to db.json:', error);
  }
};

// Function to load layout data from db.json
export const loadLayoutFromJSON = async () => {
  try {
    const data = await readFile('./db.json', 'utf-8');  // Adjust the path based on your setup
    const parsedData = JSON.parse(data);
    return parsedData.layout;
  } catch (error) {
    console.error('Error loading layout from db.json:', error);
    return null;
  }
};
