import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/Sidebar';

const MobileSidebar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-background shadow-sm">
      <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 w-72 max-h-content overflow-y-scroll mobilesidebar"
        >
          <Sidebar mobile />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
