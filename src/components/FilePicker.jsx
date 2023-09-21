import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? 'No file selected' : file.name}
        </p>
      </div>

      <div className="mt-4 gap-x-1 flex flex-row">
        <button
          className="px-3 py-1 bg-gray-800 text-white text-sm"
          onClick={() => readFile('frontLogo')}
        >
          Front
        </button>
        <button
          className="px-3 bg-gray-800 text-white text-sm"
          onClick={() => readFile('backLogo')}
        >
          Back
        </button>
        <button
          className="px-3 bg-amber-300 text-black text-sm"
          onClick={() => readFile('full')}
        >
          Full
        </button>
      </div>
    </div>
  )
}

export default FilePicker
