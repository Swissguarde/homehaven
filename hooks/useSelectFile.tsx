import { useState } from "react";

const useSelectFile = () => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const onSelectFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const readers = Array.from(files).map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return reader;
      });
      Promise.all(
        readers.map(
          (reader) =>
            new Promise<string>((resolve) => {
              reader.onload = (readerEvent) => {
                if (readerEvent.target?.result) {
                  resolve(readerEvent.target.result as string);
                }
              };
            })
        )
      ).then((fileContents) => {
        setSelectedFiles(fileContents);
      });
    }
  };

  const removeSelectedFiles = (index: number) => {
    setSelectedFiles((prev) => {
      const newSelectedFile = [...prev];
      newSelectedFile.splice(index, 1);
      return newSelectedFile;
    });
  };

  return {
    selectedFiles,
    setSelectedFiles,
    onSelectFiles,
    removeSelectedFiles,
  };
};

export default useSelectFile;
