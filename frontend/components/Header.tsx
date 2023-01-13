import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
        <Link href='/'>
          <span className='text-2xl text-white font-bold mt-4'>CLG</span>
        </Link>
        <Link href='/'>
          <span className='text-2xl text-white font-bold mt-4'>Home</span>
        </Link>
      </div>
    </header>
  )
}
