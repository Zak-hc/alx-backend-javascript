export default function getListStudentIds(tkhwera) {
  if (!Array.isArray(tkhwera)) {
    return [];
  }
  const new_tab = tkhwera.map((t1) => t1.id);
  return new_tab;
}
