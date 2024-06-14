import Link from 'next/link';
import NavLinks from '@/ui/NavLinks';

export default function SideNav() {
  return (
    <div className="flex h-100vh flex-col py-4 bg-grey-500 w-56 gap-4">
        <h4 className='text-xs text-green-accent px-5'>CATEGORIES</h4>
        <div>
            <NavLinks/>
        </div>
    </div>
  );
}
