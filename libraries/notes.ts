import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';




export type NoteData = {
  id: string;
  name?: string;
  content?: string;
}

export function getNoteDataList(notesDirectory: string) {
  // Get file names under /notes
  const fileNames = fs.readdirSync(notesDirectory);

  const skillDataList: NoteData[] = fileNames.map((fileName) => {
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




export type SkillData =  NoteData & {
  name: string;
  level: 1 | 2 | 3;
};

export type ProjectData =  NoteData & {
  name: string
  level: 'main' | 'sub';
  year: number;
  github: string;
  website?: string;
};


const skillNotesDirectory = path.join(process.cwd(), 'notes/skills');
const projectNotesDirectory = path.join(process.cwd(), 'notes/projects');

export function getDataDict() {
  return ({
    skills: getNoteDataList(skillNotesDirectory),
    projects: getNoteDataList(projectNotesDirectory),
  })
}
