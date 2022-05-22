import { supabase } from 'helpers/supabase'
// import { definitions } from '../types/supabase.types'
import { useEffect } from 'react'
// import * as R from 'ramda'

export default function Web() {
  // const y = { a: 1, b: 2, c: 3 }
  // const qq: string = R.propOr(null, 'a', y)
  // // eslint-disable-next-line no-console
  // console.log('qq', qq)
  // * sample type definitions
  useEffect(() => {
    const getHello = async () => {
      try {
        const x = await supabase.from<any>('hello').select('*')
        // eslint-disable-next-line no-console
        console.log('file: index.tsx - line 10 - x', x)
        // x.data?.map(({ created_at }) => created_at)
      } catch (error) {}
    }

    getHello()
  }, [])

  return (
    <div>
      <h1 className='text-lg bg-cyan-500'>Web</h1>
      <h1 className='text-lg bg-red-500 p-4'>Red</h1>
      <p className='text-white'>I am white</p>

      <button
        type='button'
        className='inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Button text
      </button>
      <button
        type='button'
        className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Button text
      </button>
    </div>
  )
}
