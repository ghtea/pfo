import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const notesDirectory = path.join(process.cwd(), 'notes/Skills');

export type SkillData = {
  id: string;
  name?: string;
  level?: 1 | 2 | 3;
  content?: string;
};

export function getSkillDataList() {
  // Get file names under /notes
  const fileNames = fs.readdirSync(notesDirectory);
  const skillDataList: SkillData[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the note metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      content: matterResult.content,
      ...matterResult.data,
    };
  });

  return skillDataList;
}
