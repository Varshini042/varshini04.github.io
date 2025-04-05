
import { GitHubRepo, categoryMap } from "./types";

export const getCategoryFromRepo = (repoName: string): string => {
  const name = repoName.toLowerCase();
  
  if (name.includes("data-engineering") || name.includes("etl") || name.includes("pipeline") || name.includes("fabric")) {
    return categoryMap["data-engineering"].category;
  } else if (name.includes("analytics") || name.includes("analysis") || name.includes("sql")) {
    return categoryMap["data-analytics"].category;
  } else if (name.includes("bi") || name.includes("business-intelligence") || name.includes("powerbi") || name.includes("netflix")) {
    return categoryMap["business-intelligence"].category;
  } else if (name.includes("azure") || name.includes("cloud")) {
    return categoryMap["azure"].category;
  } else if (name.includes("python")) {
    return categoryMap["python"].category;
  }
  
  return categoryMap["default"].category;
};

export const getGradientFromRepo = (repoName: string): string => {
  const name = repoName.toLowerCase();
  
  if (name.includes("data-engineering") || name.includes("etl") || name.includes("pipeline") || name.includes("fabric")) {
    return categoryMap["data-engineering"].gradient;
  } else if (name.includes("analytics") || name.includes("analysis") || name.includes("sql")) {
    return categoryMap["data-analytics"].gradient;
  } else if (name.includes("bi") || name.includes("business-intelligence") || name.includes("powerbi") || name.includes("netflix")) {
    return categoryMap["business-intelligence"].gradient;
  } else if (name.includes("azure") || name.includes("cloud")) {
    return categoryMap["azure"].gradient;
  } else if (name.includes("python")) {
    return categoryMap["python"].gradient;
  }
  
  return categoryMap["default"].gradient;
};

export const getCategoryTags = (repoName: string): string[] => {
  const name = repoName.toLowerCase();
  const tags: string[] = [];
  
  if (name.includes("data")) tags.push("Data");
  if (name.includes("sql") || name.includes("database")) tags.push("SQL");
  if (name.includes("azure")) tags.push("Azure");
  if (name.includes("python")) tags.push("Python");
  if (name.includes("analytics") || name.includes("analysis")) tags.push("Analytics");
  if (name.includes("engineering")) tags.push("Engineering");
  if (name.includes("bi") || name.includes("business-intelligence") || name.includes("powerbi")) tags.push("BI");
  
  // Add at least one default tag if none were found
  if (tags.length === 0) tags.push("GitHub Project");
  
  return tags;
};
