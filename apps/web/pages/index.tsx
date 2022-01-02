import { Alert } from 'ui'
// import { supabase } from 'helpers/supabase'
// import { definitions } from '../types/supabase'
// import { useEffect } from 'react'

export default function Web() {
  // * sample type definitions
  // useEffect(() => {
  //   const getHello = async () => {
  //     try {
  //       const x = await supabase.from<definitions['hello']>('hello').select('*')
  //       // eslint-disable-next-line no-console
  //       console.log('file: index.tsx - line 10 - x', x)
  //       // x.data?.map(({ created_at }) => created_at)
  //     } catch (error) {}
  //   }

  //   getHello()
  // }, [])

  return (
    <div className=''>
      <h1>Web</h1>
      <Alert />
      <img src='' alt='' />
    </div>
  )
}
