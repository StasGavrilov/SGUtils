'use client'

import { useState, useEffect, useRef } from 'react'

import Box from '@/components/Box/Box'
import ErrorMessage from '@/helpers/ErrorMessage'
import SuccessMessage from '@/helpers/SuccessMessage'
import { strings } from './strings'

export default function Strings() {
  const [inputText, setInputText] = useState<string>('')
  const [outputText, setOutputText] = useState<string | number>('')
  const [error, setError] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<string>('toUpper')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (!inputText.trim()) {
      setError('Please enter some text.')
      setOutputText('')
      return
    }

    try {
      const transformedText = strings(inputText, {
        toUpper: selectedOption === 'toUpper',
        toLower: selectedOption === 'toLower',
        reverse: selectedOption === 'reverse',
        gap: selectedOption === 'gap',
        tag: selectedOption === 'tag',
        commaToTag: selectedOption === 'commaToTag',
        tagToComma: selectedOption === 'tagToComma',
        joinWordsForTag: selectedOption === 'joinWordsForTag',
        count: selectedOption === 'count',
      })

      setOutputText(transformedText)
      setError('')
    } catch (err) {
      setError('Error processing the input.')
      setOutputText('')
    }
  }, [inputText, selectedOption])

  return (
    <Box title='String Manipulation'>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col justify-center items-center w-full p-4'>
          <span className='mb-2 text-2xl'>Manipulate Your Text</span>

          <input
            ref={inputRef}
            className={`w-[75%] p-4 mb-4 rounded border-1 ${error ? 'border-red-500' : 'border-main'
              } focus:border-secondary hover:border-secondary`}
            type='text'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <select
            className='mb-4 p-2 border-1 border-main rounded bg-white text-black text-center'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value='toUpper'>Uppercase</option>
            <option value='toLower'>Lowercase</option>
            <option value='reverse'>Reverse</option>
            <option value='gap'>Remove Spaces</option>
            <option value='tag'>Add Hashtag</option>
            <option value='commaToTag'>Convert Commas to Hashtags</option>
            <option value='tagToComma'>Convert Hashtags to Commas</option>
            <option value='joinWordsForTag'>Join Words into One Hashtag</option>
            <option value='count'>Count Characters</option>
          </select>

          <div className='w-full text-center mt-4' style={{ minHeight: '4rem' }}>
            <SuccessMessage message={outputText} />
            <ErrorMessage error={error} />
          </div>
        </div>
      </div>
    </Box>
  )
}
