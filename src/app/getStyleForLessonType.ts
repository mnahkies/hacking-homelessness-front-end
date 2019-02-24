export const getStyleForLessonType = (type?: string) => {
  if (type === "finance") {
    return "financeLessonColor";
  }
  return "careerLessonColor";
};
