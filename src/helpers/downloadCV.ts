export const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/public/cv/alexis-alvarez-cv.pdf";
  link.download = "alexis-alvarez-cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
