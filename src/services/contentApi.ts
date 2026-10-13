
const CONTENT_API_URL = (
  import.meta.env.VITE_CONTENT_API_URL || "https://localhost:7294"
).replace(/\/+$/, "");

async function request<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${CONTENT_API_URL}${endpoint}`);

  if (!response.ok) {
    const message = await response.text();

    throw new Error(
      `ContentApi request failed (${response.status}): ${
        message || response.statusText
      }`
    );
  }

  return response.json() as Promise<T>;
}

export type ProjectSkill = {
  id: string;
  name: string;
  iconUrl?: string | null;
  skillCategoryId?: string;
  categoryName?: string;
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  status: "InProgress" | "Completed" | "Archived" | string;
  thumbnailUrl?: string | null;
  gitHubUrl?: string | null;
  skills: ProjectSkill[];
};

export type SkillCategory = {
  id: string;
  name: string;
};

export type Skill = {
  id: string;
  name: string;
  iconUrl?: string | null;
  skillCategoryId: string;
  categoryName: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  url?: string | null;
};

export type TravelPhoto = {
  id: string;
  imageUrl: string;
  caption?: string | null;
};

export type TravelTrip = {
  id: string;
  title: string;
  location: string;
  country: string;
  description: string;
  coverImageUrl?: string | null;
  photos: TravelPhoto[];
};

export const contentApi = {
  getProjects: () => request<Project[]>("/api/projects"),

  getSkills: () => request<Skill[]>("/api/skills"),

  getSkillCategories: () =>
    request<SkillCategory[]>("/api/skill-categories"),

  getCertifications: () =>
    request<Certification[]>("/api/certifications"),

  getTrips: () => request<TravelTrip[]>("/api/travel"),
};
