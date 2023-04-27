import { useState } from "react";

const useSelectFile = () => {
  const [selectedFile, setSelectedFile] = useState<string[]>([]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        setSelectedFile(fileContents);
      });
    }
  };

  const removeSelectedFile = (index: number) => {
    setSelectedFile((prev) => {
      const newSelectedFile = [...prev];
      newSelectedFile.splice(index, 1);
      return newSelectedFile;
    });
  };

  return {
    selectedFile,
    setSelectedFile,
    onSelectFile,
    removeSelectedFile,
  };
};

export default useSelectFile;
