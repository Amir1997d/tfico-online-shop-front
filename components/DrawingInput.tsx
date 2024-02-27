"use client";
import { useEffect } from 'react';

const DrawingInput: React.FC = () => {

  useEffect(() => {
    const fileDropArea = document.getElementById('file-drop-area') as HTMLDivElement;
    const fileInput = document.getElementById('drawings-input') as HTMLInputElement;

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      fileDropArea.addEventListener(eventName, preventDefaults, false);
      document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop area when a file is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
      fileDropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      fileDropArea.addEventListener(eventName, unhighlight, false);
    });

    // Handle dropped files
    fileDropArea.addEventListener('drop', handleDrop, false);

    function preventDefaults(e: Event) {
      e.preventDefault();
      e.stopPropagation();
    }

    function highlight() {
      fileDropArea.classList.add('border-orange-400');
    }

    function unhighlight() {
      fileDropArea.classList.remove('border-orange-400');
    }

    function handleDrop(e: DragEvent) {
        const dt = e.dataTransfer;
        if (dt && dt.files) {
            const files = dt.files;
            handleFiles(files);
        }
    }
      
    function handleFiles(files: FileList | null) {
      if (!files) return;
      // You can perform any actions here with the dropped files
      // For example, you can display the file names or handle file uploads
      console.log(files);
    }

    // Open file input when the drop area is clicked
    fileDropArea.addEventListener('click', () => {
      fileInput.click();
    });

    // Handle file input change
    fileInput.addEventListener('change', () => {
      handleFiles(fileInput.files);
    });

    // Clean up event listeners on unmount
    return () => {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileDropArea.removeEventListener(eventName, preventDefaults, false);
        document.body.removeEventListener(eventName, preventDefaults, false);
      });
      ['dragenter', 'dragover'].forEach(eventName => {
        fileDropArea.removeEventListener(eventName, highlight, false);
      });
      ['dragleave', 'drop'].forEach(eventName => {
        fileDropArea.removeEventListener(eventName, unhighlight, false);
      });
      fileDropArea.removeEventListener('drop', handleDrop, false);
      fileDropArea.removeEventListener('click', () => {
        fileInput.click();
      });
      fileInput.removeEventListener('change', () => {
        handleFiles(fileInput.files);
      });
    };
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-start'>
        <label htmlFor='drawings-input' className='block mb-1'>Drawing(s):</label>
        <div id="file-drop-area" className=" w-full flex justify-center items-center border border-dashed border-orange-400 rounded-md p-4 cursor-pointer">
            <span className="text-gray-600">Drag and drop files here or click to select</span>
            <input type='file' id="drawings-input" name="drawings-input" multiple className='hidden' />
        </div>
    </div>
  );
};

export default DrawingInput;
