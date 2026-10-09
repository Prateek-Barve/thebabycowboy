import type { Thought } from "../types/home";

const API_BASE_URL = "https://thebabycowboy.azurewebsites.net";

export interface CreateReflectionRequest {
  thoughtId: string;
  visitorResponse: string;
}

export interface ReflectionResponse {
  id: string;
  thoughtId: string;
  aiResponse: string;
}

export async function getRandomThought(): Promise<Thought> {
  const response = await fetch(
    `${API_BASE_URL}/api/Thoughts/random`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch thought.");
  }

  return response.json();
}

export async function createReflection(
  request: CreateReflectionRequest
): Promise<ReflectionResponse> {
  const response = await fetch(
    `${API_BASE_URL}/api/Reflections`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to submit reflection.");
  }

  return response.json();
}