'use client'

import { useState, useEffect, useRef } from 'react'

import Box from '@/components/Box/Box'
import ErrorMessage from '@/helpers/ErrorMessage'
import SuccessMessage from '@/helpers/SuccessMessage'
import Select from '@/components/Select/Select'
import { strings } from './strings'

export default function Strings() {
  const [inputText, setInputText] = useState<string>('')
  const [outputText, setOutputText] = useState<string | number>('')
  const [error, setError] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<string>('Uppercase')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (!inputText.trim()) {
      setError('Please enter your text.')
      setOutputText('')
      return
    }

    try {
      const transformedText = strings(inputText, {
        toUpper: selectedOption === 'Uppercase',
        toLower: selectedOption === 'Lowercase',
        reverse: selectedOption === 'Reverse',
        gap: selectedOption === 'Remove Spaces',
        tag: selectedOption === 'Add Hashtag',
        commaToTag: selectedOption === 'Convert Commas to Hashtags',
        tagToComma: selectedOption === 'Convert Hashtags to Commas',
        joinWordsForTag: selectedOption === 'Join Words into One Hashtag',
        count: selectedOption === 'Count Characters',
      })

      setOutputText(transformedText)
      setError('')
    } catch (err) {
      setError('Error processing the input.')
      setOutputText('')
    }
  }, [inputText, selectedOption])

  return (
    <Box title='Text Manipulation'>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col justify-center items-center w-full p-4'>
          <span className='mb-2 text-2xl'>Manipulate Your Text</span>

          <input
            ref={inputRef}
            className={`w-[75%] p-4 mb-4 rounded border-1 outline-none border-none focus:ring-0
              ${error ? 'border-red-500' : 'border-main'}
               focus:border-secondary hover:border-secondary
            `}
            type='text'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Add your text...'
          />

          <div className="w-full flex justify-center items-center">
            <Select
              options={[
                'Uppercase',
                'Lowercase',
                'Reverse',
                'Remove Spaces',
                'Add Hashtag',
                'Convert Commas to Hashtags',
                'Convert Hashtags to Commas',
                'Join Words into One Hashtag',
                'Count Characters'
              ]}
              value={selectedOption}
              onChange={setSelectedOption}
              placeholder="Select an option"
            />
          </div>

          <div className='w-full text-center mt-4' style={{ minHeight: '4rem' }}>
            <SuccessMessage message={outputText} />
            <ErrorMessage error={error} />
          </div>
        </div>
      </div>
    </Box>
  )
}
