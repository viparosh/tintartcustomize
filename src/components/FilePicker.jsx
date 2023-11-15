import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  const handleOnlineImageChange = async (event) => {
    const imageUrl = event.target.value

    try {
      const onlineFile = await createFileFromUrl(imageUrl)
      setFile(onlineFile)
    } catch (error) {
      console.error('Error reading online image:', error)
      // Handle error as needed
    }
  }

  const createFileFromUrl = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()

      // You can create a File object from the Blob if needed
      const file = new File([blob], 'imageFileName', { type: blob.type })

      return file
    } catch (error) {
      console.error('Error creating file from URL:', error)
      throw error
    }
  }

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <input
          type="text"
          onChange={handleOnlineImageChange}
          placeholder="Paste an online link"
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
          className="px-3 w-1/2 py-1 bg-gray-800 text-white text-sm"
          onClick={() => readFile('frontLogo')}
        >
          Front
        </button>
        <button
          className="px-3 w-1/2 bg-gray-800 text-white text-sm"
          onClick={() => readFile('backLogo')}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default FilePicker
