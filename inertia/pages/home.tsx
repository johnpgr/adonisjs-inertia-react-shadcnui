import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Head } from '@inertiajs/react'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />
      <main className='p-8'>
        <div className='flex flex-col gap-2 max-w-md'>
          <Label>Hello World</Label>
          <Input placeholder="Hello world" />
        </div>
      </main>
    </>
  )
}
